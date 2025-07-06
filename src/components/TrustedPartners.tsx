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
    <section className="py-12 md:py-16 px-4 md:px-12 bg-gray-50 mobile-minimal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
          Trusted by Brands
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="w-32 md:w-40 lg:w-48 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}