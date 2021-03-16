import { FC, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { DragItem } from '../../dragItem';
import { useAppState, useClickOutsideRef, useDragItem } from '../../hooks';
import { EditItemForm } from '../EditItemForm';
import { CardContainer, CardIcons, TextContainer } from './Card.styles';

interface Props {
  id: string;
  text: string;
  index: number;
  listId: string;
  isPreview?: boolean;
}

const Card: FC<Props> = ({ id, index, text, listId, isPreview }) => {
  const [editMode, setEditMode] = useState(false);
  const { dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const wrapperRef = useClickOutsideRef({
    mode: editMode,
    setMode: () => setEditMode(false)
  });

  const { opacity, drag } = useDragItem({ type: 'CARD', id, text, index, listId });
  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: DragItem) {
      if (item.id === id) {
        return;
      }

      if (item.type === 'CARD') {
        const dragIndex = item.index;
        const hoverIndex = index;
        const sourceListId = item.listId;
        const targetListId = listId;

        console.log({ dragIndex, hoverIndex });

        dispatch({
          type: 'MOVE_TASK',
          payload: { dragIndex, hoverIndex, sourceListId, targetListId }
        });

        item.index = hoverIndex;
        item.listId = targetListId;
      }
    }
  });

  drag(drop(ref));

  const handleEdit = () => setEditMode(true);
  const handleClick = () => handleRemove(id);
  const handleClose = () => setEditMode(false);
  const handleRemove = (id: string) => dispatch({ type: 'REMOVE_TASK', payload: id });

  return (
    <div style={{ position: 'relative' }}>
      <CardContainer
        isPreview={isPreview}
        style={{ opacity, transform: isPreview ? 'rotate(5deg)' : undefined }}
        ref={ref}
      >
        <TextContainer>{text}</TextContainer>
        <CardIcons>
          <HiOutlinePencil className='icon' onClick={handleEdit} />
          <HiOutlineTrash className='icon' onClick={handleClick} />
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
            handleAdd={text => dispatch({ type: 'EDIT_TASK', payload: { id, text } })}
            handleClose={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export { Card };
