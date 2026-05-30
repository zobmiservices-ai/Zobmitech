import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Terminal, CheckCircle2, ChevronRight, Play, Server, Cloud, Cpu, Sparkles, Code2, HeartHandshake } from 'lucide-react';
import { Service, ZobmiData } from '../types';
import { techAudio } from '../utils/audio';

interface ServicesProps {
  data: ZobmiData;
  theme: 'morning' | 'night';
}

export default function Services({ data, theme }: ServicesProps) {
  const { services } = data;
  const [activeTab, setActiveTab] = useState<string>('cybersecurity');

  // Interactive Terminal Log Output State for Cybersecurity Assessment simulations
  const [isScanning, setIsScanning] = useState(false);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [scoreCheck, setScoreCheck] = useState<number | null>(null);

  // AI Prompt Optimizer Input/Output States list
  const [promptInput, setPromptInput] = useState('');
  const [promptOutput, setPromptOutput] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Website Speed Analyzer State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [speedResult, setSpeedResult] = useState<any>(null);

  // Trigger Live Security Scan Drill
  const runSecurityDrill = () => {
    techAudio.playClickRing();
    setIsScanning(true);
    setScoreCheck(null);
    setScanLogs(['Initializing secure Zobmi audit telemetry...', 'Binding network listeners...']);
    techAudio.playKeyboardClick();
    
    const audits = [
      'Checking open ports status (22, 80, 443, 8080)...',
      'Port 22 SSH audit: Enforcing RSA key token...',
      'Assigned certificates: Checking SSL/TLS 1.3 handshake compliance...',
      'Consulting OWASP Top 10 vulnerabilities metrics database...',
      'Auditing local directory routes & SQLi sanitization policies...',
      'Analyzing administrative portal pathways insulation...',
      'Assessment completed safely. No active leakage hashes observed.'
    ];

    audits.forEach((log, index) => {
      setTimeout(() => {
        setScanLogs(prev => [...prev, log]);
        techAudio.playKeyboardClick();
        if (index === audits.length - 1) {
          setIsScanning(false);
          setScoreCheck(94);
          techAudio.playSweep();
        }
      }, (index + 1) * 600);
    });
  };

  // Trigger Prompt Engineering Optimization
  const optimizeUserPrompt = () => {
    if (!promptInput.trim()) return;
    techAudio.playClickRing();
    setIsOptimizing(true);
    setTimeout(() => {
      const formatted = `### Optimized Prompt Template (By Zobmi AI Engine)
[Role]: Act as an expert West African Customer Support lead with focus on Nigeria.
[Context]: The business operates in Lagos/Abuja serving small startups. Tone must be professional, warm, and highly helpful, incorporating local context terms where appropriate.
[Core Task]: Direct instructions on: "${promptInput}"
[Formatting Guardrails]: Deliver answer in clean, bullet-styled segments, ending with a call to action to contact customer sales. Ensure no jargon is used.`;
      
      setPromptOutput(formatted);
      setIsOptimizing(false);
      techAudio.playSweep();
    }, 1200);
  };

  // Trigger Web optimization Speed analyzer mock
  const analyzeWebsiteSpeed = () => {
    techAudio.playClickRing();
    setIsAnalyzing(true);
    setSpeedResult(null);
    setTimeout(() => {
      setSpeedResult({
        fcp: '0.8s (Excellent)',
        cls: '0.01 (Perfect)',
        seo: '100 / 100',
        accessibility: '98%',
        verdict: 'Optimization completed. Speed score exceeds 96% of similar African business domains.'
      });
      setIsAnalyzing(false);
      techAudio.playSweep();
    }, 1500);
  };

  return (
    <section
      id="services"
      className={`relative py-24 transition-colors duration-1000 ${
        theme === 'night'
          ? 'bg-[#0A192F] text-white'
          : 'bg-[#F8FAFC] text-gray-800'
      }`}
    >
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {theme === 'night' ? (
          <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-[#00C9A7]/50 to-transparent" />
        ) : (
          <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-[#2563EB]/25 to-transparent" />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            📂 Professional Capabilities Suite
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight mt-3 leading-tight"
          >
            Innovative Technical Solutions Tailored For Africa
          </motion.h2>
          <motion.div
            className={`w-16 h-[3px] mx-auto mt-4 rounded-full ${
              theme === 'night' ? 'bg-[#00C9A7]' : 'bg-[#2563EB]'
            }`}
          />
        </div>

        {/* Tab Selection Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {services.map((svc) => (
            <button
              key={svc.slug}
              onClick={() => {
                techAudio.playSweep();
                setActiveTab(svc.slug);
                // Clear active playground state on tab switch
                setScanLogs([]);
                setScoreCheck(null);
                setPromptInput('');
                setPromptOutput('');
                setSpeedResult(null);
              }}
              onMouseEnter={() => techAudio.playTick()}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-102 cursor-pointer ${
                activeTab === svc.slug
                  ? theme === 'night'
                    ? 'bg-[#00C9A7] text-[#0A192F] shadow-[0_5px_15px_rgba(0,105,87,0.3)]'
                    : 'bg-[#2563EB] text-white shadow-[0_5px_15px_rgba(37,99,235,0.25)]'
                  : theme === 'night'
                  ? 'bg-[#050E1C] border border-[#00C9A7]/15 text-gray-300 hover:text-white hover:bg-neutral-800'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-[#0A192F] hover:bg-slate-100'
              }`}
            >
              {svc.title}
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel with motion transitions */}
        <div className="mt-10 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {services.map(
              (svc) =>
                activeTab === svc.slug && (
                  <motion.div
                    key={svc.slug}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border p-6 sm:p-10 rounded-3xl ${
                      theme === 'night'
                        ? 'bg-[#050E1C]/90 border-slate-700/30'
                        : 'bg-white border-slate-200 shadow-md'
                    }`}
                  >
                    {/* Left details pane of the selected service, showing bullet features and tagline */}
                    <div className="lg:col-span-5 flex flex-col justify-between text-left">
                      <div>
                        {/* Service Icon and Title badge */}
                        <div className="flex items-center space-x-3">
                          <span className={`text-2xl ${theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}`}>
                            {svc.slug === 'cybersecurity' && '🛡️'}
                            {svc.slug === 'website-development' && '💻'}
                            {svc.slug === 'ai-solutions' && '🤖'}
                            {svc.slug === 'digital-transformation' && '📈'}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-display">
                            {svc.title}
                          </h3>
                        </div>

                        <p className={`mt-4 text-sm leading-relaxed ${theme === 'night' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {svc.description}
                        </p>

                        {/* Bulleted core features lists */}
                        <div className="mt-6 space-y-3">
                          {svc.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle2 className={`w-4 h-4 flex-none mt-0.5 ${theme === 'night' ? 'text-[#00C9A7]' : 'text-[#2563EB]'}`} />
                              <span className={`text-xs sm:text-sm ${theme === 'night' ? 'text-gray-300' : 'text-gray-600'}`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Small signature of assurance */}
                      <div className="mt-8 border-t border-gray-500/10 pt-6">
                        <p className={`text-[11px] font-mono leading-none flex items-center gap-1.5 ${theme === 'night' ? 'text-[#00C9A7]/75' : 'text-[#2563EB]/75'}`}>
                          <HeartHandshake className="w-3.5 h-3.5" /> Checked & Certified by miracle Okpara
                        </p>
                      </div>
                    </div>

                    {/* Right pane: Interactive dynamic playground workspace module based on selected tab */}
                    <div className="lg:col-span-7 flex flex-col items-center justify-center">
                      {/* Scenario 1: Cybersecurity Assessment playground sandbox */}
                      {svc.slug === 'cybersecurity' && (
                        <div className={`w-full min-h-[300px] flex flex-col rounded-2xl overflow-hidden border ${
                          theme === 'night' ? 'bg-[#0A192F] border-slate-700/50' : 'bg-slate-900 border-slate-950 shadow-inner'
                        }`}>
                          {/* Inner terminal console bar */}
                          <div className="bg-slate-950/90 px-4 py-2.5 flex items-center justify-between border-b border-white/5">
                            <div className="flex space-x-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            </div>
                            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                              SECURE-TELEMETRY AUDIT
                            </span>
                          </div>

                          <div className="p-4 flex-1 font-mono text-[10px] text-left overflow-y-auto space-y-2">
                            {scanLogs.length === 0 ? (
                              <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-3">
                                <ShieldAlert className="w-8 h-8 text-[#00C9A7] animate-pulse" />
                                <p className="text-gray-400 font-sans text-xs max-w-sm">
                                  Run a simulated, non-invasive digital vulnerability audit targeting critical local network parameters.
                                </p>
                                <button
                                  onClick={runSecurityDrill}
                                  className="px-4 py-2 bg-[#00C9A7] font-sans text-xs font-bold uppercase tracking-wider text-[#0A192F] rounded-lg cursor-pointer hover:bg-emerald-400 self-center"
                                >
                                  Trigger Audit Scan
                                </button>
                              </div>
                            ) : (
                              <div className="space-y-1.5 text-emerald-400">
                                {scanLogs.map((log, lI) => (
                                  <p key={lI} className="leading-relaxed">
                                    <span className="text-slate-500">[{lI + 1}]</span> {log}
                                  </p>
                                ))}
                                {isScanning && (
                                  <span className="inline-block bg-emerald-500 w-1.5 h-3 animate-pulse" />
                                )}
                              </div>
                            )}

                            {/* Score Card feedback */}
                            {scoreCheck && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mt-4 p-4 rounded-xl border border-[#00C9A7]/20 bg-linear-to-r from-emerald-500/10 to-transparent flex items-center justify-between font-sans text-white text-xs"
                              >
                                <div>
                                  <p className="font-bold font-display uppercase tracking-wide text-[#00C9A7]">
                                    HEALTH SCORE: {scoreCheck}% (EXCELLENT)
                                  </p>
                                  <p className="text-[10px] text-gray-400 mt-1 max-w-xs leading-tight">
                                    Core credentials and encryption policies verified. Request a full scale consultation audit for full certification.
                                  </p>
                                </div>
                                <button
                                  onClick={runSecurityDrill}
                                  className="px-3 py-1.5 bg-slate-800 text-[#00C9A7] font-mono text-[10px] border border-[#00C9A7]/15 rounded-md hover:bg-slate-700 cursor-pointer"
                                >
                                  Re-run
                                </button>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Scenario 2: Website speed optimization playground */}
                      {svc.slug === 'website-development' && (
                        <div className={`w-full min-h-[300px] p-6 flex flex-col justify-between rounded-2xl border text-left ${
                          theme === 'night' ? 'bg-[#0A192F] border-slate-700/50' : 'bg-white border-slate-200'
                        }`}>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider font-display flex items-center gap-2">
                              <Code2 className="w-4 h-4 text-[#2563EB]" /> Core Web Vitals Audit Module
                            </h4>
                            <p className="text-xs text-gray-400 mt-1 leading-normal">
                              Measure crucial latency matrices and Technical SEO rankings optimizations as compiled by Zobmi.
                            </p>
                          </div>

                          <div className="my-6">
                            {!speedResult && !isAnalyzing ? (
                              <div className="text-center py-6">
                                <button
                                  onClick={analyzeWebsiteSpeed}
                                  className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider ${
                                    theme === 'night'
                                      ? 'bg-[#00C9A7] text-[#0A192F] hover:bg-emerald-400'
                                      : 'bg-[#2563EB] text-white hover:bg-blue-700'
                                  } cursor-pointer`}
                                >
                                  Analyze Speed Profile
                                </button>
                              </div>
                            ) : isAnalyzing ? (
                              <div className="flex flex-col items-center justify-center space-y-3 py-4">
                                <div className="flex space-x-1.5 items-center">
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-bounce" style={{ animationDelay: '0ms' }} />
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#00C9A7] animate-bounce" style={{ animationDelay: '150ms' }} />
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                                <span className="text-[11px] font-mono text-gray-400">Conducting server speed test loops...</span>
                              </div>
                            ) : (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-2 gap-4"
                              >
                                <div className={`p-3 rounded-lg border ${theme === 'night' ? 'bg-[#050E1C] border-[#00C9A7]/10' : 'bg-slate-50 border-gray-100'}`}>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase">First Contentful Paint</p>
                                  <p className="text-sm font-black text-emerald-500 mt-1 font-display">{speedResult.fcp}</p>
                                </div>

                                <div className={`p-3 rounded-lg border ${theme === 'night' ? 'bg-[#050E1C] border-[#00C9A7]/10' : 'bg-slate-50 border-gray-100'}`}>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase">Cumulative Layout Shift</p>
                                  <p className="text-sm font-black text-emerald-500 mt-1 font-display">{speedResult.cls}</p>
                                </div>

                                <div className={`p-3 rounded-lg border ${theme === 'night' ? 'bg-[#050E1C] border-[#00C9A7]/10' : 'bg-slate-50 border-gray-100'}`}>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase">SEO Rating Matrix</p>
                                  <p className="text-sm font-black text-emerald-500 mt-1 font-display">{speedResult.seo}</p>
                                </div>

                                <div className={`p-3 rounded-lg border ${theme === 'night' ? 'bg-[#050E1C] border-[#00C9A7]/10' : 'bg-slate-50 border-gray-100'}`}>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase">Accessibility Index</p>
                                  <p className="text-sm font-black text-emerald-500 mt-1 font-display">{speedResult.accessibility}</p>
                                </div>
                              </motion.div>
                            )}
                          </div>

                          <div className={`mt-2 border-t pt-2 ${theme === 'night' ? 'border-[#00C9A7]/10' : 'border-gray-200'}`}>
                            {speedResult ? (
                              <p className="text-[10px] leading-relaxed text-emerald-500 font-mono italic">
                                {speedResult.verdict}
                              </p>
                            ) : (
                              <p className="text-[11px] leading-relaxed text-gray-400">
                                🚀 Websites built with React/Next.js and light asset structures ensure your client does not drop out on low network areas.
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Scenario 3: AI Prompt Optimization interactive tool */}
                      {svc.slug === 'ai-solutions' && (
                        <div className={`w-full min-h-[300px] p-6 flex flex-col justify-between rounded-2xl border text-left ${
                          theme === 'night' ? 'bg-[#0A192F] border-slate-700/50' : 'bg-white border-slate-200'
                        }`}>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider font-display flex items-center gap-2">
                              <Sparkles className="w-4.5 h-4.5 text-[#00C9A7]" /> Live AI prompt-tuning Sandbox
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              Convert plain task inputs into structured, professional guidelines for generative AI execution.
                            </p>
                          </div>

                          <div className="my-4 space-y-3 flex-1 flex flex-col justify-center">
                            {promptOutput ? (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex-1"
                              >
                                <textarea
                                  readOnly
                                  value={promptOutput}
                                  rows={5}
                                  className={`w-full p-3 font-mono text-[10px] rounded-xl border outline-hidden resize-none ${
                                    theme === 'night'
                                      ? 'bg-slate-900 border-[#00C9A7]/20 text-gray-300'
                                      : 'bg-slate-50 border-gray-200 text-gray-700'
                                  }`}
                                />
                                <button
                                  onClick={() => setPromptOutput('')}
                                  className="mt-2 text-[10px] underline hover:text-[#00C9A7] font-mono"
                                >
                                  Modify Input
                                </button>
                              </motion.div>
                            ) : (
                              <div className="space-y-3">
                                <input
                                  type="text"
                                  placeholder="Example: Write a customer support reply for wrong delivery..."
                                  value={promptInput}
                                  onChange={(e) => setPromptInput(e.target.value)}
                                  className={`w-full p-3 text-xs rounded-xl border outline-hidden ${
                                    theme === 'night'
                                      ? 'bg-slate-900 border-[#00C9A7]/10 text-white focus:border-[#00C9A7]'
                                      : 'bg-slate-50 border-gray-200 text-gray-800 focus:border-[#2563EB]'
                                  }`}
                                />
                                <button
                                  onClick={optimizeUserPrompt}
                                  disabled={isOptimizing || !promptInput.trim()}
                                  className={`px-4 py-2 bg-[#00C9A7] text-[#0A192F] font-semibold text-xs rounded-lg cursor-pointer hover:bg-emerald-400 transition-colors disabled:opacity-50`}
                                >
                                  {isOptimizing ? 'Optimizing Parameters...' : 'Orchestrate Prompt'}
                                </button>
                              </div>
                            )}
                          </div>

                          <p className="text-[10px] leading-relaxed text-gray-400">
                            💡 Perfect prompting ensures chatbots and dynamic automation return zero structural hallucinations.
                          </p>
                        </div>
                      )}

                      {/* Scenario 4: Digital Transformation strategic recommendation wizard */}
                      {svc.slug === 'digital-transformation' && (
                        <div className={`w-full min-h-[300px] p-6 flex flex-col justify-between rounded-2xl border text-left ${
                          theme === 'night' ? 'bg-[#0A192F] border-slate-700/50' : 'bg-white border-slate-200'
                        }`}>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider font-display flex items-center gap-2">
                              <Cloud className="w-5 h-5 text-[#2563EB]" /> Cloud Adoption Matrix Guide
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              Simulate an institutional cloud-fit structure based on your specific team constraints.
                            </p>
                          </div>

                          <div className="my-6 space-y-4">
                            <div className="space-y-2">
                              <p className="text-[11px] font-semibold">Suggested Secure Infrastructure Stack:</p>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-[#2563EB]/10 text-xs text-[#2563EB] font-semibold rounded-lg font-mono">
                                  ☁️ Google Cloud Platform (Europe-West)
                                </span>
                                <span className="px-3 py-1.5 bg-slate-500/10 text-xs font-mono rounded-lg">
                                  🐳 Docker Containerization (Cloud Run)
                                </span>
                                <span className="px-3 py-1.5 bg-[#00C9A7]/10 text-xs text-[#00c99a] font-semibold rounded-lg font-mono">
                                  🛡️ NDPR Access Isolation Compliance
                                </span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 leading-normal">
                              We securely build, script, containerize, and migrate physical databases to automated environments, ensuring zero active system dropouts.
                            </p>
                          </div>

                          <p className="text-[11px] font-semibold font-mono text-amber-500 flex items-center gap-1.5">
                            <Server className="w-4 h-4" /> Migration success rate: 100% (Audited)
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
