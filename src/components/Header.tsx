import { useState, useEffect, useRef } from 'react';
import { Menu, X, Languages, ChevronDown, Search } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { SearchResults } from './SearchResults';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const { language, setLanguage, t, searchTerm, setSearchTerm, searchResults, performSearch } = useLanguage();
  
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLanguageDropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      if (mobileLanguageDropdownRef.current && !mobileLanguageDropdownRef.current.contains(event.target as Node)) {
        setIsMobileLanguageOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { id: 'home', label: t.header.nav.home },
    { id: 'about', label: t.header.nav.about },
    { id: 'employees', label: t.header.nav.employees },
    { id: 'schemes', label: t.header.nav.schemes },
    { id: 'talents', label: t.header.nav.talents },
    { id: 'map', label: t.header.nav.map },
    { id: 'contact', label: t.header.nav.contact },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 1) {
      performSearch(value);
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onNavigate('search-results');
      setIsSearchOpen(false);
    }
  };

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-md' : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-xl flex items-center justify-center bg-white">
              <img
                src="images/download.ico"
                alt="Maharashtra Government Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-blue-900 tracking-tight">{t.header.title}</h1>
              <p className="text-sm text-gray-600">{t.header.subtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Search Bar */}
            <div className="relative ml-4" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder={language === 'mr' ? 'शोधा...' : 'Search...'}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onFocus={() => searchTerm.length > 1 && setIsSearchOpen(true)}
                    className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </form>

              {/* Search Results Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <SearchResults 
                  results={searchResults} 
                  searchTerm={searchTerm}
                  onClose={() => setIsSearchOpen(false)}
                  onNavigate={onNavigate}
                />
              )}
            </div>

            {/* Desktop Language Dropdown */}
            <div className="relative ml-4" ref={languageDropdownRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="w-48 h-12 bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Languages className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-gray-900">
                      {currentLanguage?.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {currentLanguage?.nativeName}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isLanguageOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isLanguageOpen && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'en' | 'mr');
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-blue-50 flex flex-col ${
                        language === lang.code ? 'bg-blue-50' : ''
                      }`}
                    >
                      <span className="text-sm font-medium text-gray-900">{lang.name}</span>
                      <span className="text-xs text-gray-600">{lang.nativeName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Search className="w-6 h-6 text-gray-600" />
            </button>

            <div className="relative" ref={mobileLanguageDropdownRef}>
              <button
                onClick={() => setIsMobileLanguageOpen(!isMobileLanguageOpen)}
                className="w-36 h-10 bg-white border border-gray-300 rounded-lg px-3 py-2 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-gray-600" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-medium text-gray-900">
                      {currentLanguage?.name}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      {currentLanguage?.nativeName}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${
                    isMobileLanguageOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isMobileLanguageOpen && (
                <div className="absolute top-full right-0 w-36 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'en' | 'mr');
                        setIsMobileLanguageOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 hover:bg-blue-50 flex flex-col ${
                        language === lang.code ? 'bg-blue-50' : ''
                      }`}
                    >
                      <span className="text-sm font-medium text-gray-900">{lang.name}</span>
                      <span className="text-xs text-gray-600">{lang.nativeName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-2">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={language === 'mr' ? 'शोधा...' : 'Search...'}
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>
            
            {/* Mobile Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-2 max-h-60 overflow-y-auto">
                <SearchResults 
                  results={searchResults} 
                  searchTerm={searchTerm}
                  onClose={() => setIsSearchOpen(false)}
                  onNavigate={onNavigate}
                  isMobile={true}
                />
              </div>
            )}
          </div>
        )}

        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200 mt-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}