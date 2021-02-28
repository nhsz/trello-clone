import { FC } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { AddItemParagraph, ItemButtonContainer } from './AddItemButton.styles';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  itemType: 'card' | 'list';
}

const AddItemButton: FC<Props> = ({ itemType }) => {
  const isCard = itemType === 'card';

  return (
    <ItemButtonContainer itemType='card'>
      <HiOutlinePlus className='plus-sign' />
      <AddItemParagraph>{`Add another ${isCard ? 'card' : 'list'}`}</AddItemParagraph>
    </ItemButtonContainer>
  );
};

export { AddItemButton };
