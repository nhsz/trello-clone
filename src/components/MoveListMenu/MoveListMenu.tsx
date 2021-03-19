import { FC } from 'react';
import { HiOutlineChevronLeft, HiOutlineX } from 'react-icons/hi';
import { useClickOutsideRef } from '../../hooks';
import {
  BoardSelectorContainer,
  MoveButton,
  MoveListContainer,
  MoveListDivider,
  MoveListHeader,
  MoveListTitle,
  PositionSelectorContainer,
  SelectorContainer
} from './MoveListMenu.styles';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleGoBack: () => void;
}

const MoveListMenu: FC<Props> = ({ isOpen, handleClose, handleGoBack }) => {
  // const { state } = useAppState();
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
          <span className='position-number'>2</span>
        </PositionSelectorContainer>

        <MoveButton>Move</MoveButton>
      </SelectorContainer>
    </MoveListContainer>
  );
};

export { MoveListMenu };
