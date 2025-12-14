import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Donate from './components/Donate';
import Signup from './components/Signup';
import Footer from './components/Footer';

// ✅ IMPORT logo correctly
import logo from './assets/logo.png';

export default function App() {
  return (
    <div className="app">
      <header className="nav container">
        {/* Logo */}
        <div
          className="logo"
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
        >
          <img
            src={logo}
            alt="Amar Seva Sangam USA"
            style={{ height: '36px', width: 'auto' }}
          />
          <span>Amar Seva Sangam USA</span>
        </div>

        {/* Navigation */}
        <nav
          style={{
            display: 'flex',
            gap: '0.75rem',   // ✅ spacing between buttons
            alignItems: 'center'
          }}
        >
          {/* Donate button — visually distinct */}
          <a href="#donate" className="btn small donate-btn">
            Donate Now
          </a>

          {/* Secondary action */}
          <a href="#signup" className="btn small invert">
            Sign Up
          </a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Donate />
        <Signup />
      </main>

      <Footer />
    </div>
  );
}
