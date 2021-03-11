import { FC, PropsWithChildren, useRef, useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useAppState, useDragItem } from '../../hooks';
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
}

const List: FC<PropsWithChildren<Props>> = ({ id: listId, title, children }) => {
  const { dispatch } = useAppState();
  const [showListActionsMenu, setShowListActionsMenu] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const { drag } = useDragItem({ id: listId, type: 'COLUMN' });

  // onClick={() => dispatch({ type: 'REMOVE_LIST', payload: listId })}
  const showMenu = () => setShowListActionsMenu(true);

  drag(listRef);

  return (
    <ListContainer className='pseudo-elem' ref={listRef}>
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
        handleAdd={text => dispatch({ type: 'ADD_TASK', payload: { text, listId } })}
      />
    </ListContainer>
  );
};

export { List };
