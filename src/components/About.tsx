import logo from '@/assets/images/Logo-01.jpg';

export default function About() {
  const videos = [
    { id: 1, title: "Printing Process", src: "/one.mp4" },
    { id: 2, title: "Project Showcase", src: "/two.mp4" },
    { id: 3, title: "Quality Control", src: "/three.mp4" },
  ];

  return (
    <section id="about" className="py-16 px-6 sm:py-20 sm:px-8 lg:py-28 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Logo + Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Logo */}
          <div className="w-full lg:w-2/5 max-w-md mx-auto">
            <div className="aspect-square bg-gradient-to-tr from-gray-50 to-white rounded-3xl shadow-xl relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 mb-6">
                  <img src={logo} alt="PrintSmart Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-pink-600 text-3xl font-bold">PrintSmart</h3>
                <p className="text-gray-500 mt-2 text-sm">Est. 2024</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/5">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Our Mission: <span className="text-pink-600">Excellence</span> in Every Print
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed tracking-wide mb-6 text-justify">
              At PrintSmart, we believe that exceptional printing is the intersection of artistry, technology, and precision. Founded in 2024, we craft premium print solutions that enhance brand identity and deliver lasting impressions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed tracking-wide text-justify">
              From creative design to high-quality production, we blend modern innovation with skilled craftsmanship to ensure your prints stand out every time.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Premium Materials", "Modern Technology", "Precision Craftsmanship", "Brand Consistency"].map((item) => (
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

        {/* Video Section */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              See Our Work
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              A glimpse into our creative printing process and project excellence.
            </p>
          </div>

          {/* Desktop: Slightly bigger video frames, single row */}
          <div className="hidden md:flex gap-6 overflow-x-auto max-w-full mx-auto justify-center">
            {videos.map((video) => (
              <video
                key={video.id}
                src={video.src}
                controls
                controlsList="nodownload"
                disablePictureInPicture
                className="flex-shrink-0 w-72 aspect-[9/16] rounded-xl object-cover shadow-md hover:shadow-lg transition-all duration-300"
              >
                Your browser does not support the video tag.
              </video>
            ))}
          </div>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden flex gap-4 overflow-x-auto py-2 px-2 scroll-smooth">
            {videos.map((video) => (
              <video
                key={video.id}
                src={video.src}
                controls
                controlsList="nodownload"
                disablePictureInPicture
                className="flex-shrink-0 w-64 aspect-[9/16] rounded-xl object-cover shadow-md hover:shadow-lg transition-all duration-300"
              >
                Your browser does not support the video tag.
              </video>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center mt-10">
            <a
              href="https://instagram.com/printsmart_official"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z" />
              </svg>
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
