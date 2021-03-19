import { FC } from 'react';
import { HiOutlineChevronLeft, HiOutlineX } from 'react-icons/hi';
import { useClickOutsideRef } from '../../hooks';
import {
  BoardSelectorContainer,
  MoveListContainer,
  MoveListDivider,
  MoveListHeader,
  MoveListTitle,
  PositionSelectorContainer
} from './MoveListMenu.styles';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleGoBack: () => void;
}

const MoveListMenu: FC<Props> = ({ isOpen, handleClose, handleGoBack }) => {
  const { ref, clickOutsideListener } = useClickOutsideRef({
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

      <BoardSelectorContainer>
        <span className='position-text'>Board</span>
        <span className='position-number'>default (this demo has only one)</span>
      </BoardSelectorContainer>

      <PositionSelectorContainer>
        <span className='position-text'>Position</span>
        <span className='position-number'>2</span>
      </PositionSelectorContainer>
    </MoveListContainer>
  );
};

export { MoveListMenu };
