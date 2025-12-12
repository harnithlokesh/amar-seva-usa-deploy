import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Donate from './components/Donate';
import Signup from './components/Signup';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <header className="nav container">
        <div className="logo">Amar Seva Sangam USA</div>
        <nav>
          <a href="#donate" className="btn small">Donate</a>
          <a href="#signup" className="btn small invert">Sign up</a>
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
