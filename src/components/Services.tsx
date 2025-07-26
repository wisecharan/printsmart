import { FileCheck, LayoutDashboard, Package, Printer } from 'lucide-react';

const services = [
  {
    icon: <Printer size={24} />,
    title: "Corporate Printing",
    description: "Professional-grade printing for business cards, letterheads, and company documents."
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: "Marketing Collateral",
    description: "Brochures, flyers, and brand materials designed to make an impact."
  },
  {
    icon: <Package size={24} />,
    title: "Branded Packaging",
    description: "Custom packaging solutions to elevate your product's presentation and brand."
  },
  {
    icon: <FileCheck size={24} />,
    title: "Direct Mail Campaigns",
    description: "Targeted print-mail strategies that deliver your message with precision."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-b from-white to-gray-50 mobile-minimal mobile-py-reduced">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Premium Printing Solutions
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality printing services tailored to your specific needs, with attention to detail at every step
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="text-pink-600 hover:text-pink-800 font-medium flex items-center"
                >
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}