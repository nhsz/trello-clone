import { FC } from 'react';
import { CardContainer } from './Card.styles';

type Props = {
  children: string;
};

const Card: FC<Props> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export { Card };
