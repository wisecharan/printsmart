const Pricing = () => {
  const plans = [
    {
      name: 'Standard',
      price: '₹1,999',
      period: '/month',
      features: [
        'High-quality prints',
        'Standard paper options',
        '3-days turnaround',
        'Email support'
      ],
      featured: false,
      ctaText: 'Start with Standard'
    },
    {
      name: 'Premium',
      price: '₹4,999',
      period: '/month',
      features: [
        'Commercial-grade print quality',
        'Premium & specialty paper',
        '48-hours turnaround',
        'Priority support',
      ],
      featured: true,
      ctaText: 'Get Premium'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="pricing" className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Plans, <span>Exceptional Value</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your printing needs with no hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-300 hover:shadow-xl rounded-xl overflow-hidden
                ${plan.featured ? 'border-t-4 border-pink-600 shadow-lg' : 'border-t-4 border-gray-200'}`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-1 ${plan.featured ? 'text-pink-600' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end">
                    <span className={`text-4xl font-bold ${plan.featured ? 'text-pink-600' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-1.5 mb-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className={`flex-shrink-0 mt-1 mr-3 ${plan.featured ? 'text-pink-500' : 'text-gray-400'}`}
                        width="20" height="20" viewBox="0 0 20 20" fill="none"
                      >
                        <path 
                          d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200
                    ${plan.featured 
                      ? 'bg-pink-600 hover:bg-pink-700 text-white shadow-md hover:shadow-pink-200' 
                      : 'bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-gray-300'}`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3">
            <span className="text-gray-600 mr-2">Need custom solutions?</span>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }} 
              className="font-semibold text-pink-600 hover:text-pink-700 flex items-center"
            >
              Contact us
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;