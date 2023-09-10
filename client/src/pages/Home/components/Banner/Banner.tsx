import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images from 'assets/images';
import { Component } from './Banner.styled';

export function Banner() {
  const imageList = [images.banner1, images.banner2, images.banner3, images.banner4];

  return (
    <Component>
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
        {imageList.map((img, index) => (
          <figure key={index}>
            <img src={img} alt="banner" />
          </figure>
        ))}
      </Carousel>
      <div className="gradient" />
    </Component>
  );
}
