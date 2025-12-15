export default function ContactPanel({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '320px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
        padding: '1.2rem',
        zIndex: 1000
      }}
    >
      <h3 style={{ marginTop: 0 }}>Contact Us</h3>

      <form
        onSubmit={e => {
          e.preventDefault();
          alert('Message sent! (connect to email later)');
          onClose();
        }}
      >
        <input
          placeholder="Your email"
          required
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        <textarea
          placeholder="Your message"
          required
          rows={3}
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button type="button" className="btn small" onClick={onClose}>
            Close
          </button>
          <button type="submit" className="btn primary small">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
