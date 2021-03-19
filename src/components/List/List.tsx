import { FC, KeyboardEvent, PropsWithChildren, useRef, useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { AddNewItem, Card, ListActionsMenu } from '../../components';
import { useAppState, useDragItem, useDropList } from '../../hooks';
import { isHidden } from '../../utils';
import {
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
  const listRef = useRef<HTMLDivElement>(null);

  const { drag } = useDragItem({
    type: 'LIST',
    id,
    index,
    title
  });
  const { drop } = useDropList({ id, index });

  drag(drop(listRef));

  const toggleMenu = () => setShowListActionsMenu(showListActionsMenu => !showListActionsMenu);
  const closeMenu = () => setShowListActionsMenu(false);
  const handleRemove = () => dispatch({ type: 'REMOVE_LIST', payload: id });
  const addTask = (text: string) => dispatch({ type: 'ADD_TASK', payload: { id, text } });
  // const addTaskFirst = (text: string) =>
  //   dispatch({ type: 'ADD_TASK', payload: { id, text, addFirst: true } });
  const moveAllTasksInThisList = () => {
    dispatch({ type: 'MOVE_ALL_TASKS_IN_THIS_LIST', payload: id });
    setShowListActionsMenu(false);
  };
  const archiveTasks = () => {
    dispatch({ type: 'ARCHIVE_ALL_TASKS', payload: id });
    setShowListActionsMenu(false);
  };
  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') setShowListActionsMenu(false);
  };

  return (
    <ListContainer
      ref={listRef}
      isPreview={isPreview}
      isHidden={isHidden({ isPreview, draggedItem, itemType: 'LIST', id })}
    >
      <ListTitleContainer>
        <ListTitle>{title}</ListTitle>
        <ListActionsButton onClick={toggleMenu} onKeyDown={handleEsc}>
          <HiOutlineDotsHorizontal className='dots-icon' />
        </ListActionsButton>
        {showListActionsMenu && (
          <ListActionsMenu
            isOpen={showListActionsMenu}
            handleClose={closeMenu}
            handleArchiveAllTasks={archiveTasks}
            handleMoveAllTasks={moveAllTasksInThisList}
            handleRemove={handleRemove}
          />
        )}
      </ListTitleContainer>
      <ListCards>
        {lists[index].tasks.map((task, i) => (
          <Card id={task.id} index={i} text={task.text} listId={id} key={task.id} />
        ))}
      </ListCards>
      <AddNewItem itemType='card' handleAdd={addTask} />
    </ListContainer>
  );
};

export { List };
