import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, FolderGit2, AppWindow, ArrowUpRight, Code, ShieldCheck, HelpCircle } from 'lucide-react';
import { Project, ZobmiData } from '../types';

interface PortfolioProps {
  data: ZobmiData;
  theme: 'morning' | 'night';
}

export default function Portfolio({ data, theme }: PortfolioProps) {
  const { portfolio } = data;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Define unique category listing, appending 'All' at starting index
  const categories = ['All', ...portfolio.categories];

  // Filter projects depending on selected category and query matching
  const filteredProjects = portfolio.featuredProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  // Mapping helper to resolve custom generated asset images and high quality fallbacks
  const getProjectImage = (id: number) => {
    switch (id) {
      case 1:
        return "/src/assets/images/web_dev_speed_1780138080260.png";
      case 2:
        return "/src/assets/images/cybersec_shield_1780138043926.png";
      case 3:
        return "/src/assets/images/ai_dashboard_1780138061215.png";
      case 4:
        return "https://picsum.photos/seed/healthcloud/600/400";
      case 5:
        return "https://picsum.photos/seed/cmsportal/600/400";
      default:
        return `https://picsum.photos/seed/project-${id}/600/400`;
    }
  };

  return (
    <section
      id="portfolio"
      className={`relative py-24 transition-colors duration-1000 ${
        theme === 'night'
          ? 'bg-[#050E1C] text-white'
          : 'bg-[#F1F5F9] text-gray-800'
      }`}
    >
      {/* Background Matrix Mesh decorative lines */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

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
            📋 Proven Track Record
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight mt-3 leading-tight"
          >
            Delivered Engagements & Featured Projects
          </motion.h2>
          <motion.div
            className={`w-16 h-[3px] mx-auto mt-4 rounded-full ${
              theme === 'night' ? 'bg-[#00C9A7]' : 'bg-[#2563EB]'
            }`}
          />
        </div>

        {/* Filter and Search controls bar */}
        <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-103 cursor-pointer ${
                  selectedCategory === category
                    ? theme === 'night'
                    : theme === 'night'
                    ? 'bg-[#0A192F] border border-slate-700/50 text-gray-300 hover:text-white hover:bg-slate-800'
                    : 'bg-white border border-gray-200 text-gray-600 hover:text-[#0A192F] hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search text input box */}
          <div className="relative max-w-sm w-full order-1 md:order-2 self-end">
            <input
              type="text"
              placeholder="Search by tech (e.g. React, OWASP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs tracking-wider border outline-hidden transition-all duration-300 ${
                theme === 'night'
                  ? 'bg-[#0A192F] border-[#00C9A7]/20 text-white focus:border-[#00C9A7]/50 focus:ring-1 focus:ring-[#00C9A7]/50'
                  : 'bg-white border-gray-200 text-gray-800 focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/50'
              }`}
            />
            <Search className={`absolute left-3 top-2.5 w-4.5 h-4.5 ${
              theme === 'night' ? 'text-gray-500' : 'text-gray-400'
            }`} />
          </div>
        </div>

        {/* Portfolio Grids featuring active motion layout transitions */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border flex flex-col justify-between transition-all duration-300 relative group overflow-hidden glow-card ${
                  theme === 'night'
                    ? 'bg-[#0A192F] border-slate-700/30 text-white hover:shadow-[0_15px_30px_rgba(0,201,167,0.1)]'
                    : 'bg-white border-gray-200 text-gray-800 hover:shadow-xl'
                }`}
              >
                {/* 16:9 Image Thumbnail Section */}
                <div className="relative w-full h-44 overflow-hidden bg-slate-950">
                  <img
                    src={getProjectImage(project.id)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-mono tracking-wider font-semibold border ${
                      theme === 'night'
                        ? 'bg-[#0A192F]/90 border-slate-700/50 text-[#00C9A7]'
                        : 'bg-white/95 border-slate-200 text-[#2563EB]'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    {/* Category badge & action icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-[#00C9A7] uppercase">
                        ZOBMI ARCHIVE
                      </span>
                      <span className={`p-1.5 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        theme === 'night' ? 'bg-[#050E1C]' : 'bg-slate-50'
                      }`}>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-base sm:text-lg font-bold font-display mt-3 tracking-tight leading-snug group-hover:text-[#00C9A7] transition-colors">
                      {project.title}
                    </h3>

                    <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${
                      theme === 'night' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech pills row bottom */}
                  <div className="mt-6 pt-5 border-t border-gray-500/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded-md text-[9px] font-mono tracking-wide ${
                            theme === 'night'
                              ? 'bg-slate-800 text-slate-300 border border-slate-700/30'
                              : 'bg-slate-100 text-slate-600 border border-slate-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty matching result disclaimer */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 flex flex-col items-center gap-3"
          >
            <FolderGit2 className="w-10 h-10 text-gray-500 animate-pulse" />
            <p className="text-sm text-gray-400 font-medium font-sans">
              No active deliverables match your filter context or search query: "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold underline text-amber-500 hover:text-amber-400 font-mono tracking-wider"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
