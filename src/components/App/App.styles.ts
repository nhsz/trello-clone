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

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 2rem;
  width: 100%;
  background-color: #4f46e5bf;
  color: white;

  a {
    color: #a5b4fc;

    &:hover {
      color: #c7d2fe;
    }
  }

  .coffee-icon {
    position: relative;
    top: 1.4px;
  }
`;

export { Board, Logo, LogoContainer, Header, Footer };
