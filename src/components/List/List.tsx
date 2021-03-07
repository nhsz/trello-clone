import { FC, PropsWithChildren } from 'react';
import { useAppState } from '../../hooks';
import { AddNewItem } from '../AddINewItem';
import { ListCards, ListContainer, ListTitle } from './List.styles';

interface Props {
  id: string;
  title: string;
}

const List: FC<PropsWithChildren<Props>> = ({ id: listId, title, children }) => {
  const { dispatch } = useAppState();

  return (
    <ListContainer className='pseudo-elem'>
      <ListTitle>{title}</ListTitle>
      <ListCards>{children}</ListCards>
      <AddNewItem
        itemType='card'
        handleAdd={text => dispatch({ type: 'ADD_TASK', payload: { text, listId } })}
      />
    </ListContainer>
  );
};

export { List };
