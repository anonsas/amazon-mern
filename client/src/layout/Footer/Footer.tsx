import * as Styled from './Footer.styled';
import { Privacy, Country, Navigation } from './components';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Styled.Component>
      <footer className="footer">
        <span>&copy; 1996-{currentYear} Amazon, Inc. or its affiliates</span>
        <Privacy />
        {/* <Country /> */}
        <Navigation />
      </footer>
    </Styled.Component>
  );
}
