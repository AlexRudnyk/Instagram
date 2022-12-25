import { PhotoContainer } from './Photo.styled';

export const Photo = props => {
  return props.secured ? null : (
    <PhotoContainer>
      <img src={props.src} alt="beard" />
    </PhotoContainer>
  );
};
