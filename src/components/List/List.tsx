import { FC, PropsWithChildren } from 'react';
import { ListCards, ListContainer, ListTitle } from './List.styles';

interface Props {
  title: string;
}

const List: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <ListCards>{children}</ListCards>
    </ListContainer>
  );
};

export { List };
