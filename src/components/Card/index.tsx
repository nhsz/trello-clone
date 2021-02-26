import { FC } from 'react';
import { CardContainer } from './Card.styles';

interface Props {
  text: string;
}

const Card: FC<Props> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};

export { Card };
