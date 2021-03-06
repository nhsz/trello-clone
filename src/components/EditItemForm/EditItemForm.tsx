import { FC, KeyboardEvent, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useFocus } from '../../hooks';
import {
  EditItemButton,
  EditItemButtonContainer,
  EditItemFormContainer,
  EditItemInput
} from './EditItemForm.styles';

interface Props {
  itemType: 'card' | 'list';
  initialText: string;
  handleAdd: (text: string) => void;
  handleClose: () => void;
}

const EditItemForm: FC<Props> = ({ itemType, initialText, handleAdd, handleClose }) => {
  const [text, setText] = useState(initialText);
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

  return (
    <EditItemFormContainer itemType={itemType}>
      <EditItemInput
        itemType={itemType}
        ref={inputRef}
        value={text}
        placeholder={itemType === 'card' ? 'Enter a title for this card...' : 'Enter list title...'}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleEnterPress}
        onKeyDown={handleEsc}
      />

      <EditItemButtonContainer>
        <EditItemButton onClick={() => handleAdd(text)}>Save</EditItemButton>
        <HiOutlineX className='x-sign' onClick={handleClose} />
      </EditItemButtonContainer>
    </EditItemFormContainer>
  );
};

export { EditItemForm };
