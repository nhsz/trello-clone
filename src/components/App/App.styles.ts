import styled from 'styled-components';

const Board = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  background: linear-gradient(0deg, rgba(79, 70, 229, 1) 0%, #6366f1 100%);
  height: calc(100vh - 56px);
  padding: 1rem;
  position: relative;
`;

export { Board };
