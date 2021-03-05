import { FC, PropsWithChildren } from 'react';
import { AddNewItem } from '../AddINewItem';
import { ListCards, ListContainer, ListTitle } from './List.styles';

interface Props {
  title: string;
  index: number;
}

const List: FC<PropsWithChildren<Props>> = ({ title, index, children }) => {
  return (
    <ListContainer className='pseudo-elem'>
      <ListTitle>{title}</ListTitle>
      <ListCards>{children}</ListCards>
      <AddNewItem itemType='card' handleAdd={console.log} />
    </ListContainer>
  );
};

export { List };
