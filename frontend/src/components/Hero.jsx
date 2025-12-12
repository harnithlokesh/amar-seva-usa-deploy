import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <h1>Amar Seva Sangam USA Chapter</h1>
        <p className="tagline">Empowering persons with disabilities</p>

        <div className="cta-row">
          <a id="donate" className="btn primary" href="#donate">Donate Now</a>
          <a href="#signup" className="btn" >Sign Up</a>
        </div>

        <p className="hero-intro">
          Amar Seva Sangam USA is the newly launched United States chapter of Amar Seva Sangam, India. Our mission is to raise awareness, build partnerships, and support programs that transform the lives of children and adults with disabilities.
        </p>
      </div>
    </section>
  );
}
