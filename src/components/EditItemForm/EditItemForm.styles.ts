import styled from 'styled-components';

interface Props {
  itemType: 'card' | 'list';
}

const EditItemFormContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 270px;
  background-color: #00000099;
  border-radius: ${({ itemType }) => (itemType === 'list' ? '4px' : null)};
  padding: ${({ itemType }) => (itemType === 'list' ? '0.5rem' : null)};
  position: absolute;
  z-index: 2;
  top: 49.5px;
  left: 7.5px;
`;

const EditItemButton = styled.button`
  cursor: pointer;
  font-size: 0.9rem;
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #f8fafc;
  padding: 8px 12px;
  text-align: center;
  margin-right: 0.5rem;

  &:hover {
    background-color: #61bd4f;
  }
`;

const EditItemInput = styled.textarea<Props>`
  border-radius: 3px;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 0.5rem;
  margin-left: 0.45px;
  padding: 0.5rem;
  width: ${({ itemType }) => (itemType === 'list' ? '262px' : '266px')};
  height: ${({ itemType }) => (itemType === 'list' ? '2rem' : '4rem')};
  white-space: ${({ itemType }) => (itemType === 'list' ? 'nowrap' : null)};
  overflow: hidden;
  resize: none;
`;

const EditItemButtonContainer = styled.div`
  display: flex;
  align-items: center;

  .x-sign {
    cursor: pointer;
    color: #64748b;
    font-size: 1.5rem;

    &:hover {
      color: #475569;
    }
  }
`;

export { EditItemFormContainer, EditItemButton, EditItemInput, EditItemButtonContainer };
