import { FC, PropsWithChildren } from 'react';
import { ListContainer, ListTitle } from './List.styles';

interface Props {
  title: string;
}

const List: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <ListContainer>
      <ListTitle contentEditable='true'>{title}</ListTitle>
      {children}
    </ListContainer>
  );
};

export { List };
