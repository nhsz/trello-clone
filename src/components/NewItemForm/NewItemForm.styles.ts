import styled from 'styled-components';

interface Props {
  itemType: 'card' | 'list';
}

const NewItemFormContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 278px;
  max-width: 100%;
  background-color: ${({ itemType }) => (itemType === 'list' ? '#e2e8f0' : null)};
  border-radius: ${({ itemType }) => (itemType === 'list' ? '4px' : null)};
  padding: ${({ itemType }) => (itemType === 'list' ? '0.5rem' : null)};

  transition: all 3s ease-out;
`;

const NewItemButton = styled.button`
  cursor: pointer;
  font-size: 0.9rem;
  background-color: #5aac44;
  border-radius: 4px;
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

const NewItemInput = styled.input`
  border-radius: 4px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: calc(100% - 4px);
`;

const NewItemButtonContainer = styled.div`
  display: flex;
  align-items: center;

  .x-sign {
    cursor: pointer;
    color: #64748b;
    font-size: 1.25rem;

    &:hover {
      color: #475569;
    }
  }
`;

export { NewItemFormContainer, NewItemButton, NewItemInput, NewItemButtonContainer };
