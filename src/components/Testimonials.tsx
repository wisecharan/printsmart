import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "PrintSmart delivered exceptional quality for our corporate brochures. Their attention to detail and premium finishes impressed our entire executive team.",
    name: "Sai Charan Puduthala",
    role: "Web Developer, Cwkr.In",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQF702Z9DrxliQ/profile-displayphoto-shrink_200_200/B4DZaMjmAgHQAY-/0/1746114869141?e=2147483647&v=beta&t=xWvft4y3zJGJk2VujtFiZf8dQQ3IR_YW8B0vqe_BjvI"
  },
  {
    quote: "Working with PrintPro transformed our product packaging. The quality and consistency across all materials helped elevate our brand in a competitive market.",
    name: "Michael Chen",
    role: "Product Manager, Natura Foods",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "From business cards to large format banners, PrintPro has been our go-to printing partner for five years. Their consistency and reliability are unmatched.",
    name: "Emily Rodriguez",
    role: "Events Coordinator, Summit Conferences",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80"
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
