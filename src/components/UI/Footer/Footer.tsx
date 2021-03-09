import { FC, PropsWithChildren } from 'react';
import { FiCoffee } from 'react-icons/fi';
import { FooterContainer } from './Footer.styles';

interface Props {
  siteUrl: string;
  repoUrl: string;
}

const Footer: FC<PropsWithChildren<Props>> = ({ siteUrl, repoUrl }) => (
  <FooterContainer>
    <p>
      built with <FiCoffee className='coffee-icon' /> by{' '}
      <a href={siteUrl}>
        <code>nhsz</code>
      </a>{' '}
      |{' '}
      <a href={repoUrl}>
        <code>&lt;/src code&gt;</code>
      </a>
    </p>
  </FooterContainer>
);

export { Footer };
