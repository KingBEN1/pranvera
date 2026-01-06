import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sq' : 'en');
  };

  const navItems = [
    { id: 'home', label: t('nav_home') },
    { id: 'about', label: t('nav_about') },
    { id: 'research', label: t('nav_research') },
    { id: 'outreach', label: t('nav_outreach') },
    { id: 'achievements', label: t('nav_achievements') },
    { id: 'vision', label: t('nav_vision') },
    { id: 'contact', label: t('nav_contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05060A]/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-white tracking-wider hover:text-purple-400 transition-colors"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            PRANVERA HYSENI
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <Globe size={16} className="text-gray-300" />
              <span className="text-gray-300 text-sm font-semibold">
                {language === 'en' ? 'EN' : 'SQ'}
              </span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <Globe size={14} className="text-gray-300" />
              <span className="text-gray-300 text-xs font-semibold">
                {language === 'en' ? 'EN' : 'SQ'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
