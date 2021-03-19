import styled from 'styled-components';
import {
  ListActionsContainer,
  ListActionsDivider,
  ListActionsHeader,
  ListActionsTitle
} from '../ListActionsMenu';
import { NewItemButton } from '../NewItemForm';

const MoveListHeader = styled(ListActionsHeader)`
  .chevron-left {
    cursor: pointer;
    color: #6b778c;
    font-size: 1rem;
    position: absolute;
    left: 0;
    width: 20px;

    &:hover {
      color: #172b4d;
    }
  }
`;

const PositionSelectorContainer = styled.div`
  background-color: rgba(9, 30, 66, 0.04);
  box-shadow: none;
  border: none;
  border-radius: 3px;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 6px 12px;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);

    .position-text {
      color: #172b4d;
    }
  }

  .position-text {
    color: #5e6c84;
    display: block;
    font-size: 12px;
    line-height: 16px;
  }

  .position-number {
    display: block;
    font-size: 14px;
    line-height: 20px;
  }
`;

const MoveListContainer = styled(ListActionsContainer)``;
const MoveListTitle = styled(ListActionsTitle)``;
const MoveListDivider = styled(ListActionsDivider)``;
const MoveButton = styled(NewItemButton)`
  padding-left: 24px;
  padding-right: 24px;
`;
const BoardSelectorContainer = styled(PositionSelectorContainer)`
  margin-bottom: 0;
`;
const SelectorContainer = styled.div`
  padding-bottom: 6px;
`;
const Select = styled.select`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
`;

export {
  MoveListContainer,
  MoveListHeader,
  MoveListDivider,
  MoveListTitle,
  PositionSelectorContainer,
  BoardSelectorContainer,
  MoveButton,
  SelectorContainer,
  Select
};
