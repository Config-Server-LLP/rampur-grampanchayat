import { Card } from "./ui/card";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TalentsGallery() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const talents = [
    {
      id: 1,
      name: "आस्थापना विभाग",
      image: "images/card1.jpg",
      officers: [
        "श्री. चंद्रहास पाटील (सहा. प्रशासन अधिकारी)",
        "श्री. अनिलकुमार मडावी (कनिष्ठ प्रशासन अधिकारी)",
        "श्री. जितेंद्र अनकर (विस्तार अधि. आरोग्य)",
        "श्री. संजय ठाकुर (विस्तार अधि. सांखिकी)",
        "श्री. अमोल ईडपाची (वरी. सहाय्यक)",
        "श्री. अभय मदनकर (कनिष्ठ सहाय्यक)",
        "श्री. सचिन चव्हाण (कनिष्ठ सहाय्यक)",
        "श्रीमती. राजश्री हेमके (कनिष्ठ सहाय्यक)",
        "श्री. भुषण चावरिया (कनिष्ठ सहाय्यक)",
        "श्री. विजय सहारे (परिचर)",
        "श्रीमती. अल्का वरखडे (परिचर)",
      ],
    },

    {
      id: 2,
      name: "लेखा विभाग",
      image: "images/card2.jpg",
      officers: [
        "श्री. विजय राठोड (सहा. लेखा अधिकारी)",
        "श्रीमती. सोनाली दुधमोगरे (कनिष्ठ लेखा अधिकारी)",
        "श्री. श्रीकांत तुंगीडवार (वरी. सहाय्यक)",
        "श्री. चंद्रशेखर पदम (कनिष्ठ सहाय्यक)",
      ],
    },

    {
      id: 3,
      name: "पंचायत विभाग",
      image: "images/card3.jpg",
      officers: [
        "श्री. प्रभाकर वाघ (विस्तार अधि. पंचा)",
        "श्री. यशवंत लिखार (विस्तार अधि. पंचा)",
        "श्री. प्रशांत मंडपे (वरिष्ठ सहाय्यक)",
        "श्री. राजेंद्र भोंगळे (कनिष्ठ सहाय्यक)",
        "श्री. दिनेश जीभे (कनिष्ठ सहाय्यक)",
        "श्री. सौरभ पौनीकर (तालुका व्यवस्थापक ASSK)",
        "श्री. सुमेधकुमार गजभिये (तालुका व्यवस्थापक RGSA)",
        "श्री. अजय गजभिये (सहा. लेखा)",
        "श्री. अभय वासनिक (तांत्रिक सहाय्यक)",
      ],
    },

    {
      id: 4,
      name: "बांधकाम विभाग",
      image: "images/card4.jpg",
      officers: [
        "श्री. संजय सावरकर (कनिष्ठ अभियंता)",
        "श्री. रोहित चरपे (कनिष्ठ अभियंता)",
        "श्री. सुदर्शन हिंगणे (स्थापत्य अभियांत्रिकी सहा.)",
        "श्री. जयसिंग पवार (वरिष्ठ सहाय्यक)",
        "श्री. विनोद भोगे (संगणक परी.)",
        "श्री. निशांत येवले (स्थापत्य)",
      ],
    },

    {
      id: 5,
      name: "शिक्षण विभाग",
      image: "images/card5.jpg",
      officers: [
        "श्री. चंद्रकांत देशमुख (कृषी अधिकारी)",
        "श्रीमती गीतांजली नांदुरकर (कृषी अधिकारी)",
        "श्री. पद्माकर बाळापुरे (विस्तार अधिकारी कृषी)",
        "श्रीमती किर्ती बोंद्रे (विस्तार अधिकारी कृषी)",
      ],
    },

    {
      id: 6,
      name: "कृषी विभाग",
      image: "images/card6.jpg",
      officers: [
        "श्री. चंद्रकांत देशमुख (कृषी अधिकारी)",
        "श्रीमती गीतांजली नांदुरकर (कृषी अधिकारी)",
        "श्री. पद्माकर बाळापुरे (विस्तार अधिकारी कृषी)",
        "श्रीमती किर्ती बोंद्रे (विस्तार अधिकारी कृषी)",
      ],
    },

    {
      id: 7,
      name: "महिला व बालकल्याण विभाग",
      image: "images/card7.jpg",
      officers: [
        "श्री. किशोर खेडकर (म.बा.वि. प्रकल्प अधिकारी)",
        "श्रीमती. सरोज भड (वरी. सहाय्यक)",
        "श्रीमती. प्रीती मानकर (पर्यवेक्षिका)",
        "श्रीमती. अश्वनी उईके (पर्यवेक्षिका)",
        "श्रीमती. उज्वला वरठी (पर्यवेक्षिका)",
        "श्रीमती. स्मिता लेहकर (पर्यवेक्षिका)",
      ],
    },

    {
      id: 8,
      name: "म.गां.रो.हमी योजना",
      image: "images/card8.jpg",
      officers: [
        "श्री. नितेश हारोडे (सहा. कार्यक्रम अधिकारी)",
        "श्री. रवी भगत (संगणक परिचालक)",
        "श्री. नंदकिशोर रामटेके (तांत्रिक सहा. स्थापत्य)",
        "श्री. दिनेश कामडी (तांत्रिक सहा. कृषी)",
        "श्री. मयूर घारड (तांत्रिक सहा. स्थापत्य)",
      ],
    },

    {
      id: 9,
      name: "म.रा.ग्रा.जि. अभियान",
      image: "images/card9.jpg",
      officers: [
        "श्री. संदेश लामसोंगे (तालुका अभियान व्यवस्थापक)",
        "श्री. रोषण लखकडर (तालुका व्यवस्थापक)",
        "श्री. युवराज पडोले (प्रभाग समन्वयक)",
        "श्री. अंकुश शुक्ला (प्रभाग समन्वयक)",
        "श्रीमती. सुवर्णलता दिवटे (प्रभाग समन्वयक)",
      ],
    },

    {
      id: 10,
      name: "पशुसंवर्धन विभाग",
      image: "images/card10.jpg",
      officers: [
        "श्री. डॉ. किशोर भदाणे",
        "श्रीमती. सरोज भड (वरी. सहाय्यक)",
        "श्रीमती. प्रीती मानकर (पर्यवेक्षिका)",
        "श्रीमती. अश्वनी उईके (पर्यवेक्षिका)",
        "श्रीमती. उज्वला वरठी (पर्यवेक्षिका)",
        "श्रीमती. स्मिता लेहकर (पर्यवेक्षिका)",
      ],
    },

    {
      id: 11,
      name: "स्वच्छ भारत मिशन",
      image: "images/card11.jpg",
      officers: [
        "श्री. मुनेशकुमार दुपारे (तालुका समन्वयक)",
        "श्री. प्रणय गजभिये (स्थापत्य)",
      ],
    },
  ];

  const cardsPerSlide = 9;
  const totalSlides = Math.ceil(talents.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleTalents = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return talents.slice(startIndex, startIndex + cardsPerSlide);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-orange-50 text-orange-600 rounded-full mb-4">
          <span className="text-sm">{t.talents.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.talents.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.talents.description}
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Left Arrow */}
          {totalSlides > 1 && (
            <button
              onClick={prevSlide}
              style={{ marginTop: "850px" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-4 shadow-2xl hover:bg-orange-50 border-2"
            >
              <ChevronLeft className="w-8 h-8 text-gray-800" />
            </button>
          )}

          {/* Cards */}
          {getVisibleTalents().map((talent) => (
            <Card
              key={talent.id}
              className="rounded-xl shadow-md border p-0 overflow-hidden bg-white"
            >
              {/* <div className="w-full aspect-square bg-white flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-full object-contain p-4"
                  fallbackSrc="images/default.png"
                />
              </div> */}
              <div className="w-full flex items-center justify-center py-4">
  <div className="w-48 h-48 flex items-center justify-center">
    <ImageWithFallback
      src={talent.image}
      alt={talent.name}
      className="w-full h-full object-contain"
      fallbackSrc="images/default.png"
    />
  </div>
</div>


              <h3 className="text-center text-xl font-semibold text-gray-900 py-4 border-b">
                {talent.name}
              </h3>

              <ul className="px-6 py-4 text-gray-800 text-sm space-y-1">
                {talent.officers?.map((officer, idx) => (
                  <li key={idx} className="flex items-start gap-6">
                    <span className="text-green-600 text-lg">›</span>
                    {officer}
                  </li>
                ))}
              </ul>
            </Card>
          ))}

          {/* Right Arrow */}
          {totalSlides > 1 && (
            <button
              onClick={nextSlide}
              style={{ marginTop: "850px" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-4 shadow-2xl hover:bg-orange-50 border-2"
            >
              <ChevronRight className="w-8 h-8 text-gray-800" />
            </button>
          )}
        </div>

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full ${
                  index === currentSlide
                    ? "bg-orange-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Nominate Section */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-xl border">
          <Award className="w-12 h-12 text-orange-500" />
          <div className="text-left">
            <h3 className="text-gray-900 mb-1">
              {t.talents.nominate.title}
            </h3>
            <p className="text-sm text-gray-600">
              {t.talents.nominate.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
