import * as Styled from './Privacy.styled';

export function Privacy() {
  const links = ['terms', 'sitemap', 'privacy'];

  return (
    <Styled.Component>
      {links.map((link) => (
        <li key={link}>
          <a
            href={`https://www.amazon.com/${link}`}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        </li>
      ))}
    </Styled.Component>
  );
}
