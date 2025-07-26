import { ChevronRight, Gift, Sparkles } from 'lucide-react';

const handmadeGifts = [
  {
    name: 'Thread Bangles',
    description:
      'Vibrant bangles intricately wrapped in colorful threads, symbolizing timeless Indian craftsmanship and tradition.',
    price: '₹299 – ₹899',
    image:
      'https://vrikshamindia.com/cdn/shop/files/IMG_3683_1d66e98c-2496-40f1-8431-27e3b0cc20ca_1066x.jpg?v=1737543249',
  },
  {
    name: 'Ethnic Potlis',
    description:
      'Exquisitely handcrafted clutch bags with intricate ethnic embroidery, perfect for weddings, festivals, and luxury gift sets.',
    price: '₹599 – ₹1,499',
    image: 'https://shop.globalbees.com/cdn/shop/files/jtk8aadonjclp80w14qo.jpg?v=1739940992',
  },
  {
    name: 'Custom Hampers',
    description:
      'Beautifully curated hampers combining premium handmade items, tailored to your brand or event theme.',
    price: '₹1,199 – ₹3,999',
    image: 'https://advaitliving.com/cdn/shop/products/14.jpg?v=1664037753',
  },
];

export default function HandmadeGiftSmart() {
  return (
    <section id="gift-collab" className="py-20 bg-gradient-to-b from-white via-rose-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold tracking-wide mb-4">
            <Gift size={16} className="mr-2" /> In Collaboration with GiftSmart
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Elegant Handcrafted Gifting Solutions
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrate craftsmanship with beautifully packaged handmade products — exclusively with GiftSmart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {handmadeGifts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800">{item.name}</h3>
                  <span className="bg-pink-50 text-pink-600 text-xs font-medium px-3 py-1 rounded-full">
                    By GiftSmart
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-medium">{item.price}</span>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-md transition"
                  >
                    Enquire
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md border border-gray-100 px-6 py-4 rounded-full shadow-sm">
            <Sparkles className="text-pink-500" />
            <p className="text-sm sm:text-base text-gray-700">
              Want custom gift kits with your brand?
              <a
                href="#contact"
                className="ml-2 text-pink-600 font-medium hover:text-pink-700"
              >
                Let's collaborate
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}