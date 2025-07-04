export default function TrustedPartners() {
  const partners = [
    {
      name: "Nexus Financial",
      logo: "https://placehold.co/200x80/f8fafc/94a3b8?text=Nexus+Financial&font=open-sans"
    },
    {
      name: "Horizon Tech",
      logo: "https://placehold.co/200x80/f8fafc/94a3b8?text=Horizon+Tech&font=open-sans"
    },
    {
      name: "Stellar Media",
      logo: "https://placehold.co/200x80/f8fafc/94a3b8?text=Stellar+Media&font=open-sans"
    },
    {
      name: "Quantum Group",
      logo: "https://placehold.co/200x80/f8fafc/94a3b8?text=Quantum+Group&font=open-sans"
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-12 bg-gray-50 mobile-minimal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            Trusted By Leading Brands
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