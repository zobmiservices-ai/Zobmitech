import { motion } from 'motion/react';
import { Mail, Phone, ExternalLink, Linkedin, Twitter, Facebook, Instagram, Youtube, ShieldAlert } from 'lucide-react';
import { ZobmiData } from '../types';
import Logo from './Logo';

interface FooterProps {
  data: ZobmiData;
  theme: 'morning' | 'night';
}

export default function Footer({ data, theme }: FooterProps) {
  const { company, socialMedia, contact, technical } = data;

  // Social icon mapper matching lucide options safely
  const renderSocialIcon = (name: string) => {
    switch (name) {
      case 'linkedin':
        return <Linkedin className="w-4 h-4 cursor-pointer" />;
      case 'x':
        return <Twitter className="w-4 h-4 cursor-pointer" />;
      case 'facebook':
        return <Facebook className="w-4 h-4 cursor-pointer" />;
      case 'instagram':
        return <Instagram className="w-4 h-4 cursor-pointer" />;
      default:
        return <Youtube className="w-4 h-4 cursor-pointer" />;
    }
  };

  const socials = [
    { name: 'linkedin', href: socialMedia.linkedin },
    { name: 'x', href: socialMedia.x },
    { name: 'facebook', href: socialMedia.facebook },
    { name: 'instagram', href: socialMedia.instagram },
    { name: 'youtube', href: socialMedia.youtube },
  ].filter((item) => item.href);

  return (
    <footer
      className={`relative border-t py-12 transition-colors duration-1000 ${
        theme === 'night'
          ? 'bg-[#050E1C]/90 border-slate-700/20 text-white shadow-[0_-10px_30px_rgba(2,12,27,0.3)]'
          : 'bg-white border-gray-100 text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          {/* Brand Intro column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <Logo theme={theme} size="sm" />
              <span className={`font-display font-black tracking-wider text-base uppercase leading-none`}>
                {company.name}
              </span>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed ${
              theme === 'night' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {company.tagline}. Securing, Building, and Scaling Africa's Digital Frontier, guided by state-of-the-art security guidelines.
            </p>

            {/* Social icons row */}
            <div className="flex items-center space-x-3 pt-2">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Zobmi on ${soc.name}`}
                  className={`p-2 rounded-lg border transition-colors ${
                    theme === 'night'
                      ? 'border-slate-800 bg-slate-900/40 text-gray-400 hover:text-[#00C9A7] hover:border-[#00C9A7]/20 hover:bg-slate-800'
                      : 'border-gray-200 bg-slate-50 text-gray-500 hover:text-[#2563EB] hover:bg-slate-100'
                  }`}
                >
                  {renderSocialIcon(soc.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links map column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest font-mono text-gray-400">
              Navigation Map
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a href="#home" className="hover:underline text-gray-400 hover:text-emerald-400">Home</a>
              <a href="#about" className="hover:underline text-gray-400 hover:text-emerald-400">About Us</a>
              <a href="#services" className="hover:underline text-gray-400 hover:text-emerald-400">Services</a>
              <a href="#portfolio" className="hover:underline text-gray-400 hover:text-emerald-400">Portfolio</a>
              <a href="#seminars" className="hover:underline text-gray-400 hover:text-emerald-400">Seminars</a>
              <a href="#blog" className="hover:underline text-gray-400 hover:text-emerald-400">Blog Feed</a>
              <a href="#contact" className="hover:underline text-gray-400 hover:text-emerald-400">Contact</a>
            </div>
          </div>

          {/* Tech guidelines indicators column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest font-mono text-gray-400">
              Engine Specifications
            </h4>
            <div className="space-y-1.5 text-xs text-gray-400">
              <p className="leading-none">⚡ Environment Node: <strong className={theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}>{technical.framework}</strong></p>
              <p className="leading-none">🎨 Styling Stack: <strong className={theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}>{technical.styling}</strong></p>
              <p className="leading-none">🔐 Encryption Node: <strong className={theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}>{technical.authentication}</strong></p>
              <p className="leading-none flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" /> Security Rating: <strong className="text-emerald-500">ISO 27001 Compliant</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Lower credit lines */}
        <div className="mt-12 pt-8 border-t border-gray-500/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 text-center gap-4">
          <p>© May 2026 Zobmi Digi Services. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Build Securely with <span className="text-red-500">♥</span> by Miracle Okpara
          </p>
        </div>
      </div>
    </footer>
  );
}
