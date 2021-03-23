import { ChangeEvent, FC, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineX } from 'react-icons/hi';
import { useAppState, useClickOutsideRef } from '../../hooks';
import { findListIndexById } from '../../utils';
import {
  BoardSelectorContainer,
  MoveButton,
  MoveListContainer,
  MoveListDivider,
  MoveListHeader,
  MoveListTitle,
  PositionSelectorContainer,
  Select,
  SelectorContainer
} from './MoveListMenu.styles';

interface Props {
  isOpen: boolean;
  handleClose: VoidFunction;
  handleGoBack: VoidFunction;
  listId: string;
}

const MoveListMenu: FC<Props> = ({ isOpen, handleClose, handleGoBack, listId }) => {
  const { state, dispatch } = useAppState();
  const defaultPosition = findListIndexById(state.lists, listId) + 1;
  const [selectedPosition, setSelectedPosition] = useState(defaultPosition);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPosition(Number(event.currentTarget.value));
  };
  const handleMove = () => {
    if (selectedPosition !== defaultPosition) {
      dispatch({ type: 'MOVE_LIST_TO_POSITION', payload: { listId, index: selectedPosition } });
    }

    handleClose();
  };

  const { ref } = useClickOutsideRef({
    mode: isOpen,
    setMode: handleClose
  });

  return (
    <MoveListContainer ref={ref}>
      <MoveListHeader>
        <HiOutlineChevronLeft className='chevron-left' onClick={handleGoBack} />
        <MoveListTitle>Move list</MoveListTitle>
        <HiOutlineX className='x-sign' onClick={handleClose} />
      </MoveListHeader>

      <MoveListDivider />

      <SelectorContainer>
        <BoardSelectorContainer>
          <span className='position-text'>Board</span>
          <span className='position-number'>default (this demo has only one)</span>
        </BoardSelectorContainer>

        <PositionSelectorContainer>
          <span className='position-text'>Position</span>
          <span className='position-number'>{selectedPosition}</span>

          <Select
            name='positions'
            id='positions-select'
            defaultValue={selectedPosition}
            onChange={handleChange}
          >
            {state.lists.map(list => {
              const position = findListIndexById(state.lists, list.id) + 1;
              return (
                <option value={position} key={list.id}>
                  {list.id === listId ? `${position} (current)` : position}
                </option>
              );
            })}
          </Select>
        </PositionSelectorContainer>

        <MoveButton onClick={handleMove}>Move</MoveButton>
      </SelectorContainer>
    </MoveListContainer>
  );
};

export { MoveListMenu };
