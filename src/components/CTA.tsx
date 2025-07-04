
	export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-br from-pink-600 to-pink-800 text-white relative overflow-hidden mobile-minimal mobile-py-reduced">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Ready to Elevate Your Print Experience?
        </h2>
        <p className="text-xl md:text-2xl text-pink-100 mb-12 max-w-3xl mx-auto">
          Join hundreds of businesses who trust PrintPro for their premium printing needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-white text-pink-700 hover:bg-pink-50 px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </a>
          <a 
            href="#portfolio" 
            className="bg-transparent text-white border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-xl text-lg font-medium transition-all hover:bg-white/10"
          >
            Explore Our Work
          </a>
        </div>
      </div>
    </section>
  );
}


