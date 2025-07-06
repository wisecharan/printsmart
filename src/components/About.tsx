export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-12 bg-white mobile-minimal mobile-py-reduced">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        {/* Left Image Block */}
        <div className="md:w-1/2 w-full max-w-md mx-auto">
          <div className="relative">
            <div className="aspect-square w-full max-w-xs sm:max-w-sm bg-gradient-to-tr from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg mx-auto">
              {/* Hide decorative circles on mobile */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-100 rounded-full hidden md:block"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-50 rounded-full hidden md:block"></div>

              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-full h-full bg-white rounded-2xl shadow-inner overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-pink-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="text-center">
<<<<<<< HEAD
                      <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                      <img src="/Logo-01.jpg" alt="PrintSmart Logo" className="w-full h-full object-contain"/>
=======
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white text-4xl sm:text-5xl font-bold">P</span>
>>>>>>> 96c8281b73c200e7f89c8f6b1241edbb36311102
                      </div>
                      <span className="text-pink-600 text-3xl sm:text-4xl font-bold">PrintSmart</span>
                      <p className="text-gray-500 mt-1 text-sm sm:text-base">Est. 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lower background block — hidden on small screens */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-pink-100 to-pink-50 rounded-3xl -z-10 hidden md:block"></div>
          </div>
        </div>

        {/* Right Content Block */}
        <div className="md:w-1/2">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-6">
            Our Story
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
            Our Mission: Excellence in Every Print
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            At PrintSmart, we believe that exceptional printing is the intersection of artistry, technology, and meticulous attention to detail. Founded in 2024, we've been helping businesses elevate their brand through high-quality printed materials that make lasting impressions.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            From business cards to large format displays, our commitment to quality remains unwavering. We combine traditional craftsmanship with cutting-edge technology to deliver results that exceed expectations and help our clients stand out in today's competitive landscape.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mr-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg text-gray-700 font-medium">Premium Materials</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mr-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg text-gray-700 font-medium">Modern Technology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
