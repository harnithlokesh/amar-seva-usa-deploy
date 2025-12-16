import { useEffect, useState } from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';

const banners = [banner1, banner2, banner3, banner4, banner5];

export default function BannerStrip({ height = 160 }) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((i) => (i + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    banners[startIndex % banners.length],
    banners[(startIndex + 1) % banners.length],
    banners[(startIndex + 2) % banners.length],
  ];

  return (
    <div className="hero-carousel-row">
      {visibleImages.map((img, idx) => (
        <div className="hero-glass-card" key={idx} style={{ height }}>
          <img
            src={img}
            alt="Amar Seva Sangam initiatives"
            className="hero-carousel-img"
          />
        </div>
      ))}
    </div>
  );
}
