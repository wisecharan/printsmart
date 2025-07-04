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
      <section className="mt-10 py-16 md:py-24 px-4 md:px-12 overflow-hidden relative bg-white mobile-minimal">

      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Background subtle gradients */}
      <div className="absolute -left-40 top-40 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 z-10">
            <div className="animate-on-load opacity-100 transform translate-y-0 transition-all duration-700 delay-100">
              <span className="inline-block px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-medium mb-6">
                PREMIUM PRINTING SOLUTIONS
              </span>
            </div>

            <h1 className="animate-on-load opacity-100 transform translate-y-0 transition-all duration-700 delay-200 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Secure, Efficient, and<br className="hidden md:block" /> User-Friendly<br className="hidden md:block" /> Printing Services
            </h1>

            <p className="animate-on-load opacity-100 transform translate-y-0 transition-all duration-700 delay-300 mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
              Experience the future of printing with our secure, efficient, and
              user-friendly printing services.
            </p>

            <div className="animate-on-load opacity-100 transform translate-y-0 transition-all duration-700 delay-400 mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Get Started Now
              </a>
              <a 
                href="#services" 
                className="bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative animate-on-load opacity-100 transform translate-x-0 transition-all duration-700 delay-600">
            {/* Card UI mockup */}
            <div className="relative ml-auto max-w-sm">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-4 transform rotate-3 border border-gray-100">
                {/* Card content here */}
                <div className="p-2 bg-pink-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-500">Expenses</div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-800">₹2,500</h3>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs mt-1">+2.25% increase today</span>

                    {/* Example entries */}
                    <div className="mt-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                          {/* Icon */}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <p className="font-medium">Printing Services</p>
                            <p className="font-semibold">₹1,500</p>
                          </div>
                          <p className="text-xs text-gray-500">Completed Today</p>
                        </div>
                      </div>
                      {/* Additional items as needed */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 -right-10 w-40 h-40 bg-yellow-50 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-100 rounded-full filter blur-lg opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


