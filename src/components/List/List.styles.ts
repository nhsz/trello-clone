import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #e2e8f0;
  width: 300px;
  min-height: 3rem;
  margin-right: 1.5rem;
  border-radius: 4px;
  padding: 0.5rem;
  flex-grow: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const ListTitle = styled.div`
  padding: 8px 16px 12px;
  font-weight: 600;
`;

export { ListContainer, ListTitle };
