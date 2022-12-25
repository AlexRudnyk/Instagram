import { PhotoContainer } from './Photo.styled';

export const Photo = ({ src, secured }) => {
  return secured ? null : (
    <PhotoContainer>
      <img src={src} alt="space" />
    </PhotoContainer>
  );
};
