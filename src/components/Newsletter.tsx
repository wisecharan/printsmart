import { useState } from 'react';
import { Check, Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would submit this to your backend or newsletter service
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-12 bg-gradient-to-br from-pink-50 to-gray-50 relative overflow-hidden mobile-minimal">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-pink-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Stay Updated with Print Trends
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for expert tips, industry insights, and exclusive offers on premium printing services.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
                    required
                  />
                  {error && <p className="absolute text-sm text-red-500 mt-1">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-xl font-medium transition-colors shadow-md hover:shadow-lg flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
              
              {isSubmitted && (
                <div className="mt-4 flex items-center gap-2 text-green-600">
                  <Check size={18} />
                  <span>Thank you for subscribing! Check your inbox soon.</span>
                </div>
              )}
              
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy and will never share your information. Unsubscribe anytime.
              </p>
            </div>
            
            <div className="hidden md:block md:w-1/3">
              <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 12H16c-.7 0-1.5.5-1.5 1.2v2.6c0 .7.8 1.2 1.5 1.2h2a1 1 0 0 1 1 1v3l3.5-3c.3-.3.5-.7.5-1.1v-3.7c0-.7-.3-1.2-1-1.2z"></path>
                  <path d="M15.5 6H9.5c-.8 0-1.5.4-1.5 1v4"></path>
                  <path d="M11.55 14.5H8.28a2 2 0 0 1-1.4-.59l-4.7-4.99a1 1 0 0 1 0-1.39l4.69-5a2 2 0 0 1 1.41-.59h4.47a1 1 0 0 1 .93.63l1.42 3.55"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

