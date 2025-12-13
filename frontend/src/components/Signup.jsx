import { useState } from 'react';
import pic3 from '../assets/pic3.png';

export default function Signup() {
  const [status, setStatus] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Thank you for subscribing!');
  };

  return (
    <section id="signup" className="signup container">
      {/* ✅ Newsletter banner image */}
      <img
        src={pic3}
        alt="Community members engaging with programs, events, and volunteer opportunities"
        className="signup-media"
      />

      <h2>Stay Updated</h2>
      <p>
        Sign up to receive updates on our programs, events, and volunteer
        opportunities.
      </p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" required />
        </label>

        <label>
          Email
          <input type="email" required />
        </label>

        <label>
          Interests (optional)
          <input type="text" />
        </label>

        <button type="submit" className="btn primary">
          Subscribe
        </button>

        {status && <div className="muted">{status}</div>}
      </form>
    </section>
  );
}
