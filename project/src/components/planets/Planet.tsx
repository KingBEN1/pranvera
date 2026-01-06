import { useEffect, useRef } from 'react';

interface PlanetProps {
  type: 'star' | 'earth' | 'gas-giant' | 'moon' | 'asteroid' | 'exoplanet' | 'satellite';
  size?: number;
  className?: string;
}

export const Planet = ({ type, size = 300, className = '' }: PlanetProps) => {
  const planetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const planet = planetRef.current;
    if (!planet) return;

    const handleScroll = () => {
      const rect = planet.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top / window.innerHeight);
      const rotation = scrollProgress * 360 * 0.2;
      planet.style.transform = `rotate(${rotation}deg)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPlanet = () => {
    switch (type) {
      case 'star':
        return (
          <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-200 via-orange-400 to-red-600 animate-pulse-slow" />
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-100 via-transparent to-transparent opacity-50 blur-3xl scale-150" />
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-white via-transparent to-transparent opacity-30 blur-2xl" />
          </div>
        );

      case 'earth':
        return (
          <div
            ref={planetRef}
            className={`relative ${className}`}
            style={{ width: size, height: size }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-green-500 to-blue-600 shadow-2xl" />
            <div className="absolute inset-0 rounded-full opacity-30">
              <div className="absolute top-1/4 left-1/3 w-1/4 h-1/3 bg-green-600 rounded-full blur-sm" />
              <div className="absolute top-1/2 right-1/4 w-1/5 h-1/4 bg-green-700 rounded-full blur-sm" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-transparent to-transparent opacity-20" />
            <div className="absolute -inset-2 rounded-full bg-blue-300 opacity-20 blur-xl" />
          </div>
        );

      case 'gas-giant':
        return (
          <div
            ref={planetRef}
            className={`relative ${className}`}
            style={{ width: size, height: size }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-300 via-amber-400 to-orange-500 shadow-2xl" />
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute top-1/4 left-0 right-0 h-1 bg-orange-600 opacity-60" />
              <div className="absolute top-1/3 left-0 right-0 h-2 bg-amber-600 opacity-40" />
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-700 opacity-50" />
              <div className="absolute top-2/3 left-0 right-0 h-2 bg-amber-500 opacity-30" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-transparent to-transparent opacity-10" />
            <div className="absolute -inset-2 rounded-full bg-orange-300 opacity-15 blur-xl" />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[120%] h-6 rounded-full border-4 border-orange-400 opacity-50 rotate-12"
                 style={{ borderRadius: '50%', transform: 'translateX(-50%) perspective(400px) rotateX(75deg)' }} />
          </div>
        );

      case 'moon':
        return (
          <div
            ref={planetRef}
            className={`relative ${className}`}
            style={{ width: size, height: size }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-2xl" />
            <div className="absolute inset-0 rounded-full opacity-40">
              <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gray-600 rounded-full blur-sm" />
              <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-gray-600 rounded-full blur-sm" />
              <div className="absolute bottom-1/4 left-1/2 w-10 h-10 bg-gray-500 rounded-full blur-sm" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-transparent to-transparent opacity-20" />
            <div className="absolute -inset-1 rounded-full bg-gray-300 opacity-10 blur-lg" />
          </div>
        );

      case 'asteroid':
        return (
          <div
            ref={planetRef}
            className={`relative ${className}`}
            style={{ width: size, height: size }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-500 via-stone-600 to-gray-700 shadow-xl"
                 style={{ borderRadius: '45% 55% 52% 48% / 48% 52% 48% 52%' }} />
            <div className="absolute inset-0 opacity-50" style={{ borderRadius: '45% 55% 52% 48% / 48% 52% 48% 52%' }}>
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-stone-800 rounded-full blur-sm" />
              <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-gray-800 rounded-full blur-sm" />
              <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-stone-700 rounded-full blur-sm" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-10"
                 style={{ borderRadius: '45% 55% 52% 48% / 48% 52% 48% 52%' }} />
          </div>
        );

      case 'exoplanet':
        return (
          <div
            ref={planetRef}
            className={`relative ${className}`}
            style={{ width: size, height: size }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-700 shadow-2xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-transparent to-transparent opacity-10" />
            <div className="absolute -inset-4 rounded-full bg-purple-400 opacity-20 blur-2xl" />
            <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
              <div className="absolute top-1/3 left-1/4 w-1/3 h-1/4 bg-purple-800 rounded-full blur-md" />
            </div>
          </div>
        );

      case 'satellite':
        return (
          <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-3/4 h-1/2 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-lg shadow-2xl">
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-20 bg-gradient-to-r from-blue-900 to-blue-700 rounded-sm" />
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-20 bg-gradient-to-l from-blue-900 to-blue-700 rounded-sm" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-1 h-12 bg-gray-400" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-8 h-8 bg-gray-300 rounded-full" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gray-300 opacity-10 blur-xl" />
          </div>
        );

      default:
        return null;
    }
  };

  return renderPlanet();
};
