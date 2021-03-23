import { FC } from 'react';
import { AboutButton, HeaderContainer, Logo, LogoContainer } from './Header.styles';

interface Props {
  logoSrc: string;
  handleClick: VoidFunction;
}

const Header: FC<Props> = ({ logoSrc, handleClick }) => (
  <HeaderContainer>
    <LogoContainer>
      <Logo id='trello-logo' src={logoSrc} alt='trello-logo' />
    </LogoContainer>

    <AboutButton itemType='list' onClick={handleClick}>
      <span>About</span>
    </AboutButton>
  </HeaderContainer>
);

export { Header };
