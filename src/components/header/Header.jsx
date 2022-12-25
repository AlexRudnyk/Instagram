import {
  Container,
  HeaderInput,
  HeaderNav,
  HeaderNavImg,
} from './Header.styled';
import logo from '../../theme/assets/images/instagram.png';
import explore from '../../theme/assets/images/explore.png';
import likes from '../../theme/assets/images/likes.png';
import settings from '../../theme/assets/images/settings.png';

export const Header = () => {
  return (
    <Container>
      <div>
        <a href="./index.html">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <HeaderInput placeholder="Search" type="text" />
      <HeaderNav>
        <a href="./index.html">
          <HeaderNavImg src={explore} alt="explore" />
        </a>
        <a href="./index.html">
          <HeaderNavImg src={likes} alt="likes" />
        </a>
        <a href="./index.html">
          <HeaderNavImg src={settings} alt="settings" />
        </a>
      </HeaderNav>
    </Container>
  );
};
