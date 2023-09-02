import * as Styled from './Navigation.styled';
import images from 'assets/images';

export function Navigation() {
  const socials = [
    {
      name: 'instagram',
      link: 'https://www.instagram.com/amazon',
      img: images.instagramIconLight,
    },
    {
      name: 'facebook',
      link: 'https://www.facebook.com/amazon',
      img: images.facebookIconLight,
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/amazon',
      img: images.youtubeIconLight,
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/amazon',
      img: images.twitterIconLight,
    },
  ];

  return (
    <Styled.Component aria-label="social links">
      {socials.map((social) => (
        <a
          key={`footer-social-${social.name}`}
          href={social.link}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          <img src={social.img} alt={social.name} />
        </a>
      ))}
    </Styled.Component>
  );
}
