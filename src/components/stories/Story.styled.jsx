import styled from 'styled-components';

export const StoryWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 87px;
            height: 87px;
            padding: 3px;
            cursor: pointer;
            border: 1px solid #dbdbdb;
            border-radius: 50%;
            margin-bottom: 15px;

            & img {
                border-radius: 50%;
                width: 100%;
            }
`;

export const StorySpan = styled.span`
  font-weight: 600;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 87px;
  text-align: center;
`;
