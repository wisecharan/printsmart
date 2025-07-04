import { Award, Clock, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap size={28} />,
    title: "High-Quality Results",
    description: "Superior printing quality that exceeds industry standards and meets the most demanding requirements."
  },
  {
    icon: <Clock size={28} />,
    title: "Fast Turnaround",
    description: "Rapid delivery without compromising on quality, with options for same-day and express services."
  },
  {
    icon: <Shield size={28} />,
    title: "Satisfaction Guarantee",
    description: "We stand behind our work with a 100% satisfaction guarantee on all printing services."
  },
  {
    icon: <Award size={28} />,
    title: "Expert Consultation",
    description: "Access to print professionals who provide personalized recommendations for your projects."
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-white mobile-minimal mobile-py-reduced">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-6">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Why Choose PrintSmart
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of premium printing services backed by expertise and technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-50"
            >
              <div className="w-20 h-20 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

