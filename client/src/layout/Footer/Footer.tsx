import './Footer.scss';
import { Privacy } from './components/Privacy/Privacy';
import { Country } from './components/Country/Country';
import { Navigation } from './components/Navigation/Navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-bg">
      <footer className="footer">
        <span>&copy; 1996-{currentYear} Amazon, Inc. or its affiliates</span>
        <Privacy />
        {/* <Country /> */}
        <Navigation />
      </footer>
    </div>
  );
}
