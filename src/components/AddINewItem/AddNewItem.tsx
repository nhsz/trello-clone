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

  if (showForm) {
    return (
      <NewItemForm
        itemType={itemType}
        handleAdd={text => {
          handleAdd(text);
          setShowForm(false);
        }}
        handleClose={() => setShowForm(false)}
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
