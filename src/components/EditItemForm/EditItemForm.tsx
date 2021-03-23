import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useFocus } from '../../hooks';
import { EditItemButton, EditItemButtonContainer, EditItemFormContainer, EditItemInput } from './';

interface Props {
  itemType: 'card' | 'list';
  initialText: string;
  handleAdd: (text: string) => void;
  handleClose: VoidFunction;
}

const EditItemForm: FC<Props> = ({ itemType, initialText, handleAdd, handleClose }) => {
  const [text, setText] = useState(initialText);
  const inputRef = useFocus();
  const hasContent = text.trim().length > 0;

  const handleEnterPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      if (hasContent) {
        handleAdd(text.trim());
        handleClose();
      } else {
        event.preventDefault();
      }
    }
  };

  const handleEsc = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Escape') handleClose();
  };

  const handleSaveAndClose = () => {
    handleAdd(text);
    handleClose();
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => setText(event.target.value);

  return (
    <EditItemFormContainer itemType={itemType}>
      <EditItemInput
        itemType={itemType}
        ref={inputRef}
        value={text}
        placeholder={itemType === 'card' ? 'Enter a title for this card...' : 'Enter list title...'}
        onChange={handleChange}
        onKeyPress={handleEnterPress}
        onKeyDown={handleEsc}
      />

      <EditItemButtonContainer>
        <EditItemButton onClick={handleSaveAndClose}>Save</EditItemButton>
        <HiOutlineX className='x-sign' onClick={handleClose} />
      </EditItemButtonContainer>
    </EditItemFormContainer>
  );
};

export { EditItemForm };
