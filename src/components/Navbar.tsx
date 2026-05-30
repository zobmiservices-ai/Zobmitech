import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, ShieldAlert, Cpu, Terminal, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { Company } from '../types';
import { techAudio } from '../utils/audio';

interface NavbarProps {
  company: Company;
  theme: 'morning' | 'night';
  toggleTheme: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onBookClick: () => void;
}

export default function Navbar({
  company,
  theme,
  toggleTheme,
  activeSection,
  setActiveSection,
  onBookClick
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Seminars', id: 'seminars' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    techAudio.playClickRing();
    setActiveSection(id);
    setIsOpen(false);
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
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? theme === 'night'
            ? 'bg-[#0A192F]/90 backdrop-blur-md border-b border-[#00C9A7]/15 py-3 shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-[0_10px_30px_-10px_rgba(148,163,184,0.1)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            onClick={() => scrollToSection('home')}
            onMouseEnter={() => techAudio.playTick()}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <Logo theme={theme} />
            <div>
              <span className={`font-display font-bold text-lg tracking-wider block leading-none ${
                theme === 'night' ? 'text-white' : 'text-[#0A192F]'
              }`}>
                ZOBMI
              </span>
              <span className="font-sans font-semibold text-[9px] tracking-widest text-[#00C9A7] uppercase block mt-1">
                DIGI SERVICES
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link Node */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => techAudio.playTick()}
                className={`relative px-3 py-2 text-xs lg:text-sm font-medium tracking-wide rounded-md transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                  activeSection === item.id
                    ? theme === 'night'
                      ? 'text-[#00C9A7]'
                      : 'text-[#2563EB]'
                    : theme === 'night'
                    ? 'text-gray-300 hover:text-white hover:bg-white/5'
                    : 'text-gray-600 hover:text-[#0A192F] hover:bg-[#0A192F]/5'
                }`}
              >
                <span>{item.name}</span>
                {item.id === 'services' && (
                  <span className="text-[10px] transform scale-80 opacity-80 select-none">
                    ▼
                  </span>
                )}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full ${
                      theme === 'night' ? 'bg-[#00C9A7]' : 'bg-[#2563EB]'
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Interactive Sunrise / Sunset Core Switch & Reservation Action */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Trigger */}
            <button
              onClick={() => {
                techAudio.playSweep();
                toggleTheme();
              }}
              onMouseEnter={() => techAudio.playTick()}
              className={`relative overflow-hidden p-2 rounded-full border cursor-pointer group transition-colors duration-500 ${
                theme === 'night'
                  ? 'border-[#00C9A7]/30 bg-[#0A192F] text-[#00C9A7] hover:bg-[#00C9A7]/10'
                  : 'border-amber-300 bg-amber-50 text-amber-600 hover:bg-amber-100'
              }`}
              title={theme === 'night' ? "Switch to Morning Code ☀️" : "Switch to Cyber Night 🌙"}
            >
              <AnimatePresence mode="wait">
                {theme === 'night' ? (
                  <motion.div
                    key="moon"
                    initial={{ y: 20, rotate: -45, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: -20, rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ y: 20, rotate: 45, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: -20, rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* CTA action button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                techAudio.playClickRing();
                onBookClick();
              }}
              onMouseEnter={() => techAudio.playTick()}
              className={`px-5 py-2.5 text-xs font-semibold tracking-wider rounded-lg border transition-all duration-300 cursor-pointer ${
                theme === 'night'
                  ? 'border-[#00C9A7]/40 bg-transparent text-white hover:bg-[#00C9A7]/10'
                  : 'border-[#2563EB]/40 bg-transparent text-[#2563EB] hover:bg-[#2563EB]/5'
              }`}
            >
              Book a Consultation ↗
            </motion.button>
          </div>

          {/* Mobile Menu Action Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Theme switch in small screen */}
            <button
              onClick={() => {
                techAudio.playSweep();
                toggleTheme();
              }}
              className={`p-2 rounded-full border cursor-pointer ${
                theme === 'night'
                  ? 'border-[#00C9A7]/30 bg-[#0A192F] text-[#00C9A7]'
                  : 'border-amber-300 bg-amber-50 text-amber-500'
              }`}
            >
              {theme === 'night' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                techAudio.playClickRing();
                setIsOpen(!isOpen);
              }}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                theme === 'night'
                  ? 'text-gray-300 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#0A192F] hover:bg-slate-100'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t ${
              theme === 'night'
                ? 'bg-[#0A192F] border-[#00C9A7]/10'
                : 'bg-white border-gray-100'
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    activeSection === item.id
                      ? theme === 'night'
                        ? 'bg-[#00C9A7]/10 text-[#00C9A7] border-l-4 border-[#00C9A7]'
                        : 'bg-[#2563EB]/10 text-[#2563EB] border-l-4 border-[#2563EB]'
                      : theme === 'night'
                      ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                      : 'text-gray-600 hover:bg-[#0A192F]/5 hover:text-[#0A192F]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200/10 px-4">
                <button
                  onClick={() => {
                    techAudio.playClickRing();
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className={`w-full py-3 text-center text-xs uppercase tracking-wider font-semibold rounded-lg cursor-pointer ${
                    theme === 'night'
                      ? 'bg-linear-to-r from-[#00C9A7] to-[#10B981] text-[#0A192F]'
                      : 'bg-linear-to-r from-[#2563EB] to-[#3B82F6] text-white'
                  }`}
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
