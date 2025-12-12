import React from 'react';

export default function Donate() {
  // env: put your Zeffy URL here when ready
  const zeffyUrl = import.meta.env.VITE_ZEFFY_URL || '';

  return (
    <section id="donate" className="donate container">
      <h2>Support Our Mission</h2>
      <p>Your contribution helps provide therapies, inclusive education, mobility aids, and community programs.</p>

      <div className="donation-options">
        <button className="btn">One-time</button>
        <button className="btn">Monthly</button>
        <button className="btn">Custom</button>
      </div>

      <div style={{marginTop: '1rem'}}>
        {zeffyUrl ? (
          <a className="btn primary" href={zeffyUrl} target="_blank" rel="noopener noreferrer">Donate via Zeffy</a>
        ) : (
          <button className="btn primary" onClick={() => alert('Zeffy URL not set. Add VITE_ZEFFY_URL in frontend/.env')}>Donate</button>
        )}
      </div>

      <small style={{display:'block', marginTop:8}}>Tip: once you have your Zeffy form URL we’ll switch this to an embedded modal or iframe if you want.</small>
    </section>
  );
}
