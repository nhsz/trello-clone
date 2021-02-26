import styled from 'styled-components';

const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;

const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export { ColumnContainer, ColumnTitle };
