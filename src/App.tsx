// App.tsx - UPDATED WITH SEARCH SECTION
import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickLinks } from './components/QuickLinks';
import { About } from './components/About';
import { EmployeesGallery } from './components/EmployeesGallery';
import { SchemesGallery } from './components/SchemesGallery';
import { TalentsGallery } from './components/TalentsGallery';
import { MapSection } from './components/MapSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SearchResultsPage } from './components/SearchResultsPage';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const { searchTerm, searchResults } = useLanguage();

  // ✅ GOOGLE ANALYTICS - Add this block
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4DRQGDTT1T';
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-4DRQGDTT1T');
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show search results page when activeSection is 'search-results'
  if (activeSection === 'search-results') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header activeSection={activeSection} onNavigate={scrollToSection} />
        <main className="pt-20">
          <SearchResultsPage 
            searchTerm={searchTerm}
            results={searchResults}
            onNavigate={scrollToSection}
          />
        </main>
        <Footer onNavigate={scrollToSection} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero />
          <QuickLinks onNavigate={scrollToSection} />
        </section>

        <section id="about" className="py-16 bg-white">
          <About />
        </section>

        <section id="employees" className="py-16 bg-gray-50">
          <EmployeesGallery />
        </section>

        <section id="schemes" className="py-16 bg-white">
          <SchemesGallery />
        </section>

        <section id="talents" className="py-16 bg-gray-50">
          <TalentsGallery />
        </section>

        <section id="map" className="py-16 bg-white">
          <MapSection />
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <Contact />
        </section>

        {/* Hidden section for search results navigation */}
        <section id="search-results" className="hidden"></section>
      </main>

      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}