import { FC } from 'react';
import { HiOutlineMenuAlt2, HiOutlineUser, HiOutlineX } from 'react-icons/hi';
import {
  Avatar,
  ContactInfo,
  Container,
  Description,
  DescriptionHeader,
  DescriptionTextContainer,
  Divider,
  Header,
  Profile,
  ProfileHeader,
  Title,
  UserInfo,
  UserName
} from './About.styles';

interface Props {
  avatarSrc: string;
  siteUrl: string;
  ghProfile: string;
  userHandle: string;
  contactEmail: string;
  isOpen: boolean;
  handleClose: VoidFunction;
}

const About: FC<Props> = ({
  avatarSrc,
  siteUrl,
  ghProfile,
  userHandle,
  contactEmail,
  isOpen,
  handleClose
}) => {
  return (
    <Container isOpen={isOpen}>
      <Header>
        <Title>About</Title>
        <HiOutlineX className='x-sign' onClick={handleClose} />
      </Header>

      <Divider />

      <Profile>
        <ProfileHeader>
          <HiOutlineUser className='profile-icon' />
          <p className='made-by-p'>Made by</p>
        </ProfileHeader>

        <UserInfo>
          <Avatar src={avatarSrc} alt='Nicolás Quiroz' title='Nicolás Quiroz' />
          <ContactInfo>
            <UserName>
              <a href={siteUrl} target='_blank' rel='noopener noreferrer'>
                Nicolás Quiroz
              </a>
            </UserName>
            <p className='user-handle'>{userHandle}</p>
            <p className='contact-links'>
              <a href={ghProfile} target='_blank' rel='noopener noreferrer'>
                GitHub Profile
              </a>{' '}
              -{' '}
              <a href={contactEmail} target='_blank' rel='noopener noreferrer'>
                Contact
              </a>
            </p>
          </ContactInfo>
        </UserInfo>
      </Profile>

      <Description>
        <DescriptionHeader>
          <HiOutlineMenuAlt2 className='profile-icon' />
          <p className='made-by-p'>Description</p>
        </DescriptionHeader>
        <DescriptionTextContainer>
          <p>An attempt to mimic the UI and main features of Trello. </p>
          <br />
          <p>
            Built with <strong>React</strong> & <strong>TypeScript</strong>.
          </p>
        </DescriptionTextContainer>
      </Description>
    </Container>
  );
};

export { About };
