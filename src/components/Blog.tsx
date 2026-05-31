import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, BookOpen, Clock, User, ArrowLeft, ArrowRight, Share2, Globe, Heart } from 'lucide-react';
import { BlogPost, ZobmiData } from '../types';
import { blogPosts } from '../data';

const aiDashboardImg = new URL('../assets/images/ai_dashboard_1780138061215.png', import.meta.url).href;
const webDevSpeedImg = new URL('../assets/images/web_dev_speed_1780138080260.png', import.meta.url).href;

interface BlogProps {
  data: ZobmiData;
  theme: 'morning' | 'night';
}

export default function Blog({ data, theme }: BlogProps) {
  const { blog } = data;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  // Appending 'All' representation to categories
  const categories = ['All', ...blog.categories];

  // Filtering blog posts based on search query and category parameters
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Map blog theme indices to custom generated imagery and styled placeholders
  const getBlogImage = (id: number) => {
    switch (id) {
      case 1:
        return "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80";
      case 2:
        return aiDashboardImg;
      case 3:
        return webDevSpeedImg;
      case 4:
        return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80";
      default:
        return `https://picsum.photos/seed/blog-${id}/600/400`;
    }
  };

  return (
    <section
      id="blog"
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
            📰 Knowledge Dispatch Hub
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight mt-3 leading-tight"
          >
            Insights, Guides & Industry Security Dispatches
          </motion.h2>
          <motion.div
            className={`w-16 h-[3px] mx-auto mt-4 rounded-full ${
              theme === 'night' ? 'bg-[#00C9A7]' : 'bg-[#2563EB]'
            }`}
          />
        </div>

        {/* Filter Selection Panel */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between">
          {/* Scrollable Category lists */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-102 cursor-pointer ${
                  selectedCategory === cat
                    ? theme === 'night'
                      ? 'bg-[#00C9A7] text-[#0A192F] shadow-[0_5px_15px_rgba(0,105,87,0.2)]'
                      : 'bg-[#2563EB] text-white shadow-[0_5px_15px_rgba(37,99,235,0.2)]'
                    : theme === 'night'
                    ? 'bg-[#0A192F] border border-slate-700/50 text-gray-300 hover:text-white hover:bg-slate-800'
                    : 'bg-white border border-gray-200 text-gray-600 hover:text-[#0A192F] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick search board */}
          <div className="relative max-w-sm w-full order-1 md:order-2 self-end">
            <input
              type="text"
              placeholder="Search guides, strategies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs tracking-wider border outline-hidden transition-all duration-300 ${
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

        {/* Blog Post Feed Board */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article
                layout
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border flex flex-col justify-between hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden ${
                  theme === 'night'
                    ? 'bg-[#0A192F] border-slate-700/30 text-white hover:border-[#00C9A7]/25 shadow-[0_5px_15px_rgba(2,12,27,0.3)]'
                    : 'bg-white border-gray-200 text-gray-800'
                }`}
                onClick={() => setReadingPost(post)}
              >
                {/* 16:9 Image Thumbnail Section */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-950">
                  <img
                    src={getBlogImage(post.id)}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase border border-slate-700/20 ${
                      theme === 'night'
                        ? 'bg-slate-950/80 backdrop-blur-xs text-[#00C9A7]'
                        : 'bg-white/95 backdrop-blur-xs text-[#2563EB]'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    {/* Category and Read metadata */}
                    <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider font-mono">
                      <span className={theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}>
                        {post.category}
                      </span>
                      <span className="text-gray-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title & Excerpt */}
                    <h3 className="font-display font-bold text-base sm:text-lg mt-4 leading-snug group-hover:text-amber-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className={`text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3 ${
                      theme === 'night' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Post Footer node */}
                  <div className="mt-6 pt-4 border-t border-gray-500/10 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1.5 font-medium leading-none">
                      <User className="w-3.5 h-3.5 text-gray-500" />
                      <span>{post.author}</span>
                    </div>
                    <span className="font-mono text-[10px]">{post.publishedAt}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty matching result board */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-10 h-10 text-gray-500 mx-auto animate-pulse" />
            <p className="text-sm mt-3 text-gray-400 font-sans font-medium">
              No articles or security dispatches align with filters or search: "{searchQuery}".
            </p>
          </div>
        )}

        {/* Blog Post Distraction-Free Reader modal overlay block */}
        <AnimatePresence>
          {readingPost && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 70, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 70, scale: 0.95 }}
                className={`max-w-3xl w-full rounded-3xl border shadow-2xl overflow-hidden relative ${
                  theme === 'night' ? 'bg-[#0A192F] border-slate-700/60 text-white' : 'bg-white border-slate-200 text-gray-800'
                }`}
              >
                {/* Fixed upper action utility line */}
                <div className={`px-6 py-4 border-b flex items-center justify-between ${
                  theme === 'night' ? 'border-slate-800 bg-[#050E1C]' : 'border-gray-200 bg-slate-50'
                }`}>
                  <button
                    onClick={() => setReadingPost(null)}
                    className="text-xs uppercase tracking-wider font-mono font-bold flex items-center gap-1 hover:text-amber-500 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" /> Go Back
                  </button>

                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                    READING MODE
                  </span>
                </div>

                {/* Scrollable Main body content layout */}
                <div className="p-6 sm:p-10 max-h-[70vh] overflow-y-auto text-left space-y-6">
                  {/* Category, Date, & Times indices */}
                  <div className="flex items-center justify-between border-b pb-4 border-gray-500/10 text-xs font-mono">
                    <span className={`px-2.5 py-1 rounded-md bg-opacity-10 text-[10px] font-semibold uppercase ${
                      theme === 'night' ? 'bg-[#00C9A7] text-[#00C9A7]' : 'bg-[#2563EB] text-[#2563EB]'
                    }`}>
                      {readingPost.category}
                    </span>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {readingPost.readTime}
                      </span>
                      <span>Published: {readingPost.publishedAt}</span>
                    </div>
                  </div>

                  {/* Title heading */}
                  <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight mt-2">
                    {readingPost.title}
                  </h1>

                  {/* Author avatar and title information card */}
                  <div className={`p-4 rounded-2xl flex items-center gap-3 border ${
                    theme === 'night' ? 'bg-[#050E1C] border-slate-800' : 'bg-slate-50 border-gray-100'
                  }`}>
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">
                      MO
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-none">{readingPost.author}</p>
                      <p className="text-[10px] mt-1 text-gray-500 font-mono">Consultant, Zobmi Digi Services</p>
                    </div>
                  </div>

                  {/* Render post body text neatly parsed with markdown spacing logic */}
                  <div className={`text-sm sm:text-base leading-relaxed space-y-4 font-sans ${
                    theme === 'night' ? 'text-gray-300' : 'text-gray-600'
                  }`} style={{ whiteSpace: 'pre-wrap' }}>
                    {readingPost.content}
                  </div>
                </div>

                {/* Footer action notes */}
                <div className={`p-5 border-t text-xs flex items-center justify-between ${
                  theme === 'night' ? 'border-slate-800 bg-[#050E1C]/50' : 'border-gray-200 bg-slate-50'
                }`}>
                  <p className="text-gray-400 font-mono text-[10px]">
                    © May 2026 Zobmi Knowledge Dispatch
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`${window.location.href}#blog`);
                      alert('Zobmi Blog Post reference URL copied safely to clipboard!');
                    }}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition hover:scale-103 ${
                      theme === 'night' ? 'bg-slate-800 text-gray-300' : 'bg-slate-200 text-gray-700'
                    }`}
                  >
                    <Share2 className="w-3.5 h-3.5" /> Share Article
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
