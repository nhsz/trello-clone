import styled from 'styled-components';

const Board = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #6366f1;
  height: calc(100vh - 56px);
  padding: 1rem;
  position: relative;
`;

export { Board };
