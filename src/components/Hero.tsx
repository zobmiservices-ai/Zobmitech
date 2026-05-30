import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Code, Cpu, TrendingUp, ArrowRight } from 'lucide-react';
import { ZobmiData } from '../types';
import { FOUNDER_IMAGE_PATH } from '../data';
import CyberCanvas from './CyberCanvas';
import CyberGrid from './CyberGrid';
import { techAudio } from '../utils/audio';

const founderHero480Webp = new URL('../assets/images/founder_hero_1780135630988-480.webp', import.meta.url).href;
const founderHero768Webp = new URL('../assets/images/founder_hero_1780135630988-768.webp', import.meta.url).href;
const founderHero1024Webp = new URL('../assets/images/founder_hero_1780135630988-1024.webp', import.meta.url).href;
const founderHero1200Webp = new URL('../assets/images/founder_hero_1780135630988-1200.webp', import.meta.url).href;

const founderHero480Png = new URL('../assets/images/founder_hero_1780135630988-480.png', import.meta.url).href;
const founderHero768Png = new URL('../assets/images/founder_hero_1780135630988-768.png', import.meta.url).href;
const founderHero1024Png = new URL('../assets/images/founder_hero_1780135630988-1024.png', import.meta.url).href;
const founderHero1200Png = new URL('../assets/images/founder_hero_1780135630988-1200.png', import.meta.url).href;

const founderHeroOriginal = new URL('../assets/images/founder_hero_1780135630988.png', import.meta.url).href;

