import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What printing services do you offer?",
    answer: "We offer a comprehensive range of printing services including business essentials (business cards, letterheads, envelopes), marketing materials (brochures, flyers, catalogs), large format printing (banners, posters, signage), packaging solutions, direct mail services, and custom design work."
  },
  {
    question: "How quickly can you deliver printed materials?",
    answer: "Our standard turnaround time is 3-5 business days from proof approval. We also offer expedited options including same-day and next-day delivery for certain products. Rush services are available for an additional fee and are subject to current production capacity."
  },
  {
    question: "What file formats do you accept for print jobs?",
    answer: "We accept industry-standard file formats including PDF (preferred), AI, EPS, PSD, INDD, and high-resolution JPG or TIFF files. All files should be in CMYK color mode with at least 300 dpi resolution and include a 1/8\" bleed when applicable."
  },
  {
    question: "Do you offer design services?",
    answer: "Yes, our in-house design team can help create or refine your print materials. We offer complete design services from concept to final artwork, as well as assistance with modifying existing designs to meet print specifications."
  },
  {
    question: "What paper stocks and finishes do you offer?",
    answer: "We offer a wide range of premium paper stocks in various weights, textures, and finishes. Our finishing options include matte, gloss, and soft-touch coatings, foil stamping, embossing, die-cutting, spot UV, and more. We're happy to provide paper samples upon request."
  },
  {
    question: "Do you offer environmentally friendly printing options?",
    answer: "Yes, we are committed to sustainable practices. We offer eco-friendly paper options including recycled stocks, FSC-certified papers, and soy-based inks. We also implement environmentally responsible production methods throughout our facility."
  }
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-12 bg-gray-50 relative overflow-hidden">
      {/* Background elements - neutral version */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-gray-50/60 to-gray-100/50" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200 rounded-full blur-xl opacity-10 mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-xl opacity-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%23e5e7eb%27 fill-opacity=%270.2%27%3E%3Ccircle cx=%278%27 cy=%278%27 r=%271%27/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* YouTube Video Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3 md:mb-4">
              See Our Process in Action
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Watch how we bring your print projects to life with precision and care
            </p>
          </div>
          
          {/* Mobile-optimized video container */}
          <div className="px-2 md:px-0">
            <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-gray-900">
              <div className="relative aspect-video w-full">
                <iframe 
                  src="https://www.youtube.com/embed/-IGz6L2485U?si=CgOCfsOfH-Gl-lWs" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Find answers to common questions about our printing services
          </p>
        </div>
        
        <div className="space-y-3 md:space-y-4 px-2 md:px-0">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg md:rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md bg-white/90 backdrop-blur-sm"
            >
              <button
                className="w-full px-4 md:px-6 py-4 md:py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
              >
                <span className="text-base md:text-lg font-medium text-gray-900 pr-2 md:pr-0">
                  {item.question}
                </span>
                <span className="ml-2 md:ml-4 flex-shrink-0 text-gray-600">
                  {openItem === index ? <ChevronUp size={18} className="md:w-5 md:h-5" /> : <ChevronDown size={18} className="md:w-5 md:h-5" />}
                </span>
              </button>
              <div 
                className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  openItem === index ? 'max-h-[500px] pb-4 md:pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-2 text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center px-4">
          <p className="text-gray-600 mb-4 text-base md:text-lg">Still have questions?</p>
          <a 
            href="#contact" 
            className="text-pink-600 hover:text-pink-700 font-medium transition-colors text-base md:text-lg"
          >
            Contact our team for personalized assistance
          </a>
        </div>
      </div>
    </section>
  );
}