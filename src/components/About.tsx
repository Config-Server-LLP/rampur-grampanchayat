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

  // UPDATED MODAL CONTENT FOR RAJURA – ENGLISH & MARATHI
  const extendedContent = {
    en: [
      {
        title: "Role of Panchayat Samiti Rajura",
        content:
          "Panchayat Samiti Rajura plays a vital administrative and developmental role for villages in Rajura block. It ensures planning, supervision, and implementation of government schemes for rural development."
      },
      {
        title: "Link Between Zilla Parishad & Gram Panchayat",
        content:
          "Rajura Panchayat Samiti works as an important coordination bridge between Zilla Parishad Chandrapur and all Gram Panchayats of Rajura taluka, ensuring smooth execution of development initiatives."
      },
      {
        title: "Focus on Rural Development",
        content:
          "Major development programs include agriculture, health services, rural roads, water supply, sanitation, education, livelihood missions, and welfare schemes for women, children, and weaker sections."
      },
      {
        title: "Administrative Responsibilities",
        content:
          "The Samiti includes multiple departments such as administration, education, finance, agriculture, health, construction, water supply, social welfare, and livelihood missions. Each works under the guidance of the Block Development Officer (BDO)."
      }
    ],
    mr: [
      {
        title: "पंचायत समिती राजुराची भूमिका",
        content:
          "पंचायत समिती राजुरा ही तालुक्यातील ग्रामीण भागाच्या विकासासाठी योजना आखणे, देखरेख करणे आणि विविध शासकीय योजनांची अंमलबजावणी करण्याची महत्त्वपूर्ण जबाबदारी पार पाडते."
      },
      {
        title: "जिल्हा परिषद आणि ग्रामपंचायत यांच्यातील दुवा",
        content:
          "राजुरा पंचायत समिती ही चंद्रपूर जिल्हा परिषद आणि तालुक्यातील सर्व ग्रामपंचायती यांच्यातील प्रमुख समन्वयक संस्था आहे, जी विकासाचे काम प्रभावीपणे राबवते."
      },
      {
        title: "ग्रामीण विकासावर लक्ष",
        content:
          "शेती, आरोग्य सेवा, ग्रामीण रस्ते, पाणीपुरवठा, स्वच्छता, शिक्षण, उपजीविका मिशन, महिला व बाल विकास आणि समाजकल्याण यांसारख्या अनेक योजनांची अंमलबजावणी राजुरा समितीच्या माध्यमातून केली जाते."
      },
      {
        title: "प्रशासकीय जबाबदाऱ्या",
        content:
          "समितीमध्ये प्रशासन, शिक्षण, वित्त, कृषी, आरोग्य, बांधकाम, जलपुरवठा, समाजकल्याण, महिला व बाल विकास आणि ग्रामीण जीवनोन्नती अभियान असे विविध विभाग कार्यरत आहेत. हे सर्व विभाग गटविकास अधिकाऱ्यांच्या मार्गदर्शनाखाली काम करतात."
      }
    ]
  };

  const modalContent = extendedContent[currentLanguage] || extendedContent.en;

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
          <span className="text-sm">{t.about.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.about.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">{t.about.para1}</p>
          <p className="text-gray-700 leading-relaxed">{t.about.para2}</p>
          <p className="text-gray-700 leading-relaxed">{t.about.para3}</p>

          {/* More Details Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-bold text-lg underline decoration-2 underline-offset-4"
          >
            <Info className="w-5 h-5" />
            {currentLanguage === "mr" ? "अधिक माहिती" : "More Details"}
          </button>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709967884183-7ffa9d168508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Panchayat Samiti Rajura Building"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 via-white to-green-500 rounded-xl -z-10"></div>
        </div>
      </div>

      {/* Features */}
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
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 rounded-t-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                  {currentLanguage === "mr" ? "तपशीलवार माहिती" : "Detailed Information"}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 space-y-4">
              {modalContent.map((section, i) => (
                <div key={i} className="border-l-4 border-blue-500 pl-3">
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
                  {currentLanguage === "mr" ? "बंद करा" : "Close"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
