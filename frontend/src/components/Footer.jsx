import BannerStrip from './BannerStrip';

export default function Footer({ onContactClick }) {
  return (
    <footer className="footer container-wide">
      <div className="footer-glass-card">
        {/* Top banner strip matching header */}
        <div className="footer-banner">
          <BannerStrip height={140} />
        </div>

        {/* Bottom row */}
        <div className="footer-content-row">
          <div>
            <div className="footer-copy">
              © 2025 Amar Seva Sangam USA. All rights reserved.
            </div>
            <div className="footer-copy" style={{ marginTop: '0.25rem' }}>
              Email:{' '}
              <a
                href="mailto:amarsevasangam.usa@gmail.com"
                className="footer-link"
              >
                amarsevasangam.usa@gmail.com
              </a>
            </div>
            <div className="footer-copy" style={{ marginTop: '0.25rem' }}>
              Follow us on social media for updates and impact stories.
            </div>
          </div>

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
        </div>
      </div>
    </footer>
  );
}
