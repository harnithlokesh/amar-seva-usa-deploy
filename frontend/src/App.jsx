import { useState } from 'react';
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Donate from './components/Donate';
import Signup from './components/Signup';
import Footer from './components/Footer';
import ContactPanel from './components/ContactPanel';
import President from './components/President';



// ✅ IMPORT logo correctly
import logo from './assets/logo.png';

export default function App() {
const [contactOpen, setContactOpen] = useState(false);

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
      <button
              className="btn small invert"
              onClick={() => setContactOpen(true)}
            >
              Contact Us
            </button>
    </nav>
  </div>
</header>


      <main>
        <Hero />
        <About />
        <President />
        <Donate />
        <Signup />
      </main>

      <Footer onContactClick={() => setContactOpen(true)} />
        
      <ContactPanel
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />

        
    </div>
  );
}
