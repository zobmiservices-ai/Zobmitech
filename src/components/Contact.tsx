import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, Clock, Terminal, CheckCircle2, Send, HelpCircle, Star, Sparkles, MessageSquare } from 'lucide-react';
import { ZobmiData } from '../types';

interface ContactProps {
  data: ZobmiData;
  theme: 'morning' | 'night';
}

export default function Contact({ data, theme }: ContactProps) {
  const { contact, faq, targetAudience } = data;

  // State managers
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgBody, setMsgBody] = useState('');
  const [isSendingMsg, setIsSendingMsg] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(false);

  // Consultation booking scheduler states
  const [bookDomain, setBookDomain] = useState('Cybersecurity Consulting');
  const [bookDate, setBookDate] = useState('');
  const [bookTime, setBookTime] = useState('10:00 AM WAT');
  const [bookNotes, setBookNotes] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingPass, setBookingPass] = useState<any | null>(null);

  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // Handle Contact Feedback submission
  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!msgName || !msgEmail || !msgBody) return;
    setIsSendingMsg(true);
    setTimeout(() => {
      setMsgSuccess(true);
      setIsSendingMsg(false);
      setMsgName('');
      setMsgEmail('');
      setMsgBody('');
    }, 1200);
  };

  // Handle live Calendar appointment Booking
  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!bookDate) return;
    setIsBooking(true);
    setTimeout(() => {
      setBookingPass({
        id: `ZM-CNS-${Math.floor(1000 + Math.random() * 9000)}`,
        domain: bookDomain,
        date: bookDate,
        time: bookTime,
        meetingLink: `https://meet.google.com/zobmi-digi-${Math.floor(123 + Math.random() * 876)}`,
        advisor: "Miracle Okpara"
      });
      setIsBooking(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`relative py-24 transition-colors duration-1000 ${
        theme === 'night'
          ? 'bg-[#0A192F] text-white'
          : 'bg-[#F8FAFC] text-gray-800'
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
            📬 Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight mt-3 leading-tight"
          >
            Connect With Zobmi & Book Miracle Okpara
          </motion.h2>
          <motion.div
            className={`w-16 h-[3px] mx-auto mt-4 rounded-full ${
              theme === 'night' ? 'bg-[#00C9A7]' : 'bg-[#2563EB]'
            }`}
          />
        </div>

        {/* Contact info, areas, target audiences */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left panel: Coordinates list, Areas, FAQs */}
          <div className="lg:col-span-5 space-y-10 text-left">
            {/* Real Coordinates checks */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight leading-snug">
                Operational Headquarters
              </h3>
              
              <div className="space-y-4.5">
                {/* Office mappin */}
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg flex items-center justify-center ${
                    theme === 'night' ? 'bg-[#050E1C] text-[#00C9A7]' : 'bg-[#2563EB]/5 text-[#2563EB]'
                  }`}>
                    <MapPin className="w-5 h-5 flex-none" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 font-mono">OFFICE BASE</p>
                    <p className="text-sm font-semibold">{contact.office.city}, {contact.office.state}, {contact.office.country}</p>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg flex items-center justify-center ${
                    theme === 'night' ? 'bg-[#050E1C] text-[#00C9A7]' : 'bg-[#2563EB]/5 text-[#2563EB]'
                  }`}>
                    <Mail className="w-5 h-5 flex-none" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 font-mono">SUPPORT EMAIL</p>
                    <a href={`mailto:${contact.email}`} className="text-sm font-semibold hover:underline block">
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg flex items-center justify-center ${
                    theme === 'night' ? 'bg-[#050E1C] text-[#00C9A7]' : 'bg-[#2563EB]/5 text-[#2563EB]'
                  }`}>
                    <Phone className="w-5 h-5 flex-none" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 font-mono">HOTLINE</p>
                    <a href={`tel:${contact.phone}`} className="text-sm font-semibold hover:underline block">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Geographic Areas Map Check */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-gray-400">
                🌐 Registered Service Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {contact.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide border ${
                      theme === 'night'
                        ? 'bg-[#050E1C] border-[#00C9A7]/10 text-gray-300'
                        : 'bg-white border-slate-200 text-gray-600'
                    }`}
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Audience lists */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-gray-400">
                👥 Target Institutions & Clienteles
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {targetAudience.map((aud) => (
                  <span
                    key={aud}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider ${
                      theme === 'night'
                        ? 'bg-slate-800 text-slate-300'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {aud}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Interactive Booking Calendar consultation card or Contact feedback form */}
          <div className="lg:col-span-7 space-y-8">
            <div className={`p-6 sm:p-10 rounded-3xl border shadow-xl ${
              theme === 'night' ? 'bg-[#050E1C] border-slate-700/30' : 'bg-white border-slate-200 shadow-md'
            }`}>
              {bookingPass ? (
                // Consultation Booking Confirmation Pass layout
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight leading-none text-emerald-500">
                      Consultation Booked!
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 max-w-sm mx-auto">
                      Your high-tier video session with Miracle Okpara is synchronized under secure parameters.
                    </p>
                  </div>

                  {/* Scheduled confirmation pass */}
                  <div className={`p-5 rounded-2xl border text-left font-mono text-[11px] space-y-3.5 uppercase ${
                    theme === 'night' ? 'bg-[#0A192F] border-[#00C9A7]/25' : 'bg-amber-50/50 border-amber-300'
                  }`}>
                    <div className="flex items-center justify-between border-b pb-2 border-slate-500/10">
                      <span className="text-gray-400">SESSION ID</span>
                      <span className="font-bold text-[#00C9A7]">{bookingPass.id}</span>
                    </div>

                    <div className="space-y-2 text-xs normal-case">
                      <p className="text-gray-400 leading-none">Consulting Scope: <strong className="text-white uppercase font-mono text-[11px]">{bookingPass.domain}</strong></p>
                      <p className="text-gray-400 leading-none">Advisor Assigned: <strong className="text-white">{bookingPass.advisor}</strong></p>
                      <p className="text-gray-400 leading-none">Date / Time: <strong className="text-white">{bookingPass.date} @ {bookingPass.time}</strong></p>
                    </div>

                    <div className="border-t border-dashed pt-4 border-slate-500/10 text-left">
                      <p className="text-[10px] text-gray-400 uppercase leading-none">Secure Google Meet link:</p>
                      <a
                        href={bookingPass.meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold lowercase tracking-wide text-[#00C9A7] underline truncate block mt-1.5"
                      >
                        {bookingPass.meetingLink}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => setBookingPass(null)}
                    className={`w-full py-3 rounded-xl font-bold uppercase text-xs tracking-wider cursor-pointer ${
                      theme === 'night' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'
                    }`}
                  >
                    Close & Return
                  </button>
                </motion.div>
              ) : (
                // Live Consultation core schedulers Input form
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div className="text-left border-b border-gray-500/10 pb-4">
                    <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight leading-snug">
                      📅 Book Operational Consultation
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Directly coordinates video or physical planning queries regarding Cybersecurity audits, responsive Web store design, or custom AI automations with Miracle Okpara.
                    </p>
                  </div>

                  {/* Consultation Scope selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">Domain Area</label>
                      <select
                        value={bookDomain}
                        onChange={(e) => setBookDomain(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-xs outline-hidden ${
                          theme === 'night'
                            ? 'bg-[#0A192F] border-slate-700 text-white focus:border-[#00C9A7]'
                            : 'bg-slate-50 border-gray-200 text-gray-800 focus:border-[#2563EB]'
                        }`}
                      >
                        <option>Cybersecurity Consulting</option>
                        <option>Website Design & SEO Optimization</option>
                        <option>AI automation & Prompting Setup</option>
                        <option>Digital Strategy & Cloud Infrastructure migration</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">Consultation Date</label>
                      <input
                        required
                        type="date"
                        value={bookDate}
                        onChange={(e) => setBookDate(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-xs outline-hidden ${
                          theme === 'night'
                            ? 'bg-[#0A192F] border-slate-700 text-white focus:border-[#00C9A7]'
                            : 'bg-slate-50 border-gray-200 text-gray-800 focus:border-[#2563EB]'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">Call Time Preferences</label>
                      <select
                        value={bookTime}
                        onChange={(e) => setBookTime(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border text-xs outline-hidden ${
                          theme === 'night'
                            ? 'bg-[#0A192F] border-slate-700 text-white focus:border-[#00C9A7]'
                            : 'bg-slate-50 border-gray-200 text-gray-800'
                        }`}
                      >
                        <option>10:00 AM WAT</option>
                        <option>12:00 PM WAT</option>
                        <option>2:00 PM WAT</option>
                        <option>4:00 PM WAT</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">Advisor Assigned</label>
                      <input
                        disabled
                        type="text"
                        value="Miracle Okpara (Lead Consultant)"
                        className={`w-full px-4 py-3 rounded-xl border text-xs opacity-75 font-semibold ${
                          theme === 'night' ? 'bg-[#0A192F] border-slate-700 text-gray-300' : 'bg-slate-100 border-gray-200'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">Scope summary or Notes (Optional)</label>
                    <textarea
                      placeholder="Briefly describe what your organization would like to achieve..."
                      rows={3}
                      value={bookNotes}
                      onChange={(e) => setBookNotes(e.target.value)}
                      className={`w-full p-4 rounded-xl border text-xs outline-hidden resize-none ${
                        theme === 'night'
                          ? 'bg-[#0A192F] border-slate-700 text-white focus:border-[#00C9A7]'
                          : 'bg-slate-50 border-gray-200 text-gray-800'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isBooking}
                    className={`w-full py-4 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${
                      theme === 'night'
                        ? 'bg-[#00C9A7] text-[#0A192F] hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(0,201,167,0.3)]'
                        : 'bg-[#2563EB] text-white hover:bg-blue-700 hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)]'
                    } cursor-pointer`}
                  >
                    {isBooking ? 'Securing Calendar Slots...' : 'Confirm Consultation Booking'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Brand FAQ blocks mapped from data structure */}
        <div className="mt-20 border-t border-gray-500/10 pt-16">
          <div className="max-w-4xl mx-auto space-y-5">
            <h3 className="font-display font-black text-xl sm:text-2xl text-center leading-none">
              💡 Frequently Answered General Queries
            </h3>
            
            <div className="space-y-3 pt-6 text-left">
              {faq.map((item, fIdx) => (
                <div
                  key={fIdx}
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    theme === 'night'
                      ? 'bg-[#050E1C] border-[#00C9A7]/10'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaqIndex(activeFaqIndex === fIdx ? null : fIdx)}
                    className="w-full flex items-center justify-between text-left font-display font-bold text-xs sm:text-sm tracking-tight leading-normal"
                  >
                    <span>{item.question}</span>
                    <span className="font-semibold text-lg ml-2">{activeFaqIndex === fIdx ? '−' : '+'}</span>
                  </button>
                  
                  <AnimatePresence>
                    {activeFaqIndex === fIdx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className={`text-xs sm:text-sm pt-4 leading-relaxed ${
                          theme === 'night' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
