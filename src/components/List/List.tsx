import {
  FC,
  KeyboardEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { AddNewItem, Card, ListActionsMenu, MoveListMenu, NewItemForm } from '../../components';
import { useAppState, useDragItem, useDropList } from '../../hooks';
import { isHidden } from '../../utils';
import {
  AddFirstContainer,
  ListActionsButton,
  ListCards,
  ListContainer,
  ListTitle,
  ListTitleContainer
} from './List.styles';

interface Props {
  id: string;
  title: string;
  index: number;
  isPreview?: boolean;
}

const List: FC<PropsWithChildren<Props>> = ({ id, title, index, isPreview }) => {
  const { state, dispatch } = useAppState();
  const { lists } = state;
  const { draggedItem } = state;
  const [showListActionsMenu, setShowListActionsMenu] = useState(false);
  const [showMoveListMenu, setMoveListMenu] = useState(false);
  const [addFirst, setAddFirst] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useDragItem({
    type: 'LIST',
    id,
    index,
    title
  });
  const { drop } = useDropList({ id, index });

  drag(drop(ref));

  const handleRemove = () => dispatch({ type: 'REMOVE_LIST', payload: id });
  const addTask = (text: string) => dispatch({ type: 'ADD_TASK', payload: { id, text } });
  const addTaskFirst = (text: string) => {
    dispatch({ type: 'ADD_TASK', payload: { id, text, addFirst: true } });
  };

  const handleOpenFirst = () => {
    setAddFirst(true);
    closeListActionsMenu();
  };
  const handleCloseFirst = () => setAddFirst(false);
  const handleAddItemFirst = (text: string) => {
    addTaskFirst(text);
    handleCloseFirst();
  };

  const toggleMenu = () => {
    setMoveListMenu(false);
    setShowListActionsMenu(showListActionsMenu => !showListActionsMenu);
  };
  const closeListActionsMenu = () => setShowListActionsMenu(false);
  const closeMoveListMenu = () => setMoveListMenu(false);
  const goToMoveListMenu = () => {
    setShowListActionsMenu(false);
    setMoveListMenu(true);
  };
  const goBackToListActionsMenu = () => {
    setMoveListMenu(false);
    setShowListActionsMenu(true);
  };
  const handleMoveAllTasks = () => {
    dispatch({ type: 'MOVE_ALL_TASKS_IN_THIS_LIST', payload: id });
    setShowListActionsMenu(false);
  };
  const handleArchiveAllTasks = () => {
    dispatch({ type: 'ARCHIVE_ALL_TASKS', payload: id });
    setShowListActionsMenu(false);
  };
  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showListActionsMenu) setShowListActionsMenu(false);
        if (showMoveListMenu) {
          setMoveListMenu(false);
          setShowListActionsMenu(true);
        }
      }
    },
    [showListActionsMenu, showMoveListMenu]
  );

  useEffect(() => {
    // attach listener on component mount to detect ESC key down
    document.addEventListener('keydown', (handleEsc as unknown) as EventListener);
    // detach listener on component unmount
    return () => document.removeEventListener('keydown', (handleEsc as unknown) as EventListener);
  }, [handleEsc]);

  return (
    <ListContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden({ isPreview, draggedItem, itemType: 'LIST', id })}
    >
      <ListTitleContainer>
        <ListTitle>{title}</ListTitle>
        <ListActionsButton onClick={toggleMenu}>
          <HiOutlineDotsHorizontal className='dots-icon' />
        </ListActionsButton>
        {showListActionsMenu && (
          <ListActionsMenu
            isOpen={showListActionsMenu}
            handleClose={closeListActionsMenu}
            addFirst={addFirst}
            handleOpenFirst={handleOpenFirst}
            handleArchiveAllTasks={handleArchiveAllTasks}
            handleMoveAllTasks={handleMoveAllTasks}
            handleRemove={handleRemove}
            goToMoveListMenu={goToMoveListMenu}
          />
        )}
        {showMoveListMenu && (
          <MoveListMenu
            isOpen={showMoveListMenu}
            handleClose={closeMoveListMenu}
            handleGoBack={goBackToListActionsMenu}
            listId={id}
          />
        )}
      </ListTitleContainer>
      <ListCards>
        {addFirst && (
          <AddFirstContainer>
            <NewItemForm
              itemType={'card'}
              isOpen={addFirst}
              handleAdd={handleAddItemFirst}
              handleClose={handleCloseFirst}
            />
          </AddFirstContainer>
        )}

        {lists[index].tasks.map((task, i) => (
          <Card id={task.id} index={i} text={task.text} listId={id} key={task.id} />
        ))}
      </ListCards>
      <AddNewItem itemType='card' handleAdd={addTask} />
    </ListContainer>
  );
};

export { List };
