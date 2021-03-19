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
  color: white;

  a {
    color: #a5b4fc;
    transition: all 0.33s ease-in;
    background: linear-gradient(#332c49 0 0) left / var(--d, 0%) 100% no-repeat;
    padding: 2px 6px;

    &:hover {
      --d: 100%;
      color: #ff3c88;
      text-shadow: 1px 1px 1px #b45c70;
    }
  }

  .coffee-icon {
    position: relative;
    top: 1.4px;
    fill: transparent;
    transition: all 0.5s ease-in;

    &:hover {
      fill: #1a120d;
    }
  }

  .pipe-separator {
    color: #e2e8f0;
    font-size: 18px;
    margin: 0 -6px;
  }
`;

export { FooterContainer };
