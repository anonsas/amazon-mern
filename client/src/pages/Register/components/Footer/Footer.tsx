import { Link } from 'react-router-dom';
import * as Styled from './Footer.styled';

export function Footer() {
  return (
    <>
      <Styled.Paragraph>
        By creating an account, you agree to Amazon's
        <a href="www.amazon.com"> Conditions of Use</a> and
        <a href="www.amazon.com"> Privacy Notice</a>.
      </Styled.Paragraph>

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
