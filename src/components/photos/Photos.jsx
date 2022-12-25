// import { useEffect } from 'react';
// import { useState } from 'react';
import data from '../../data/images.json';
import { Photo } from './Photo';
import { PhotosContainer } from './Photos.styled';

export const Photos = () => {
  //   const [photos, setPhotos] = useState(data);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setPhotos(prevPhotos => {
  //         return [
  //           {
  //             id: Date.now(),
  //             src: 'http://placebeard.it/g/640x640',
  //             public: true,
  //           },
  //           ...prevPhotos,
  //         ];
  //       });
  //     }, 5000);
  //   }, [photos]);

  const photosJSX = data.map(photo => {
    return <Photo key={photo.id} src={photo.src} secured={!photo.public} />;
  });

  return <PhotosContainer>{photosJSX}</PhotosContainer>;
};
