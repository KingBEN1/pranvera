import { useLanguage } from '../../context/LanguageContext';
import { Planet } from '../planets/Planet';
import { Award, Rocket, Globe2, TrendingUp } from 'lucide-react';

export const AchievementsSection = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Award,
      title: t('achievement_1_title'),
      description: t('achievement_1_desc'),
      highlight: true,
    },
    {
      icon: Rocket,
      title: t('achievement_2_title'),
      description: t('achievement_2_desc'),
    },
    {
      icon: Globe2,
      title: t('achievement_3_title'),
      description: t('achievement_3_desc'),
    },
    {
      icon: TrendingUp,
      title: t('achievement_4_title'),
      description: t('achievement_4_desc'),
    },
  ];

  return (
    <section id="achievements" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute top-0 left-0 animate-float-1">
            <Planet type="asteroid" size={80} />
          </div>
          <div className="absolute top-20 right-0 animate-float-2">
            <Planet type="asteroid" size={60} />
          </div>
          <div className="absolute bottom-0 left-1/4 animate-float-3">
            <Planet type="asteroid" size={70} />
          </div>
          <div className="absolute bottom-20 right-1/4 animate-float-4">
            <Planet type="asteroid" size={90} className="opacity-80" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-5">
            <Planet type="asteroid" size={120} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider text-center"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            {t('achievements_title')}
          </h2>

          <p className="text-xl text-purple-400 mb-12 font-semibold text-center">
            {t('achievements_subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-md border rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                    achievement.highlight
                      ? 'border-purple-400/50 bg-purple-600/10'
                      : 'border-white/10'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    achievement.highlight ? 'bg-purple-600/40' : 'bg-purple-600/20'
                  }`}>
                    <Icon className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
