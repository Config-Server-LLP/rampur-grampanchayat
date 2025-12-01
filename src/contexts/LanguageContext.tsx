// LanguageContext.tsx - ENHANCED WITH COMPLETE DATA SEARCH
import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../translations';
import { sheetService } from '../services/sheetService';

type Language = 'en' | 'mr';

interface SearchResult {
  id: string;
  type: 'employee' | 'scheme' | 'talent' | 'about' | 'contact' | 'map' | 'footer';
  title: string;
  description: string;
  category?: string;
  sectionId: string;
  matchField: string;
  extraData?: any;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: SearchResult[];
  performSearch: (query: string) => void;
  clearSearch: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('mr');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // This function will search across ALL your application data
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search in translations and static content
    searchInTranslations(lowerQuery, results);
    searchInStaticContent(lowerQuery, results);
    
    // Remove duplicates and limit results
    const uniqueResults = results.filter((result, index, self) =>
      index === self.findIndex(r => r.id === result.id)
    ).slice(0, 15); // Increased limit for comprehensive search

    setSearchResults(uniqueResults);
  };

  // Search through all translation content
  const searchInTranslations = (query: string, results: SearchResult[]) => {
    const t = translations[language];
    
    // Recursive function to search through translation objects
    const searchObject = (obj: any, path: string[] = []) => {
      for (const [key, value] of Object.entries(obj)) {
        const currentPath = [...path, key];
        
        if (typeof value === 'string') {
          if (value.toLowerCase().includes(query)) {
            const resultType = getTypeFromPath(currentPath);
            results.push({
              id: `translation-${currentPath.join('-')}`,
              type: resultType.type,
              title: getTitleFromPath(currentPath, language),
              description: value.substring(0, 150) + (value.length > 150 ? '...' : ''),
              category: resultType.category,
              sectionId: resultType.sectionId,
              matchField: key,
              extraData: { fullPath: currentPath }
            });
          }
        } else if (typeof value === 'object' && value !== null) {
          searchObject(value, currentPath);
        }
      }
    };

    searchObject(t);
  };

  // Search through static/hardcoded content from your components
  const searchInStaticContent = (query: string, results: SearchResult[]) => {
    // Employee data from your EmployeesGallery component
    const employeesData = [
      {
        id: '1',
        name: { en: 'Shri Sachin Tulshiram Virutkar', mr: 'श्री. सचिन तुळशिराम विरुटकर' },
        designation: { en: 'Gram Panchayat Officer', mr: 'ग्रामपंचायत अधिकारी' },
        description: { 
          en: 'Responsible for the daily operations of the Gram Panchayat office. Manages all administrative tasks, maintains records, and oversees implementation of Gram Panchayat programs.', 
          mr: 'ग्रामपंचायत कार्यालयाच्या दैनंदिन कार्यप्रणालीसाठी जबाबदार. सर्व प्रशासकीय कार्ये, नोंदी व्यवस्थापित करतो आणि ग्रामपंचायत कार्यक्रमांच्या अंमलबजावणीवर देखरेख ठेवतो.' 
        },
        email: 'sangramrampur@gmail.com',
        phone: '+91 9765246810'
      },
      {
        id: '2', 
        name: { en: 'Smt. Nikita Ramesh Zhade', mr: 'सौ. निकिता रमेश झाडे' },
        designation: { en: 'Sarpanch', mr: 'सरपंच' },
        description: {
          en: 'Serving as the head of the Gram Panchayat. Responsible for planning, implementing, and monitoring all village development programs.',
          mr: 'ग्रामपंचायतचे प्रमुख अधिकारी म्हणून कार्यरत. ग्रामपंचायतच्या सर्व कार्यक्रमांचे नियोजन, अंमलबजावणी आणि देखरेख करतात.'
        },
        email: 'sangramrampur@gmail.com',
        phone: '+91 7218266300'
      }
      // Add more employees from your actual data
    ];

    // Scheme data from your SchemesGallery component
    const schemesData = [
      {
        id: '1',
        title: { en: 'ZPFMS', mr: 'ZPFMS' },
        category: { en: 'Financial Management', mr: 'आर्थिक व्यवस्थापन' },
        description: {
          en: 'Zilla Parishad Financial Management System - A comprehensive financial management platform for district administration.',
          mr: 'जिल्हा परिषद आर्थिक व्यवस्थापन प्रणाली - जिल्हा प्रशासनासाठी एक व्यापक आर्थिक व्यवस्थापन प्लॅटफॉर्म.'
        },
        benefits: [
          { en: 'Streamlined financial management', mr: 'सुव्यवस्थित आर्थिक व्यवस्थापन' },
          { en: 'Real-time tracking of funds', mr: 'निधीची रीअल-टाइम ट्रॅकिंग' }
        ]
      },
      {
        id: '2',
        title: { en: 'Kisan Samman Nidhi', mr: 'किसान सम्मान निधी' },
        category: { en: 'Agriculture', mr: 'कृषी' },
        description: {
          en: 'PM-KISAN is a Central Sector scheme providing income support to all landholding farmers families.',
          mr: 'पीएम-किसान ही एक केंद्रीय क्षेत्र योजना आहे जी सर्व जमीनधारक शेतकरी कुटुंबांना उत्पन्न पाठबळ प्रदान करते.'
        },
        benefits: [
          { en: '₹6,000 per year in three equal installments', mr: 'दरवर्षी तीन समान हप्त्यांमध्ये ₹६,०००' },
          { en: 'Direct benefit transfer to bank accounts', mr: 'बँक खात्यात थेट लाभ हस्तांतरण' }
        ]
      }
      // Add more schemes from your actual data
    ];

    // Search in employees
    employeesData.forEach(employee => {
      const fieldsToSearch = [
        { value: employee.name[language], field: 'name' },
        { value: employee.designation[language], field: 'designation' },
        { value: employee.description[language], field: 'description' },
        { value: employee.email, field: 'email' },
        { value: employee.phone, field: 'phone' }
      ];

      fieldsToSearch.forEach(({ value, field }) => {
        if (value && value.toLowerCase().includes(query)) {
          results.push({
            id: `employee-${employee.id}-${field}`,
            type: 'employee',
            title: employee.name[language],
            description: `${employee.designation[language]} - ${employee.description[language].substring(0, 100)}...`,
            category: 'Employees',
            sectionId: 'employees',
            matchField: field,
            extraData: employee
          });
        }
      });
    });

    // Search in schemes
    schemesData.forEach(scheme => {
      const fieldsToSearch = [
        { value: scheme.title[language], field: 'title' },
        { value: scheme.category[language], field: 'category' },
        { value: scheme.description[language], field: 'description' }
      ];

      // Search in benefits too
      scheme.benefits.forEach((benefit, index) => {
        fieldsToSearch.push({
          value: benefit[language],
          field: `benefit-${index}`
        });
      });

      fieldsToSearch.forEach(({ value, field }) => {
        if (value && value.toLowerCase().includes(query)) {
          results.push({
            id: `scheme-${scheme.id}-${field}`,
            type: 'scheme',
            title: scheme.title[language],
            description: scheme.description[language].substring(0, 120) + '...',
            category: 'Schemes',
            sectionId: 'schemes',
            matchField: field,
            extraData: scheme
          });
        }
      });
    });

    // Add more data sources from your other components...
    // Talents, About content, Contact info, Map data, Footer content etc.
  };

  // Helper function to determine type from translation path
  const getTypeFromPath = (path: string[]): { type: string; category: string; sectionId: string } => {
    const fullPath = path.join('.');
    
    if (fullPath.includes('employee') || fullPath.includes('employees')) {
      return { type: 'employee', category: 'Employees', sectionId: 'employees' };
    }
    if (fullPath.includes('scheme') || fullPath.includes('schemes')) {
      return { type: 'scheme', category: 'Schemes', sectionId: 'schemes' };
    }
    if (fullPath.includes('talent') || fullPath.includes('talents')) {
      return { type: 'talent', category: 'Talents', sectionId: 'talents' };
    }
    if (fullPath.includes('about')) {
      return { type: 'about', category: 'About', sectionId: 'about' };
    }
    if (fullPath.includes('contact')) {
      return { type: 'contact', category: 'Contact', sectionId: 'contact' };
    }
    if (fullPath.includes('map')) {
      return { type: 'map', category: 'Map', sectionId: 'map' };
    }
    if (fullPath.includes('footer')) {
      return { type: 'footer', category: 'Footer', sectionId: 'footer' };
    }
    
    return { type: 'about', category: 'General', sectionId: 'home' };
  };

  // Helper function to get display title from path
  const getTitleFromPath = (path: string[], lang: Language): string => {
    const lastKey = path[path.length - 1];
    const t = translations[lang];
    
    // Try to get the title from translations
    let current = t;
    for (const key of path) {
      if (current[key] && typeof current[key] === 'object') {
        current = current[key];
      } else {
        break;
      }
    }
    
    if (typeof current === 'string') {
      return current.length > 50 ? current.substring(0, 50) + '...' : current;
    }
    
    // Fallback to key-based titles
    const titleMap: { [key: string]: { en: string; mr: string } } = {
      'title': { en: 'Title', mr: 'शीर्षक' },
      'name': { en: 'Name', mr: 'नाव' },
      'description': { en: 'Description', mr: 'वर्णन' },
      'designation': { en: 'Designation', mr: 'पदनाम' },
      'category': { en: 'Category', mr: 'श्रेणी' },
      'address': { en: 'Address', mr: 'पत्ता' },
      'phone': { en: 'Phone', mr: 'फोन' },
      'email': { en: 'Email', mr: 'ईमेल' }
    };
    
    return titleMap[lastKey]?.[lang] || lastKey;
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
    searchTerm,
    setSearchTerm,
    searchResults,
    performSearch,
    clearSearch
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}