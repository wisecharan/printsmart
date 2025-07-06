import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold tracking-tight">
          Print<span className="text-pink-600">Smart</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          <a href="#hero" className="text-gray-900 hover:text-pink-600 font-medium transition-colors nav-link">
            Home
          </a>
          <a href="#about" className="text-gray-900 hover:text-pink-600 font-medium transition-colors nav-link">
            About
          </a>
          <a href="#services" className="text-gray-900 hover:text-pink-600 font-medium transition-colors nav-link">
            Services
          </a>
          <a href="#contact" className="text-gray-900 hover:text-pink-600 font-medium transition-colors nav-link">
            Contact
          </a>
        </div>
        
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Get a Quote
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl overflow-hidden">
          <div className="flex flex-col p-4 space-y-3">
            <a 
              href="#" 
              className="text-gray-900 font-medium py-3 px-4 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-900 font-medium py-3 px-4 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-gray-900 font-medium py-3 px-4 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-gray-900 font-medium py-3 px-4 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <a 
                href="#contact" 
                className="block w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-xl text-center font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

