import { useLanguage } from '../../context/LanguageContext';
import { Planet } from '../planets/Planet';

export const VisionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="vision" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40">
        <Planet type="exoplanet" size={450} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            {t('vision_title')}
          </h2>

          <p className="text-xl text-purple-400 mb-12 font-semibold">
            {t('vision_subtitle')}
          </p>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
            <p>{t('vision_p1')}</p>
            <p>{t('vision_p2')}</p>
            <p>{t('vision_p3')}</p>
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-purple-400/30 rounded-lg p-8">
            <p className="text-2xl text-white italic mb-4 leading-relaxed">
              {t('vision_quote')}
            </p>
            <p className="text-gray-400 text-lg">
              {t('vision_quote_author')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
