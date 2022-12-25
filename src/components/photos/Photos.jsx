import data from '../../data/images.json';
import { Photo } from './Photo';
import { PhotosContainer } from './Photos.styled';

export const Photos = () => {
  const photosJSX = data.map(photo => {
    return <Photo key={photo.id} src={photo.src} secured={!photo.public} />;
  });
  return <PhotosContainer>{photosJSX}</PhotosContainer>;
};
