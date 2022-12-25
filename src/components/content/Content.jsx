import { ContentContainer } from './Content.styled';
import { Profile } from 'components/profile';
import { Photos } from 'components/photos';

export const Content = () => {
  return (
    <ContentContainer>
      <Profile />
      <Photos />
    </ContentContainer>
  );
};
