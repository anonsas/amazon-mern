import { Link } from 'react-router-dom';
import images from 'assets/images';
import './Header.scss';
import { HEADER_BOTTOM_LINKS } from 'app/data';

export function Header() {
  return (
    <header>
      <div className="header-top">
        <Link to="/" className="header-top__logo-container">
          <img src={images.logoLight} alt="logo" className="header-top__logo" />
        </Link>

        <div className="header-top__search-container">
          <input type="text" className="header-top__search-input" />
          <img src={images.searchIcon} className="header-top__search-icon" />
        </div>

        <div className="header-top__account-container">
          <Link to={'/login'} className="header-top__profile-container">
            <span>Hello, sign in</span>
            <span>Account & Lists</span>
          </Link>

          <Link to="/orders" className="header-top__profile-container">
            <span>Returns</span>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className="header-top__cart-container">
            <span className="header-top__cart-count">0</span>
            <img src={images.cartIcon} className="header-top__cart-icon" />
            <span className="header-top__cart-name">Cart</span>
          </Link>
        </div>
      </div>

      <ul className="header-bottom">
        <button className="header-bottom__sidebar-button">
          <img src={images.menuIcon} className="header-bottom__menu-icon" /> <span>All</span>
        </button>
        {HEADER_BOTTOM_LINKS.map((linkName) => (
          <li key={linkName} className="header-bottom__nav-text">
            {linkName}
          </li>
        ))}
      </ul>
    </header>
  );
}
