import { FC } from 'react';
import { ColumnContainer, ColumnTitle } from './Column.styles';

type Props = {
  children: JSX.Element;
};

const Column: FC<Props> = ({ children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>title</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};

export { Column };
