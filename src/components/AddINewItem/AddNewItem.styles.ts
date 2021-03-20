import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  itemType: 'card' | 'list';
}

const ItemButtonContainer = styled.button<Props>`
  display: flex;
  align-items: center;
  min-width: ${({ itemType }) => (itemType === 'card' ? '266px' : '278px')};
  margin-right: 0.25rem;
  font-size: 0.95rem;
  padding: ${({ itemType }) => (itemType === 'card' ? '0.3rem 0.5rem' : '0.75rem')};
  cursor: pointer;
  border: none;
  border-radius: 3px;
  color: ${({ itemType }) => (itemType === 'card' ? '#64748b' : '#f8fafc')};
  background-color: ${({ itemType }) => (itemType === 'card' ? '#e2e8f0' : '#e2e8f040')};
  transition: background 84ms ease-in;

  .plus-sign {
    font-size: 1.3rem;
  }

  &:hover {
    color: ${({ itemType }) => (itemType === 'card' ? '#475569' : '#f8fafc')};
    background-color: ${({ itemType }) => (itemType === 'card' ? '#cbd5e1bf' : '#e2e8f059')};

    .plus-sign {
      color: ${({ itemType }) => (itemType === 'card' ? '#475569' : '#f8fafc')};
    }
  }
`;

export { ItemButtonContainer };
