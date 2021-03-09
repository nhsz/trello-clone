import { FC } from 'react';
import { HeaderContainer, Logo, LogoContainer } from './Header.styles';

interface Props {
  logoSrc: string;
}

const Header: FC<Props> = ({ logoSrc }) => (
  <HeaderContainer>
    <LogoContainer>
      <Logo id='trello-logo' src={logoSrc} alt='trello-logo' />
    </LogoContainer>
  </HeaderContainer>
);

export { Header };
