import { FC, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { CardDragItem } from '../../dragItem';
import { useAppState, useClickOutsideRef, useDragItem } from '../../hooks';
import { findListIndexById } from '../../utils';
import { EditItemForm } from '../EditItemForm';
import { CardContainer, CardIcons, TextContainer } from './Card.styles';

interface Props {
  id: string;
  text: string;
  listId: string;
  isPreview?: boolean;
}

const Card: FC<Props> = ({ id: taskId, text, listId, isPreview }) => {
  const [editMode, setEditMode] = useState(false);
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const wrapperRef = useClickOutsideRef({
    mode: editMode,
    setMode: () => setEditMode(false)
  });

  const listIndex = findListIndexById(state.lists, listId);
  const { drag } = useDragItem({ type: 'CARD', id: taskId, listIndex, text, listId });
  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: CardDragItem) {
      if (item.id === taskId) {
        return;
      }

      const dragIndex = item.listIndex;
      const hoverIndex = listIndex;
      const sourceListId = item.listId;
      const targetListId = listId;

      dispatch({
        type: 'MOVE_TASK',
        payload: { dragIndex, hoverIndex, sourceListId, targetListId }
      });

      item.listIndex = hoverIndex;
      item.listId = targetListId;
    }
  });

  drag(drop(ref));

  const handleEdit = () => setEditMode(true);
  const handleClick = () => handleRemove(taskId);
  const handleClose = () => setEditMode(false);
  const handleRemove = (taskId: string) => dispatch({ type: 'REMOVE_TASK', payload: taskId });

  return (
    <div style={{ position: 'relative' }}>
      <CardContainer isPreview={isPreview} ref={ref}>
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
            handleAdd={text => dispatch({ type: 'EDIT_TASK', payload: { taskId, text } })}
            handleClose={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export { Card };
