import { Home, BookOpen, Droplets, Sprout, X, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export function About() {
  const { t, language: currentLanguage } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Home,
      title: t.about.features.demographics.title,
      description: t.about.features.demographics.description,
    },
    {
      icon: BookOpen,
      title: t.about.features.education.title,
      description: t.about.features.education.description,
    },
    {
      icon: Droplets,
      title: t.about.features.water.title,
      description: t.about.features.water.description,
    },
    {
      icon: Sprout,
      title: t.about.features.agriculture.title,
      description: t.about.features.agriculture.description,
    },
  ];

  // MODAL CONTENT FOR RAMPUR GRAMPANCHAYAT
  const extendedContent = {
    en: [
      {
        title: "Village Geography & Location",
        content: "Rampur village is situated near Rajura Municipal Council, with geographical coordinates Latitude 19.783566 and Longitude 79.34802. The village spans 3.31 sq. km and is well-connected via Gadchandur Road, Govari Road, and Sasti Road."
      },
      {
        title: "Administrative Structure",
        content: "Established on May 5, 2008, Rampur Grampanchayat serves a population of 3911 people across 1272 families. The current elected committee term runs from December 4, 2023 to December 3, 2028."
      },
      {
        title: "Educational Infrastructure",
        content: "The village provides comprehensive education through 6 Anganwadis, Zilla Parishad Higher Primary School (Class 1-7), Priyadarshani College (Class 5-12), and Brilliant Convent (LKG to Class 1)."
      },
      {
        title: "Water Supply & Infrastructure",
        content: "Rampur has robust water infrastructure with 1 independent tap water scheme, 11 public hand pumps, 4 RO plants (2 Grampanchayat-owned), 2 open wells, 628 individual tap connections, and 728 individual borewells."
      },
      {
        title: "Agricultural Development",
        content: "With 42.25 hectares of cultivable land and 22.28 hectares of irrigated area, agriculture is supported by Bhavani Nala and individual borewells. The village also has an Agricultural Produce Market Committee."
      },
      {
        title: "Social & Community Facilities",
        content: "The village boasts multiple temples including Bhavani Temple and Hanuman Temple, a Public Library, Tukdoji Maharaj Devasthan, Gajanan Maharaj Temple, and community facilities like Yoga Shed, Meditation Center, and 27 active Self-Help Groups."
      }
    ],
    mr: [
      {
        title: "गावाचे भौगोलिक स्थान",
        content: "रामपूर गाव राजुरा नगरपरिषदेजवळ, अक्षांश १९.७८३५६६ आणि रेखांश ७९.३४८०२ या स्थानावर वसलेले आहे. गावाचे क्षेत्रफळ ३.३१ चौ.कि.मी. असून गडचांदूर रोड, गोवरी रोड आणि सास्ती रोड या मार्गांवर सोयीच्या प्रवेशासह स्थित आहे."
      },
      {
        title: "प्रशासकीय रचना",
        content: "५ मे २००८ रोजी स्थापन झालेली रामपूर ग्रामपंचायत १२७२ कुटुंबे आणि ३९११ लोकसंख्येची सेवा पुरवते. सद्य परिषदेचा कार्यकाळ ०४/१२/२०२३ ते ०३/१२/२०२८ पर्यंत आहे."
      },
      {
        title: "शैक्षणिक पायाभूत सुविधा",
        content: "गावात ६ आंगणवाड्या, जिल्हा परिषद उच्च प्राथमिक शाळा (इयत्ता १ ते ७), प्रियदर्शनी महाविद्यालय (इयत्ता ५ ते १२) आणि ब्रीलियंट कान्व्हेंट (LKG ते इयत्ता १) द्वारे सर्वांगीण शिक्षण पुरवले जाते."
      },
      {
        title: "जलपुरवठा आणि पायाभूत सुविधा",
        content: "रामपूरमध्ये १ स्वतंत्र नळ पाणीपुरवठा योजना, ११ सार्वजनिक हातपंप, ४ आरओ प्लांट (२ ग्रामपंचायत मालकीचे), २ साध्या विहिरी, ६२८ वैयक्तिक नळ जोडण्या आणि ७२८ वैयक्तिक बोरवेल यांच्यासह सुदृढ जलसंपत्ती आहे."
      },
      {
        title: "कृषी विकास",
        content: "४२.२५ हेक्टर कृषीयोग्य जमीन आणि २२.२८ हेक्टर सिंचित क्षेत्र असून, भवानी नाला आणि वैयक्तिक बोरवेलद्वारे शेतीस पाठबळ मिळते. गावात कृषी उत्पन्न बाजार समिती देखील आहे."
      },
      {
        title: "सामाजिक आणि समुदाय सुविधा",
        content: "गावात भवानी मंदिर, हनुमान मंदिर, सार्वजनिक वाचनालय, तुकडोजी महाराज देवस्थान, गजानन महाराज मंदिर, योगा शेड, सामुहिक ध्यान केंद्र आणि २७ सक्रिय बचत गट यासारख्या सामुदायिक सुविधा उपलब्ध आहेत."
      }
    ]
  };

  const modalContent = currentLanguage === "mr" ? extendedContent.mr : extendedContent.en;

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-green-50 text-green-600 rounded-full mb-4">
          <span className="text-sm">{t.about.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.about.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 mx-auto"></div>
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
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors duration-200 font-bold text-lg underline decoration-2 underline-offset-4"
          >
            <Info className="w-5 h-5" />
            {currentLanguage === "mr" ? "अधिक माहिती" : "More Details"}
          </button>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="images\about.jpg"
              alt={currentLanguage === "mr" ? "रामपूर ग्रामपंचायत" : "Rampur Grampanchayat"}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-500 via-yellow-500 to-orange-500 rounded-xl -z-10"></div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
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
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 rounded-t-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                  {currentLanguage === "mr" ? "रामपूर ग्रामपंचायत तपशील" : "Rampur Grampanchayat Details"}
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
                <div key={i} className="border-l-4 border-green-500 pl-3">
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
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
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