import BannerStrip from './BannerStrip';

export default function Hero() {
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

        {/* Header carousel - uses banners 1-5 */}
        <BannerStrip height={180} variant="header" />
      </div>
    </section>
  );
}
