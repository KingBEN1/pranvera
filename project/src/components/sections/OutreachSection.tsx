import { useLanguage } from '../../context/LanguageContext';
import { Planet } from '../planets/Planet';
import { Presentation, Eye, GraduationCap, Building2 } from 'lucide-react';

export const OutreachSection = () => {
  const { t } = useLanguage();

  const initiatives = [
    {
      icon: Presentation,
      title: t('outreach_moon_1_title'),
      description: t('outreach_moon_1_desc'),
    },
    {
      icon: Eye,
      title: t('outreach_moon_2_title'),
      description: t('outreach_moon_2_desc'),
    },
    {
      icon: GraduationCap,
      title: t('outreach_moon_3_title'),
      description: t('outreach_moon_3_desc'),
    },
    {
      icon: Building2,
      title: t('outreach_moon_4_title'),
      description: t('outreach_moon_4_desc'),
    },
  ];

  return (
    <section id="outreach" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative">
          <Planet type="earth" size={300} />
          <div className="absolute top-0 left-full ml-16 animate-orbit-1">
            <Planet type="moon" size={60} />
          </div>
          <div className="absolute bottom-0 right-full mr-16 animate-orbit-2">
            <Planet type="moon" size={50} />
          </div>
          <div className="absolute -top-8 right-full mr-8 animate-orbit-3">
            <Planet type="moon" size={55} />
          </div>
          <div className="absolute -bottom-8 left-full ml-8 animate-orbit-4">
            <Planet type="moon" size={45} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            {t('outreach_title')}
          </h2>

          <p className="text-xl text-purple-400 mb-6 font-semibold">
            {t('outreach_subtitle')}
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            {t('outreach_intro')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{initiative.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{initiative.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-purple-400/30 rounded-lg p-8">
            <p className="text-2xl text-white font-bold">
              {t('outreach_impact')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
