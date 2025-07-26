import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TrustedPartners from './components/TrustedPartners';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Pricing from './components/Pricing';
import HandmadeGifts from './components/HandmadeGifts';

import './index.css';

export function App() {
  useEffect(() => {
    // Font loading
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Smooth scroll setup
    const setupSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = anchor.getAttribute('href');
          if (targetId) {
            const target = document.querySelector(targetId);
            target?.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    };

    // Intersection Observer setup
    const setupIntersectionObserver = () => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal-section');
        observer.observe(section);
      });

      return observer;
    };

    setupSmoothScroll();
    const observer = setupIntersectionObserver();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main>
        {/* Core Printing Services */}
        <Hero />
        <Services />
        <Features />
        <Portfolio />

        {/* Trust Building */}
        <TrustedPartners />
        <Testimonials />

        {/* Complementary Handmade Offerings */}
        <HandmadeGifts />

        {/* Decision Making Support */}
        <Pricing />
        <FAQ />

        {/* Company Background */}
        <About />

        {/* Conversion Sequence */}
        <Newsletter />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;