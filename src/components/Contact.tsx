import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  // WhatsApp business number - real international format without +
  const whatsappNumber = "918500969690";

  // Pre-filled message for WhatsApp
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in PrintSmart's services and would like to learn more."
  );

  // WhatsApp link with pre-filled message
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-br from-navy/5 to-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl from-pink-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-pink-300/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Ready to Elevate Your Print Quality?
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch today and discover how PrintSmart can transform your printing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* WhatsApp Section */}
          <div>
            <div className="bg-white p-10 rounded-3xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect via WhatsApp</h3>

              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Skip the form and chat with us directly! Our team is ready to help with your printing needs.
              </p>

              <div className="mb-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp Logo"
                  className="w-24 h-24 mx-auto"
                />
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-6 rounded-xl text-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="flex-shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat with Us on WhatsApp</span>
              </a>

              <p className="text-sm text-gray-500 mt-6">
                We typically respond within minutes during business hours
              </p>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h3>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 flex-shrink-0 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+91 85009-69690</p>
                    <p className="text-gray-500 text-sm mt-1">Mon–Sat, 10am–8pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 flex-shrink-0 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                    <a
                      href="mailto:printsmart.contact@gmail.com"
                      className="text-gray-600 hover:underline"
                    >
                      printsmart.contact@gmail.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Replies within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 flex-shrink-0 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h4>
                    <p className="text-gray-600">
                      TSHB Shop No: 03, Vidyanagar SRT 47, Hyderabad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offer Box (Optional) */}
            <div className="mt-12 p-8 bg-pink-500 rounded-3xl text-white shadow-lg">
              <h4 className="text-xl font-bold mb-4">Special Offer</h4>
              <p className="mb-6">Get 15% off on your first print order above ₹999. Use code: FIRSTPRINT</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-pink-600 px-6 py-3 rounded-xl font-medium hover:bg-pink-100 transition-colors"
              >
                Claim via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
