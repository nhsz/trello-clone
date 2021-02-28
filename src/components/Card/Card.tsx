import { FC } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import { CardContainer, CardIcons, TextContainer } from './Card.styles';

interface Props {
  text: string;
}

const Card: FC<Props> = ({ text }) => {
  return (
    <CardContainer>
      <TextContainer>{text}</TextContainer>
      <CardIcons>
        <HiOutlinePencil className='icon' />
      </CardIcons>
    </CardContainer>
  );
};

export { Card };
