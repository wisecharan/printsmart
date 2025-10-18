import { Instagram, Mail, MapPin, Phone, Gift } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 md:pt-20 pb-8 md:pb-12 px-4 md:px-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#hero" className="text-2xl font-bold tracking-tight inline-block mb-6">
              Print<span className="text-pink-400">Smart</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium printing services for businesses that demand excellence. Quality you can see and feel.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/printsmart_official"
                className="text-gray-400 hover:text-pink-400 transition-colors w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:printsmart.contact@gmail.com"
                className="text-gray-400 hover:text-pink-400 transition-colors w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li>
                <a href="#gift-collab" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Gift size={16} className="mr-2 text-pink-400" />
                  GiftSmart
                </a>
              </li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Business Cards</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Brochures & Flyers</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Packaging</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Large Format</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-pink-400 mr-3 mt-1" />
                <span className="text-gray-400">+91 85009-69690</span>
              </li>

              <li className="flex items-start">
                <MapPin size={30} className="text-pink-400 mr-3 mt-1" />
                <span className="text-gray-400">TSHB shop No: 03, Vidyanagar SRT 47</span>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Business Hours</h4>
              <p className="text-gray-400">Monday-Saturday: 10am–8pm</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-500 gap-2">
            <p className="text-center md:text-left">
              © {currentYear} PrintSmart. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
              <a
                href="https://www.webrakor.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                Built by <span className="text-pink-400">Webrakor</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}