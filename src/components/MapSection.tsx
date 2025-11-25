import { MapPin, Phone, Clock, Home, Navigation } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function MapSection() {
  const { t } = useLanguage();

  // Rampur Grampanchayat - Exact Coordinates from your image
  const location = {
    latitude: 19.783566,
    longitude: 79.34802,
    address: "Q9P4+6R9, Rampur, Maharashtra 442903",
    googleMapsUrl: "https://www.google.com/maps?q=19.783566,79.34802",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=19.783566,79.34802"
  };

  return (
    <div className="container mx-auto px-4 py-12">
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
          <Card className="overflow-hidden h-[500px] border-none shadow-xl">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=19.783566,79.34802&z=16&output=embed"
              title="Rampur Grampanchayat Location"
              className="border-0"
            ></iframe>
          </Card>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              रामपूर ग्रामपंचायत - गोंदिया जिल्हा, महाराष्ट्र
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Coordinates: {location.latitude}° N, {location.longitude}° E
            </p>
            <div className="mt-2 flex justify-center gap-4">
              <a 
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <Navigation className="w-4 h-4" />
                View on Google Maps
              </a>
              <a 
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="space-y-6">

          {/* Office Address */}
          <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">{t.map.officeAddress}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Grampanchayat Office<br />
                  Rampur Village<br />
                  {location.address}<br />
                  Gondia District<br />
                  Maharashtra, India
                </p>

                <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-xs text-yellow-700">
                    <strong>📍 Landmark:</strong> Near Zilla Parishad School, Rampur
                  </p>
                </div>

                <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-xs text-blue-700">
                    <strong>📡 GPS:</strong> {location.latitude}, {location.longitude}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Office Hours */}
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

          {/* Contact Numbers */}
          <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">{t.map.contactNumbers}</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><span className="font-medium">{t.map.contact.office}</span> +91 9876543210</p>
                  <p><span className="font-medium">{t.map.contact.helpline}</span> +91 8765432109</p>
                  <p><span className="font-medium">{t.map.contact.fax}</span> +91 07192-123458</p>

                  <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-xs text-blue-700">
                      <strong>🚨 Emergency:</strong> Available 24/7 for urgent matters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}