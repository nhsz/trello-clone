import { FC, useState } from 'react';
import { HiOutlineUser, HiOutlineX } from 'react-icons/hi';
import {
  Avatar,
  ContactInfo,
  Container,
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
}

const About: FC<Props> = ({ avatarSrc, siteUrl, ghProfile, userHandle, contactEmail }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

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
    </Container>
  );
};

export { About };
