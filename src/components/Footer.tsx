import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  const quickLinks = [
    { id: 'home', label: t.footer.links.home },
    { id: 'about', label: t.footer.links.about },
    { id: 'schemes', label: t.footer.links.schemes },
    { id: 'contact', label: t.footer.links.contact },
  ];

  const importantLinks = [
    { label: t.footer.links.rti, href: '#' },
    { label: t.footer.links.grievance, href: '#' },
    { label: t.footer.links.tenders, href: '#' },
    { label: t.footer.links.downloads, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Top Bar */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Updated Logo Here */}
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg">
                <img
                  src="images/download.ico"
                  alt="Maharashtra Government Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-white">{t.header.title}</h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white mb-4">{t.footer.importantLinks}</h3>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">{t.footer.contactInfo}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  {t.map.address.line1},<br />
                  {t.map.address.line2},<br />
                  {t.map.address.line3}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 (0XXX) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">contact@panchayatsamiti.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {t.footer.copyright}{' '}
              <a
                href="https://www.configserverllp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                    Config Server LLP
              </a>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t.footer.links.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t.footer.links.terms}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t.footer.links.sitemap}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-950 py-3">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 text-xs text-center">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
