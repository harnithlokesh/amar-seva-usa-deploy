import logo from '../assets/logo.png';

export default function About() {
  return (
    <section className="about container">
      <div className="about-layout">
        <div>
          <h2>About Us</h2>

          <p>
            The USA chapter extends the impact of Amar Seva Sangam India, a
            globally recognized organization founded in 1981. Our goal is to
            gather support, volunteers, and resources to empower persons with
            disabilities and strengthen programs in India.
          </p>

          <h3>Our Mission</h3>
          <p>
            To empower persons with disabilities by advancing inclusive,
            community-driven support systems, providing a full range of
            education and rehabilitation services, and mobilising resources
            globally.
          </p>
        </div>

        {/* ✅ About section image */}
        <img
          src={logo}
          alt="Inclusive education and rehabilitation programs supported by caregivers and volunteers"
          className="about-media"
          style={{
            width: '100%',
            borderRadius: '16px',
            objectFit: 'cover'
          }}
        />
      </div>
    </section>
  );
}
