import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Seminars from './components/Seminars';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalConsole from './components/TerminalConsole';
import { zobmiData } from './data';

export default function App() {
  const [theme, setTheme] = useState<'morning' | 'night'>('night');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Load preferred theme on startup or default to night (matching tech branding)
  useEffect(() => {
    const stored = localStorage.getItem('zobmi-preferred-theme') as 'morning' | 'night' | null;
    if (stored) {
      setTheme(stored);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'night' ? 'morning' : 'night';
    setTheme(nextTheme);
    localStorage.setItem('zobmi-preferred-theme', nextTheme);
  };

  // Scroll spy node tracker to update activeSection as user scrolls
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'portfolio', 'seminars', 'blog', 'contact'];
    
    const handler = () => {
      const scrollPos = window.scrollY + 200; // Offset parameter
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Central Coordinator: Scrolls smoothly to any ID node
  const handleScrollToNode = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${
      theme === 'night' ? 'bg-[#0A192F] text-white theme-night' : 'bg-[#F8FAFC] text-gray-800 theme-morning'
    }`}>
      {/* Dynamic Header navbar */}
      <Navbar
        company={zobmiData.company}
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onBookClick={() => handleScrollToNode('contact')}
      />

      {/* Main Single Page Sections and Portals */}
      <main>
        <Hero
          data={zobmiData}
          theme={theme}
          onBookClick={() => handleScrollToNode('contact')}
          onExploreClick={() => handleScrollToNode('services')}
        />

        <AboutUs
          data={zobmiData}
          theme={theme}
        />

        <Services
          data={zobmiData}
          theme={theme}
        />

        <Portfolio
          data={zobmiData}
          theme={theme}
        />

        <Seminars
          data={zobmiData}
          theme={theme}
        />

        <Blog
          data={zobmiData}
          theme={theme}
        />

        <Contact
          data={zobmiData}
          theme={theme}
        />
      </main>

      {/* Corporate footer notes */}
      <Footer
        data={zobmiData}
        theme={theme}
      />

      {/* Floating CLI Terminal and Action Center */}
      <TerminalConsole theme={theme} />
    </div>
  );
}
