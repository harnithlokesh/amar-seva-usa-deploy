import BannerStrip from './BannerStrip';

export default function Footer({ onContactClick }) {
  return (
    <footer className="footer container-wide">
      <div className="footer-glass-card">
        {/* Carousel at top */}
        <div className="footer-banner">
          <BannerStrip height={140} variant="footer" />
        </div>

        {/* Buttons section */}
        <div className="footer-actions">
          <a href="#about" className="btn small">
            About
          </a>
          <a href="#donate" className="btn small">
            Donate
          </a>
          <a href="#president" className="btn small">
            Leadership
          </a>
          <a href="#" className="btn small">
            Privacy Policy
          </a>
          <a href="#" className="btn small">
            Terms
          </a>
          <button className="btn small" onClick={onContactClick}>
            Contact Us
          </button>
        </div>

        {/* Email section */}
        <div className="footer-copy" style={{ textAlign: 'center' }}>
          Email:{' '}
          <a
            href="mailto:amarsevasangam.usa@gmail.com"
            className="footer-link"
          >
            amarsevasangam.usa@gmail.com
          </a>
        </div>

        {/* Follow us section */}
        <div className="footer-copy" style={{ textAlign: 'center' }}>
          Follow us on social media for updates and impact stories.
        </div>

        {/* Copyright section */}
        <div className="footer-copy" style={{ textAlign: 'center' }}>
          © 2025 Amar Seva Sangam USA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
