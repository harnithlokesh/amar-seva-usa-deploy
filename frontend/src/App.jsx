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
      {/* Full-width navbar */}
      <header className="nav">
  <div className="nav-inner">
    <div className="logo">
      <img
        src={logo}
        alt="Amar Seva Sangam USA"
        style={{ height: '36px', width: 'auto' }}
      />
      <span>Amar Seva Sangam USA</span>
    </div>

    <nav className="nav-actions">
      <a href="#donate" className="btn small donate-btn">
        Donate Now
      </a>
      <a href="#signup" className="btn small invert">
        Sign Up
      </a>
    </nav>
  </div>
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
