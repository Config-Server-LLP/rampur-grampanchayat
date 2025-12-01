import { ArrowLeft, Search, Users, FileText, Award, Info, MapPin, Mail, Phone, Home } from 'lucide-react';
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

interface SearchResultsPageProps {
  searchTerm: string;
  results: SearchResult[];
  onNavigate: (sectionId: string) => void;
}

export function SearchResultsPage({ searchTerm, results, onNavigate }: SearchResultsPageProps) {
  const { language, clearSearch } = useLanguage();

  const getIcon = (type: string) => {
    switch (type) {
      case 'employee':
        return <Users className="w-5 h-5" />;
      case 'scheme':
        return <FileText className="w-5 h-5" />;
      case 'talent':
        return <Award className="w-5 h-5" />;
      case 'about':
        return <Info className="w-5 h-5" />;
      case 'contact':
        return <MapPin className="w-5 h-5" />;
      case 'map':
        return <MapPin className="w-5 h-5" />;
      case 'footer':
        return <Home className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'employee':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'scheme':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'talent':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'about':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'contact':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'map':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'footer':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string): string => {
    const labels = {
      employee: language === 'mr' ? 'कर्मचारी' : 'Employees',
      scheme: language === 'mr' ? 'योजना' : 'Schemes',
      talent: language === 'mr' ? 'प्रतिभा' : 'Talents',
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

  const groupResultsByType = () => {
    const grouped: { [key: string]: SearchResult[] } = {};
    results.forEach(result => {
      if (!grouped[result.type]) {
        grouped[result.type] = [];
      }
      grouped[result.type].push(result);
    });
    return grouped;
  };

  const groupedResults = groupResultsByType();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors px-4 py-2 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'mr' ? 'मागे जा' : 'Go Back'}
        </button>

        <div className="flex items-center gap-4 mb-6 p-6 bg-white rounded-lg shadow-sm border">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Search className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {language === 'mr' ? 'शोध परिणाम' : 'Search Results'}
            </h1>
            <p className="text-gray-600 text-lg">
              {language === 'mr' 
                ? `"${searchTerm}" साठी ${results.length} निकाल सापडले` 
                : `Found ${results.length} results for "${searchTerm}"`
              }
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm border">
          <Search className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            {language === 'mr' ? 'काहीही सापडले नाही' : 'No results found'}
          </h3>
          <p className="text-gray-600 text-lg max-w-md mx-auto mb-6">
            {language === 'mr' 
              ? 'वेगळे कीवर्ड वापरून पुन्हा शोधा करा' 
              : 'Try searching with different keywords'
            }
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {language === 'mr' ? 'मुख्यपृष्ठावर परत जा' : 'Return to Homepage'}
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedResults).map(([type, typeResults]) => (
            <div key={type} className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="p-6 border-b bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${getTypeColor(type)}`}>
                    {getIcon(type)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {getTypeLabel(type)}
                    </h3>
                    <p className="text-gray-600">
                      {typeResults.length} {language === 'mr' ? 'निकाल' : 'results'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {typeResults.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => onNavigate(result.sectionId)}
                    className="w-full text-left p-6 hover:bg-gray-50 rounded-lg border transition-all duration-200 hover:shadow-md group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${getTypeColor(result.type)} border flex-shrink-0`}>
                        {getIcon(result.type)}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {highlightText(result.title, searchTerm)}
                          </h4>
                          <span className={`text-xs px-3 py-1 rounded-full ${getTypeColor(result.type)} flex-shrink-0 ml-2`}>
                            {getTypeLabel(result.type)}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {highlightText(result.description, searchTerm)}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                          {result.extraData?.email && (
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              <span>{result.extraData.email}</span>
                            </div>
                          )}
                          {result.extraData?.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              <span>{result.extraData.phone}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {language === 'mr' ? 'जुळले:' : 'Matched in:'} {formatMatchField(result.matchField)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Back to Top */}
      {results.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            {language === 'mr' ? 'वर परत जा' : 'Back to Top'}
          </button>
        </div>
      )}
    </div>
  );
}