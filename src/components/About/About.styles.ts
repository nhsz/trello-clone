import styled from 'styled-components';
import { ListActionsDivider, ListActionsHeader, ListActionsTitle } from '../ListActionsMenu';
import { PositionSelectorContainer } from '../MoveListMenu';

interface Props {
  isOpen: boolean;
}

const Container = styled.div<Props>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #f4f5f7;
  padding: 0 12px;
  box-shadow: 0 12px 24px -6px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08);
  width: 339px;
  transform: ${({ isOpen }) => (isOpen ? undefined : 'translateX(339px)')};
  transition-property: transform;
  transition-duration: 0.16s;
  transition-timing-function: ease-in;
  z-index: 9999;
`;

const Header = styled(ListActionsHeader)`
  height: 48px;

  .x-sign {
    font-size: 20px;
  }
`;

const Title = styled(ListActionsTitle)`
  color: #172b4d;
  font-size: 16px;
  font-weight: 600;
`;

const Profile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 2px;

  .profile-icon {
    color: #42526e;
    font-size: 24px;
    height: 32px;
    line-height: 32px;
    font-weight: 600;
  }

  .made-by-p {
    color: #172b4d;
    margin-left: 14px;
    min-height: 18px;
    min-width: 40px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
  }
`;

const ProfileHeader = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const UserInfo = styled.section`
  display: flex;
  justify-content: flex-start;
`;

const Avatar = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  border-radius: 25rem;
  margin: 2px;
`;

const ContactInfo = styled.section`
  margin-left: 12px;
  font-size: 14px;
  line-height: 20px;

  & a {
    text-decoration: none;
  }

  .user-handle {
    color: #5e6c84;
    font-weight: 500;
  }

  .contact-links {
    color: #5e6c84;
    font-weight: 500;

    a {
      color: #5e6c84;
      text-decoration: underline;

      &:hover {
        color: #172b4d;
      }
    }
  }
`;

const UserName = styled.h3`
  & a {
    color: #172b4d;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Divider = styled(ListActionsDivider)``;

const Description = styled(Profile)``;

const DescriptionHeader = styled(ProfileHeader)`
  margin-bottom: 4px;
`;

const DescriptionTextContainer = styled(PositionSelectorContainer)`
  padding: 8px 12px;
  color: #172b4d;
  font-size: 14px;
  line-height: 20px;
  transition: all 0.33s ease-in;
  cursor: default;
`;

export {
  Container,
  Header,
  Title,
  Divider,
  Profile,
  ProfileHeader,
  UserInfo,
  Avatar,
  ContactInfo,
  UserName,
  Description,
  DescriptionHeader,
  DescriptionTextContainer
};
