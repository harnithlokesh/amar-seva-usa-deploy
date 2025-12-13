import pic1 from '../assets/pic1.png';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-inner">
        <h1>Amar Seva Sangam USA Chapter</h1>
        <p className="tagline">Empowering Persons with Disabilities</p>

        <div className="cta-row">
          <a href="#donate" className="btn primary">Donate Now</a>
          <a href="#signup" className="btn">Sign Up for Updates</a>
        </div>

        <p className="hero-intro">
          Amar Seva Sangam USA is the newly launched United States chapter of
          Amar Seva Sangam, India. Our mission is to raise awareness, build
          partnerships, and support programs that transform the lives of
          children and adults with disabilities.
        </p>

        {/* ✅ Hero image (NO inline styles) */}
        <img
          src={pic1}
          alt="Inclusive community of persons with disabilities, caregivers, and volunteers"
          className="hero-media"
        />
      </div>
    </section>
  );
}
