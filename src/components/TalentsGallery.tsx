import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export function TalentsGallery() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const talents = [
    {
      id: 1,
      name: 'Ravi Kumar',
      achievement: 'National Science Olympiad Gold Medal',
      category: t.talents.categories.education,
      year: '2024',
      description: 'Secured 1st position in the National Science Olympiad representing our region.',
      icon: '🎓',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      name: 'Meera Patel',
      achievement: 'State Level Sports Championship',
      category: t.talents.categories.sports,
      year: '2024',
      description: 'Won gold medal in 400m sprint at State Athletic Championship.',
      icon: '🏃‍♀️',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      name: 'Arjun Singh',
      achievement: 'Best Organic Farmer Award',
      category: t.talents.categories.agriculture,
      year: '2024',
      description: 'Recognized for innovative organic farming practices and high yield production.',
      icon: '🌾',
      color: 'from-amber-500 to-amber-600',
    },
    {
      id: 4,
      name: 'Priyanka Sharma',
      achievement: 'State Youth Parliament Winner',
      category: t.talents.categories.debate,
      year: '2024',
      description: 'Best speaker at State Youth Parliament on social development issues.',
      icon: '🎤',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 5,
      name: 'Karan Desai',
      achievement: 'Traditional Art Excellence Award',
      category: t.talents.categories.arts,
      year: '2023',
      description: 'Recognized for preserving and promoting traditional art forms.',
      icon: '🎨',
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 6,
      name: 'Sneha Reddy',
      achievement: 'Young Entrepreneur Award',
      category: t.talents.categories.business,
      year: '2023',
      description: 'Started successful self-help group supporting women empowerment.',
      icon: '💼',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      id: 7,
      name: 'Rohit Verma',
      achievement: 'District Chess Champion',
      category: t.talents.categories.sports,
      year: '2023',
      description: 'Won district level chess championship and qualified for state level.',
      icon: '♟️',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 8,
      name: 'Anjali Gupta',
      achievement: 'Community Service Recognition',
      category: t.talents.categories.socialService,
      year: '2023',
      description: 'Outstanding contribution in village cleanliness and awareness campaigns.',
      icon: '🤝',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 9,
      name: 'Vikash Yadav',
      achievement: 'District Level Poetry Competition',
      category: t.talents.categories.literature,
      year: '2023',
      description: 'Winner of district level Hindi poetry competition.',
      icon: '📚',
      color: 'from-rose-500 to-rose-600',
    },
    // Additional talents for second slide
    {
      id: 10,
      name: 'Sanjay Mehta',
      achievement: 'National Mathematics Olympiad',
      category: t.talents.categories.education,
      year: '2024',
      description: 'Secured 2nd position in National Mathematics Olympiad with perfect score.',
      icon: '🧮',
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 11,
      name: 'Neha Joshi',
      achievement: 'State Badminton Champion',
      category: t.talents.categories.sports,
      year: '2024',
      description: 'Won state level badminton championship in singles category.',
      icon: '🏸',
      color: 'from-green-600 to-green-700',
    },
    {
      id: 12,
      name: 'Rajesh Nair',
      achievement: 'Innovative Farming Techniques',
      category: t.talents.categories.agriculture,
      year: '2024',
      description: 'Developed water-saving irrigation system for small farmers.',
      icon: '💧',
      color: 'from-amber-600 to-amber-700',
    },
    {
      id: 13,
      name: 'Pooja Iyer',
      achievement: 'National Debate Competition',
      category: t.talents.categories.debate,
      year: '2024',
      description: 'Best debater in National Youth Parliament on climate change.',
      icon: '🗣️',
      color: 'from-purple-600 to-purple-700',
    },
    {
      id: 14,
      name: 'Manoj Kumar',
      achievement: 'Traditional Music Preservation',
      category: t.talents.categories.arts,
      year: '2023',
      description: 'Revived and documented traditional folk music of the region.',
      icon: '🎵',
      color: 'from-pink-600 to-pink-700',
    },
    {
      id: 15,
      name: 'Sunita Devi',
      achievement: 'Rural Entrepreneurship Award',
      category: t.talents.categories.business,
      year: '2023',
      description: 'Established successful handicraft business employing 50 women.',
      icon: '🏪',
      color: 'from-indigo-600 to-indigo-700',
    },
    {
      id: 16,
      name: 'Amit Sharma',
      achievement: 'District Cricket Captain',
      category: t.talents.categories.sports,
      year: '2023',
      description: 'Led district team to victory in inter-district cricket tournament.',
      icon: '🏏',
      color: 'from-cyan-600 to-cyan-700',
    },
    {
      id: 17,
      name: 'Kavita Singh',
      achievement: 'Social Welfare Excellence',
      category: t.talents.categories.socialService,
      year: '2023',
      description: 'Organized health camps and education drives in remote villages.',
      icon: '❤️',
      color: 'from-orange-600 to-orange-700',
    },
    {
      id: 18,
      name: 'Rahul Verma',
      achievement: 'Short Story Writing Competition',
      category: t.talents.categories.literature,
      year: '2023',
      description: 'Winner of national level short story writing competition.',
      icon: '✍️',
      color: 'from-rose-600 to-rose-700',
    },
  ];

  const cardsPerSlide = 9; // 9 cards per slide (3 rows × 3 cards)
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
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-orange-50 text-orange-600 rounded-full mb-4">
          <span className="text-sm">{t.talents.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.talents.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.talents.description}
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Cards Grid - 3 columns for 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Left Arrow - Centered */}
          {totalSlides > 1 && (
            <button
              onClick={prevSlide}
              style={{ marginTop: "550px" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-orange-50 border-2 border-gray-300 hover:border-orange-500"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8 text-gray-800 hover:text-orange-700" />
            </button>
          )}

          {/* Talent Cards - 9 cards displayed in 3×3 grid */}
          {getVisibleTalents().map((talent) => (
            <Card
              key={talent.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-none h-full"
            >
              <div className={`relative bg-gradient-to-br ${talent.color} h-40 flex items-center justify-center`}>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {talent.icon}
                </div>
                <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900">
                  {talent.year}
                </Badge>
                <div className="absolute top-4 left-4">
                  <Trophy className="w-6 h-6 text-white/80" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-gray-900 flex-1">{talent.name}</h3>
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                </div>
                
                <Badge variant="outline" className="mb-3 text-xs">
                  {talent.category}
                </Badge>

                <p className="text-blue-600 mb-3 font-medium">{talent.achievement}</p>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {talent.description}
                </p>
              </div>
            </Card>
          ))}

          {/* Right Arrow - Centered */}
          {totalSlides > 1 && (
            <button
              onClick={nextSlide}
              style={{ marginTop: "550px" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-orange-50 border-2 border-gray-300 hover:border-orange-500"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8 text-gray-800 hover:text-orange-700" />
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
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-orange-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-xl border border-gray-200">
          <Award className="w-12 h-12 text-orange-500" />
          <div className="text-left">
            <h3 className="text-gray-900 mb-1">{t.talents.nominate.title}</h3>
            <p className="text-sm text-gray-600">
              {t.talents.nominate.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}