import { Card } from "./ui/card";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TalentsGallery() {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // English version of talents data
  const talentsEn = [
    {
      id: 1,
      name: "Administration Department",
      image: "images/card1.jpg",
      officers: [
        "Shri. Chandrashekhar Patil (Asst. Administration Officer)",
        "Shri. Anilkumar Madavi (Junior Administration Officer)",
        "Shri. Jitendra Ankar (Extension Officer Health)",
        "Shri. Sanjay Thakur (Extension Officer Statistics)",
        "Shri. Amol Idpachi (Senior Assistant)",
        "Shri. Abhay Madankar (Junior Assistant)",
        "Shri. Sachin Chavan (Junior Assistant)",
        "Smt. Rajashree Hemke (Junior Assistant)",
        "Shri. Bhushan Chawaria (Junior Assistant)",
        "Shri. Vijay Sahare (Attendant)",
        "Smt. Alka Varkhade (Attendant)",
      ],
      description: "Responsible for overall administration and management of the Panchayat Samiti office operations and staff coordination. Handles official correspondence, record-keeping, and ensures smooth functioning of all departments in Rajura Panchayat Samiti.",
    },
    {
      id: 2,
      name: "Accounts Department",
      image: "images/card2.jpg",
      officers: [
        "Shri. Vijay Rathod (Asst. Accounts Officer)",
        "Smt. Sonali Dudhmogre (Junior Accounts Officer)",
        "Shri. Shrikant Tungidwar (Senior Assistant)",
        "Shri. Chandrashekhar Padam (Junior Assistant)",
      ],
      description: "Manages financial transactions, budgeting, and accounting operations for all Panchayat Samiti activities. Responsible for fund allocation, financial reporting, and internal auditing of Rajura Panchayat Samiti finances.",
    },
    {
      id: 3,
      name: "Panchayat Department",
      image: "images/card3.jpg",
      officers: [
        "Shri. Prabhakar Wagh (Extension Officer Panchayat)",
        "Shri. Yashwant Likhar (Extension Officer Panchayat)",
        "Shri. Prashant Mandape (Senior Assistant)",
        "Shri. Rajendra Bhongle (Junior Assistant)",
        "Shri. Dinesh Jibhe (Junior Assistant)",
        "Shri. Saurabh Paunikar (Taluka Manager ASSK)",
        "Shri. Sumedhkumar Gajbhiye (Taluka Manager RGSA)",
        "Shri. Ajay Gajbhiye (Asst. Accountant)",
        "Shri. Abhay Vasanik (Technical Assistant)",
      ],
      description: "Coordinates with village panchayats and implements various rural development programs and schemes. Provides guidance and training to Gram Panchayats under Rajura jurisdiction for effective local governance.",
    },
    {
      id: 4,
      name: "Construction Department",
      image: "images/card4.jpg",
      officers: [
        "Shri. Sanjay Sawarkar (Junior Engineer)",
        "Shri. Rohit Charpe (Junior Engineer)",
        "Shri. Sudarshan Hingane (Architectural Engineering Assistant)",
        "Shri. Jaysing Pawar (Senior Assistant)",
        "Shri. Vinod Bhoge (Computer Operator)",
        "Shri. Nishant Yevle (Architect)",
      ],
      description: "Oversees construction projects, infrastructure development, and maintenance of government buildings. Manages rural road construction, public building projects, and water conservation infrastructure in Rajura region.",
    },
    {
      id: 5,
      name: "Education Department",
      image: "images/card5.jpg",
      officers: [
        "Shri. Chandrakant Deshmukh (Agriculture Officer)",
        "Smt. Geetanjali Nandurkar (Agriculture Officer)",
        "Shri. Padmakar Balapure (Extension Officer Agriculture)",
        "Smt. Kirti Bondre (Extension Officer Agriculture)",
      ],
      description: "Implements educational schemes and programs for rural development and skill enhancement. Monitors school infrastructure, manages mid-day meal schemes, and promotes literacy programs in Rajura villages.",
    },
    {
      id: 6,
      name: "Agriculture Department",
      image: "images/card6.jpg",
      officers: [
        "Shri. Chandrakant Deshmukh (Agriculture Officer)",
        "Smt. Geetanjali Nandurkar (Agriculture Officer)",
        "Shri. Padmakar Balapure (Extension Officer Agriculture)",
        "Smt. Kirti Bondre (Extension Officer Agriculture)",
      ],
      description: "Promotes agricultural development, provides technical guidance to farmers, and implements farming schemes. Distributes seeds, fertilizers, and supports modern agricultural practices among Rajura farmers.",
    },
    {
      id: 7,
      name: "Women and Child Welfare Department",
      image: "images/card7.jpg",
      officers: [
        "Shri. Kishor Khedkar (WCD Project Officer)",
        "Smt. Saroj Bhad (Senior Assistant)",
        "Smt. Preeti Mankar (Supervisor)",
        "Smt. Ashwini Uike (Supervisor)",
        "Smt. Ujwala Varthi (Supervisor)",
        "Smt. Smita Lehkar (Supervisor)",
      ],
      description: "Works for the welfare and empowerment of women and children through various government schemes. Implements programs for maternal health, child nutrition, and women's self-help groups in Rajura area.",
    },
    {
      id: 8,
      name: "MGNREGA Scheme",
      image: "images/card8.jpg",
      officers: [
        "Shri. Nitesh Harode (Asst. Program Officer)",
        "Shri. Ravi Bhagat (Computer Operator)",
        "Shri. Nandkishor Ramteke (Technical Assistant Architecture)",
        "Shri. Dinesh Kamdi (Technical Assistant Agriculture)",
        "Shri. Mayur Gharad (Technical Assistant Architecture)",
      ],
      description: "Implements Mahatma Gandhi National Rural Employment Guarantee Act for rural employment generation. Provides guaranteed employment and creates durable community assets in Rajura Panchayat Samiti region.",
    },
    {
      id: 9,
      name: "Rural Governance Abhiyan",
      image: "images/card9.jpg",
      officers: [
        "Shri. Sandesh Lamsonge (Taluka Campaign Manager)",
        "Shri. Roshan Lakhkadar (Taluka Manager)",
        "Shri. Yuvaraj Padole (Division Coordinator)",
        "Shri. Ankush Shukla (Division Coordinator)",
        "Smt. Suvarnalata Divte (Division Coordinator)",
      ],
      description: "Coordinates rural governance initiatives and ensures effective implementation of development programs. Works on capacity building and training for local governance institutions in Rajura.",
    },
    {
      id: 10,
      name: "Animal Husbandry Department",
      image: "images/card10.jpg",
      officers: [
        "Shri. Dr. Kishor Bhadane",
        "Smt. Saroj Bhad (Senior Assistant)",
        "Smt. Preeti Mankar (Supervisor)",
        "Smt. Ashwini Uike (Supervisor)",
        "Smt. Ujwala Varthi (Supervisor)",
        "Smt. Smita Lehkar (Supervisor)",
      ],
      description: "Promotes animal husbandry practices and provides veterinary services to rural communities. Supports dairy farming, livestock development, and animal healthcare services in Rajura villages.",
    },
    {
      id: 11,
      name: "Swachh Bharat Mission",
      image: "images/card11.jpg",
      officers: [
        "Shri. Muneshkumar Dupare (Taluka Coordinator)",
        "Shri. Pranay Gajbhiye (Architect)",
      ],
      description: "Implements Swachh Bharat Mission for cleanliness and sanitation in rural areas. Works on toilet construction, waste management, and sanitation awareness programs in Rajura region.",
    },
  ];

  // Marathi version of talents data
  const talentsMr = [
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
      description: "पंचायत समिती कार्यालयाच्या एकूण प्रशासन आणि व्यवस्थापनासाठी जबाबदार आणि कर्मचाऱ्यांचे समन्वयन करते. अधिकृत पत्रव्यवहार, नोंदवहन हाताळते आणि राजुरा पंचायत समितीतील सर्व विभागांचे सुरळीत कार्य सुनिश्चित करते.",
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
      description: "सर्व पंचायत समिती क्रियाकलापांसाठी आर्थिक व्यवहार, अर्थसंकल्प आणि लेखा कार्यसंचालन व्यवस्थापित करते. राजुरा पंचायत समितीच्या वित्तासाठी निधी वाटप, आर्थिक अहवाल तयार करणे आणि अंतर्गत लेखापरीक्षणासाठी जबाबदार.",
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
      description: "ग्रामपंचायतींशी समन्वय साधते आणि विविध ग्रामीण विकास कार्यक्रम आणि योजना अंमलात आणते. प्रभावी स्थानिक शासनासाठी राजुरा अधिकारक्षेत्रातील ग्रामपंचायतींना मार्गदर्शन आणि प्रशिक्षण प्रदान करते.",
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
      description: "बांधकाम प्रकल्प, पायाभूत सुविधा विकास आणि सरकारी इमारतींच्या देखभालीवर देखरेख करते. राजुरा क्षेत्रातील ग्रामीण रस्ते बांधकाम, सार्वजनिक इमारत प्रकल्प आणि जलसंधारण पायाभूत सुविधा व्यवस्थापित करते.",
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
      description: "ग्रामीण विकास आणि कौशल्य वर्धनासाठी शैक्षणिक योजना आणि कार्यक्रम अंमलात आणते. शाळा पायाभूत सुविधांचे निरीक्षण करते, मिड-डे मील योजना व्यवस्थापित करते आणि राजुरा गावांमध्ये साक्षरता कार्यक्रमांना प्रोत्साहन देते.",
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
      description: "कृषी विकासाला प्रोत्साहन देते, शेतकऱ्यांना तांत्रिक मार्गदर्शन प्रदान करते आणि शेती योजना अंमलात आणते. राजुरा शेतकऱ्यांमध्ये बियाणे, खते वितरित करते आणि आधुनिक शेती पद्धतींना पाठिंबा देतो.",
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
      description: "विविध सरकारी योजनांद्वारे महिला आणि मुलांच्या कल्याण आणि सक्षमीकरणासाठी काम करते. राजुरा क्षेत्रात मातृ आरोग्य, बाल पोषण आणि महिला स्वयंसहाय्य गटांसाठी कार्यक्रम अंमलात आणते.",
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
      description: "ग्रामीण रोजगार निर्मितीसाठी महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी कायदा अंमलात आणते. राजुरा पंचायत समिती क्षेत्रात हमी रोजगार प्रदान करते आणि टिकाऊ समुदाय मालमत्ता निर्माण करते.",
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
      description: "ग्रामीण शासन उपक्रमांचे समन्वयन करते आणि विकास कार्यक्रमांची प्रभावी अंमलबजावणी सुनिश्चित करते. राजुरा मधील स्थानिक शासन संस्थांसाठी क्षमता निर्माण आणि प्रशिक्षणावर कार्य करते.",
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
      description: "पशुसंवर्धन पद्धतींना प्रोत्साहन देते आणि ग्रामीण समुदायांना पशुवैद्यकीय सेवा पुरवते. राजुरा गावांमध्ये दुग्धव्यवसाय, पशुधन विकास आणि प्राणी आरोग्य सेवांना पाठिंबा देतो.",
    },
    {
      id: 11,
      name: "स्वच्छ भारत मिशन",
      image: "images/card11.jpg",
      officers: [
        "श्री. मुनेशकुमार दुपारे (तालुका समन्वयक)",
        "श्री. प्रणय गजभिये (स्थापत्य)",
      ],
      description: "ग्रामीण भागात स्वच्छता आणि स्वच्छतासाठी स्वच्छ भारत मिशन अंमलात आणते. राजुरा क्षेत्रात शौचालय बांधकाम, कचरा व्यवस्थापन आणि स्वच्छता जागरूकता कार्यक्रमांवर कार्य करते.",
    },
  ];

  // Select the appropriate data based on current language
  const talents = language === 'mr' ? talentsMr : talentsEn;

  const cardsPerSlide = 6;
  const totalSlides = Math.ceil(talents.length / cardsPerSlide);

  const nextSlide = () => {
    if (totalSlides > 1) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    if (totalSlides > 1) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const getVisibleTalents = () => {
    const startIndex = currentSlide * cardsPerSlide;
    const visibleTalents = talents.slice(startIndex, startIndex + cardsPerSlide);
    
    // Fill empty slots with placeholder cards if needed
    const emptySlots = cardsPerSlide - visibleTalents.length;
    if (emptySlots > 0) {
      return [
        ...visibleTalents,
        ...Array(emptySlots).fill(null).map((_, index) => ({
          id: `empty-${index}`,
          isEmpty: true
        }))
      ];
    }
    
    return visibleTalents;
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
          {/* Left Arrow - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <button
              onClick={prevSlide}
              style={{ marginTop: "575px" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-4 shadow-2xl hover:bg-orange-50 border-2 border-gray-300 hover:border-orange-500 transition-all duration-300"
              aria-label={language === 'mr' ? 'मागील स्लाइड' : 'Previous slide'}
            >
              <ChevronLeft className="w-8 h-8 text-gray-800 hover:text-orange-700" />
            </button>
          )}

          {/* Cards */}
          {getVisibleTalents().map((talent, index) => (
            talent.isEmpty ? (
              // Empty placeholder card - make it the same height but invisible
              <div key={talent.id} className="opacity-0 pointer-events-none">
                <Card className="rounded-xl shadow-md border p-0 overflow-hidden bg-white h-[650px]" />
              </div>
            ) : (
              <Card
                key={talent.id}
                className="rounded-xl shadow-md border p-0 overflow-hidden bg-white hover:shadow-xl transition-all duration-300 group flex flex-col h-[650px]"
              >
                <div className="w-full flex items-center justify-center py-6">
                  <div className="w-40 h-40 flex items-center justify-center">
                    <ImageWithFallback
                      src={talent.image}
                      alt={talent.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      fallbackSrc="images/default.png"
                    />
                  </div>
                </div>

                <h3 className="text-center text-xl font-semibold text-gray-900 py-4 border-b px-6">
                  {talent.name}
                </h3>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Full Description */}
                  {/* <div className="mb-6"> */}
                  <div className="mb-6 h-20 overflow-hidden">

                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                      {language === 'mr' ? 'विभागाचे वर्णन' : 'Department Description'}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {talent.description}
                    </p>
                  </div>

                  {/* Officers List - Show ALL officers */}
                  <div className="border-t pt-4 flex-grow">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                      {language === 'mr' ? 'कर्मचारी' : 'Staff Members'}
                    </h4>
                    {/* <ul className="text-gray-700 text-sm space-y-2 max-h-48 overflow-y-auto"> */}
                    <ul className="text-gray-700 text-sm space-y-2 h-40 overflow-y-auto">

                      {talent.officers?.map((officer, idx) => (
                        <li key={idx} className="flex items-start gap-2 py-1">
                          <span className="text-green-600 text-lg flex-shrink-0 mt-0.5">›</span>
                          <span className="flex-1 text-xs leading-tight">{officer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )
          ))}

          {/* Right Arrow - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <button
              onClick={nextSlide}
              style={{ marginTop: "575px" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-4 shadow-2xl hover:bg-orange-50 border-2 border-gray-300 hover:border-orange-500 transition-all duration-300"
              aria-label={language === 'mr' ? 'पुढील स्लाइड' : 'Next slide'}
            >
              <ChevronRight className="w-8 h-8 text-gray-800 hover:text-orange-700" />
            </button>
          )}
        </div>

        {/* Slide Indicators - Only show if there are multiple slides */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={language === 'mr' ? `स्लाइड ${index + 1} वर जा` : `Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Nominate Section */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-xl border hover:shadow-lg transition-all duration-300">
          <Award className="w-12 h-12 text-orange-500" />
          <div className="text-left">
            <h3 className="text-gray-900 mb-1 font-semibold">
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