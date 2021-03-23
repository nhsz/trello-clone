import styled from 'styled-components';
import { ItemButtonContainer } from '../../AddINewItem';

const HeaderContainer = styled.header`
  background-color: #6366f1;
  padding-bottom: 1rem;
  position: relative;
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

const AboutButton = styled(ItemButtonContainer)`
  position: absolute;
  top: 6px;
  right: 6px;
  margin: 0;
  padding: 6px 12px;
  min-width: 0;

  span {
    font-size: 14px;
  }

  transition: background 0.33s ease-in;
`;

export { HeaderContainer, Logo, LogoContainer, AboutButton };
