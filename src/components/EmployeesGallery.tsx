import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, ChevronLeft, ChevronRight, X, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
 
export function EmployeesGallery() {
  const { t, language } = useLanguage(); // Get both t and language from context
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const employees = [
    {
      id: 1,
      name: language === 'mr' ? 'राजेश कुमार सिंह' : 'Rajesh Kumar Singh',
      designation: t.employees.designations.bdo,
      department: t.employees.departments.administration,
      email: 'bdo.rajeshkumar@panchayatsamiti.gov.in',
      phone: '+91 98765 43210',
      image: 'images/employee1.jpg',
      description: language === 'mr'
        ? 'ब्लॉकच्या एकूण प्रशासन आणि विकासासाठी जबाबदार. सर्व सरकारी योजनांच्या अंमलबजावणीवर देखरेख करतो आणि विविध विभागांमधील समन्वय सुनिश्चित करतो.'
        : 'Responsible for overall administration and development of the block. Oversees implementation of all government schemes and ensures coordination between different departments.',
      experience: language === 'mr'
        ? 'ग्रामीण विकासात 15 वर्षे अनुभव'
        : '15 years in rural development',
      qualifications: language === 'mr'
        ? 'पब्लिक अॅडमिनिस्ट्रेशनमध्ये एम.ए., ग्रामीण विकासात डिप्लोमा'
        : 'M.A. in Public Administration, Diploma in Rural Development'
    },
    {
      id: 2,
      name: language === 'mr' ? 'प्रिया शर्मा पटेल' : 'Priya Sharma Patel',
      designation: t.employees.designations.secretary,
      department: t.employees.departments.documentation,
      email: 'secretary.priyasharma@panchayatsamiti.gov.in',
      phone: '+91 98765 43211',
      image: 'images/SARPANCH.jpg',
      description: language === 'mr'
        ? 'सर्व अधिकृत दस्तऐवजीकरण, रेकॉर्ड देखभाल आणि प्रशासकीय पत्रव्यवहार व्यवस्थापित करते. बैठक आणि निर्णयांचे योग्य दस्तऐवजीकरण सुनिश्चित करते.'
        : 'Manages all official documentation, records maintenance, and administrative correspondence. Ensures proper documentation of meetings and decisions.',
      experience: language === 'mr'
        ? 'प्रशासकीय सेवांमध्ये 12 वर्षे अनुभव'
        : '12 years in administrative services',
      qualifications: language === 'mr'
        ? 'बी.कॉम, एलएलबी, ऑफिस मॅनेजमेंटमध्ये डिप्लोमा'
        : 'B.Com, LLB, Diploma in Office Management'
    },
    {
      id: 3,
      name: language === 'mr' ? 'अमित कुमार वर्मा' : 'Amit Kumar Verma',
      designation: t.employees.designations.agriculture,
      department: t.employees.departments.agriculture,
      email: 'agriculture.amitverma@panchayatsamiti.gov.in',
      phone: '+91 98765 43212',
      image: 'images/employee3.jpg',
      description: language === 'mr'
        ? 'शेतकऱ्यांना तांत्रिक मार्गदर्शन प्रदान करतो, कृषी योजना लागू करतो आणि आधुनिक शेती तंत्रज्ञानाला प्रोत्साहन देतो. शेतकऱ्यांसाठी प्रशिक्षण कार्यक्रम आयोजित करतो.'
        : 'Provides technical guidance to farmers, implements agricultural schemes, and promotes modern farming techniques. Conducts training programs for farmers.',
      experience: language === 'mr'
        ? 'कृषी विस्तार सेवेत 10 वर्षे अनुभव'
        : '10 years in agricultural extension',
      qualifications: language === 'mr'
        ? 'बी.एससी. कृषी, एम.एससी. कृषिशास्त्र'
        : 'B.Sc. Agriculture, M.Sc. Agronomy'
    },
    {
      id: 4,
      name: language === 'mr' ? 'सुमित लक्ष्मण देवी' : 'Sumit Laxman Devi',
      designation: t.employees.designations.welfare,
      department: t.employees.departments.welfare,
      email: 'welfare.sumitdevi@panchayatsamiti.gov.in',
      phone: '+91 98765 43213',
      image: 'images/employee4.jpeg',
      description: language === 'mr'
        ? 'दुर्बल घटकांसाठी सामाजिक कल्याण योजना लागू करतो. विविध सरकारी कार्यक्रमांद्वारे महिला आणि मुलांच्या सक्षमीकरणासाठी काम करतो.'
        : 'Implements social welfare schemes for marginalized communities. Works towards empowerment of women and children through various government programs.',
      experience: language === 'mr'
        ? 'सामाजिक कार्यात 8 वर्षे अनुभव'
        : '8 years in social work',
      qualifications: language === 'mr'
        ? 'एमएसडब्ल्यू, बाल विकासात डिप्लोमा'
        : 'MSW, Diploma in Child Development'
    },
    {
      id: 5,
      name: language === 'mr' ? 'विक्रम जयंत पटेल' : 'Vikram Jayant Patel',
      designation: t.employees.designations.engineering,
      department: t.employees.departments.infrastructure,
      email: 'engineering.vikrampatel@panchayatsamiti.gov.in',
      phone: '+91 98765 43214',
      image: 'images/employee5.jpeg',
      description: language === 'mr'
        ? 'रस्ते, इमारती आणि पाणीपुरवठा प्रणालींसह ग्रामीण पायाभूत सुविधा प्रकल्पांच्या बांधकाम आणि देखभालीवर देखरेख करतो.'
        : 'Oversees construction and maintenance of rural infrastructure projects including roads, buildings, and water supply systems.',
      experience: language === 'mr'
        ? 'सिव्हिल अभियांत्रिकीत 14 वर्षे अनुभव'
        : '14 years in civil engineering',
      qualifications: language === 'mr'
        ? 'बी.ई. सिव्हिल इंजिनिअरिंग, प्रकल्प व्यवस्थापनात पीजीडी'
        : 'B.E. Civil Engineering, PGD in Project Management'
    },
    {
      id: 6,
      name: language === 'mr' ? 'अंकित राजेंद्र देशमुख' : 'Ankit Rajendra Desai',
      designation: t.employees.designations.education,
      department: t.employees.departments.education,
      email: 'education.ankitdesai@panchayatsamiti.gov.in',
      phone: '+91 98765 43215',
      image: 'images/employee6.jpeg',
      description: language === 'mr'
        ? 'शैक्षणिक कार्यक्रमांचे समन्वयन करतो, शाळा पायाभूत सुविधांचे निरीक्षण करतो आणि ग्रामीण भागातील विद्यार्थ्यांसाठी शिष्यवृत्ती योजना लागू करतो.'
        : 'Coordinates educational programs, monitors school infrastructure, and implements scholarship schemes for students from rural areas.',
      experience: language === 'mr'
        ? 'शैक्षणिक प्रशासनात 9 वर्षे अनुभव'
        : '9 years in educational administration',
      qualifications: language === 'mr'
        ? 'एम.ए. एज्युकेशन, बी.एड.'
        : 'M.A. Education, B.Ed.'
    },
    {
      id: 7,
      name: language === 'mr' ? 'मानवी सुनील गुप्ता' : 'Manavi Sunil Gupta',
      designation: t.employees.designations.finance,
      department: t.employees.departments.finance,
      email: 'finance.manavigupta@panchayatsamiti.gov.in',
      phone: '+91 98765 43216',
      image: 'images/employee7.jpeg',
      description: language === 'mr'
        ? 'पंचायत समितीची आर्थिक कार्ये, अर्थसंकल्प आणि खाती व्यवस्थापित करते. निधीचा योग्य वापर सुनिश्चित करते आणि आर्थिक रेकॉर्ड राखते.'
        : 'Manages financial operations, budgeting, and accounts of the Panchayat Samiti. Ensures proper utilization of funds and maintains financial records.',
      experience: language === 'mr'
        ? 'आर्थिक व्यवस्थापनात 11 वर्षे अनुभव'
        : '11 years in financial management',
      qualifications: language === 'mr'
        ? 'एम.कॉम, सीए इंटर, आर्थिक व्यवस्थापनात डिप्लोमा'
        : 'M.Com, CA Inter, Diploma in Financial Management'
    },
    {
      id: 8,
      name: language === 'mr' ? 'कविता सुरेश रेड्डी' : 'Kavita Suresh Reddy',
      designation: t.employees.designations.health,
      department: t.employees.departments.health,
      email: 'health.kavitareddy@panchayatsamiti.gov.in',
      phone: '+91 98765 43217',
      image: 'images/employee8.jpeg',
      description: language === 'mr'
        ? 'आरोग्यसेवा, लसीकरण कार्यक्रम आणि आरोग्य जागरूकता मोहिमांचे समन्वयन करते. प्राथमिक आरोग्य केंद्रांच्या कार्यप्रणालीवर देखरेख करते.'
        : 'Coordinates healthcare services, immunization programs, and health awareness campaigns. Monitors functioning of primary health centers.',
      experience: language === 'mr'
        ? 'सार्वजनिक आरोग्यात 7 वर्षे अनुभव'
        : '7 years in public health',
      qualifications: language === 'mr'
        ? 'बी.एससी. नर्सिंग, एमपीएच'
        : 'B.Sc. Nursing, MPH'
    },
    {
      id: 9,
      name: language === 'mr' ? 'संजय रमेश मेहता' : 'Sanjay Ramesh Mehta',
      designation: t.employees.designations.planning,
      department: t.employees.departments.planning,
      email: 'planning.sanjaymehta@panchayatsamiti.gov.in',
      phone: '+91 98765 43218',
      image: 'images/employee9.jpeg',
      description: language === 'mr'
        ? 'विकास प्रकल्पांच्या नियोजन आणि मॉनिटरिंगसाठी जबाबदार. वार्षिक योजना तयार करतो आणि प्रकल्प अंमलबजावणीसाठी विविध विभागांशी समन्वय साधतो.'
        : 'Responsible for planning and monitoring of development projects. Prepares annual plans and coordinates with various departments for project implementation.',
      experience: language === 'mr'
        ? 'विकास नियोजनात 13 वर्षे अनुभव'
        : '13 years in development planning',
      qualifications: language === 'mr'
        ? 'एम.ए. अर्थशास्त्र, ग्रामीण नियोजनात पीजीडी'
        : 'M.A. Economics, PGD in Rural Planning'
    },
  ];
 
  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(employees.length / cardsPerSlide);
 
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
 
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
 
  const getVisibleEmployees = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return employees.slice(startIndex, startIndex + cardsPerSlide);
  };
 
  const openEmployeeModal = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };
 
  const closeEmployeeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };
 
  // Function to truncate long text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
 
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
          <span className="text-sm">{t.employees.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.employees.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.employees.description}
        </p>
      </div>
 
      {/* Slider Container */}
      <div className="relative">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Left Arrow */}
          {totalSlides > 1 && (
            <button
              onClick={prevSlide}
              style={{ marginTop: "150px" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-green-50 border-2 border-gray-300 hover:border-green-500"
              aria-label={language === 'mr' ? 'मागील स्लाइड' : 'Previous slide'}
            >
              <ChevronLeft className="w-8 h-8 text-gray-800 hover:text-green-700" />
            </button>
          )}
 
          {/* Employee Cards with Fixed Height */}
          {getVisibleEmployees().map((employee) => (
            <Card
              key={employee.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-none flex flex-col h-[480px]" // Fixed height
            >
              {/* Image Section - UPDATED */}
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 h-39 flex items-center justify-center overflow-hidden flex-shrink-0">
                <div className="w-full h-full flex items-center justify-center">
                  <ImageWithFallback
                    src={employee.image}
                    alt={employee.name}
                    className="max-w-full max-h-full object-contain p-2"
                    fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' fill='white'%3E👨‍💼%3C/text%3E%3C/svg%3E"
                  />
                </div>
                <Badge className="absolute top-4 right-4 bg-white text-blue-700 text-xs font-medium">
                  {employee.department}
                </Badge>
              </div>
             
              {/* Content Section - Fixed height with flex layout */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-gray-900 mb-1 font-semibold text-lg">
                  {employee.name}
                </h3>
                <p className="text-blue-600 mb-4 font-medium">
                  {employee.designation}
                </p>
               
                {/* Description with Read More */}
                <div className="mb-4 flex-grow">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {truncateText(employee.description, 120)}
                  </p>
                  {employee.description.length > 120 && (
                    <button
                      onClick={() => openEmployeeModal(employee)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-flex items-center gap-1"
                    >
                      {language === 'mr' ? 'अधिक वाचा' : 'Read More'}
                      <Info className="w-3 h-3" />
                    </button>
                  )}
                </div>
               
                {/* Contact Info */}
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate text-xs">{employee.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs">{employee.phone}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
 
          {/* Right Arrow */}
          {totalSlides > 1 && (
            <button
              onClick={nextSlide}
              style={{ marginTop: "150px" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-green-50 border-2 border-gray-300 hover:border-green-500"
              aria-label={language === 'mr' ? 'पुढील स्लाइड' : 'Next slide'}
            >
              <ChevronRight className="w-8 h-8 text-gray-800 hover:text-green-700" />
            </button>
          )}
        </div>
 
        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={language === 'mr' ? `स्लाइड ${index + 1} वर जा` : `Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
 
      {/* Employee Detail Modal - UPDATED IMAGE STYLING */}
      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedEmployee.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {selectedEmployee.designation}
                  </p>
                </div>
                <button
                  onClick={closeEmployeeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
 
            {/* Modal Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-shrink-0">
                  {/* Updated modal image container */}
                  <div className="w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <ImageWithFallback
                      src={selectedEmployee.image}
                      alt={selectedEmployee.name}
                      className="max-w-full max-h-full object-contain p-1"
                      fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' fill='white'%3E👨‍💼%3C/text%3E%3C/svg%3E"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <Badge className="bg-blue-100 text-blue-700 mb-4">
                    {selectedEmployee.department}
                  </Badge>
                 
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {language === 'mr' ? 'अनुभव' : 'Experience'}
                      </h4>
                      <p className="text-gray-700">{selectedEmployee.experience}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {language === 'mr' ? 'पात्रता' : 'Qualifications'}
                      </h4>
                      <p className="text-gray-700">{selectedEmployee.qualifications}</p>
                    </div>
                  </div>
                </div>
              </div>
 
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {language === 'mr' ? 'कार्याचे वर्णन' : 'Role Description'}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedEmployee.description}
                </p>
              </div>
 
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {language === 'mr' ? 'संपर्क माहिती' : 'Contact Information'}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">
                        {language === 'mr' ? 'ईमेल' : 'Email'}
                      </p>
                      <p className="text-gray-900">{selectedEmployee.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">
                        {language === 'mr' ? 'फोन' : 'Phone'}
                      </p>
                      <p className="text-gray-900">{selectedEmployee.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
              <div className="flex justify-end">
                <button
                  onClick={closeEmployeeModal}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  {language === 'mr' ? 'बंद करा' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}