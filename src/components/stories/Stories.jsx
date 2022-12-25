import stories from '../../data/stories.json';
import { Story } from './Story';
import { StoriesContainer } from './Stories.styled';

export const Stories = () => {
  const storiesJSX = stories.map(({ id, message, src }) => {
    return <Story key={id} message={message} src={src} />;
  });
  return <StoriesContainer>{storiesJSX}</StoriesContainer>;
};
