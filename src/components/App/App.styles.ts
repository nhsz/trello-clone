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

const Header = styled.header`
  background-color: #6366f1;
  padding-bottom: 1rem;
`;

const Logo = styled.img`
  height: 1rem;
  opacity: 0.5;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1118271a;
  padding: 0.75rem;
`;

export { Board, Logo, LogoContainer, Header };
