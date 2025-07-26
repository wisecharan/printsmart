import logo from '@/assets/images/Logo-01.jpg';

export default function About() {
  return (
    <section id="about" className="py-16 px-6 sm:py-20 sm:px-8 lg:py-28 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Image Block */}
          <div className="w-full lg:w-2/5 max-w-md mx-auto">
            <div className="relative">
              <div className="aspect-square w-full bg-gradient-to-tr from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full h-full bg-white rounded-2xl shadow-inner overflow-hidden flex flex-col">
                    <div className="w-full h-3 bg-gradient-to-r from-pink-400 to-pink-600"></div>
                    <div className="flex-1 flex flex-col items-center justify-center p-6">
                      <div className="w-24 h-24 xl:w-28 xl:h-28 mx-auto mb-6">
                        <img 
                          src={logo} 
                          alt="PrintSmart Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-pink-600 text-2xl xl:text-3xl font-bold">PrintSmart</h3>
                      <p className="text-gray-500 mt-2 text-sm xl:text-base">Est. 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Block */}
          <div className="w-full lg:w-3/5">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Our Mission: <span className="text-pink-600">Excellence</span> in Every Print
            </h2>
            
            <div className="space-y-6 text-justify">
              <p className="text-gray-600 text-lg leading-relaxed tracking-wide">
                At PrintSmart, we believe that exceptional printing is the intersection of artistry, 
                technology, and meticulous attention to detail. Founded in 2024, we've been helping 
                businesses elevate their brand through high-quality printed materials that make lasting 
                impressions.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed tracking-wide">
                From business cards to large format displays, our commitment to quality remains 
                unwavering. We combine traditional craftsmanship with cutting-edge technology to 
                deliver results that exceed expectations.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Premium Materials', 'Modern Technology', 'Precision Craftsmanship', 'Brand Consistency'].map((item) => (
                <div key={item} className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}