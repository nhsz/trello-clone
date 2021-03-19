import { FC, useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { NewItemForm } from '../NewItemForm';
import { ItemButtonContainer } from './AddNewItem.styles';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  itemType: 'card' | 'list';
  handleAdd: (text: string) => void;
}

const AddNewItem: FC<Props> = ({ itemType, handleAdd }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => setShowForm(true);
  const handleClose = () => setShowForm(false);
  const handleAddItem = (text: string) => {
    handleAdd(text);
    setShowForm(false);
  };

  if (showForm) {
    return (
      <NewItemForm
        itemType={itemType}
        isOpen={showForm}
        handleAdd={handleAddItem}
        handleClose={handleClose}
      />
    );
  }

  return (
    <ItemButtonContainer itemType={itemType} onClick={handleClick}>
      <HiOutlinePlus className='plus-sign' />
      <p>{`Add another ${itemType === 'card' ? 'card' : 'list'}`}</p>
    </ItemButtonContainer>
  );
};

export { AddNewItem };
