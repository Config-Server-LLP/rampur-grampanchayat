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
        content: "The Panchayat Samiti serves as an intermediate tier in the three-tier Panchayati Raj system, playing a crucial role in rural local self-government. Our mission is to ensure effective implementation of development schemes and welfare programs at the grassroots level. We coordinate between Gram Panchayats and Zilla Parishads, ensuring smooth flow of resources and information. The Samiti acts as a vital link between the district administration and village-level governance bodies."
      },
      {
        title: "Bridging Government and Community",
        content: "We work tirelessly to bridge the gap between government initiatives and community needs, ensuring that every citizen has access to essential services, opportunities for growth, and a voice in the democratic process. Our team conducts regular village meetings, public hearings, and social audits to maintain transparency and accountability. We ensure that government policies are effectively communicated and implemented at the local level."
      },
      {
        title: "Sustainable Development Goals",
        content: "Through participatory planning, transparent execution, and continuous monitoring, we strive to build a prosperous, inclusive, and sustainable future for our rural communities. Our focus areas include agricultural development, water resource management, rural infrastructure, education, healthcare, and women empowerment. We align our initiatives with national development goals while addressing local specific needs."
      },
      {
        title: "Key Responsibilities and Functions",
        content: "The Samiti is responsible for planning and execution of development projects, monitoring various government schemes, and addressing the needs of multiple villages within our block. Key functions include: Implementation of poverty alleviation programs, Supervision of rural development projects, Monitoring of educational and healthcare initiatives, Coordination with various government departments, Maintenance of public infrastructure, and Promotion of local entrepreneurship."
      },
      {
        title: "Community Engagement and Empowerment",
        content: "We facilitate citizen participation in local governance through various committees and ensure that marginalized communities receive special attention. Regular gram sabhas and public consultations are conducted to understand community needs. We promote women's participation in local governance and ensure their representation in decision-making processes."
      },
      {
        title: "Collaborative Approach and Partnerships",
        content: "We collaborate with NGOs, self-help groups, and other stakeholders to maximize impact. The Samiti also maintains comprehensive records of all development activities and ensures that funds are utilized optimally for the benefit of the community. Partnerships with educational institutions, healthcare providers, and agricultural experts help us deliver better services to the community."
      },
      {
        title: "Transparency and Accountability",
        content: "All financial transactions and development activities are documented and made available for public scrutiny. We conduct regular social audits and maintain public information displays at our office. Grievance redressal mechanisms are in place to address citizen concerns promptly and effectively."
      }
    ],
    mr: [
      {
        title: "तीन-स्तरीय शासन रचना",
        content: "पंचायत समिती तीन-स्तरीय पंचायती राज व्यवस्थेत मध्यवर्ती स्तर म्हणून काम करते आणि ग्रामीण स्थानिक स्वराज्य संस्थेत महत्त्वपूर्ण भूमिका बजावते. तळागाळातील विकास योजना आणि कल्याणकारी कार्यक्रमांची प्रभावी अंमलबजावणी सुनिश्चित करणे हे आमचे ध्येय आहे. आम्ही ग्राम पंचायत आणि जिल्हा परिषद यांच्यात समन्वय साधतो, संसाधने आणि माहितीचा सहज प्रवाह सुनिश्चित करतो. समिती जिल्हा प्रशासन आणि ग्रामस्तरीय शासन संस्था यांच्यातील महत्त्वाचा दुवा म्हणून काम करते."
      },
      {
        title: "सरकार आणि समुदाय यांच्यातील दुवा",
        content: "आम्ही सरकारी उपक्रम आणि समुदायाच्या गरजा यांच्यातील अंतर भरून काढण्यासाठी अथक प्रयत्न करतो, प्रत्येक नागरिकाला आवश्यक सेवा, वाढीच्या संधी आणि लोकशाही प्रक्रियेत आवाज उपलब्ध असल्याची खात्री करतो. आमची टीम पारदर्शकता आणि जबाबदारी राखण्यासाठी नियमित ग्रामसभा, सार्वजनिक सुनावणी आणि सामाजिक तपासणी आयोजित करते. सरकारी धोरणे स्थानिक स्तरावर प्रभावीपणे संप्रेषित आणि अंमलात आणली जातात याची आम्ही खात्री करतो."
      },
      {
        title: "शाश्वत विकास उद्दिष्टे",
        content: "सहभागी नियोजन, पारदर्शक अंमलबजावणी आणि सतत देखरेखीद्वारे आम्ही आमच्या ग्रामीण समुदायांसाठी समृद्ध, समावेशक आणि टिकाऊ भविष्य घडवण्याचा प्रयत्न करतो. आमच्या लक्षणीय क्षेत्रांमध्ये कृषी विकास, जलसंपत्ती व्यवस्थापन, ग्रामीण पायाभूत सुविधा, शिक्षण, आरोग्य सेवा आणि महिला सशक्तीकरण यांचा समावेश होतो. आम्ही राष्ट्रीय विकास उद्दिष्टांशी आमच्या उपक्रमांचा समन्वय साधतो तरच स्थानिक विशिष्ट गरजा पूर्ण करतो."
      },
      {
        title: "मुख्य जबाबदाऱ्या आणि कार्ये",
        content: "समिती विकास प्रकल्पांच्या नियोजन आणि अंमलबजावणीसाठी जबाबदार आहे, विविध सरकारी योजनांचे मॉनिटरिंग करते आणि आमच्या खंडातील अनेक गावांच्या गरजा पूर्ण करते. मुख्य कार्यांमध्ये समावेश: गरीबी निर्मूलन कार्यक्रमांची अंमलबजावणी, ग्रामीण विकास प्रकल्पांचे पर्यवेक्षण, शैक्षणिक आणि आरोग्य उपक्रमांचे मॉनिटरिंग, विविध सरकारी विभागांशी समन्वय, सार्वजनिक पायाभूत सुविधांचे देखभाल, आणि स्थानिक उद्योजकतेचा प्रचार."
      },
      {
        title: "समुदाय सहभाग आणि सशक्तीकरण",
        content: "आम्ही विविध समित्यांद्वारे स्थानिक शासनात नागरिकांचा सहभाग सुलभ करतो आणि हाशियावर असलेल्या समुदायांना विशेष लक्ष मिळेल याची खात्री करतो. समुदायाच्या गरजा समजून घेण्यासाठी नियमित ग्रामसभा आणि सार्वजनिक सल्लामसलत आयोजित केल्या जातात. आम्ही स्थानिक शासनात महिलांच्या सहभागास प्रोत्साहन देतो आणि निर्णय प्रक्रियेत त्यांचे प्रतिनिधित्व सुनिश्चित करतो."
      },
      {
        title: "सहकार्यात्मक दृष्टीकोन आणि भागीदारी",
        content: "आम्ही प्रभाव वाढवण्यासाठी स्वयंसेवी संस्था, स्वयंसहाय्य गट आणि इतर हितधारकांशी सहकार्य करतो. समिती सर्व विकास क्रियाकलापांची सर्वसमावेशक नोंद देखील ठेवते आणि समुदायाच्या फायद्यासाठी निधीचा सर्वोत्तम वापर केला जातो याची खात्री करते. शैक्षणिक संस्था, आरोग्य सेवा प्रदाते आणि कृषी तज्ज्ञांसोबतच्या भागीदारीमुळे आम्हाला समुदायाला उत्तम सेवा पुरविण्यास मदत होते."
      },
      {
        title: "पारदर्शकता आणि जबाबदारी",
        content: "सर्व आर्थिक व्यवहार आणि विकास क्रियाकलाप दस्तऐवजीकरण केले जातात आणि सार्वजनिक तपासणीसाठी उपलब्ध केले जातात. आम्ही नियमित सामाजिक तपासणी आयोजित करतो आणि आमच्या कार्यालयात सार्वजनिक माहिती प्रदर्शन ठेवतो. नागरिकांच्या समस्यांचे त्वरित आणि प्रभावीपणे निराकरण करण्यासाठी तक्रार निवारण यंत्रणा अस्तित्वात आहे."
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

      {/* Modal/Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentLanguage === 'mr' ? 'तपशीलवार माहिती' : 'Detailed Information'}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {currentLanguage === 'mr' ? 'पंचायत समितीची संपूर्ण माहिती' : 'Complete details about Panchayat Samiti'}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {modalContent && modalContent.map((section, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {section.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
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