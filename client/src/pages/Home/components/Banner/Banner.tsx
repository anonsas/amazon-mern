import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images from 'assets/images';
import { Component } from './Banner.styled';

export function Banner() {
  return (
    <Component>
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
        <figure>
          <img src={images.banner1} alt="banner" />
        </figure>
        <figure>
          <img src={images.banner2} alt="banner" />
        </figure>
        <figure>
          <img src={images.banner3} alt="banner" />
        </figure>
        <figure>
          <img src={images.banner4} alt="banner" />
        </figure>
      </Carousel>
      <div className="gradient" />
    </Component>
  );
}
