import { useEffect, useRef } from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';
import banner6 from '../assets/banner6.jpg';
import banner7 from '../assets/banner7.jpg';
import banner8 from '../assets/banner8.jpg';
import banner9 from '../assets/banner9.jpg';
import banner10 from '../assets/banner10.jpg';

const allBanners = [
  banner1, banner2, banner3, banner4, banner5,
  banner6, banner7, banner8, banner9, banner10
];

export default function BannerStrip({ height = 160, variant = 'header' }) {
  const containerRef = useRef(null);
  const scrollIndex = useRef(0);

  // Header = banners 1–5, Footer = banners 6–10
  const banners =
    variant === 'header'
      ? allBanners.slice(0, 5)
      : allBanners.slice(5, 10);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const card = container.querySelector('.hero-glass-card');

      if (!card) return;

      const cardWidth = card.offsetWidth + 16; // gap
      scrollIndex.current =
        (scrollIndex.current + 1) % banners.length;

      container.scrollTo({
        left: scrollIndex.current * cardWidth,
        behavior: 'smooth',
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div
      className="hero-carousel-row scrollable"
      ref={containerRef}
      style={{ height }}
    >
      {banners.map((img, idx) => (
        <div
          className="hero-glass-card"
          key={idx}
          style={{ height }}
        >
          <img
            src={img}
            alt="Amar Seva Sangam initiatives"
            className="hero-carousel-img"
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
}
