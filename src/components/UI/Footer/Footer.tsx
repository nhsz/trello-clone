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
      <a href={siteUrl} target='_blank' rel='noopener noreferrer'>
        <code>nhsz</code>
      </a>{' '}
      <span className='separator'>|</span>{' '}
      <a href={repoUrl} target='_blank' rel='noopener noreferrer'>
        <code>&lt;/src code&gt;</code>
      </a>
    </p>
  </FooterContainer>
);

export { Footer };
