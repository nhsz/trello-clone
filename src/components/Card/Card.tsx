import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import { EditItemForm } from '../EditItemForm';
import { CardContainer, CardIcons, TextContainer } from './Card.styles';

interface Props {
  id: string;
  text: string;
}

const Card: FC<Props> = ({ id, text }) => {
  const [editMode, setEditMode] = useState(false);
  const wrapperRef = useRef(null);

  const clickOutsideListener = useCallback(
    (e: MouseEvent) => {
      if (editMode && !(wrapperRef.current as any)?.contains(e.target as Node)) {
        setEditMode(false);
      }
    },
    [editMode]
  );

  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener('click', clickOutsideListener);

    // Detach the listeners on component unmount.
    return () => document.removeEventListener('click', clickOutsideListener);
  });

  const handleEdit = () => setEditMode(true);
  const handleClose = () => setEditMode(false);

  return (
    <>
      <CardContainer>
        <TextContainer>{text}</TextContainer>
        <CardIcons>
          <HiOutlinePencil className='icon' onClick={handleEdit} />
        </CardIcons>
      </CardContainer>

      {editMode && (
        <div ref={wrapperRef}>
          <EditItemForm
            itemType='card'
            initialText={text}
            handleAdd={() => {}}
            handleClose={handleClose}
          />
        </div>
      )}
    </>
  );
};

export { Card };
