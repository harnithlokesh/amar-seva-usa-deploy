import { useState } from 'react';
import {
  GraduationCap,
  Stethoscope,
  Accessibility,
  Users
} from 'lucide-react';

export default function Donate() {
  const zeffyLinks = {
    oneTime: import.meta.env.VITE_ZEFFY_ONETIME,
    monthly: import.meta.env.VITE_ZEFFY_MONTHLY,
    custom: import.meta.env.VITE_ZEFFY_CUSTOM
  };

  // No option selected by default
  const [type, setType] = useState(null);

  const handleDonate = () => {
    if (!type) return;

    const link = zeffyLinks[type];
    if (!link) {
      alert('Zeffy donation link not configured');
      return;
    }

    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="donate" className="donate container-wide">
      <h2 style={{ textAlign: 'center' }}>Support Our Mission</h2>

      {/* Donation impact cards */}
      <div className="donate-grid">
        <div className="donate-card">
          <div className="card-media health">
            <Stethoscope size={28} />
          </div>
          <h3>Therapies & Healthcare</h3>
          <p>
            Access to essential therapies, rehabilitation services,
            and ongoing medical support.
          </p>
        </div>

        <div className="donate-card">
          <div className="card-media education">
            <GraduationCap size={28} />
          </div>
          <h3>Inclusive Education</h3>
          <p>
            Quality education programs designed to meet diverse learning
            needs and abilities.
          </p>
        </div>

        <div className="donate-card">
          <div className="card-media skills">
            <Accessibility size={28} />
          </div>
          <h3>Mobility Aids</h3>
          <p>
            Assistive devices that promote independence, movement,
            and everyday accessibility.
          </p>
        </div>

        <div className="donate-card">
          <div className="card-media community">
            <Users size={28} />
          </div>
          <h3>Community Programs</h3>
          <p>
            Inclusive initiatives that build confidence, participation,
            and long-term empowerment.
          </p>
        </div>
      </div>

      {/* Donation type selection */}
      <div
        className="donation-options"
        style={{ justifyContent: 'center', marginTop: '2rem' }}
      >
        <button
          className={`btn ${type === 'oneTime' ? 'active' : ''}`}
          onClick={() => setType('oneTime')}
        >
          One-time donation
        </button>

        <button
          className={`btn ${type === 'monthly' ? 'active' : ''}`}
          onClick={() => setType('monthly')}
        >
          Monthly recurring donation
        </button>

        <button
          className={`btn ${type === 'custom' ? 'active' : ''}`}
          onClick={() => setType('custom')}
        >
          Custom amount
        </button>
      </div>

      {/* Donate CTA */}
      <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
        <button
          className="btn primary donate-cta"
          onClick={handleDonate}
          disabled={!type}
        >
          Donate Now
        </button>

        <small style={{ display: 'block', marginTop: 10, opacity: 0.8 }}>
          Secure checkout powered by Zeffy
        </small>
      </div>
    </section>
  );
}
