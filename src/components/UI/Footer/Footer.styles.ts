import styled from 'styled-components';

const FooterContainer = styled.footer`
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
    // transition: all 0.33s ease-in;

    &:hover {
      color: #ff3c88;
      text-shadow: 1px 1px 2px #332c49;
    }
  }

  .coffee-icon {
    position: relative;
    top: 1.4px;
    fill: transparent;
    // transition: all 0.5s ease-in;

    &:hover {
      fill: #1a120d;
    }
  }
`;

export { FooterContainer };
