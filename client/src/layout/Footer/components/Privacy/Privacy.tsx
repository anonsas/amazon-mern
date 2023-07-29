import './Privacy.scss';

export function Privacy() {
  const links = ['terms', 'sitemap', 'privacy'];

  return (
    <ul className="privacy">
      {links.map((link) => (
        <li key={link}>
          <a
            href={`https://www.amazon.com/${link}`}
            className="privacy__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  );
}
