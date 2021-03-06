import { FC, PropsWithChildren } from 'react';
import { AddNewItem } from '../AddINewItem';
import { ListCards, ListContainer, ListTitle } from './List.styles';

interface Props {
  title: string;
}

const List: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <ListContainer className='pseudo-elem'>
      <ListTitle>{title}</ListTitle>
      <ListCards>{children}</ListCards>
      <AddNewItem itemType='card' handleAdd={console.log} />
    </ListContainer>
  );
};

export { List };
