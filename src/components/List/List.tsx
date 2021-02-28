import { FC, PropsWithChildren } from 'react';
import { AddItemButton } from '../AddItemButton';
import { ListCards, ListContainer, ListTitle } from './List.styles';

interface Props {
  title: string;
}

const List: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <ListCards>{children}</ListCards>
      <AddItemButton itemType='card' />
    </ListContainer>
  );
};

export { List };
