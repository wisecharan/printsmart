import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Premium Business Cards",
    category: "Business Essentials",
    imageUrl: "https://images.unsplash.com/photo-1560177112-fbfd5fde9566?w=800&auto=format&fit=crop&q=80",
    description: "Embossed metallic business cards with custom finishes for Nexus Financial."
  },
  {
    id: 2,
    title: "Annual Report Design",
    category: "Corporate Materials",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661609137987-8e2822d180d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium annual report with custom binding and foil treatments."
  },
  {
    id: 3,
    title: "Trade Show Display",
    category: "Large Format",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format&fit=crop&q=80",
    description: "10-foot backlit display for Horizon Tech's industry conference."
  },
  {
    id: 4,
    title: "Luxury Product Packaging",
    category: "Packaging",
    imageUrl: "https://images.unsplash.com/photo-1586339949216-35c2747cc36d?w=800&auto=format&fit=crop&q=80",
    description: "Custom box with embossed logo and magnetic closure for premium skincare line."
  },
  {
    id: 5,
    title: "Restaurant Menu Design",
    category: "Marketing Materials",
    imageUrl: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=800&auto=format&fit=crop&q=80",
    description: "Elegant menu design with specialty paper and custom binding for upscale bistro."
  },
  {
    id: 6,
    title: "Custom Magazine",
    category: "Publication",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=80",
    description: "Quarterly lifestyle magazine with premium finishes and special edition cover."
  }
];

const categories = [
  "All",
  ...Array.from(new Set(portfolioItems.map(item => item.category)))
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-12 bg-white mobile-minimal mobile-py-reduced">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Our Premium Work
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            A curated selection of our finest printing projects showcasing quality, creativity, and craftsmanship
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div 
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-md transition-all duration-300 group-hover:shadow-lg transform group-hover:-translate-y-1"
              >
                <div className="relative h-full w-full">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-90'
                    }`}
                  >
                    <span className="text-xs text-pink-200 font-medium mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className={`text-gray-200 text-sm mb-4 transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100 max-h-16' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      {item.description}
                    </p>
                    <div className={`transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-white hover:text-pink-200 transition-colors"
                      >
                        <span className="mr-2 text-sm font-medium">View Project</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium transition-colors"
          >
            <span className="mr-2">Have a project in mind? Let's talk</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

