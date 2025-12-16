import { useEffect, useState } from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';

export default function Hero() {
  const banners = [banner1, banner2, banner3, banner4, banner5];
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((i) => (i + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once; logic inside uses functional updater safely [web:27][web:33]

  const visibleImages = [
    banners[startIndex % banners.length],
    banners[(startIndex + 1) % banners.length],
    banners[(startIndex + 2) % banners.length],
  ];

  return (
    <section className="hero container-wide">
      <div className="hero-inner">
        <h1>Amar Seva Sangam USA Chapter</h1>
        <p className="tagline">Empowering Persons with Disabilities</p>

        <div className="cta-row">
          <a href="#donate" className="btn primary">
            Donate Now
          </a>
        </div>

        <p className="hero-intro">
          Amar Seva Sangam USA is the newly launched United States chapter of
          Amar Seva Sangam, India. Our mission is to raise awareness, build
          partnerships, and support programs that transform the lives of
          children and adults with disabilities.
        </p>

        {/* 🔹 3-IMAGE GLASSMORPHIC CAROUSEL */}
        <div className="hero-carousel-row">
          {visibleImages.map((img, idx) => (
            <div className="hero-glass-card" key={idx}>
              <img
                src={img}
                alt="Amar Seva Sangam initiatives"
                className="hero-carousel-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
