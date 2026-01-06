import { useLanguage } from '../../context/LanguageContext';
import { Planet } from '../planets/Planet';

export const AboutSection = () => {
  const { t } = useLanguage();

  const milestones = [
    { year: '2015', label: t('about_milestone_1') },
    { year: '2019', label: t('about_milestone_2') },
    { year: '2021', label: t('about_milestone_3') },
    { year: '2023', label: t('about_milestone_4') },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30">
        <Planet type="earth" size={400} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            {t('about_title')}
          </h2>

          <p className="text-xl text-purple-400 mb-8 font-semibold">
            {t('about_intro')}
          </p>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
            <p>{t('about_p3')}</p>
            <p>{t('about_p4')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {milestone.year}
                </div>
                <div className="text-gray-300">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
