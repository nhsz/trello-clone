import styled from 'styled-components';
import { Props } from './AddItemButton';

const ItemButtonContainer = styled.button<Props>`
  display: flex;
  align-items: center;
  width: calc(100% - 4px);

  font-size: 0.95rem;
  padding: 0.3rem 0.5rem;

  cursor: pointer;

  border: none;
  border-radius: 4px;

  color: ${props => (props.itemType === 'card' ? '#64748b' : '#f8fafc')};
  background-color: #e2e8f0;
  transition: background 84ms ease-in;

  .plus-sign {
    font-size: 1.25rem;
  }

  &:hover {
    background-color: #cbd5e1bf;

    .item-text,
    .plus-sign {
      color: #475569;
    }
  }
`;

export { ItemButtonContainer };
