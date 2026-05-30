import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, ChevronRight, Play, Maximize2, Minimize2, Sparkles, Volume2, VolumeX, ShieldAlert, Code2 } from 'lucide-react';
import { techAudio } from '../utils/audio';

interface TerminalConsoleProps {
  theme: 'morning' | 'night';
}

interface CommandLog {
  text: string;
  type: 'input' | 'system' | 'success' | 'warn' | 'info';
  timestamp: string;
}

export default function TerminalConsole({ theme }: TerminalConsoleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);
  const [isGridStatic, setIsGridStatic] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cybergrid_static') === 'true';
    }
    return false;
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleCyberGrid = (silent = false) => {
    const nextVal = !isGridStatic;
    setIsGridStatic(nextVal);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cybergrid_static', String(nextVal));
      window.dispatchEvent(new CustomEvent('cybergrid-toggle', { detail: { isStatic: nextVal } }));
    }
    if (!silent) {
      appendLogWithDelay(
        nextVal
          ? '🔄 CyberGrid cursor tracking deactivated. (Grid set to static refined mode).'
          : '⚡ CyberGrid spotlight cursor tracking engaged (Interactive mode)!',
        'success',
        100
      );
    }
  };
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with greeting logs
  useEffect(() => {
    if (logs.length === 0) {
      setLogs([
        { text: 'Zobmi Terminal OS v2.1.0 (SECURE CORE)', type: 'system', timestamp: getHHMMSS() },
        { text: 'Authorized bypass authenticated.', type: 'success', timestamp: getHHMMSS() },
        { text: 'Type `/help` to view active command modules, or use quick triggers below.', type: 'info', timestamp: getHHMMSS() }
      ]);
    }
  }, [logs]);

  // Set Muted State from global audio utility
  useEffect(() => {
    setIsMuted(techAudio.getMutedState());
  }, []);

  // Sync scroll to bottom on logs modifications
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  function getHHMMSS() {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  }

  // Typewriter simulated printing speed
  const appendLogWithDelay = (text: string, type: 'input' | 'system' | 'success' | 'warn' | 'info' = 'system', delay = 0) => {
    setTimeout(() => {
      setLogs(prev => [...prev, { text, type, timestamp: getHHMMSS() }]);
      techAudio.playKeyboardClick();
    }, delay);
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    // Append user input
    setLogs(prev => [...prev, { text: `> ${cmdStr}`, type: 'input', timestamp: getHHMMSS() }]);
    techAudio.playClickRing();

    // Check pre-fixed command structures
    if (trimmed === '/help') {
      appendLogWithDelay('Listing secure micro-action keywords:', 'info', 100);
      appendLogWithDelay('  /about      - Learn about Miracle Okpara & Zobmi mission', 'info', 180);
      appendLogWithDelay('  /services   - Render full technical digital domains list', 'info', 260);
      appendLogWithDelay('  /audit      - Initiate local simulated vulnerability scan drills', 'info', 340);
      appendLogWithDelay('  /matrix     - Toggle high-tech neon data waterfall canvas backdrop', 'info', 420);
      appendLogWithDelay('  /grid       - Toggle CyberGrid cursor movement spotlight tracking', 'info', 500);
      appendLogWithDelay('  /hack       - Engage simulated cyber penetration defense simulation', 'info', 580);
      appendLogWithDelay('  /clear      - Flush screen logs history buffers', 'info', 660);
    } else if (trimmed === '/grid') {
      toggleCyberGrid();
    } else if (trimmed === '/about') {
      appendLogWithDelay('--- CONSULTING LEAD IDENTITY PROFILE ---', 'info', 100);
      appendLogWithDelay('NAME: Miracle Okpara', 'info', 200);
      appendLogWithDelay('ROLES: Cybersecurity Strategist, Web Optimizer, AI Prompt Engineer', 'info', 300);
      appendLogWithDelay('LOCATION: Nigeria, scaling globally.', 'info', 400);
      appendLogWithDelay('Zobmi Digi Services secures modern operations and integrates optimized web apps.', 'success', 500);
    } else if (trimmed === '/services') {
      appendLogWithDelay('--- AVAILABLE CAPABILITIES MATRIX ---', 'info', 100);
      appendLogWithDelay('1. CYBERSECURITY: Encryption policies, database scans & NDPR isolation.', 'success', 250);
      appendLogWithDelay('2. WEBSITE DEVELOPMENT: Lightning-fast Vite/React & high performance engines.', 'success', 400);
      appendLogWithDelay('3. AI SOLUTIONS: Precision prompt curation & customized client agent automations.', 'success', 550);
    } else if (trimmed === '/audit') {
      runAuditScan();
    } else if (trimmed === '/matrix') {
      setMatrixActive(prev => !prev);
      appendLogWithDelay(matrixActive ? 'Waterfall data backdrop deactivated.' : 'Dynamic telemetry matrix streams initiated!', 'success', 100);
    } else if (trimmed === '/hack') {
      engageHackerSimulation();
    } else if (trimmed === '/clear') {
      setLogs([]);
    } else {
      appendLogWithDelay(`Unknown system token [${cmdStr}]. Type /help for assistance.`, 'warn', 100);
      techAudio.playWarningAlert();
    }

    setInputVal('');
  };

  const handleMuteToggle = () => {
    const currentMute = techAudio.toggleMute();
    setIsMuted(currentMute);
    setLogs(prev => [...prev, {
      text: currentMute ? 'Telemetric audio synthesizer MUTED.' : 'Dynamic audio synthesizer ENGAGED.',
      type: 'info',
      timestamp: getHHMMSS()
    }]);
    techAudio.playClickRing();
  };

  // Cybersecurity custom audit simulation outputs
  const runAuditScan = () => {
    appendLogWithDelay('Connecting to secure local cluster check loops...', 'system', 100);
    appendLogWithDelay('Auditing SSL/TLS certificate integrity schemas...', 'system', 300);
    appendLogWithDelay('Consulting NDPR compliance frameworks registry...', 'system', 600);
    
    setTimeout(() => {
      appendLogWithDelay('AUDIT STATUS: COMPLETE.', 'success', 0);
      appendLogWithDelay('  - Vulnerability rating: 0% active exposure found.', 'success', 100);
      appendLogWithDelay('  - Performance optimization quotient: 98% (Excel)', 'success', 200);
    }, 900);
  };

  // Engage Hacker custom simulator screen logs
  const engageHackerSimulation = () => {
    techAudio.playWarningAlert();
    appendLogWithDelay('⚠️ ATTACK INTRUSION VECTOR DETECTED: IP 192.168.42.10', 'warn', 100);
    appendLogWithDelay('🛡️ Initializing defensive shielding protocols...', 'system', 400);
    appendLogWithDelay('⚙️ Generating transient keypair certificates...', 'system', 700);

    setTimeout(() => {
      appendLogWithDelay('🔒 Isolation Complete! Intruder packets fully blocked.', 'success', 0);
      appendLogWithDelay('🔥 System backdoors secured and network integrity restored.', 'success', 150);
    }, 1200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleQuickAction = (actionStr: string) => {
    executeCommand(actionStr);
  };

  // Matrix backdrop simulation inside console panel
  useEffect(() => {
    if (!matrixActive) return;
    const interval = setInterval(() => {
      const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*';
      const randomLine = Array(20).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join(' ');
      setLogs(prev => {
        // Keep logs from overflowing when running matrix
        const trimmed = prev.length > 50 ? prev.slice(prev.length - 30) : prev;
        return [...trimmed, { text: randomLine, type: 'info', timestamp: getHHMMSS() }];
      });
    }, 1400);

    return () => clearInterval(interval);
  }, [matrixActive]);

  return (
    <>
      {/* Small floating HUD launcher pill always accessible in the corner of the viewport */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button
          onClick={() => {
            setIsOpen(prev => !prev);
            techAudio.playClickRing();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center space-x-2.5 px-4.5 py-3 rounded-2xl cursor-pointer border shadow-2xl transition-all duration-300 ${
            isOpen 
              ? 'bg-rose-500/20 border-rose-500/40 text-rose-300' 
              : theme === 'night'
                ? 'bg-[#050E1C] border-[#00C9A7]/30 text-[#00C9A7] shadow-[0_0_20px_rgba(0,201,167,0.25)] hover:border-[#00C9A7]'
                : 'bg-indigo-600 border-indigo-400 text-white hover:bg-indigo-700 shadow-md'
          }`}
        >
          <Terminal className="w-4 h-4 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
            {isOpen ? 'Close CLI' : 'Zobmi CLI Hub'}
          </span>
        </motion.button>
      </div>

      {/* Floating System Console Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            className={`fixed bottom-22 left-6 w-[90%] sm:w-[500px] h-[400px] z-50 flex flex-col rounded-3xl border shadow-3xl overflow-hidden backdrop-blur-xl ${
              isMinimized ? 'h-[50px]' : ''
            } ${
              theme === 'night'
                ? 'bg-[#050E1C]/95 border-[#00C9A7]/25 text-white shadow-black'
                : 'bg-slate-900/95 border-slate-700 text-white shadow-xl'
            }`}
          >
            {/* Terminal Window Header Bar */}
            <div className={`px-5 py-3.5 border-b flex items-center justify-between ${
              theme === 'night' ? 'border-slate-800 bg-[#0A192F]/80' : 'border-slate-800 bg-slate-950/80'
            }`}>
              <div className="flex items-center space-x-2.5">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 hover:bg-rose-600 cursor-pointer" onClick={() => { setIsOpen(false); techAudio.playClickRing(); }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 hover:bg-amber-600 cursor-pointer" onClick={() => { setIsMinimized(prev => !prev); techAudio.playClickRing(); }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#00C9A7] flex items-center gap-1.5 pl-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" /> Terminal.exe : ONLINE
                </span>
              </div>

              {/* Utility Panel */}
              <div className="flex items-center space-x-3">
                {/* Audio Engine controls */}
                <button
                  onClick={handleMuteToggle}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute Synthesis Sound' : 'Mute Synthesis Sound'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#00C9A7]" />}
                </button>

                <button
                  onClick={() => { setIsMinimized(prev => !prev); techAudio.playClickRing(); }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() => { setIsOpen(false); techAudio.playClickRing(); }}
                  className="text-gray-400 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Body Feed Logs */}
            {!isMinimized && (
              <>
                <div
                  ref={scrollRef}
                  className="flex-1 p-5 overflow-y-auto font-mono text-[11px] space-y-2.5 scrollbar-thin scrollbar-thumb-slate-800"
                >
                  {logs.map((log, idx) => (
                    <div key={idx} className="flex items-start text-left space-x-1.5 leading-relaxed">
                      <span className="text-slate-600 font-mono text-[9px] mt-0.5 select-none shrink-0">
                        [{log.timestamp}]
                      </span>
                      
                      {log.type === 'input' && (
                        <span className="text-[#00C9A7] font-semibold">{log.text}</span>
                      )}
                      {log.type === 'system' && (
                        <span className="text-slate-400">{log.text}</span>
                      )}
                      {log.type === 'success' && (
                        <span className="text-emerald-400 font-bold">{log.text}</span>
                      )}
                      {log.type === 'warn' && (
                        <span className="text-rose-400 font-bold font-sans">{log.text}</span>
                      )}
                      {log.type === 'info' && (
                        <span className="text-indigo-300 font-mono italic">{log.text}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Quick Interactive Tooltip Action Buttons (so physical typing is optional) */}
                <div className={`px-4 py-2 border-t border-slate-800 flex flex-wrap gap-1.5 text-left ${
                  theme === 'night' ? 'bg-[#0A192F]/50' : 'bg-slate-900/50'
                }`}>
                  <button
                    onClick={() => handleQuickAction('/audit')}
                    className="px-2 py-1 bg-slate-800 hover:bg-[#00C9A7]/10 hover:text-[#00C9A7] border border-slate-700/60 rounded-md text-[9px] font-mono text-gray-300 cursor-pointer shrink-0"
                  >
                    🚀 RUN CYBER AUDIT
                  </button>
                  <button
                    onClick={() => handleQuickAction('/hack')}
                    className="px-2 py-1 bg-slate-800 hover:bg-rose-500/10 hover:text-rose-400 border border-slate-700/60 rounded-md text-[9px] font-mono text-gray-300 cursor-pointer shrink-0"
                  >
                    🛡️ SHIELD PENETRATION
                  </button>
                  <button
                    onClick={() => handleQuickAction('/matrix')}
                    className="px-2 py-1 bg-slate-800 hover:bg-purple-500/10 hover:text-purple-400 border border-slate-700/60 rounded-md text-[9px] font-mono text-gray-300 cursor-pointer shrink-0"
                  >
                    🌌 LOG MATRIX Back
                  </button>
                  <button
                    onClick={() => handleQuickAction('/grid')}
                    className={`px-2 py-1 font-mono text-[9px] border rounded-md cursor-pointer shrink-0 transition-colors ${
                      isGridStatic
                        ? 'bg-amber-950/20 text-amber-400 border-amber-500/40 hover:bg-amber-500/10'
                        : 'bg-emerald-950/20 text-emerald-400 border-emerald-500/40 hover:bg-[#00C9A7]/10'
                    }`}
                  >
                    🎯 {isGridStatic ? 'TRACK_GRID: OFF' : 'TRACK_GRID: ON'}
                  </button>
                  <button
                    onClick={() => handleQuickAction('/services')}
                    className="px-2 py-1 bg-slate-800 hover:bg-blue-500/10 hover:text-blue-400 border border-slate-700/60 rounded-md text-[9px] font-mono text-gray-300 cursor-pointer shrink-0"
                  >
                    📂 LIST CAPABILITIES
                  </button>
                </div>

                {/* Custom Console Input Command field */}
                <form
                  onSubmit={handleFormSubmit}
                  className="p-3 border-t border-slate-800 bg-slate-950 flex items-center space-x-2"
                >
                  <ChevronRight className="w-4 h-4 text-[#00C9A7] flex-none shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter command (e.g. /help, /about)..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="flex-1 bg-transparent border-0 outline-hidden font-mono text-xs text-white placeholder-slate-600 focus:ring-0 focus:border-transparent py-1.5 focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    className="p-1 px-3 bg-[#00C9A7] hover:bg-emerald-400 text-slate-950 font-sans font-bold text-[10px] tracking-wider rounded-lg uppercase cursor-pointer"
                  >
                    Ex
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
