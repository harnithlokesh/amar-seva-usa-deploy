export default function Footer({ onContactClick }) {
  return (
    <footer className="footer container">
      <div>© 2025 Amar Seva Sangam USA. All rights reserved.</div>

      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
        <a href="#" className="btn small">Privacy Policy</a>{' '}
        <a href="#" className="btn small">Terms</a>{' '}
        <a href="#donate" className="btn small">Donate</a>
        <button className="btn small" onClick={onContactClick}>
          Contact Us
        </button>
      </div>
    </footer>
  );
}
