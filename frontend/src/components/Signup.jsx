import React, { useState } from 'react';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', interests: '' });
  const [status, setStatus] = useState(null);

  const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:4000';

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(`${apiBase}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', interests: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section id="signup" className="signup container">
      <h2>Stay Updated</h2>
      <p>Sign up to receive updates on programs, events and volunteer opportunities.</p>

      <form onSubmit={submit} className="signup-form">
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email *
          <input name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Interests
          <input name="interests" value={form.interests} onChange={handleChange} />
        </label>

        <button className="btn primary" type="submit">Subscribe</button>
      </form>

      {status === 'loading' && <p>Sending...</p>}
      {status === 'success' && <p className="muted">Thanks — you're on the list!</p>}
      {status === 'error' && <p className="error">Something went wrong — try again later.</p>}
    </section>
  );
}
