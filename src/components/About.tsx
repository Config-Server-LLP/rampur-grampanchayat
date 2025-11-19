import { Building2, Users, TrendingUp, Heart, X, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export function About() {
  const { t, currentLanguage } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Building2,
      title: t.about.features.governance.title,
      description: t.about.features.governance.description,
    },
    {
      icon: TrendingUp,
      title: t.about.features.development.title,
      description: t.about.features.development.description,
    },
    {
      icon: Users,
      title: t.about.features.empowerment.title,
      description: t.about.features.empowerment.description,
    },
    {
      icon: Heart,
      title: t.about.features.welfare.title,
      description: t.about.features.welfare.description,
    },
  ];

  // Extended content for the modal - with proper structure
  const extendedContent = {
    en: [
      {
        title: "Three-Tier Governance Structure",
        content: "The Panchayat Samiti serves as an intermediate tier in the three-tier Panchayati Raj system, playing a crucial role in rural local self-government. Our mission is to ensure effective implementation of development schemes and welfare programs at the grassroots level."
      },
      {
        title: "Bridging Government and Community",
        content: "We work tirelessly to bridge the gap between government initiatives and community needs, ensuring that every citizen has access to essential services, opportunities for growth, and a voice in the democratic process."
      },
      {
        title: "Sustainable Development Goals",
        content: "Through participatory planning, transparent execution, and continuous monitoring, we strive to build a prosperous, inclusive, and sustainable future for our rural communities."
      },
      {
        title: "Key Responsibilities",
        content: "The Samiti is responsible for planning and execution of development projects, monitoring various government schemes, and addressing the needs of multiple villages within our block."
      }
    ],
    mr: [
      {
        title: "तीन-स्तरीय शासन रचना",
        content: "पंचायत समिती तीन-स्तरीय पंचायती राज व्यवस्थेत मध्यवर्ती स्तर म्हणून काम करते आणि ग्रामीण स्थानिक स्वराज्य संस्थेत महत्त्वपूर्ण भूमिका बजावते."
      },
      {
        title: "सरकार आणि समुदाय यांच्यातील दुवा",
        content: "आम्ही सरकारी उपक्रम आणि समुदायाच्या गरजा यांच्यातील अंतर भरून काढण्यासाठी अथक प्रयत्न करतो, प्रत्येक नागरिकाला आवश्यक सेवा, वाढीच्या संधी उपलब्ध असल्याची खात्री करतो."
      },
      {
        title: "शाश्वत विकास उद्दिष्टे",
        content: "सहभागी नियोजन, पारदर्शक अंमलबजावणी आणि सतत देखरेखीद्वारे आम्ही आमच्या ग्रामीण समुदायांसाठी समृद्ध, समावेशक आणि टिकाऊ भविष्य घडवण्याचा प्रयत्न करतो."
      },
      {
        title: "मुख्य जबाबदाऱ्या",
        content: "समिती विकास प्रकल्पांच्या नियोजन आणि अंमलबजावणीसाठी जबाबदार आहे, विविध सरकारी योजनांचे मॉनिटरिंग करते आणि खंडातील अनेक गावांच्या गरजा पूर्ण करते."
      }
    ]
  };

  // Get modal content based on current language
  const modalContent = extendedContent[currentLanguage] || extendedContent.en;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
          <span className="text-sm">{t.about.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.about.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Text Content - Aligned to start with image */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            {t.about.para1}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t.about.para2}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t.about.para3}
          </p>
          
          {/* More Details Link - Updated to blue text with bold */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-bold text-lg underline decoration-2 underline-offset-4"
          >
            <Info className="w-5 h-5" />
            {currentLanguage === 'mr' ? 'अधिक माहिती' : 'More Details'}
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709967884183-7ffa9d168508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBpbmRpYXxlbnwxfHx8fDE3NjMzNTk2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Government building"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 via-white to-green-500 rounded-xl -z-10"></div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Updated Smaller Modal/Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {currentLanguage === 'mr' ? 'तपशीलवार माहिती' : 'Detailed Information'}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 space-y-4">
              {modalContent && modalContent.map((section, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-3">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">
                    {section.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 rounded-b-xl">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  {currentLanguage === 'mr' ? 'बंद करा' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}