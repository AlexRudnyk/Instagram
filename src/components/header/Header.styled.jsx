import styled from 'styled-components';
import search from '../../theme/assets/images/search.png';

export const Container = styled.header`
display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 930px;
    margin: 25px auto 20px;

    & div {
        & a {
            display: inline-block;
            width: 176px; 
            height: 35px;
            margin-top: -7px;
            background-repeat: no-repeat;
            background-size: 176px 35px;
            cursor: pointer;
        }
`;

export const HeaderInput = styled.input`
  min-width: 215px;
  height: 28px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px 10px 3px 26px;
  margin-top: 1px;
  font-size: 14px;
  color: #262626;
  background-image: url('${search}');
  background-repeat: no-repeat;
  background-size: 10px 10px;
  background-position: 10px 50%;
  box-sizing: border-box;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding-top: 3px;

  & a {
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;

      :not(:last-child) {
    margin-right: 35px;

  }
`;

export const HeaderNavImg = styled.img`
  }
`;
