'use client';

import { useEffect, useRef } from 'react';
import heroImage from '@/assets/images/hero.jpeg';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fadeInUp');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Hero" className="relative overflow-hidden py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-rose-50 to-gray-50">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-pink-50/60 to-rose-50/50" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-100 rounded-full blur-xl opacity-15 mix-blend-multiply" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-100 rounded-full blur-xl opacity-10 mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-100 rounded-full blur-xl opacity-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%23e5e7eb%27 fill-opacity=%270.2%27%3E%3Ccircle cx=%278%27 cy=%278%27 r=%271%27/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 inline-flex items-center px-4 py-2 bg-pink-50 border border-pink-100 text-pink-700 rounded-full text-xs font-semibold tracking-wider mb-2 uppercase">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse" />
              Industry-Leading Print Solutions
            </div>

            <h1 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400">
                Precision Meets Print
              </span>{' '}
              <br className="hidden sm:block" />
              Empowering Brands with Impact
            </h1>

            <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 text-lg text-gray-600 leading-relaxed max-w-lg">
              Elevate your brand with uncompromising quality and detail in every printed piece.
            </p>

            {/* Buttons */}
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="relative px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-pink-600 to-pink-500 text-white font-medium rounded-lg hover:from-pink-700 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl text-center group overflow-hidden"
              >
                <span className="relative z-10">Explore Services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#portfolio"
                className="relative px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all shadow-sm hover:shadow-md text-center group overflow-hidden"
              >
                <span className="relative z-10">View Portfolio</span>
                <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 pt-6 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`}
                      className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition-transform duration-200"
                      alt="Client"
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="ml-4 text-sm font-medium text-gray-700">
                  Trusted by Fortune 500
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            {/* Main product image - now using imported image */}
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 absolute top-0 right-0 w-full max-w-2xl z-10">
              <img
                src={heroImage}
                alt="Premium Print Product"
                className="w-full h-auto drop-shadow-2xl rounded-2xl pointer-events-none animate-float"
                width={800}
                height={600}
                loading="eager"
              />
            </div>

            {/* Decorative shapes */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-64 h-64 bg-pink-100 rounded-full opacity-10 blur-xl left-0 top-0 mix-blend-multiply" />
              <div className="absolute w-80 h-80 bg-rose-100 rounded-full opacity-10 blur-xl right-0 bottom-0 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}