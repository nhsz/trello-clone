import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useFocus } from '../../../hooks';
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

const NewItemForm: FC<Props> = ({ itemType, handleAdd, handleClose }) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();
  const hasContent = text.trim().length > 0;

  const handleEnterPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      if (hasContent) {
        handleAdd(text.trim());
      } else {
        event.preventDefault();
      }
    }
  };

  const handleEsc = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Escape') handleClose();
  };

  const handleClick = () => {
    if (hasContent) handleAdd(text);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => setText(event.target.value);

  return (
    <NewItemFormContainer itemType={itemType}>
      <NewItemInput
        itemType={itemType}
        ref={inputRef}
        value={text}
        placeholder={itemType === 'card' ? 'Enter a title for this card...' : 'Enter list title...'}
        onChange={handleChange}
        onKeyPress={handleEnterPress}
        onKeyDown={handleEsc}
      />

      <NewItemButtonContainer>
        <NewItemButton onClick={handleClick}>{`Add ${
          itemType === 'card' ? 'Card' : 'List'
        }`}</NewItemButton>
        <HiOutlineX className='x-sign' onClick={handleClose} />
      </NewItemButtonContainer>
    </NewItemFormContainer>
  );
};

export { NewItemForm };
