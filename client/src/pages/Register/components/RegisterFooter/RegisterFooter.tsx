import './RegisterFooter.scss';
import { Link } from 'react-router-dom';

export function RegisterFooter() {
  return (
    <>
      <p className="register-footer__paragraph">
        By creating an account, you agree to Amazon's
        <a href="www.amazon.com"> Conditions of Use</a> and
        <a href="www.amazon.com"> Privacy Notice</a>.
      </p>

      <div>
        <div>
          <span>Already have an account?</span>
          <Link to="/login">Sign in</Link>
        </div>
        <div>
          <span>Buying for work?</span>
          <Link to="/login">Create a free business account</Link>
        </div>
      </div>
    </>
  );
}
