import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "PrintSmart delivered exceptional quality for our corporate brochures. Their attention to detail and premium finishes impressed our entire executive team.",
    name: "Sai Charan Puduthala",
    role: "Developer, Webrakor",
    image: "public/charan.jpeg"
  },
  {
    quote: "They made custom batches for our Origin Club. The print quality and consistency truly elevated our presentation and made a strong impression.",
    name: "Origin Club",
    role: "St. Peters Engg College, Hyd",
    image: "/public/origin.jpg" 
  },
  {
    quote: "We are very happy with the printing services provided by PrintSmart. The quality of our hospital materials, from patient guides to banners was excellent.",
    name: "Dr P Naveen Kumar",
    role: "Urologist, Ritvik Andrology Centre",
    image: "https://www.ritvikkidneycentre.com/images/dr-ritvik-2.jpg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses who've experienced the PrintPro difference
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-6 text-pink-600">
                <Quote size={36} />
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
