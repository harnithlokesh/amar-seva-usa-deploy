import React from 'react';

export default function Footer() {
  return (
    <footer className="footer container">
      <div>© {new Date().getFullYear()} Amar Seva Sangam USA</div>
      <div className="links">
        <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
      </div>
    </footer>
  );
}
