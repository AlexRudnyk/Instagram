import { StoryWrapper, StorySpan } from './Story.styled';

export const Story = ({ message, src }) => {
  return (
    <StoryWrapper>
      <div>
        <img src={src} alt="storyImg" />
      </div>
      <StorySpan>{message}</StorySpan>
    </StoryWrapper>
  );
};
