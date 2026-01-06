import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sq';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_research: 'Research',
    nav_outreach: 'Outreach',
    nav_achievements: 'Achievements',
    nav_vision: 'Vision',
    nav_contact: 'Contact',

    hero_title: 'Exploring the Solar System',
    hero_subtitle: 'Inspiring the Next Generation',
    hero_role: 'Planetary Scientist · NASA Research Collaborator · Founder of Astronomy Outreach of Kosovo',
    hero_cta_research: 'View Research',
    hero_cta_contact: 'Get in Touch',

    about_title: 'About Pranvera Hyseni',
    about_intro: 'Kosovar planetary scientist and international science representative',
    about_p1: 'PhD candidate in Planetary Sciences at the University of California, Santa Cruz, focused on asteroids, organic matter, and Solar System evolution.',
    about_p2: 'Active collaborator with NASA-supported research programs, conducting spectroscopic analysis of asteroids using the NASA Infrared Telescope Facility in Hawaii.',
    about_p3: 'Founder and leader of Astronomy Outreach of Kosovo, the largest astronomy initiative in the country, impacting tens of thousands of young people since 2015.',
    about_p4: 'Passionate advocate for women in STEM and science education in the Western Balkans, representing Kosovo on the global scientific stage.',
    about_milestone_1: 'Founded Astronomy Outreach of Kosovo',
    about_milestone_2: 'Began PhD at UC Santa Cruz',
    about_milestone_3: 'NASA Research Collaborations',
    about_milestone_4: 'Asteroid Named in Honor',

    research_title: 'NASA & Research',
    research_subtitle: 'Advancing Planetary Science Through International Collaboration',
    research_area_1_title: 'Asteroid Spectroscopy',
    research_area_1_desc: 'Analyzing asteroid composition using NASA Infrared Telescope Facility to understand Solar System formation and evolution.',
    research_area_2_title: 'Organic Matter Studies',
    research_area_2_desc: 'Investigating organic compounds in primitive bodies to trace the origins of life-building materials in our Solar System.',
    research_area_3_title: 'International Collaborations',
    research_area_3_desc: 'Working with NASA-supported programs and global research teams to expand our understanding of planetary science.',
    research_institution_1: 'University of California, Santa Cruz',
    research_institution_2: 'NASA Infrared Telescope Facility',
    research_institution_3: 'International Research Networks',

    outreach_title: 'Astronomy Outreach of Kosovo',
    outreach_subtitle: 'Building Kosovo\'s Astronomy Community Since 2015',
    outreach_intro: 'The largest astronomy initiative in Kosovo, dedicated to education, inspiration, and bringing the cosmos to every corner of the country.',
    outreach_moon_1_title: 'Public Lectures',
    outreach_moon_1_desc: 'Regular astronomy talks and presentations reaching thousands of students and community members.',
    outreach_moon_2_title: 'Observation Nights',
    outreach_moon_2_desc: 'Telescope viewing events connecting people directly with celestial wonders.',
    outreach_moon_3_title: 'Educational Programs',
    outreach_moon_3_desc: 'Workshops, school programs, and training for the next generation of scientists.',
    outreach_moon_4_title: 'Observatory Vision',
    outreach_moon_4_desc: 'Working toward establishing Kosovo\'s first national observatory and planetarium.',
    outreach_impact: 'Tens of thousands of young people inspired',

    achievements_title: 'Achievements & Recognition',
    achievements_subtitle: 'Global Recognition for Scientific Excellence',
    achievement_1_title: 'Asteroid 45687 Pranverahyseni',
    achievement_1_desc: 'An asteroid officially named in honor of contributions to planetary science and science outreach.',
    achievement_2_title: 'NASA Research Collaboration',
    achievement_2_desc: 'Active participation in NASA-supported research programs and use of world-class facilities.',
    achievement_3_title: 'International Scientific Presence',
    achievement_3_desc: 'Representing Kosovo at international conferences, research institutions, and global scientific forums.',
    achievement_4_title: 'STEM Advocacy Leadership',
    achievement_4_desc: 'Recognized leader in promoting women in STEM and science education in the Western Balkans.',

    vision_title: 'Vision & Inspiration',
    vision_subtitle: 'Looking Toward the Future',
    vision_p1: 'Science knows no borders. Every young person, regardless of where they are born, deserves the opportunity to look up at the stars and dream of exploring them.',
    vision_p2: 'As a woman in planetary science from Kosovo, I work to inspire the next generation—especially girls and young women—to pursue careers in STEM fields.',
    vision_p3: 'Through research, education, and outreach, we can put Kosovo on the global scientific map and show that small nations can make big contributions to our understanding of the universe.',
    vision_quote: '"The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."',
    vision_quote_author: '— Carl Sagan',

    contact_title: 'Contact & Connect',
    contact_subtitle: 'Let\'s Collaborate',
    contact_intro: 'Interested in research collaboration, speaking engagements, or science outreach? Get in touch.',
    contact_name: 'Your Name',
    contact_email: 'Your Email',
    contact_message: 'Your Message',
    contact_send: 'Send Message',
    contact_sending: 'Sending...',
    contact_success: 'Message sent successfully!',
    contact_social: 'Follow the Journey',
    contact_email_label: 'Professional Email',
  },
  sq: {
    nav_home: 'Ballina',
    nav_about: 'Rreth',
    nav_research: 'Kërkimi',
    nav_outreach: 'Edukimi',
    nav_achievements: 'Arritjet',
    nav_vision: 'Vizioni',
    nav_contact: 'Kontakti',

    hero_title: 'Duke Eksploruar Sistemin Diellor',
    hero_subtitle: 'Duke Frymëzuar Brezin e Ardhshëm',
    hero_role: 'Shkencëtare Planetare · Bashkëpunëtore e NASA-s · Themeluesja e Astronomy Outreach of Kosovo',
    hero_cta_research: 'Shiko Kërkimin',
    hero_cta_contact: 'Kontakto',

    about_title: 'Rreth Pranvera Hyseni',
    about_intro: 'Shkencëtare planetare nga Kosova dhe përfaqësuese ndërkombëtare e shkencës',
    about_p1: 'Kandidate për doktoraturë në Shkencat Planetare në Universitetin e Kalifornisë, Santa Cruz, e fokusuar në asteroide, materien organike dhe evolucioni i Sistemit Diellor.',
    about_p2: 'Bashkëpunëtore aktive me programet kërkimore të mbështetura nga NASA, duke kryer analiza spektroskopike të asteroideve duke përdorur NASA Infrared Telescope Facility në Hawaii.',
    about_p3: 'Themeluesja dhe udhëheqësja e Astronomy Outreach of Kosovo, iniciativi më i madh i astronomisë në vend, duke ndikuar dhjetëra mijëra të rinj që nga viti 2015.',
    about_p4: 'Avokatë e pasionuar për gratë në STEM dhe arsimin shkencor në Ballkanin Perëndimor, duke përfaqësuar Kosovën në skenën shkencore globale.',
    about_milestone_1: 'Themelimi i Astronomy Outreach of Kosovo',
    about_milestone_2: 'Fillimi i PhD në UC Santa Cruz',
    about_milestone_3: 'Bashkëpunimet me NASA-n',
    about_milestone_4: 'Asteroidi i Emëruar në Nderim',

    research_title: 'NASA & Kërkimi Shkencor',
    research_subtitle: 'Avancimi i Shkencës Planetare Përmes Bashkëpunimit Ndërkombëtar',
    research_area_1_title: 'Spektroskopia e Asteroideve',
    research_area_1_desc: 'Analiza e përbërjes së asteroideve duke përdorur NASA Infrared Telescope Facility për të kuptuar formimin dhe evolucionin e Sistemit Diellor.',
    research_area_2_title: 'Studimet e Materies Organike',
    research_area_2_desc: 'Hetimi i përbërjeve organike në truper primitivë për të gjurmuar origjinën e materialeve që ndërtojnë jetën në Sistemin tonë Diellor.',
    research_area_3_title: 'Bashkëpunimet Ndërkombëtare',
    research_area_3_desc: 'Puna me programet e mbështetura nga NASA dhe ekipet kërkimore globale për të zgjeruar kuptimin tonë të shkencës planetare.',
    research_institution_1: 'Universiteti i Kalifornisë, Santa Cruz',
    research_institution_2: 'NASA Infrared Telescope Facility',
    research_institution_3: 'Rrjetet Kërkimore Ndërkombëtare',

    outreach_title: 'Astronomy Outreach of Kosovo',
    outreach_subtitle: 'Duke Ndërtuar Komunitetin e Astronomisë së Kosovës që nga 2015',
    outreach_intro: 'Iniciativi më i madh i astronomisë në Kosovë, i përkushtuar ndaj edukimit, frymëzimit dhe sjelljen e kozmosit në çdo cep të vendit.',
    outreach_moon_1_title: 'Ligjërata Publike',
    outreach_moon_1_desc: 'Biseda dhe prezantime të rregullta të astronomisë që arrijnë mijëra studentë dhe anëtarë të komunitetit.',
    outreach_moon_2_title: 'Net Vëzhgimi',
    outreach_moon_2_desc: 'Ngjarje të shikimit me teleskop që lidhin njerëzit drejtpërdrejt me mrekullitë qiellore.',
    outreach_moon_3_title: 'Programe Edukative',
    outreach_moon_3_desc: 'Workshope, programe shkollore dhe trajnime për brezin e ardhshëm të shkencëtarëve.',
    outreach_moon_4_title: 'Vizioni për Observator',
    outreach_moon_4_desc: 'Duke punuar për themelimin e observatorit dhe planetariumit të parë kombëtar të Kosovës.',
    outreach_impact: 'Dhjetëra mijëra të rinj të frymëzuar',

    achievements_title: 'Arritjet & Njohja',
    achievements_subtitle: 'Njohje Globale për Përsosmëri Shkencore',
    achievement_1_title: 'Asteroidi 45687 Pranverahyseni',
    achievement_1_desc: 'Një asteroid i emëruar zyrtarisht në nderim të kontributeve për shkencën planetare dhe ndërgjegjësimin shkencor.',
    achievement_2_title: 'Bashkëpunimi Kërkimor me NASA-n',
    achievement_2_desc: 'Pjesëmarrje aktive në programet kërkimore të mbështetura nga NASA dhe përdorimi i objekteve me klasë botërore.',
    achievement_3_title: 'Prania Shkencore Ndërkombëtare',
    achievement_3_desc: 'Përfaqësimi i Kosovës në konferenca ndërkombëtare, institucione kërkimore dhe forume shkencore globale.',
    achievement_4_title: 'Udhëheqje në Avokimin e STEM',
    achievement_4_desc: 'Udhëheqëse e njohur në promovimin e grave në STEM dhe arsimin shkencor në Ballkanin Perëndimor.',

    vision_title: 'Vizioni & Frymëzimi',
    vision_subtitle: 'Duke Shikuar Drejt të Ardhmes',
    vision_p1: 'Shkenca nuk njeh kufij. Çdo i ri, pavarësisht se ku lind, meriton mundësinë të shikojë lart në yje dhe të ëndërrojë të eksplorojë ato.',
    vision_p2: 'Si grua në shkencën planetare nga Kosova, punoj për të frymëzuar brezin e ardhshëm—veçanërisht vajzat dhe gratë e reja—të ndjekin karriera në fushat STEM.',
    vision_p3: 'Përmes kërkimit, arsimit dhe ndërgjegjësimit, mund ta vendosim Kosovën në hartën shkencore globale dhe të tregojmë se kombet e vogla mund të japin kontribute të mëdha për kuptimin tonë të universit.',
    vision_quote: '"Kozmosi është brenda nesh. Ne jemi të bërë nga materiali i yjeve. Ne jemi një mënyrë për universin të njohë veten."',
    vision_quote_author: '— Carl Sagan',

    contact_title: 'Kontakti & Lidhja',
    contact_subtitle: 'Le të Bashkëpunojmë',
    contact_intro: 'Të interesuar për bashkëpunim kërkimor, fjalime apo ndërgjegjësim shkencor? Kontaktoni.',
    contact_name: 'Emri Juaj',
    contact_email: 'Email-i Juaj',
    contact_message: 'Mesazhi Juaj',
    contact_send: 'Dërgo Mesazh',
    contact_sending: 'Duke dërguar...',
    contact_success: 'Mesazhi u dërgua me sukses!',
    contact_social: 'Ndiqni Udhëtimin',
    contact_email_label: 'Email Profesional',
  },
};
