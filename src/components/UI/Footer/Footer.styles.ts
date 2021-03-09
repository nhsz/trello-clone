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

    &:hover {
      color: #c7d2fe;
    }
  }

  .coffee-icon {
    position: relative;
    top: 1.4px;
  }
`;

export { FooterContainer };
