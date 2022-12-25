import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 930px;
  margin: 0 auto 0;
  padding: 0 55px 38px 75px;
  box-sizing: content-box;
`;

export const FooterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  padding: 0;
`;

export const FooterListItem = styled.li`
  list-style: none;
  //   color: #bd0413;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const FooterLink = styled.a`
  color: #0207b0;
  text-decoration: none;
`;

export const FooterSpan = styled.span`
  color: #212121;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;
