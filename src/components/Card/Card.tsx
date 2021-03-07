import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { useAppState } from '../../hooks';
import { EditItemForm } from '../EditItemForm';
import { CardContainer, CardIcons, TextContainer } from './Card.styles';

interface Props {
  id: string;
  text: string;
}

const Card: FC<Props> = ({ id: taskId, text }) => {
  const [editMode, setEditMode] = useState(false);
  const { dispatch } = useAppState();
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
    // attach listener on component mount to detect clicks outside edit form area
    document.addEventListener('click', clickOutsideListener);
    // detach listener on component unmount
    return () => document.removeEventListener('click', clickOutsideListener);
  });

  const handleEdit = () => setEditMode(true);
  const handleClose = () => setEditMode(false);
  const handleRemove = (taskId: string) => dispatch({ type: 'REMOVE_TASK', payload: taskId });

  return (
    <div style={{ position: 'relative' }}>
      <CardContainer>
        <TextContainer>{text}</TextContainer>
        <CardIcons>
          <HiOutlinePencil className='icon' onClick={handleEdit} />
          <HiOutlineTrash className='icon' onClick={() => handleRemove(taskId)} />
        </CardIcons>
      </CardContainer>

      {editMode && (
        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#000000a6',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 99
          }}
        ></div>
      )}

      {editMode && (
        <div
          ref={wrapperRef}
          style={{
            height: 0,
            zIndex: 999,
            position: 'fixed'
          }}
        >
          <EditItemForm
            itemType='card'
            initialText={text}
            handleAdd={text => dispatch({ type: 'EDIT_TASK', payload: { taskId, text } })}
            handleClose={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export { Card };
