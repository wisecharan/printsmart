import { motion } from 'framer-motion';

export default function TrustedPartners() {
  const partners = [
    {
      name: "Ritvik Kidney Centre & Androcare",
      logo: "https://www.ritvikkidneycentre.com/images/ritvik-logo.png"
    },
    {
      name: "Akhila Bharathiya Vidyardhi Parishath",
      logo: "https://app.diginweb.site/create/uploads/medialibrary/35c9a77abe_355.jpg"
    },
    {
      name: "Aquatech Water Solutions",
      logo: "https://app.diginweb.site/create/uploads/medialibrary/0726db9d13_355.png"
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white via-pink-50/10 to-gray-50 relative overflow-hidden">
      
{/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-16 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-20 mix-blend-multiply" />
        <div className="absolute bottom-1/4 -right-16 w-80 h-80 bg-pink-50 rounded-full blur-3xl opacity-10 mix-blend-multiply" />
      </div>

      {/* Left side illustration */}
      <div className="hidden lg:block absolute left-0 top-1/4 w-48 h-48 opacity-30">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EC4899" d="M45.2,-58.2C59.3,-49.2,72,-35.5,75.6,-19.5C79.2,-3.5,73.7,14.8,62.8,30.1C51.9,45.4,35.6,57.8,17.3,66.5C-1.1,75.2,-21.5,80.2,-37.1,72.3C-52.7,64.4,-63.5,43.6,-68.3,21.9C-73.1,0.2,-71.9,-22.4,-61.5,-40.7C-51.1,-59.1,-31.5,-73.2,-12.8,-67.9C5.9,-62.6,11.8,-37.9,21.5,-23.6C31.2,-9.3,44.7,-5.3,45.2,-0.5C45.7,4.3,33.2,8.6,24.9,18.9C16.6,29.1,12.5,45.3,1.5,52.8C-9.6,60.3,-27.5,59.1,-40.1,50.3C-52.7,41.5,-60,25.1,-62.8,7.3C-65.6,-10.5,-63.9,-29.7,-54.1,-43.8C-44.3,-57.9,-26.4,-66.9,-7.7,-62.3C11.1,-57.7,22.2,-39.5,31.1,-25.3C40,-11.1,46.7,-0.9,45.2,-58.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Right side illustration */}
      <div className="hidden lg:block absolute right-0 bottom-1/4 w-48 h-48 opacity-30">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EC4899" d="M39.2,-53.3C52.9,-44.9,67.5,-37.1,73.7,-24.2C79.9,-11.3,77.8,6.7,69.7,20.9C61.6,35.1,47.6,45.5,32.3,53.2C17,60.9,0.5,65.9,-14.9,62.9C-30.3,59.9,-44.6,48.9,-54.6,34.5C-64.6,20.1,-70.2,2.3,-66.3,-12.9C-62.5,-28.1,-49.1,-40.7,-35.1,-48.9C-21.1,-57.1,-6.5,-60.9,7.2,-70.3C20.9,-79.7,41.8,-94.7,52.8,-86.1C63.8,-77.5,64.9,-45.3,68.4,-15.2C71.9,14.9,77.8,43,69.4,60.5C61,78,38.3,84.9,18.6,79.8C-1.1,74.7,-17.9,57.6,-31.1,43.2C-44.3,28.8,-53.9,17.1,-58.7,3.1C-63.5,-10.9,-63.5,-27.1,-55.1,-38.1C-46.7,-49.1,-29.9,-54.9,-13.5,-61.8C2.9,-68.7,5.8,-76.7,14.9,-77.8C24,-78.9,39.3,-73.1,39.2,-53.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse" />
            Our Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            <span className="block">Collaborating with</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400">
              Industry Leaders
            </span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to work alongside these respected organizations that share our commitment to excellence.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-28 md:w-36 lg:w-40"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
