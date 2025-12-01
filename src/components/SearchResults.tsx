import { X, Users, FileText, Award, Info, MapPin, ArrowRight, Home, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SearchResult {
  id: string;
  type: 'employee' | 'scheme' | 'talent' | 'about' | 'contact' | 'map' | 'footer' | 'general';
  title: string;
  description: string;
  category?: string;
  sectionId: string;
  matchField: string;
  extraData?: any;
}

interface SearchResultsProps {
  results: SearchResult[];
  searchTerm: string;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  isMobile?: boolean;
}

export function SearchResults({ results, searchTerm, onClose, onNavigate, isMobile = false }: SearchResultsProps) {
  const { language } = useLanguage();

  const getIcon = (type: string) => {
    switch (type) {
      case 'employee':
        return <Users className="w-4 h-4" />;
      case 'scheme':
        return <FileText className="w-4 h-4" />;
      case 'talent':
        return <Award className="w-4 h-4" />;
      case 'about':
        return <Info className="w-4 h-4" />;
      case 'contact':
        return <MapPin className="w-4 h-4" />;
      case 'map':
        return <MapPin className="w-4 h-4" />;
      case 'footer':
        return <Home className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'employee':
        return 'bg-blue-100 text-blue-800';
      case 'scheme':
        return 'bg-green-100 text-green-800';
      case 'talent':
        return 'bg-orange-100 text-orange-800';
      case 'about':
        return 'bg-purple-100 text-purple-800';
      case 'contact':
        return 'bg-red-100 text-red-800';
      case 'map':
        return 'bg-indigo-100 text-indigo-800';
      case 'footer':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string): string => {
    const labels = {
      employee: language === 'mr' ? 'कर्मचारी' : 'Employee',
      scheme: language === 'mr' ? 'योजना' : 'Scheme',
      talent: language === 'mr' ? 'प्रतिभा' : 'Talent',
      about: language === 'mr' ? 'आमच्याबद्दल' : 'About',
      contact: language === 'mr' ? 'संपर्क' : 'Contact',
      map: language === 'mr' ? 'नकाशा' : 'Map',
      footer: language === 'mr' ? 'फुटर' : 'Footer',
      general: language === 'mr' ? 'सामान्य' : 'General'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim() || !text) return text;
    
    try {
      const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      const parts = text.split(regex);
      
      return parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="bg-yellow-200 px-1 rounded font-medium">
            {part}
          </mark>
        ) : (
          part
        )
      );
    } catch (e) {
      return text;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    onNavigate(result.sectionId);
    onClose();
  };

  const formatMatchField = (field: string): string => {
    const fieldMap: { [key: string]: { en: string; mr: string } } = {
      'name': { en: 'Name', mr: 'नाव' },
      'designation': { en: 'Designation', mr: 'पदनाम' },
      'description': { en: 'Description', mr: 'वर्णन' },
      'department': { en: 'Department', mr: 'विभाग' },
      'email': { en: 'Email', mr: 'ईमेल' },
      'phone': { en: 'Phone', mr: 'फोन' },
      'title': { en: 'Title', mr: 'शीर्षक' },
      'category': { en: 'Category', mr: 'श्रेणी' },
      'address': { en: 'Address', mr: 'पत्ता' },
      'benefit': { en: 'Benefit', mr: 'फायदा' }
    };

    if (field.startsWith('benefit-')) {
      return fieldMap['benefit']?.[language] || field;
    }

    return fieldMap[field]?.[language] || field;
  };

  if (results.length === 0) {
    return null;
  }

  return (
    <div className={`
      absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl 
      ${isMobile ? 'max-h-60' : 'max-h-80'} overflow-y-auto z-50
    `}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">
            {language === 'mr' ? 'शोध परिणाम' : 'Search Results'}
          </span>
          <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
            {results.length} {language === 'mr' ? 'निकाल' : 'results'}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-200 rounded transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* Results List */}
      <div className="p-2">
        {results.map((result) => (
          <button
            key={result.id}
            onClick={() => handleResultClick(result)}
            className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 group border border-transparent hover:border-gray-200 mb-1 last:mb-0"
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className={`p-2 rounded-lg ${getTypeColor(result.type)} flex-shrink-0 mt-1`}>
                {getIcon(result.type)}
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-sm font-semibold text-gray-900 truncate">
                    {highlightText(result.title, searchTerm)}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(result.type)} flex-shrink-0`}>
                    {getTypeLabel(result.type)}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {highlightText(result.description, searchTerm)}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  {result.extraData?.email && (
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      <span>{result.extraData.email}</span>
                    </div>
                  )}
                  {result.extraData?.phone && (
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>{result.extraData.phone}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs text-gray-500">
                    {language === 'mr' ? 'जुळले:' : 'Matched in:'} {formatMatchField(result.matchField)}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 mt-1" />
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      {results.length > 5 && (
        <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <button
            onClick={() => {
              onNavigate('search-results');
              onClose();
            }}
            className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium py-2 hover:bg-blue-50 rounded transition-colors flex items-center justify-center gap-2"
          >
            {language === 'mr' ? 'सर्व शोध परिणाम पहा' : 'View all search results'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}