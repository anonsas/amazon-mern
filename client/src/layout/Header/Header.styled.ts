import styled from 'styled-components';
import { color } from 'app/utils';

export const HeaderTop = styled.div`
  color: ${color.white};
  background-color: ${color.black200};
  height: 6rem;
  display: flex;
  align-items: center;

  .logo-container {
    margin-top: 1rem;
  }

  .logo {
    height: 4rem;
    width: 15rem;
    object-fit: contain;
    cursor: pointer;
  }

  .search-container {
    height: 3.5rem;
    border-radius: 0.3rem;
    background-color: ${color.yellow100};

    display: flex;
    align-items: center;
    flex-grow: 1;

    &:hover {
      background-color: ${color.yellow200};
    }
  }

  .search-input {
    height: 100%;
    padding: 0.5rem 1rem;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
    background-color: ${color.white};
    flex-grow: 1;
  }

  .search-icon {
    height: 4rem;
    padding: 1rem;
    cursor: pointer;
  }

  .account-container {
    font-size: 1.2rem;
    margin: 0 1.5rem;
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
  }

  .profile-container {
    display: flex;
    flex-direction: column;

    &:link,
    &:visited {
      padding: 0.5rem;
      line-height: 1.2;
      cursor: pointer;
      color: ${color.white};
      border: 1px solid transparent;
      border-radius: 0.3rem;
    }

    &:hover {
      border: 1px solid ${color.white};
    }
  }

  .cart-container {
    position: relative;
    display: flex;
    align-items: flex-end;
    column-gap: 0.4rem;
    padding: 0.5rem;

    &:link,
    &:visited {
      line-height: 1.2;
      cursor: pointer;
      color: ${color.white};
      border: 1px solid transparent;
      border-radius: 0.3rem;
    }

    &:hover {
      border: 1px solid ${color.white};
    }
  }

  .cart-count {
    position: absolute;
    top: -0.3rem;
    left: 2.3rem;
    width: 2rem;
    height: 2rem;
    background-color: ${color.yellow300};
    border-radius: 50%;
    padding: 0.4rem;
    line-height: 1;
    font-weight: 700;
    display: grid;
    place-items: center;
  }

  .cart-name {
    font-weight: 700;
  }
`;
export const HeaderBottom = styled.div`
  height: 4rem;
  color: ${color.white};
  background-color: ${color.black100};
  display: flex;
  align-items: center;

  .sidebar-button {
    padding: 0.5rem 1rem;
    color: ${color.white};
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    border: 1px solid transparent;

    &:hover {
      cursor: pointer;
      border: 1px solid ${color.white};
    }
  }

  .menu-icon {
    height: 2rem;
    margin-right: 0.25rem;
    color: ${color.white};
  }

  .nav-text {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid ${color.white};
    }
  }
`;
