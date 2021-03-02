import { FC, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import {
  NewItemButton,
  NewItemButtonContainer,
  NewItemFormContainer,
  NewItemInput
} from './NewItemForm.styles';

interface Props {
  itemType: 'card' | 'list';
  handleAdd: (text: string) => void;
  handleClose: () => void;
}

const NewItemForm: FC<Props> = ({ handleAdd, itemType, handleClose }) => {
  const [text, setText] = useState('');

  return (
    <NewItemFormContainer itemType={itemType}>
      <NewItemInput value={text} onChange={e => setText(e.target.value)} />
      <NewItemButtonContainer>
        <NewItemButton onClick={() => handleAdd(text)}>{`Add ${
          itemType === 'card' ? 'Card' : 'List'
        }`}</NewItemButton>
        <HiOutlineX className='x-sign' onClick={handleClose} />
      </NewItemButtonContainer>
    </NewItemFormContainer>
  );
};

export { NewItemForm };
