import { useLanguage } from '../../context/LanguageContext';
import { Planet } from '../planets/Planet';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Planet type="star" size={600} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider opacity-0 animate-fade-in-up"
          style={{ fontFamily: 'Orbitron, sans-serif', animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          {t('hero_title')}
        </h1>

        <h2
          className="text-3xl md:text-5xl text-gray-300 mb-8 opacity-0 animate-fade-in-up"
          style={{ fontFamily: 'Orbitron, sans-serif', animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          {t('hero_subtitle')}
        </h2>

        <p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          {t('hero_role')}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            {t('hero_cta_research')}
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-purple-600/80 backdrop-blur-md border border-purple-400/50 text-white rounded-full hover:bg-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            {t('hero_cta_contact')}
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};
