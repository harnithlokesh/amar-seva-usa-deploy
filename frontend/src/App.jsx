import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Donate from './components/Donate';
import Signup from './components/Signup';
import Footer from './components/Footer';
import ContactPanel from './components/ContactPanel';
import President from './components/President';
import logo from './assets/logo.png';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useMobileNavMini } from './hooks/useMobileNavMini';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  // Simple path check (no full router)
  const isGetInTouchPage = window.location.pathname === '/get-in-touch';

  // Scroll reveal animations
  useScrollReveal();

  // Mobile mini-nav behaviour (collapses main nav into icon on scroll)
  const { showMiniNav } = useMobileNavMini();

  // Local state for dropdown menu when mini icon is visible
  const [isMiniMenuOpen, setIsMiniMenuOpen] = useState(false);

  const closeMiniMenu = () => setIsMiniMenuOpen(false);

  const handleMiniLinkClick = (href) => {
    closeMiniMenu();
    if (href.startsWith('http')) {
      window.location.href = href;
    } else {
      window.location.href = href; // handles hash and /get-in-touch
    }
  };

  return (
    <div className="app">
      {/* Full-width navbar */}
      <header className={`nav ${showMiniNav ? 'nav-hidden-mobile' : ''}`}>
        <div className="nav-inner">
          <a
            href="http://localhost:5173/"
            className="logo"
            style={{ textDecoration: 'none' }}
          >
            <img
              src={logo}
              alt="Amar Seva Sangam USA"
              style={{ height: '36px', width: 'auto' }}
            />
            <span>Amar Seva Sangam USA</span>
          </a>

          <nav className="nav-actions">
            <a href="#donate" className="btn small donate-btn">
              Donate Now
            </a>

            <a href="/get-in-touch" className="btn small invert">
              Get in touch
            </a>

            <button
              className="btn small invert"
              onClick={() => setContactOpen(true)}
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile-only floating mini icon + dropdown menu */}
      {showMiniNav && (
        <>
          <button
            className="mini-nav-btn"
            aria-label="Open navigation"
            onClick={() => setIsMiniMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          {isMiniMenuOpen && (
            <div className="mini-nav-menu">
              <button
                className="mini-nav-menu-item primary"
                onClick={() => handleMiniLinkClick('#donate')}
              >
                Donate Now
              </button>

              <button
                className="mini-nav-menu-item"
                onClick={() => handleMiniLinkClick('/get-in-touch')}
              >
                Get in touch
              </button>

              <button
                className="mini-nav-menu-item"
                onClick={() => {
                  closeMiniMenu();
                  setContactOpen(true);
                }}
              >
                Contact Us
              </button>
            </div>
          )}
        </>
      )}

      <main>
        {/* Home content when NOT on /get-in-touch */}
        {!isGetInTouchPage && (
          <>
            <section className="reveal-on-scroll">
              <Hero />
            </section>

            <section className="reveal-on-scroll">
              <About />
            </section>

            <section className="reveal-on-scroll" id="president">
              <President />
            </section>

            <section className="reveal-on-scroll" id="donate">
              <Donate />
            </section>
          </>
        )}

        {/* Dedicated Get in Touch page reusing Signup component */}
        {isGetInTouchPage && (
          <section
            className="container-wide reveal-on-scroll"
            style={{ marginTop: '2.5rem' }}
          >
            <Signup />
          </section>
        )}
      </main>

      <Footer onContactClick={() => setContactOpen(true)} />

      <ContactPanel
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
