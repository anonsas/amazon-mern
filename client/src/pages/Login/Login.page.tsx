import { Link, useNavigate } from 'react-router-dom';
import images from 'assets/images';
import * as Styled from './LoginPage.styled';

export default function LoginPage() {
  const navigate = useNavigate();

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Styled.Component>
      <Link to="/">
        <img src={images.logoDark} alt="logo" className="logo" />
      </Link>

      <div className="form-container">
        <h1 className="heading">Sign-in</h1>

        <form className="form" onSubmit={submitFormHandler}>
          <label className="label"> E-mail</label>
          <input type="email" name="email" className="input" />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" />

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        <p className="paragraph">
          By signing-in you agree to the AMAZON'S CLONE (FAKE) Conditions of Use & Sale. Please see our Privacy Notice,
          our Cookies Notice and our Interest-based Ads Notice.
        </p>

        <Link to="/register" className="register-btn">
          Create your Amazon Account
        </Link>
      </div>
    </Styled.Component>
  );
}
