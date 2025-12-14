import { useState } from 'react';
import pic3 from '../assets/pic3.png';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    interests: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const apiBase =
    import.meta.env.VITE_API_URL || 'http://127.0.0.1:4000';

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch(`${apiBase}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Subscription failed');
      }

      setStatus('Thank you for subscribing!');
      setForm({ name: '', email: '', interests: '' });
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="signup" className="signup container">
      {/* Newsletter banner image */}
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
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Interests (optional)
          <input
            type="text"
            name="interests"
            value={form.interests}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="btn primary" disabled={loading}>
          {loading ? 'Submitting…' : 'Subscribe'}
        </button>

        {status && <div className="muted">{status}</div>}
      </form>
    </section>
  );
}
