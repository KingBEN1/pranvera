import { LanguageProvider } from './context/LanguageContext';
import { Starfield } from './components/Starfield';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { OutreachSection } from './components/sections/OutreachSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { VisionSection } from './components/sections/VisionSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <Starfield />

        <div className="relative" style={{ zIndex: 10 }}>
          <Navigation />

          <main>
            <HeroSection />
            <AboutSection />
            <ResearchSection />
            <OutreachSection />
            <AchievementsSection />
            <VisionSection />
            <ContactSection />
          </main>

          <footer className="py-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Pranvera Hyseni. All rights reserved. <br /><a href="https://creativespaceks.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline" > Created by Creative Space</a></p>
          </footer>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
