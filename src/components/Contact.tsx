import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real application, you would send this data to your backend
    setTimeout(() => {
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden mobile-minimal mobile-py-reduced">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl from-pink-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-pink-400/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Ready to Elevate Your Print Quality?
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch today and discover how PrintPro can transform your printing experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                    placeholder="Your email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                    placeholder="Describe your printing needs and we'll get back to you with a personalized solution"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 px-6 rounded-xl text-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
                
                {isSubmitted && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl">
                    <Check size={20} />
                    <span>Your message has been sent successfully! We'll be in touch soon.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-600 mb-10">
                Have questions about our services? Our team is ready to help you find the perfect printing solution for your needs. Reach out to us through any of these channels:
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 flex-shrink-0 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+91 85009-69690</p>
                    <p className="text-gray-500 text-sm mt-1">Monday-Saturday, 10am-8pm IST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 flex-shrink-0 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">printsmart@gmail.com</p>
                    <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 flex-shrink-0 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Visit Our Studio</h4>
                    <p className="text-gray-600">TSHB shop No: 03, Vidyanagar SRT 47</p>
                    <p className="text-gray-500 text-sm mt-1">Open for consultations by appointment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-pink-600 rounded-3xl text-white shadow-lg">
              <h4 className="text-xl font-bold mb-4">Premium Print Package</h4>
              <p className="mb-6">New clients receive 15% off their first order of ₹1500 or more. Mention code: FIRSTPRINT</p>
              <a 
                href="#contact" 
                className="inline-block bg-white text-pink-600 px-6 py-3 rounded-xl font-medium hover:bg-pink-50 transition-colors"
              >
                Claim Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

