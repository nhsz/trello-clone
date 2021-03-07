import { FC, PropsWithChildren } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useAppState } from '../../hooks';
import { AddNewItem } from '../AddINewItem';
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
}

const List: FC<PropsWithChildren<Props>> = ({ id: listId, title, children }) => {
  const { dispatch } = useAppState();

  // onClick={() => dispatch({ type: 'REMOVE_LIST', payload: listId })}

  return (
    <ListContainer className='pseudo-elem'>
      <ListTitleContainer>
        <ListTitle>{title}</ListTitle>
        <ListActionsButton>
          <HiOutlineDotsHorizontal className='dots-icon' />
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
