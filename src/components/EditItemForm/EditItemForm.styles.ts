import styled from 'styled-components';
import { FormProps, NewItemButton, NewItemButtonContainer, NewItemInput } from '../NewItemForm';

const EditItemFormContainer = styled.div<FormProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 260px;
  background-color: transparent;
  border-radius: ${({ itemType }) => (itemType === 'list' ? '4px' : null)};
  padding: ${({ itemType }) => (itemType === 'list' ? '0.5rem' : null)};
  position: absolute;
  top: -41px;
  left: 0px;
`;

const EditItemButton = styled(NewItemButton)``;

const EditItemInput = styled(NewItemInput)`
  width: ${({ itemType }) => (itemType === 'list' ? '260px' : '264px')};
  height: 4.75rem;
`;

const EditItemButtonContainer = styled(NewItemButtonContainer)`
  .x-sign {
    color: #e2e8f0b3;

    &:hover {
      color: #e2e8f0;
    }
  }
`;

export { EditItemFormContainer, EditItemButton, EditItemInput, EditItemButtonContainer };
