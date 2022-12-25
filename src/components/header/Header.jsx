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
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <HeaderInput placeholder="Search" type="text" />
      <HeaderNav>
        <a href="/">
          <HeaderNavImg src={explore} alt="explore" />
        </a>
        <a href="/">
          <HeaderNavImg src={likes} alt="likes" />
        </a>
        <a href="/">
          <HeaderNavImg src={settings} alt="settings" />
        </a>
      </HeaderNav>
    </Container>
  );
};
