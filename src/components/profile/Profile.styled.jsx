import styled from 'styled-components';
import confirmedImg from '../../theme/assets/images/confirmed.png';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 930px;
  border-bottom: 1px solid #efefef;
  padding: 50px 0;
`;

export const ProfileImg = styled.img`
  box-sizing: content-box;
  margin: 0 92px 44px 60px;
  cursor: pointer;
  width: 161px;
  height: 161px;
  border: 3px inset transparent;
  border-radius: 50%;
  background-image: linear-gradient(white, white),
    radial-gradient(
      circle at top right,
      var(--paletteColor8),
      var(--paletteColor9)
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const ProfileMain = styled.div`
  padding-top: 12px;
`;

export const ProfileNickname = styled.span`
  display: flex;
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 300;

  &:after {
    display: block;
    content: '';
    width: 18px;
    height: 18px;
    margin-top: 7px;
    margin-left: 7px;
    background-image: url('${confirmedImg}');
  }
`;

export const ProfileStats = styled.div`
  display: flex;
  margin-bottom: 23px;

  & div {
    &:not(:last-child) {
      margin-right: 40px;
    }

    & span {
      display: inline-block;

      &:first-child {
        font-weight: 600;
      }
    }
  }
`;

export const ProfileName = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
`;
