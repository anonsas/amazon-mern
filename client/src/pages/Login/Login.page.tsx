import { Link, useNavigate } from 'react-router-dom';
import './Login.page.scss';
import images from 'assets/images';

export default function LoginPage() {
  const navigate = useNavigate();

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <main className="login">
      <Link to="/">
        <img src={images.logoDark} alt="logo" className="login__logo" />
      </Link>

      <div className="login__form-container">
        <h1 className="login__heading">Sign-in</h1>

        <form className="login__form" onSubmit={submitFormHandler}>
          <label className="login__form-label"> E-mail</label>
          <input type="email" name="email" className="login__form-input" />

          <label className="login__form-label">Password</label>
          <input type="password" name="password" className="login__form-input" />

          <button type="submit" className="login__signin-btn">
            Sign In
          </button>
        </form>

        <p className="login__paragraph">
          By signing-in you agree to the AMAZON'S CLONE (FAKE) Conditions of Use & Sale. Please see
          our Privacy Notice, our Cookies Notice and our Interest-based Ads Notice.
        </p>

        <Link to="/register" className="login__register-btn">
          Create your Amazon Account
        </Link>
      </div>
    </main>
  );
}
