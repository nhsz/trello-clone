import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  position: fixed;
  left: 0;
  bottom: 12px;
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

  .separator {
    color: #a5b4fc;
    font-size: 18px;
    margin: 0 -5px;
  }

  @media (max-height: 500px) {
    display: none;
  }
`;

export { FooterContainer };
