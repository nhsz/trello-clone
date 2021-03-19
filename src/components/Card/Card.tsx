import { FC, useRef, useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { useAppState, useClickOutsideRef, useDragItem, useDropCard } from '../../hooks';
import { isHidden } from '../../utils';
import { EditItemForm } from '../EditItemForm';
import {
  BackgroundOverlay,
  CardContainer,
  CardIcons,
  OuterContainer,
  TextContainer,
  WrapperContainer
} from './Card.styles';

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
  const { ref: wrapperRef } = useClickOutsideRef({
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
    <OuterContainer>
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

      {editMode && <BackgroundOverlay />}
      {editMode && (
        <WrapperContainer ref={wrapperRef}>
          <EditItemForm
            itemType='card'
            initialText={text}
            handleAdd={text => dispatch({ type: 'EDIT_TASK', payload: { id, text } })}
            handleClose={handleClose}
          />
        </WrapperContainer>
      )}
    </OuterContainer>
  );
};

export { Card };
