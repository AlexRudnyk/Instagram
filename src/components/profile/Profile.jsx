import {
  ProfileContainer,
  ProfileImg,
  ProfileMain,
  ProfileNickname,
  ProfileStats,
  ProfileName,
} from './Profile.styled';
import avatar from '../../theme/assets/images/nasa.jpg';
import { Stories } from 'components/stories';

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImg className="avatar" src={avatar} alt="avatar" />
      <ProfileMain>
        <ProfileNickname>NASA</ProfileNickname>
        <ProfileStats>
          <div>
            <span>2398&nbsp;</span>
            <span>posts</span>
          </div>
          <div>
            <span>33.6 million&nbsp;</span>
            <span>followers</span>
          </div>
          <div>
            <span>69&nbsp;</span>
            <span>following</span>
          </div>
        </ProfileStats>
        <ProfileName>NASA</ProfileName>
      </ProfileMain>
      <Stories />
    </ProfileContainer>
  );
};
