import { FC } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { ItemButtonContainer } from './AddItemButton.styles';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  itemType: 'card' | 'list';
}

const AddItemButton: FC<Props> = ({ itemType }) => {
  const isCard = itemType === 'card';

  return (
    <ItemButtonContainer itemType='card'>
      <HiOutlinePlus className='plus-sign' />
      <p className='item-text'>{`Add another ${isCard ? 'card' : 'list'}`}</p>
    </ItemButtonContainer>
  );
};

export { AddItemButton };
