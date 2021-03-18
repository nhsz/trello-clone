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

  // onClick={() => dispatch({ type: 'REMOVE_LIST', payload: listId })}
  const toggleMenu = () => setShowListActionsMenu(showListActionsMenu => !showListActionsMenu);
  const closeMenu = () => setShowListActionsMenu(false);
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
        {showListActionsMenu && <ListActionsMenu handleClose={closeMenu} />}
      </ListTitleContainer>
      <ListCards>
        {lists[index].tasks.map((task, i) => (
          <Card id={task.id} index={i} text={task.text} listId={id} key={task.id} />
        ))}
      </ListCards>
      <AddNewItem
        itemType='card'
        handleAdd={text => dispatch({ type: 'ADD_TASK', payload: { id, text } })}
      />
    </ListContainer>
  );
};

export { List };
