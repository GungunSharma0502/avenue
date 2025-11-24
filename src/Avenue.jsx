import React, { useState } from 'react';
import { Phone, MapPin, Mail, Facebook, Twitter, Youtube, Instagram, Menu, X } from 'lucide-react';

export default function Avenue() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const amenities = [
    { icon: '🛡️', title: '24 Hrs. Security' },
    { icon: '📹', title: 'CCTV' },
    { icon: '⚡', title: 'Power Backup' },
    { icon: '🧯', title: 'Fire Fighting Systems' },
    { icon: '🛗', title: 'Lift' },
    { icon: '👥', title: 'Clubhouse' },
    { icon: '🎮', title: 'Indoor Games' },
    { icon: '💧', title: '247 Water Supply' },
    { icon: '🌧️', title: 'Rain Water Harvesting' },
    { icon: '🎪', title: 'Kids Play Area' },
    { icon: '🚗', title: 'Car Parking' },
    { icon: '☀️', title: 'Solar Panel' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:8010206000" className="flex items-center gap-2 hover:text-blue-200">
              <Phone size={16} />
              <span>8010206000</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>F-74, Sector 88, Greater Faridabad</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:info@rps12thavenue.in" className="flex items-center gap-2 hover:text-blue-200">
              <Mail size={16} />
              <span>info@rps12thavenue.in</span>
            </a>
            <div className="flex gap-3">
              <a href="#" className="hover:text-blue-200"><Facebook size={18} /></a>
              <a href="#" className="hover:text-blue-200"><Twitter size={18} /></a>
              <a href="#" className="hover:text-blue-200"><Youtube size={18} /></a>
              <a href="#" className="hover:text-blue-200"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-blue-900">RPS</div>
              <div className="text-red-600 text-4xl font-bold">12<br/>AVENUE</div>
            </div>
            
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ul className="hidden lg:flex gap-8 font-medium text-gray-700">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-red-600">About Project</button></li>
              <li><button onClick={() => scrollToSection('amenities')} className="hover:text-red-600">Amenities</button></li>
              <li><button onClick={() => scrollToSection('price')} className="hover:text-red-600">Price List</button></li>
              <li><button onClick={() => scrollToSection('location')} className="hover:text-red-600">Location Map</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-red-600">Contact Us</button></li>
            </ul>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="lg:hidden pb-4 space-y-3 font-medium text-gray-700">
              <li><button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-red-600">About Project</button></li>
              <li><button onClick={() => scrollToSection('amenities')} className="block w-full text-left py-2 hover:text-red-600">Amenities</button></li>
              <li><button onClick={() => scrollToSection('price')} className="block w-full text-left py-2 hover:text-red-600">Price List</button></li>
              <li><button onClick={() => scrollToSection('location')} className="block w-full text-left py-2 hover:text-red-600">Location Map</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-red-600">Contact Us</button></li>
            </ul>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-4">RPS 12th Avenue</h1>
          <p className="text-2xl">Sector - 27 Faridabad</p>
        </div>
        
        {/* Contact Form */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-2xl w-96 hidden xl:block">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">CONTACT NOW</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <input type="tel" placeholder="Mobile" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <textarea placeholder="Message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
            <button onClick={() => alert('Form submitted!')} className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition">Submit Details</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">RPS 12th Avenue Faridabad</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>In the territory of commercial real estate, RPS 12th Avenue Faridabad Office Spaces, an innovation by the well-known name RPS Group, spreads across a vast expanse of 5.2 million square feet.</p>
            <p>As one steps into these corporate sanctuaries, opulence, and contemporaneity seamlessly converge, creating an ambiance that is both expansive and luxurious. The vista unfolds into enchanting and avant-garde landscapes, showcasing the pinnacle of commercial sophistication, poised for international acclaim.</p>
            <p>12th Avenue Office Spaces emerges as an address reserved for the elite, where regality finds its dwelling. Representing an evolved iteration of office spaces and retail establishments, it offers premium commercial real estate at exceptionally reasonable rates. Strategically positioned along Mathura Road, Faridabad, RPS Office Space Faridabad beckons as a beacon of accessible opulence.</p>
            <p>This commercial development venture is more than a physical space; it embodies a vision where only a select few shall glimpse a brighter tomorrow. Envisioned to shape future narratives, it aspires to redefine lifestyles, standing unrivaled in its antiquated yet unresolved architectural magnificence. Amidst the plethora of projects, none rivals its distinctive allure and unmatched infrastructure.</p>
            <p>RPS 12th Avenue Office Spaces transcends the conventional, propelling itself into a league of extraordinary. It stands as a testament to the fusion of avant-garde aesthetics and commercial practicality. The experience within these hallowed office walls promises exclusivity, a realm where only the discerning few will script their destinies.</p>
            <p>In contemplating this edifice of opulence, one discerns a tapestry of meticulous planning and visionary execution. The prospect of engaging with the global market becomes not just a reality but an inherent characteristic of the RPS 12th Avenue Office Spaces experience.</p>
            <p>A journey through these offices is a sojourn through a landscape where commercial prowess converges with architectural brilliance. Each space is not merely a workplace; it is a canvas where business acumen meets aesthetic finesse. The aura within is one of sophistication, a sanctuary where ideas flow freely, and innovation resonates in every corner.</p>
            <p>RPS Office Space Faridabad is not merely a physical entity; it is a conduit for a select few to script their narratives of success. The landscape it paints is one of prosperity and distinction, where every square foot is an investment in a future defined by opulence and affluence.</p>
            <p>RPS 12th Avenue Faridabad Office Spaces stands not just as a commercial endeavor but as an embodiment of aspirations and accomplishments.</p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border-2 border-red-600 flex items-center justify-center text-3xl mb-4">
                  {amenity.icon}
                </div>
                <p className="text-gray-700 font-medium">{amenity.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section id="price" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Price List</h2>
          
          {/* Additional Charges */}
          <div className="mb-8">
            <div className="bg-orange-600 text-white text-center py-3 font-bold text-lg mb-2">Additional Charges</div>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="border-b">
                  <td className="p-3 border-r bg-gray-50 font-medium">EDC/IDC</td>
                  <td className="p-3">Rs. 360 Per Sq. Ft.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 border-r bg-gray-50 font-medium">EEC/PFC</td>
                  <td className="p-3">Rs. 195 Per Sq. Ft.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 border-r bg-gray-50 font-medium">Power Backup Installation Charges</td>
                  <td className="p-3">Rs. 35000 Per KVA</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 border-r bg-gray-50 font-medium">Executive Club Membership (Optional)</td>
                  <td className="p-3">Rs. 250000/-</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 border-r bg-gray-50 font-medium">Car Parking (Optional)</td>
                  <td className="p-3">Rs. 4,00,000 Per Car</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 border-r bg-gray-50 font-medium">Mandatory Specification Charges (Tower-3)</td>
                  <td className="p-3">Rs. 500 Per Sq. Ft.</td>
                </tr>
                <tr>
                  <td className="p-3 border-r bg-gray-50 font-medium">PLC (Preferable Location Charges) - T-3, T-4, T-5</td>
                  <td className="p-3">
                    Ground Floor - Rs. 1200 Per Sq. Ft.<br/>
                    First Floor - Rs. 600 Per Sq. Ft.<br/>
                    Second Floor - Rs. 300 Per Sq. Ft.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Plan A */}
          <div className="mb-8">
            <div className="bg-orange-600 text-white text-center py-3 font-bold text-lg mb-2">Payment Plan A: 95% DP Plan with 12% AR</div>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="border-b">
                  <td className="p-3 border-r bg-gray-50 font-medium">Booking Amount</td>
                  <td className="p-3">10% of BSP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 border-r bg-gray-50 font-medium">Within 45 Days</td>
                  <td className="p-3">85% of BSP</td>
                </tr>
                <tr>
                  <td className="p-3 border-r bg-gray-50 font-medium">On Offer of Possession</td>
                  <td className="p-3">5% of BSP + Additional Charges + Other Charges as Applicable</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs mt-2 text-gray-600">* Commitment charges of 12% P.A. will be payable on quarterly basis after receiving 95% of BSP till offer of possession.</p>
            <p className="text-xs text-gray-600">* Commitment charges will be payable till the amount deposited (excluding GST) subject to deduction of TDS</p>
          </div>

          {/* Payment Plan B */}
          <div>
            <div className="bg-orange-600 text-white text-center py-3 font-bold text-lg mb-2">Payment Plan B: 50-50 Plan with 12% AR</div>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="border-b">
                  <td className="p-3 border-r bg-gray-50 font-medium">Booking Amount</td>
                  <td className="p-3">10% of BSP</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 border-r bg-gray-50 font-medium">Within 45 Days</td>
                  <td className="p-3">40% of BSP</td>
                </tr>
                <tr>
                  <td className="p-3 border-r bg-gray-50 font-medium">On Offer of Possession</td>
                  <td className="p-3">50% of BSP + Additional Charges + Other Charges as Applicable</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs mt-2 text-gray-600">* Commitment charges of 12% P.A. will be payable on quarterly basis after receiving 95% of BSP till offer of possession.</p>
            <p className="text-xs text-gray-600">* Commitment charges will be payable till the amount deposited (excluding GST) subject to deduction of TDS</p>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section id="location" className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Location Map & Benefits</h2>
          <ol className="space-y-4 text-gray-700">
            <li><strong>1. Connectivity:</strong> Check the accessibility of RPS 12th Avenue to major roads, highways, and public transportation. Good connectivity can enhance your commuting experience and provide ease of access to essential amenities.</li>
            <li><strong>2. Proximity to Commercial Hubs:</strong> Evaluate how close the property is to commercial and business districts. Nearby shopping centers, markets, and business hubs can add convenience to your daily life.</li>
            <li><strong>3. Educational Institutions:</strong> If you have children or are planning to enroll in educational programs, consider the proximity to schools, colleges, and other educational institutions.</li>
            <li><strong>4. Healthcare Facilities:</strong> Access to hospitals and healthcare facilities is crucial. A location with nearby medical services can be advantageous in case of emergencies or routine healthcare needs.</li>
            <li><strong>5. Recreational Areas:</strong> Consider the availability of parks, recreational spaces, and entertainment options in the vicinity. Proximity to such areas can contribute to a better quality of life.</li>
            <li><strong>6. Safety and Security:</strong> Research the safety and security of the neighborhood. A secure environment is important for the well-being of residents.</li>
            <li><strong>7. Future Development Plans:</strong> Investigate any upcoming infrastructure or development projects in the area. Future developments can potentially impact the property value and overall living experience.</li>
          </ol>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message *</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button onClick={() => alert('Message sent!')} className="w-full bg-red-700 text-white py-3 rounded font-semibold hover:bg-red-800 transition">Send</button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-blue-500 font-semibold mb-2">PHONE</h3>
                <p className="text-gray-700">+91- 8010-26-6000</p>
              </div>
              <div>
                <h3 className="text-blue-500 font-semibold mb-2">EMAIL</h3>
                <p className="text-gray-700">info@rps12thavenue.in</p>
              </div>
              <div>
                <h3 className="text-blue-500 font-semibold mb-2">ADDRESS</h3>
                <p className="text-gray-700">F-74, Sector 88, Greater Faridabad, Haryana-121002</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-xl mb-2">RPS 12th Avenue</h3>
              <p className="text-sm">RPS 12th Avenue are designed to provide a comfortable and convenient shopping experience to customers. They offer spacious and well-lit showrooms, ample parking space, and easy connectivity to public transportation.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Call for Booking</h3>
              <p className="mb-2">📞 +91 8010206000 / 8010305000</p>
              <p>📍 F-74, Sector 88, Greater Faridabad, Haryana, 121002</p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-red-700 pt-4 text-center text-sm">
            <p>Copyright © 2025 RPS 12th Avenue</p>
          </div>
        </div>
      </footer>
    </div>
  );
}