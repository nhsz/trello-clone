import { FC, PropsWithChildren } from 'react';
import { ColumnContainer, ColumnTitle } from './Column.styles';

interface Props {
  title: string;
}

const Column: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};

export { Column };
