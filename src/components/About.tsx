import { Building2, Users, TrendingUp, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

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
        <div className="pt-0">
          <p className="text-gray-700 mb-6 leading-relaxed">
            {t.about.para1}
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {t.about.para2}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t.about.para3}
          </p>
        </div>

        {/* Image Section - No changes */}
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
    </div>
  );
}