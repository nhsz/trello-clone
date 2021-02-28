import { FC } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { CardContainer, TextContainer } from './Card.styles';

interface Props {
  text: string;
}

const Card: FC<Props> = ({ text }) => {
  return (
    <CardContainer>
      <TextContainer contentEditable='true'>{text}</TextContainer>
      <div className='card-icons'>
        {/* <HiOutlinePencil className='icon' /> */}
        <HiOutlineTrash className='icon' />
      </div>
    </CardContainer>
  );
};

export { Card };
