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
    <section id="faq" className="py-16 md:py-24 px-4 md:px-12 bg-white mobile-minimal mobile-py-reduced">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our printing services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center bg-white text-left"
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                <span className="ml-4 flex-shrink-0 text-pink-600">
                  {openItem === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="text-pink-600 hover:text-pink-700 font-medium transition-colors"
          >
            Contact our team for personalized assistance
          </a>
        </div>
      </div>
    </section>
  );
}

