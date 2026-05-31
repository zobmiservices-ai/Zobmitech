import { motion } from 'motion/react';
import { Target, Compass, Award, ShieldCheck, HeartHandshake, Smile, CheckSquare } from 'lucide-react';
import { ZobmiData } from '../types';

const founderHeroOriginal = new URL('../assets/images/founder_hero_new_1780211325490.png', import.meta.url).href;

interface AboutUsProps {
  data: ZobmiData;
  theme: 'morning' | 'night';
}

export default function AboutUs({ data, theme }: AboutUsProps) {
  const { company, achievements } = data;

  // Map stat indices to specific supporting icons for aesthetic rhythm
  const getStatIcon = (label: string) => {
    switch (label) {
      case 'Projects Delivered':
        return <Award className="w-5 h-5 text-amber-500" />;
      case 'Businesses Assisted':
        return <Smile className="w-5 h-5 text-indigo-500" />;
      case 'Security Assessments':
        return <ShieldCheck className="w-5 h-5 text-[#00C9A7]" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section
      id="about"
      className={`relative py-24 transition-colors duration-1000 ${
        theme === 'night'
          ? 'bg-[#050E1C] text-white'
          : 'bg-[#F1F5F9] text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xs font-bold uppercase tracking-wider font-mono ${
              theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'
            }`}
          >
            🌸 Africa's Digital Growth Partner
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight mt-3 leading-tight"
          >
            Securing, Building, and Scaling Digital Ecosystems
          </motion.h2>
          <motion.div
            className={`w-16 h-[3px] mx-auto mt-4 rounded-full ${
              theme === 'night' ? 'bg-[#00C9A7]' : 'bg-[#2563EB]'
            }`}
          />
        </div>

        {/* Story Intro Deck and Statistics Counter Elements */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column: Deep brand description & Achievements counts */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight leading-snug">
                Helping African Enterprises Navigate Technology Safely
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                theme === 'night' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {company.description} Under the technical leadership of founder <strong>{company.founder}</strong>, we bridge the gap between high-level technological systems and operational scale requirements, unlocking friction-free efficiency.
              </p>
            </div>

            {/* Achievements Stats block */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {achievements.stats.map((stat, sIdx) => (
                <motion.div
                  key={sIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: sIdx * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-xl border text-center relative group overflow-hidden ${
                    theme === 'night'
                      ? 'bg-[#0A192F] border-slate-700/30 hover:border-[#00C9A7]/20 text-white'
                      : 'bg-white border-slate-200 hover:border-[#2563EB]/25 shadow-xs'
                  }`}
                >
                  <div className={`p-2 w-10 h-10 mx-auto rounded-lg flex items-center justify-center mb-3 ${
                    theme === 'night' ? 'bg-[#050E1C]' : 'bg-slate-50'
                  }`}>
                    {getStatIcon(stat.label)}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black font-display tracking-tight text-emerald-500">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1 leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column: Mission & Vision display boxes */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Operational Workspace Photo */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-slate-700/20 group h-44 sm:h-52 bg-slate-900 shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
                alt="Zobmi Collaborative Workspace"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#00C9A7]">Operational Excellence, Africa-Wide</span>
              </div>
            </motion.div>

            {/* Mission Box */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border text-left flex items-start gap-4 ${
                theme === 'night'
                  ? 'bg-[#0A192F] border-[#00C9A7]/10 text-white'
                  : 'bg-white border-gray-200 text-gray-800 shadow-xs'
              }`}
            >
              <div className={`p-3 rounded-xl flex items-center justify-center flex-none ${
                theme === 'night' ? 'bg-[#050E1C] text-[#00C9A7]' : 'bg-amber-50 text-amber-600'
              }`}>
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base uppercase tracking-wider">Our Mission</h4>
                <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                  theme === 'night' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {company.mission}
                </p>
              </div>
            </motion.div>

            {/* Vision Box */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border text-left flex items-start gap-4 ${
                theme === 'night'
                  ? 'bg-[#0A192F] border-slate-700/35 text-white'
                  : 'bg-white border-gray-200 text-gray-800 shadow-xs'
              }`}
            >
              <div className={`p-3 rounded-xl flex items-center justify-center flex-none ${
                theme === 'night' ? 'bg-[#050E1C] text-[#00C9A7]' : 'bg-blue-50 text-[#2563EB]'
              }`}>
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base uppercase tracking-wider">Our Vision</h4>
                <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                  theme === 'night' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {company.vision}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Founder credentials bottom grid */}
        <div className={`mt-14 p-6 sm:p-10 rounded-2xl border ${
          theme === 'night' ? 'bg-[#0A192F] border-slate-700/30' : 'bg-white border-gray-200 shadow-xs'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Miracle Okpara profile info checklist left */}
            <div className="md:col-span-5 text-left flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-500/35 flex-none relative group bg-slate-900 shadow-sm">
                <img
                  src={founderHeroOriginal}
                  alt="Miracle Okpara"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Instantly resolve to highly polished professional seed illustration fallback if needed
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/executive-profile/300/300";
                  }}
                />
              </div>
              <div className="space-y-3 text-left">
                <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 font-mono">
                  Consultant Credentials
                </h4>
                <p className="text-xl sm:text-2xl font-black font-display tracking-tight leading-none text-emerald-500">
                  Miracle Okpara
                </p>
                
                {/* Disciplines check list */}
                <div className="space-y-1.5 pt-1">
                  {company.position.map((role) => (
                    <div key={role} className="flex items-center space-x-2.5">
                      <CheckSquare className="w-3.5 h-3.5 text-[#00C9A7]" />
                      <span className="text-[11px] sm:text-xs font-semibold text-gray-400 font-mono">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote of the Founder on the right (fleshed out) */}
            <div className="md:col-span-7 text-left border-l-2 border-gray-500/15 pl-6 md:pl-8 py-2">
              <p className={`text-sm sm:text-base italic font-display leading-relaxed ${
                theme === 'night' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                "Securing and building high-performance systems for African organizations isn't just about code or setting up servers. It's about designing secure, resilient growth engines that foster generational digitizations and elevate commerce dynamically."
              </p>
              <p className={`text-[11px] font-mono tracking-widest uppercase mt-4 text-emerald-500 font-semibold`}>
                — Founder Quote, Zobmi Digi Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
