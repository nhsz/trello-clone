import styled from 'styled-components';

const ColumnContainer = styled.div`
  background-color: #e5e7eb;
  width: 300px;
  min-height: 3rem;
  margin-right: 1.5rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  flex-grow: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const ColumnTitle = styled.div`
  padding: 8px 16px 12px;
  font-weight: bold;
`;

export { ColumnContainer, ColumnTitle };
