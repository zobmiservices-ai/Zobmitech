import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Target, BookOpen, Send, CheckCircle2, Ticket, ChevronRight, MapPin } from 'lucide-react';
import { Seminar, ZobmiData } from '../types';

interface SeminarsProps {
  data: ZobmiData;
  theme: 'morning' | 'night';
}

export default function Seminars({ data, theme }: SeminarsProps) {
  const { seminars } = data;
  const [selectedSeminar, setSelectedSeminar] = useState<string | null>(null);
  
  // Local registrant form states list
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketDetails, setTicketDetails] = useState<any | null>(null);

  // Array of mock schedules, seats, and estimated dates for high-fidelity schedules
  const seminarSchedules = [
    {
      title: "Cybersecurity Awareness Seminar",
      date: "June 25, 2026",
      time: "10:00 AM WAT",
      seatsLeft: 24,
      totalSeats: 100,
      mode: "Hybrid (Physical in Abuja + Zoom)"
    },
    {
      title: "AI for Business Productivity Workshop",
      date: "July 04, 2026",
      time: "2:00 PM WAT",
      seatsLeft: 8,
      totalSeats: 50,
      mode: "Online Live Interactive Stream"
    },
    {
      title: "Digital Security for Small Businesses",
      date: "July 18, 2026",
      time: "11:00 AM WAT",
      seatsLeft: 19,
      totalSeats: 75,
      mode: "Physical Training Center, Lagos"
    }
  ];

  // Map seminar index to custom schedule parameters
  const getExtendedMeta = (title: string) => {
    return (
      seminarSchedules.find((s) => s.title === title) || {
        date: "TBD",
        time: "TBD",
        seatsLeft: 10,
        totalSeats: 100,
        mode: "Virtual"
      }
    );
  };

  const handleRSVP = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !emailAddress || !selectedSeminar) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      const schedule = getExtendedMeta(selectedSeminar);
      setTicketDetails({
        id: `ZB-${Math.floor(100000 + Math.random() * 900000)}`,
        name: fullName,
        email: emailAddress,
        event: selectedSeminar,
        date: schedule.date,
        time: schedule.time,
        venue: schedule.mode,
        code: `ZOBMI-${selectedSeminar.slice(0, 3).toUpperCase()}-2026`
      });
      setIsSubmitting(false);
      // Reset form variables
      setFullName('');
      setEmailAddress('');
    }, 1200);
  };

  // Helper to map index to distinct, high-quality event illustrations
  const getSeminarImage = (idx: number) => {
    switch (idx) {
      case 0:
        return "/src/assets/images/cybersec_shield_1780138043926.png";
      case 1:
        return "https://picsum.photos/seed/workplace-ai/600/400";
      case 2:
        return "https://picsum.photos/seed/small-business-security/600/400";
      default:
        return `https://picsum.photos/seed/seminar-${idx}/600/400`;
    }
  };

  return (
    <section
      id="seminars"
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
            🎓 Educational & Outreach Events
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight mt-3 leading-tight"
          >
            Empowering Teams Through Tech Seminars & Workshops
          </motion.h2>
          <motion.div
            className={`w-16 h-[3px] mx-auto mt-4 rounded-full ${
              theme === 'night' ? 'bg-[#00C9A7]' : 'bg-[#2563EB]'
            }`}
          />
        </div>

        {/* Seminar Card Grids */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {seminars.map((seminar, idx) => {
            const meta = getExtendedMeta(seminar.title);
            const percentageUsed = Math.floor(((meta.totalSeats - meta.seatsLeft) / meta.totalSeats) * 100);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl border flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-[#050E1C] border-[#00C9A7]/15 hover:border-[#00C9A7]/40 text-white'
                    : 'bg-white border-slate-200 text-gray-800 shadow-xs hover:shadow-lg'
                }`}
              >
                {/* Visual Header node */}
                <div className="relative w-full h-40 overflow-hidden bg-slate-950">
                  <img
                    src={getSeminarImage(idx)}
                    alt={seminar.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                    <span className="text-[10px] font-mono text-[#00C9A7] font-bold tracking-widest uppercase">
                      Lagos/Abuja Outreach Session
                    </span>
                  </div>
                </div>

                {/* Event Schedule badge and content */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider font-mono">
                      <span className="flex items-center space-x-1.5 text-amber-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{meta.date}</span>
                      </span>
                      <span className={theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}>
                        {meta.time}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black font-display tracking-tight leading-snug mt-4 min-h-[50px]">
                      {seminar.title}
                    </h3>

                    {/* Target Audience Segment */}
                    <div className={`mt-4 flex items-center space-x-2 text-xs py-1.5 px-3 rounded-lg border ${
                      theme === 'night'
                        ? 'bg-[#0A192F] border-slate-800 text-gray-300'
                        : 'bg-slate-50 border-gray-100 text-gray-600'
                    }`}>
                      <Users className={`w-3.5 h-3.5 ${theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}`} />
                      <span className="font-mono">Audience: <strong>{seminar.audience}</strong></span>
                    </div>

                    {/* Core Topics checklist */}
                    <div className="mt-6 pt-5 border-t border-gray-500/10">
                      <p className={`text-xs font-semibold uppercase tracking-wider font-mono mb-3 ${
                        theme === 'night' ? 'text-[#00C9A7]/80' : 'text-[#2563EB]/80'
                      }`}>
                        📘 Seminar Topics Grid:
                      </p>
                      <div className="space-y-2.5 text-left">
                        {seminar.topics.map((topic, tIdx) => (
                          <div key={tIdx} className="flex items-start space-x-2.5">
                            <CheckCircle2 className={`w-4 h-4 flex-none mt-0.5 ${
                              theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'
                            }`} />
                            <span className={`text-xs sm:text-sm leading-normal ${
                              theme === 'night' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Seats Allocation Progress Gauge */}
                  <div className="mt-8 pt-6 border-t border-gray-500/10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400 font-sans">Seat Capacity Indicator</span>
                      <span className="font-semibold text-red-500">{meta.seatsLeft} seats remaining!</span>
                    </div>

                    {/* Percentage progress pill bar */}
                    <div className={`w-full h-2 rounded-full mt-2.5 overflow-hidden ${
                      theme === 'night' ? 'bg-[#0A192F]' : 'bg-slate-100'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentageUsed}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          theme === 'night' ? 'bg-[#00C9A7]' : 'bg-[#2563EB]'
                        }`}
                      />
                    </div>

                    <button
                      onClick={() => {
                        setSelectedSeminar(seminar.title);
                        setTicketDetails(null);
                      }}
                      className={`w-full py-3 px-4 mt-6 text-xs font-bold uppercase tracking-wider border rounded-xl flex items-center justify-center space-x-1 transition-all duration-300 cursor-pointer ${
                        theme === 'night'
                          ? 'border-[#00C9A7]/40 hover:bg-[#00C9A7] hover:text-[#0A192F] text-[#00C9A7]'
                          : 'border-[#2563EB]/40 hover:bg-[#2563EB] hover:text-white text-[#2563EB]'
                      }`}
                    >
                      <span>Reserve My Spot</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic RSVP Form Modal Overlay triggered when selecting an event */}
        <AnimatePresence>
          {selectedSeminar && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className={`max-w-md w-full p-6 sm:p-8 rounded-3xl border shadow-2xl relative text-left ${
                  theme === 'night' ? 'bg-[#0A192F] border-slate-700/60' : 'bg-white border-slate-200'
                }`}
              >
                {/* Close modal action button */}
                <button
                  onClick={() => setSelectedSeminar(null)}
                  className={`absolute top-4 right-4 p-2 rounded-lg cursor-pointer ${
                    theme === 'night' ? 'hover:bg-white/5' : 'hover:bg-slate-100'
                  }`}
                >
                  ✕
                </button>

                {ticketDetails ? (
                  // Success layout of Ticket badge
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="text-center py-4 space-y-2">
                      <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="font-display font-extrabold text-lg sm:text-xl text-emerald-500">
                        Spot Reserved Successfully!
                      </h4>
                      <p className="text-xs text-gray-400">
                        Confirmation was sent to {ticketDetails.email}. Your details are validated under system supervision.
                      </p>
                    </div>

                    {/* Styled Printable Pass Card */}
                    <div className={`p-5 rounded-2xl border border-dashed relative overflow-hidden flex flex-col justify-between ${
                      theme === 'night' ? 'bg-[#050E1C] border-[#00C9A7]/40' : 'bg-amber-50/50 border-amber-300'
                    }`}>
                      {/* Ticket Cutout decorative lines */}
                      <span className={`absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${
                        theme === 'night' ? 'bg-[#0A192F]' : 'bg-white'
                      }`} />
                      <span className={`absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${
                        theme === 'night' ? 'bg-[#0A192F]' : 'bg-white'
                      }`} />

                      <div className="space-y-3 font-mono text-[10px] uppercase text-left">
                        <div className="flex items-center justify-between border-b pb-2 border-slate-500/10">
                          <span className="font-bold text-gray-500">Zobmi Entry Pass</span>
                          <span className={`${theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}`}>{ticketDetails.id}</span>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-sans font-bold leading-none">{ticketDetails.event}</p>
                          <p className="text-gray-400 leading-none">Registrant: <strong className="text-white font-sans">{ticketDetails.name}</strong></p>
                          <p className="text-gray-400 leading-none">Scheduled: <strong className="font-sans text-gray-200">{ticketDetails.date} @ {ticketDetails.time}</strong></p>
                          <p className="text-gray-400 leading-none flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> Location: <strong className="font-sans text-gray-200">{ticketDetails.venue}</strong>
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t pt-2 border-slate-500/10 mt-2 text-[9px]">
                          <span className="text-emerald-500">Verified by miracle Okpara</span>
                          <span className="text-gray-500">{ticketDetails.code}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedSeminar(null)}
                      className={`w-full py-3 rounded-xl font-bold uppercase text-xs tracking-wider cursor-pointer ${
                        theme === 'night' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'
                      }`}
                    >
                      Done & Close
                    </button>
                  </motion.div>
                ) : (
                  // RSVP input layout Form
                  <form onSubmit={handleRSVP} className="space-y-5">
                    <div>
                      <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight leading-snug">
                        Reserve Your Seat
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 max-w-sm">
                        Specify details to claims your virtual pass for: <strong>{selectedSeminar}</strong>
                      </p>
                    </div>

                    <div className="space-y-3.5">
                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">FullName</label>
                        <input
                          required
                          type="text"
                          placeholder="Example: Ibrahim Adesope"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border text-xs outline-hidden ${
                            theme === 'night'
                              ? 'bg-slate-900 border-[#00C9A7]/10 text-white focus:border-[#00C9A7]'
                              : 'bg-slate-50 border-gray-200 text-gray-800'
                          }`}
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="Example: ibrahim@company.com"
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border text-xs outline-hidden ${
                            theme === 'night'
                              ? 'bg-slate-900 border-[#00C9A7]/10 text-white focus:border-[#00C9A7]'
                              : 'bg-slate-50 border-gray-200 text-gray-800'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setSelectedSeminar(null)}
                        className={`px-4 py-2 text-xs font-bold uppercase rounded-lg ${
                          theme === 'night' ? 'text-gray-400 hover:bg-white/5' : 'text-gray-500 hover:bg-slate-100'
                        }`}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center space-x-1.5 ${
                          theme === 'night'
                            ? 'bg-[#00C9A7] text-[#0A192F] hover:bg-emerald-400'
                            : 'bg-[#2563EB] text-white hover:bg-blue-700'
                        } cursor-pointer`}
                      >
                        {isSubmitting ? (
                          <span>Reserving Spot...</span>
                        ) : (
                          <>
                            <Ticket className="w-4 h-4" />
                            <span>Claims Seat Pass</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
