import { MapPin, Phone, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function MapSection() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
          <span className="text-sm">{t.map.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.map.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.map.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map Container */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden h-[600px] border-none shadow-xl">
            <div className="relative w-full h-full bg-gradient-to-br from-blue-100 via-green-50 to-orange-50">
              {/* Map Placeholder - Stylized representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{t.header.title}</h3>
                  <p className="text-gray-600 mb-6">Interactive map location</p>
                  
                  {/* Decorative elements */}
                  <div className="flex gap-4 justify-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>

              {/* Grid overlay for map-like appearance */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Mock road lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#1e40af" strokeWidth="3" />
                <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#1e40af" strokeWidth="3" />
                <line x1="20%" y1="100%" x2="80%" y2="0" stroke="#1e40af" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </Card>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              {/* Placeholder for embedded Google Maps or other mapping service */}
              Map integration: Add your Google Maps embed code or mapping API
            </p>
          </div>
        </div>

        {/* Location Info Cards */}
        <div className="space-y-6">
          <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">{t.map.officeAddress}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t.map.address.line1}<br />
                  {t.map.address.line2}<br />
                  {t.map.address.line3}<br />
                  {t.map.address.line4}<br />
                  {t.map.address.line5}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">{t.map.officeHours}</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span>{t.map.hours.weekday}</span> {t.map.hours.weekdayTime}</p>
                  <p><span>{t.map.hours.saturday}</span> {t.map.hours.saturdayTime}</p>
                  <p><span>{t.map.hours.sunday}</span> {t.map.hours.sundayStatus}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {t.map.hours.lunchBreak}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-none shadow-lg hover:shadow-xl transition-shadow"> {/* Increased padding from p-6 to p-8 */}
  <div className="flex items-start gap-6"> {/* Increased gap from gap-4 to gap-6 */}
    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"> {/* Increased icon size */}
      <Phone className="w-8 h-10 text-orange-600" /> {/* Increased icon size */}
    </div>
    <div className="flex-grow">
      <h3 className="text-gray-900 mb-4 text-xl font-semibold">{t.map.contactNumbers}</h3> {/* Increased font size and spacing */}
      <div className="text-base text-gray-600 space-y-3"> {/* Increased font size and spacing */}
        <p className="text-lg"><span className="font-medium">{t.map.contact.office}</span> +91 (0XXX) 123-4567</p>
        <p className="text-lg"><span className="font-medium">{t.map.contact.helpline}</span> +91 98765 43210</p>
        <p className="text-lg"><span className="font-medium">{t.map.contact.fax}</span> +91 (0XXX) 123-4568</p>
      </div>
    </div>
  </div>
</Card>
        </div>
      </div>
    </div>
  );
}