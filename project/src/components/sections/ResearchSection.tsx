import { useLanguage } from '../../context/LanguageContext';
import { Planet } from '../planets/Planet';
import { Telescope, Atom, Users } from 'lucide-react';

export const ResearchSection = () => {
  const { t } = useLanguage();

  const researchAreas = [
    {
      icon: Telescope,
      title: t('research_area_1_title'),
      description: t('research_area_1_desc'),
    },
    {
      icon: Atom,
      title: t('research_area_2_title'),
      description: t('research_area_2_desc'),
    },
    {
      icon: Users,
      title: t('research_area_3_title'),
      description: t('research_area_3_desc'),
    },
  ];

  const institutions = [
    t('research_institution_1'),
    t('research_institution_2'),
    t('research_institution_3'),
  ];

  return (
    <section id="research" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30">
        <Planet type="gas-giant" size={500} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl ml-auto">
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            {t('research_title')}
          </h2>

          <p className="text-xl text-purple-400 mb-12 font-semibold">
            {t('research_subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Key Collaborations</h3>
            <div className="space-y-3">
              {institutions.map((institution, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>{institution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
