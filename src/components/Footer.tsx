import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-12 md:pt-20 pb-8 md:pb-12 px-4 md:px-12 bg-gray-900 text-white mobile-minimal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tight inline-block mb-6">
              Print<span className="text-pink-400">Smart</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium printing services for businesses that demand excellence. Quality you can see and feel. From business essentials to large format displays, we bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Business Essentials</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Large Format Printing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Marketing Materials</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Custom Packaging</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Design Services</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Books & Catalogs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-pink-400 mr-3 mt-1" />
                <span className="text-gray-400">+91 85009-69690</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-pink-400 mr-3 mt-1" />
                <span className="text-gray-400">printsmart@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-pink-400 mr-3 mt-1" />
                <span className="text-gray-400">TSHB shop No: 03, Vidyanagar SRT 47</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Business Hours</h4>
              <p className="text-gray-400">Monday-Saturday: 10am-8pm</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-sm text-gray-500">
           © 2025 PrintSmart. Website developed with expertise by<span className="font-medium text-pink-600">
            <a href="https://wisecharan.github.io/cwkr/" target="_blank" rel="noopener noreferrer"> Cwkr</a>
          </span>
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


