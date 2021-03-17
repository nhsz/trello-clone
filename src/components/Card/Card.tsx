import { FC, useRef, useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { useAppState, useClickOutsideRef, useDragItem, useDropCard } from '../../hooks';
import { isHidden } from '../../utils';
import { EditItemForm } from '../EditItemForm';
import { CardContainer, CardIcons, Overlay, TextContainer } from './Card.styles';

interface Props {
  id: string;
  text: string;
  index: number;
  listId: string;
  isPreview?: boolean;
}

const Card: FC<Props> = ({ id, index, text, listId, isPreview }) => {
  const [editMode, setEditMode] = useState(false);
  const { state, dispatch } = useAppState();
  const { draggedItem } = state;
  const ref = useRef<HTMLDivElement>(null);
  const wrapperRef = useClickOutsideRef({
    mode: editMode,
    setMode: () => setEditMode(false)
  });

  const { drag } = useDragItem({ type: 'CARD', id, text, index, listId });
  const { drop } = useDropCard({ id, index, listId });

  drag(drop(ref));

  const handleEdit = () => setEditMode(true);
  const handleClick = () => handleRemove(id);
  const handleClose = () => setEditMode(false);
  const handleRemove = (id: string) => dispatch({ type: 'REMOVE_TASK', payload: id });

  return (
    <div style={{ position: 'relative' }}>
      <CardContainer
        isHidden={isHidden({ isPreview, draggedItem, itemType: 'CARD', id })}
        isPreview={isPreview}
        ref={ref}
      >
        <TextContainer>{text}</TextContainer>
        <CardIcons>
          <HiOutlinePencil className='icon' onClick={handleEdit} />
          <HiOutlineTrash className='icon' onClick={handleClick} />
        </CardIcons>
      </CardContainer>

      {editMode && <Overlay />}

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
            handleAdd={text => dispatch({ type: 'EDIT_TASK', payload: { id, text } })}
            handleClose={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export { Card };
