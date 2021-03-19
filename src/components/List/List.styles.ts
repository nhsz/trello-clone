import styled from 'styled-components';

export interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${props => (props.isPreview ? 'rotate(5deg)' : undefined)};
  opacity: ${props => (props.isHidden ? 0 : 1)};
`;

const ListContainer = styled(DragPreviewContainer)`
  background-color: #e2e8f0;
  width: 288px;
  min-height: 3rem;
  margin-right: 0.5rem;
  border-radius: 3px;
  padding: 0.5rem;
  padding-right: 10px;
  flex-grow: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const ListTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-width: 278px;
  margin-right: 0.25rem;
  font-size: 0.95rem;
  padding: 6px 7px 14px;
  cursor: pointer;
`;

const ListActionsButton = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  background-color: #e2e8f040;
  position: absolute;
  top: 0;
  right: 12px;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;

  .dots-icon {
    color: #64748b;
    font-size: 1.3rem;
    transition: background 84ms ease-in;
  }

  &:hover {
    background-color: #cbd5e1bf;

    .dots-icon {
      color: #475569;
    }
  }
`;

const ListTitle = styled.h2`
  display: inline-block;
  color: #172b4d;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
`;

const ListCards = styled.div`
  max-height: 68vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

const AddFirstContainer = styled.div`
  margin-top: 0.5px;
  margin-left: 1px;
  margin-bottom: 8px;
`;

export {
  ListContainer,
  ListTitle,
  ListTitleContainer,
  ListActionsButton,
  ListCards,
  AddFirstContainer
};
