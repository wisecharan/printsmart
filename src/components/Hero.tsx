import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Add animation class after component mounts
    const elements = document.querySelectorAll('.animate-on-load');
    setTimeout(() => {
      elements.forEach(el => {
        el.classList.add('is-animated');
      });
    }, 100);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-white mt-10 py-16 md:py-24 px-4 md:px-12">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 z-10">
          <span className="inline-block px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-medium mb-6 animate-on-load">
            PREMIUM PRINTING SOLUTIONS
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-on-load">
            Elevate Your Brand<br />With Premium<br />Print Quality
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl animate-on-load">
            Exceptional printing services that combine precision craftsmanship with modern design to make your brand stand out.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-on-load">
            <a 
              href="#contact" 
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Get Started
            </a>
            <a 
              href="#services" 
              className="bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              Our Services
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="md:col-span-5 relative animate-on-load">
          <div className="relative ml-auto max-w-sm bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">Print Order</p>
                <p className="text-xs text-gray-400">July 2025</p>
              </div>
              <span className="text-green-600 text-xs font-medium bg-green-100 px-2 py-1 rounded-full">Completed</span>
            </div>

            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>Business Cards</span>
                <span>₹2,000</span>
              </li>
              <li className="flex justify-between">
                <span>Brochures (x500)</span>
                <span>₹7,500</span>
              </li>
              <li className="flex justify-between">
                <span>Packaging Design</span>
                <span>₹8,500</span>
              </li>
            </ul>

            <div className="border-t mt-4 pt-4 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹18,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