interface HeroProps {
  data: ZobmiData;
  theme: 'morning' | 'night';
  onBookClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ data, theme, onBookClick, onExploreClick }: HeroProps) {
  const { company, hero } = data;

  // Custom icon render matching mockup's customized icon designs
  const renderMockupIcon = (slug: string) => {
    const isNight = theme === 'night';
    const accentClass = isNight ? 'text-[#00C9A7]' : 'text-[#2563EB]';
    
    switch (slug) {
      case 'cybersecurity':
        return (
          <div className={`relative w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${
            isNight ? 'bg-[#051124]/80 border-[#00C9A7]/20 text-[#00C9A7]' : 'bg-[#2563EB]/5 border-[#2563EB]/15 text-[#2563EB]'
          }`}>
            <ShieldCheck className="w-5 h-5" />
          </div>
        );
      case 'website-development':
        return (
          <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
            isNight ? 'bg-[#051124]/80 border-[#00C9A7]/10 text-white font-mono' : 'bg-[#2563EB]/5 border-[#2563EB]/10 text-gray-800 font-mono'
          }`}>
            <span>{"</>"}</span>
          </div>
        );
      case 'ai-solutions':
        return (
          <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
            isNight ? 'bg-[#051124]/80 border-[#00C9A7]/20 text-[#00C9A7] text-[10px] font-bold font-sans' : 'bg-[#2563EB]/5 border-[#2563EB]/15 text-[#2563EB] text-[10px] font-bold'
          }`}>
            <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-current opacity-60" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-current opacity-60" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-current opacity-60" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-current opacity-60" />
            <span>AI</span>
          </div>
        );
      default:
        return (
          <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
            isNight ? 'bg-[#051124]/80 border-[#00C9A7]/10 text-[#00C9A7]' : 'bg-[#2563EB]/5 border-[#2563EB]/10 text-[#2563EB]'
          }`}>
            <TrendingUp className="w-5 h-5" />
          </div>
        );
    }
  };

  const bottomServices = [
    {
      slug: 'cybersecurity',
      title: 'Cybersecurity',
      desc: 'Protecting what matters most'
    },
    {
      slug: 'website-development',
      title: 'Web Development',
      desc: 'Beautiful, fast & conversion-ready'
    },
    {
      slug: 'ai-solutions',
      title: 'AI Solutions',
      desc: 'Automate, optimize & scale with AI'
    },
    {
      slug: 'digital-transformation',
      title: 'Digital Transformation',
      desc: 'Future-ready strategies for growth'
    }
  ];

  return (
    <section
      id="home"
      className={`relative min-h-screen pt-28 pb-12 flex flex-col justify-between overflow-hidden transition-colors duration-1000 ${
        theme === 'night'
          ? 'bg-[#020B16] text-white'
          : 'bg-[#F8FAFC] text-gray-800'
      }`}
    >
      {/* Dynamic Cyber Pattern Glow Backdrops */}
      <div className="absolute inset-0 z-0">
        <CyberCanvas theme={theme} />
        <CyberGrid theme={theme} />
        <AnimatePresence mode="wait">
          {theme === 'night' ? (
            <motion.div
              key="night-ambient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-[20%] left-[10%] w-[35%] h-[35%] rounded-full bg-radial from-[#2563EB]/10 to-transparent blur-3xl animate-pulse" />
              <div className="absolute top-[40%] right-[10%] w-[45%] h-[45%] rounded-full bg-radial from-[#00C9A7]/10 to-transparent blur-3xl" />
              {/* Vertical subtle grid lines matching mockup */}
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            </motion.div>
          ) : (
            <motion.div
              key="morning-ambient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute -top-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-radial from-amber-100/50 via-rose-100/10 to-transparent blur-3xl" />
              <div className="absolute top-[50%] left-[5%] w-[40%] h-[40%] rounded-full bg-radial from-[#2563EB]/5 to-transparent blur-3xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
        {/* Left column Content Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Green pill tag matching design layout image draft */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`self-start inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border text-[10px] font-bold tracking-wider uppercase mb-7 ${
              theme === 'night'
                ? 'bg-[#051124] border-[#00C9A7]/25 text-[#00C9A7] shadow-[0_0_15px_rgba(0,201,167,0.15)]'
                : 'bg-indigo-50 border-indigo-200 text-indigo-700'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${theme === 'night' ? 'bg-[#00C9A7] shadow-[0_0_8px_#00C9A7]' : 'bg-indigo-600'}`} />
            <span className="font-mono">CYBERSECURITY. WEB DEVELOPMENT. AI SOLUTIONS.</span>
          </motion.div>

          {/* Core high-contrast Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl xl:text-[54px] font-extrabold tracking-tight leading-[1.12]"
          >
            Building Secure{' '}
            <span className={theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}>
              Digital
            </span>{' '}
            Experiences <br className="hidden sm:inline" />
            for Modern Businesses
          </motion.h1>

          {/* Subheading lines */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-5 text-sm sm:text-base max-w-xl leading-relaxed ${
              theme === 'night' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Zobmi Digi Services helps businesses secure their digital assets, build high-performance websites, automate with AI, and transform for the future. Based in Africa, scaling globally.
          </motion.p>

          {/* CTA Buttons in horizontal lines map */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() => {
                techAudio.playClickRing();
                onBookClick();
              }}
              onMouseEnter={() => techAudio.playTick()}
              className={`inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-98 cursor-pointer ${
                theme === 'night'
                  ? 'bg-[#00C9A7] text-[#0A192F] hover:bg-[#10B981] hover:shadow-[0_4px_20px_rgba(0,201,167,0.3)]'
                  : 'bg-[#2563EB] text-white hover:bg-blue-700 shadow-md'
              }`}
            >
              <span>{hero.primaryCTA}</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>

            <button
              onClick={() => {
                techAudio.playClickRing();
                onExploreClick();
              }}
              onMouseEnter={() => techAudio.playTick()}
              className={`inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300 active:scale-98 cursor-pointer ${
                theme === 'night'
                  ? 'border-white/20 text-white hover:bg-white/5'
                  : 'border-[#0A192F]/25 text-[#0A192F] hover:bg-[#0A192F]/5'
              }`}
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          </motion.div>

          {/* Horizontal trust social avatars block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center space-x-4 border-t border-gray-500/10 pt-6"
          >
            <div className="flex -space-x-2.5 overflow-hidden">
              {['IA', 'CO', 'SB', 'MO'].map((initVal, i) => (
                <div
                  key={i}
                  className={`w-8.5 h-8.5 rounded-full border border-2 flex items-center justify-center text-[9px] font-bold ${
                    theme === 'night'
                      ? 'bg-slate-800 border-[#020B16] text-[#00C9A7]'
                      : 'bg-slate-200 border-white text-[#2563EB]'
                  }`}
                  style={{ zIndex: 4 - i }}
                >
                  {initVal}
                </div>
              ))}
              <div
                className={`w-8.5 h-8.5 rounded-full border border-2 flex items-center justify-center text-[9px] font-black z-10 ${
                  theme === 'night'
                    ? 'bg-[#00C9A7] border-[#020B16] text-[#0A192F]'
                    : 'bg-[#2563EB] border-white text-white'
                }`}
              >
                50+
              </div>
            </div>
            <div>
              <p className={`text-xs font-bold leading-none ${theme === 'night' ? 'text-gray-300' : 'text-gray-700'}`}>
                Trusted by 50+ businesses
              </p>
              <p className={`text-[10px] mt-1 font-semibold ${theme === 'night' ? 'text-gray-500' : 'text-gray-400'}`}>
                across Nigeria & Africa
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Founder Avatar cropped perfectly into background */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end items-end h-[480px] lg:h-[520px]">
          {/* High-fidelity Vector graphic shield floating behind head */}
          {theme === 'night' && (
            <div className="absolute top-[10%] right-[3%] w-72 h-72 pointer-events-none select-none opacity-40 z-0">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#00C9A7]/20 drop-shadow-[0_0_15px_rgba(0,201,167,0.1)]">
                {/* Shield Contour */}
                <path d="M50 15 L80 25 V50 C80 68 68 83 50 88 C32 83 20 68 20 50 V25 L50 15 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" />
                <path d="M50 20 L75 28 V48 C75 64 65 78 50 83 C35 78 25 64 25 48 V28 L50 20 Z" stroke="currentColor" strokeWidth="2" />
                {/* Lock Representation */}
                <rect x="42" y="47" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M46 47 V42 C46 39.8 47.8 38 50 38 C52.2 38 54 39.8 54 42 V47" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="53" r="1.5" fill="currentColor" />
                {/* Circuit lines */}
                <line x1="10" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="0.5" />
                <line x1="25" y1="30" x2="30" y2="35" stroke="currentColor" strokeWidth="0.5" />
                <line x1="90" y1="40" x2="75" y2="40" stroke="currentColor" strokeWidth="0.5" />
                <line x1="75" y1="40" x2="70" y2="45" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          )}

          {/* Core photo container with dual gradient borders removed - blends directly onto the dark background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 right-0 w-[95%] sm:w-[85%] lg:w-[110%] h-full z-10 flex items-end justify-center pointer-events-none"
          >
            <div className="relative w-full h-[95%] sm:h-full select-none overflow-hidden rounded-b-2xl">
              {/* Founder real responsive image asset pipeline using picture/srcset */}
              <picture className="w-full h-full select-none pointer-events-none">
                {/* Modern Next-Gen WebP optimization formats for variable devices */}
                <source type="image/webp" media="(max-width: 480px)" srcSet={founderHero480Webp} />
                <source type="image/webp" media="(max-width: 768px)" srcSet={founderHero768Webp} />
                <source type="image/webp" media="(max-width: 1024px)" srcSet={founderHero1024Webp} />
                <source type="image/webp" media="(max-width: 1200px)" srcSet={founderHero1200Webp} />
                
                {/* Standard backup PNG formats */}
                <source type="image/png" media="(max-width: 480px)" srcSet={founderHero480Png} />
                <source type="image/png" media="(max-width: 768px)" srcSet={founderHero768Png} />
                <source type="image/png" media="(max-width: 1024px)" srcSet={founderHero1024Png} />
                <source type="image/png" media="(max-width: 1200px)" srcSet={founderHero1200Png} />

                {/* Legacy high-res fallback image */}
                <img
                  src={founderHeroOriginal}
                  alt="Miracle Okpara - Zobmi Digi Services Founder"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-bottom select-none pointer-events-none"
                />
              </picture>

              {/* Advanced Gradient Overlay logic to blend non-transparent image edges flawlessly into the dark space */}
              {theme === 'night' ? (
                <>
                  {/* Left Edge blend */}
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#020B16] via-[#020B16]/20 to-transparent" />
                  {/* Right Edge blend */}
                  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#020B16] via-[#020B16]/20 to-transparent" />
                  {/* Bottom Edge blend */}
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#020B16] via-[#020B16]/40 to-transparent" />
                </>
              ) : (
                <>
                  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/10 to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/35 to-transparent" />
                </>
              )}
            </div>
          </motion.div>

          {/* Floating Personal Identity tag exact matching mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`absolute bottom-10 right-4 sm:right-6 md:right-10 p-5 sm:p-6 rounded-2xl border text-left w-60 sm:w-64 backdrop-blur-md shadow-2xl z-25 ${
              theme === 'night'
                ? 'bg-[#051124]/90 border-slate-800 text-white'
                : 'bg-white/95 border-slate-200 text-gray-800'
            }`}
          >
            <h3 className={`font-display font-extrabold text-sm sm:text-base tracking-wide ${theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}`}>
              {company.founder}
            </h3>
            
            <div className="mt-2.5 space-y-1">
              {company.position.map((pos, pI) => (
                <p key={pI} className={`text-[10px] leading-tight font-mono tracking-wide ${theme === 'night' ? 'text-gray-300' : 'text-gray-500'}`}>
                  {pos}
                </p>
              ))}
            </div>
            
            {/* Fine decoration underlines */}
            <div className={`w-8 h-[2px] mt-4 rounded-full ${theme === 'night' ? 'bg-[#00C9A7]' : 'bg-[#2563EB]'}`} />
          </motion.div>
        </div>
      </div>

      {/* Row of four bottom features inside single glowing container matching mockup precisely */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 z-20">
        <div className={`border p-4 sm:p-7 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-300 ${
          theme === 'night'
            ? 'bg-[#051124]/30 border-[#00C9A7]/15 shadow-[#020B16]'
            : 'bg-white/80 border-slate-200/80 shadow-sm'
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 md:divide-x md:divide-slate-800/60">
            {bottomServices.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-start space-x-4 pl-0 lg:pl-6 ${idx === 0 ? 'lg:pl-2' : ''}`}
              >
                <div className="flex-none">
                  {renderMockupIcon(item.slug)}
                </div>
                
                <div className="text-left space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold tracking-wide uppercase font-display leading-none">
                    {item.title}
                  </h4>
                  <p className={`text-[11px] font-medium leading-snug ${
                    theme === 'night' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
