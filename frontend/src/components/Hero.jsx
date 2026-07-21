import BannerStrip from './BannerStrip';
import flyer from '../../../flyer.jpeg';

export default function Hero() {
  return (
    <section className="hero container-wide">
      <div className="hero-inner">
        <div className="hero-lead">
          <div className="flyer-frame">
            <img
              className="flyer-image"
              src={flyer}
              alt="Pancham: Sunhere Geetoh Ke Sang fundraiser flyer"
            />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Upcoming fundraiser · September 19, 2026</p>
            <h1>Amar Seva Sangam USA Chapter</h1>
            <p className="tagline">Empowering Persons with Disabilities</p>
            <p className="hero-intro">
              Join us for <strong>Pancham: Sunhere Geetoh Ke Sang</strong>—an
              evening of music supporting Amar Seva Sangam USA. Every ticket
              and donation helps create opportunity for persons with disabilities.
            </p>
            <div className="cta-row">
              <a
                className="btn hero-cta"
                href="https://tinyurl.com/Amarsevasangam"
                target="_blank"
                rel="noreferrer"
              >
                Get tickets
              </a>
              <a className="btn hero-secondary-cta" href="#donate">Support our work</a>
            </div>
            <p className="event-detail">Saturday, September 19 · 5:00 PM · Framingham, MA</p>
          </div>
        </div>

        {/* Header carousel - uses banners 1-5 */}
        <BannerStrip height={180} variant="header" />
      </div>
    </section>
  );
}
