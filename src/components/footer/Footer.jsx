import links from '../../data/links.json';
import {
  FooterContainer,
  FooterList,
  FooterListItem,
  FooterLink,
  FooterSpan,
} from './Footer.styled';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linksJSX = links.map(({ id, message }) => {
    return (
      <FooterListItem key={id}>
        <FooterLink href="./index.html">{message}</FooterLink>
      </FooterListItem>
    );
  });
  return (
    <FooterContainer>
      <FooterList>{linksJSX}</FooterList>
      <FooterSpan>&copy;{currentYear} Instagram</FooterSpan>
    </FooterContainer>
  );
};
