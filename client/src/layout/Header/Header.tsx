import { Link } from 'react-router-dom';
import images from 'assets/images';
import * as Styled from './Header.styled';
import { HEADER_BOTTOM_LINKS } from 'app/data';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useCartStore } from 'app/providers';

export function Header() {
  const { cart } = useCartStore();
  return (
    <header>
      {/* BurgerMenu Logo Sign-In Cart*/}
      {/* Search* /}
      {/* HeaderBottom */}
      {/* DeliverTo */}
      <Styled.HeaderTop>
        <Link to="/" className="logo-container">
          <img src={images.logoLight} alt="logo" className="logo" />
        </Link>

        <div className="search-container">
          <input type="text" className="search-input" />
          <img src={images.searchIcon} className="search-icon" />
        </div>

        <div className="account-container">
          <Link to={'/login'} className="profile-container">
            <span>Hello, Guest</span>
            <span>Sign In</span>
            {/* <span>Account & Lists</span> */}
          </Link>

          <Link to="/orders" className="profile-container">
            <span>Returns</span>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className="cart-container">
            <span className="cart-count">{cart.length}</span>
            <img src={images.cartIcon} className="cart-icon" />
            <span className="cart-name">Cart</span>
          </Link>
        </div>
      </Styled.HeaderTop>

      <Styled.HeaderBottom>
        <button className="sidebar-button">
          <img src={images.menuIcon} className="menu-icon" /> <span>All</span>
        </button>
        {HEADER_BOTTOM_LINKS.map((linkName) => (
          <li key={linkName} className="nav-text">
            {linkName}
          </li>
        ))}
      </Styled.HeaderBottom>
    </header>
  );
}
