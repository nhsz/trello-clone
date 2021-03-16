import { FC, PropsWithChildren, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { DragItem } from '../../dragItem';
import { useAppState, useDragItem } from '../../hooks';
import { findListIndexById } from '../../utils';
import { AddNewItem } from '../AddINewItem';
import {
  ListActionsButton,
  ListActionsMenu,
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

const List: FC<PropsWithChildren<Props>> = ({ id, title, index, children, isPreview }) => {
  const { state, dispatch } = useAppState();
  const [showListActionsMenu, setShowListActionsMenu] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const listIndex = findListIndexById(state.lists, id);

  const { opacity, drag } = useDragItem({
    type: 'LIST',
    id,
    index,
    text: title,
    children
  });
  const [, drop] = useDrop({
    accept: ['LIST', 'CARD'],
    hover(item: DragItem) {
      if (item.type === 'LIST') {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } });
        item.index = hoverIndex;
      }

      // else {
      //   const dragIndex = item.index;
      //   const hoverIndex = 0;
      //   const sourceListId = item.listId;
      //   const targetListId = listId;

      //   if (sourceListId === targetListId) {
      //     return;
      //   }

      //   dispatch({
      //     type: 'MOVE_TASK',
      //     payload: { dragIndex, hoverIndex, sourceListId, targetListId }
      //   });

      //   item.index = hoverIndex;
      //   item.listId = targetListId;
      // }
    }
  });

  drag(drop(listRef));

  // onClick={() => dispatch({ type: 'REMOVE_LIST', payload: listId })}
  const showMenu = () => setShowListActionsMenu(true);

  return (
    <ListContainer
      ref={listRef}
      style={{ opacity, transform: isPreview ? 'rotate(5deg)' : undefined }}
    >
      <ListTitleContainer>
        <ListTitle>{title}</ListTitle>
        <ListActionsButton onClick={showMenu}>
          <HiOutlineDotsHorizontal className='dots-icon' />
          {showListActionsMenu && <ListActionsMenu>no lo implementé todavía LOL</ListActionsMenu>}
        </ListActionsButton>
      </ListTitleContainer>
      <ListCards>{children}</ListCards>
      <AddNewItem
        itemType='card'
        handleAdd={text => dispatch({ type: 'ADD_TASK', payload: { id, text } })}
      />
    </ListContainer>
  );
};

export { List };
