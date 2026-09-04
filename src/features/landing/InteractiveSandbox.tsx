import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../theme/ThemeProvider';
import {
  MessageSquare,
  Calendar as CalendarIcon,
  Check,
  CheckCheck,
  RefreshCw,
  ChevronRight,
  Clock,
  Activity,
  Phone,
  Video,
  MoreVertical,
  Plus,
  Send,
  Zap,
  Sparkles
} from 'lucide-react';


interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  time: string;
  isQuickReply?: boolean;
}

interface TimeSlot {
  time: string;
  status: 'available' | 'booking' | 'confirmed';
  patientName?: string;
  service?: string;
}

export const InteractiveSandbox: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [activeClinic, setActiveClinic] = useState<'dental' | 'pediatric'>('dental');
  const [step, setStep] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [dashboardAlert, setDashboardAlert] = useState<string | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Simulated data definitions
  const clinicConfig = {
    dental: {
      name: "Apollo Dental Care",
      doctor: "Dr. Amit Gupta (B.D.S, M.D.S)",
      specialty: "Dental Scaling & Aesthetics",
      location: "Sector 15, Gurgaon",
      initialSlots: [
        { time: "10:00 AM", status: "available" },
        { time: "11:30 AM", status: "confirmed", patientName: "Mrs. Verma", service: "Root Canal" },
        { time: "02:30 PM", status: "available" },
        { time: "04:00 PM", status: "confirmed", patientName: "Mr. Kapoor", service: "Checkup" }
      ] as TimeSlot[],
      welcomeMsg: "Namaste! Welcome to Apollo Dental Care's booking assistant. Aapko kaunsi service chahiye? Choose below:",
      services: ["🦷 Cleanings/Scaling", "🩹 Cavity/Filling"]
    },
    pediatric: {
      name: "Apex Pediatrics Clinic",
      doctor: "Dr. Anjali Rao (M.B.B.S, M.D. Ped)",
      specialty: "Pediatric Care & Immunization",
      location: "Indiranagar, Bengaluru",
      initialSlots: [
        { time: "09:30 AM", status: "confirmed", patientName: "Baby Aisha", service: "Checkup" },
        { time: "11:30 AM", status: "available" },
        { time: "03:00 PM", status: "confirmed", patientName: "Master Kabir", service: "Fever Consult" },
        { time: "04:30 PM", status: "available" }
      ] as TimeSlot[],
      welcomeMsg: "Hello! Welcome to Apex Pediatrics. How can we help your child today?",
      services: ["💉 Vaccination", "🤒 Fever/Consultation"]
    }
  };

  const currentConfig = clinicConfig[activeClinic];

  // Initialize/Reset sandbox when clinic selection changes
  useEffect(() => {
    resetSandbox();
  }, [activeClinic]);

  // Scroll to bottom of inner chat container when history changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatHistory, isTyping]);

  const resetSandbox = () => {
    setStep(0);
    setIsTyping(false);
    setDashboardAlert(null);
    setSlots(JSON.parse(JSON.stringify(clinicConfig[activeClinic].initialSlots)));
    setChatHistory([
      {
        sender: 'bot',
        text: clinicConfig[activeClinic].welcomeMsg,
        time: getCurrentTime()
      }
    ]);
  };

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Handle user inputs/quick replies
  const handleQuickReply = (optionText: string) => {
    if (isTyping) return;

    // 1. Add user reply to chat list
    const userMsg: ChatMessage = {
      sender: 'user',
      text: optionText,
      time: getCurrentTime()
    };
    setChatHistory(prev => [...prev, userMsg]);
    setIsTyping(true);

    // 2. State-machine step routing
    setTimeout(() => {
      setIsTyping(false);

      if (step === 0) {
        // Step 0 -> Step 1: Service Selected -> Suggest slot
        const nextBotMsg: ChatMessage = {
          sender: 'bot',
          text: activeClinic === 'dental'
            ? "Bohot badhiya! Dr. Amit Gupta ke paas kal appointments available hain. Please select your preferred time slot:"
            : "Great! Dr. Anjali Rao is available on Friday. Please select a time slot for the vaccination:",
          time: getCurrentTime()
        };

        setChatHistory(prev => [...prev, nextBotMsg]);
        setStep(1);

      } else if (step === 1) {
        // Step 1 -> Step 2: Slot Selected -> Ask for Patient Name Confirmation
        const selectedSlotTime = optionText.includes("10:00") ? "10:00 AM"
          : optionText.includes("02:30") ? "02:30 PM"
            : optionText.includes("11:30") ? "11:30 AM"
              : "04:30 PM";

        // Update dashboard slot to "booking" state
        setSlots(prev => prev.map(s =>
          s.time === selectedSlotTime ? { ...s, status: 'booking' } : s
        ));

        const patientName = activeClinic === 'dental' ? "Rohan Sharma" : "Aarav Sharma";
        const nextBotMsg: ChatMessage = {
          sender: 'bot',
          text: activeClinic === 'dental'
            ? `Noted. Clinic records ke anusar aapka registered name '${patientName}' hai. Kya hum is under-booking ko confirm karein?`
            : `Understood. To book this slot, please confirm you are registering child '${patientName}'?`,
          time: getCurrentTime()
        };

        setChatHistory(prev => [...prev, nextBotMsg]);
        setStep(2);

      } else if (step === 2) {
        // Step 2 -> Step 3: Confirmed -> Complete Booking
        const selectedSlot = slots.find(s => s.status === 'booking');
        const bookedTime = selectedSlot ? selectedSlot.time : "Requested Slot";
        const patientName = activeClinic === 'dental' ? "Rohan Sharma" : "Aarav Sharma";
        const serviceName = activeClinic === 'dental' ? "Dental Scaling" : "Vaccination";

        // Update dashboard slot to "confirmed" state with names
        setSlots(prev => prev.map(s =>
          s.status === 'booking' ? { ...s, status: 'confirmed', patientName, service: serviceName } : s
        ));

        // Trigger Dashboard Alert banner
        setDashboardAlert(`New Booking Confirmed: ${patientName} (${serviceName})`);

        const nextBotMsg: ChatMessage = {
          sender: 'bot',
          text: activeClinic === 'dental'
            ? `Aapka slot book ho gaya! Appointment confirmed. WhatsApp par details bhej diye hain. See you at ${bookedTime} tomorrow!`
            : `Booking successful! Aarav's vaccination slot is confirmed for Friday at ${bookedTime}. A calendar invite has been sent.`,
          time: getCurrentTime()
        };

        setChatHistory(prev => [...prev, nextBotMsg]);
        setStep(3);
      }
    }, 1200); // Realistic bot typing simulation delay
  };

  // Bridge lead selection back to Quotation Page
  const handleDeployBot = () => {
    const vertical = "Healthcare";
    const capabilities = ["ai-agents"];
    const notes = `Configured during Homepage Sandbox. Clinic: ${currentConfig.name}, Specialty: ${currentConfig.specialty}, Mode: ${activeClinic}`;

    const params = new URLSearchParams({
      orgName: currentConfig.name,
      vertical,
      notes,
      caps: capabilities.join(',')
    });

    navigate(`/get-quotation?${params.toString()}`);
  };

  return (
    <section id="sandbox-section" className="relative py-20 bg-theme-bgAlt border-t border-theme-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="gradient-badge font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" /> Live Experience Sandbox
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-theme-text leading-tight">
            Try the Eazmate AI <span className="text-gradient">Conversational Playground</span>
          </h2>
          <p className="text-theme-textMuted text-base font-semibold leading-relaxed">
            See exactly how a patient books an appointment via WhatsApp and watch how the Clinic Dashboard schedules the slot in real-time. Select a clinic profile below to begin.
          </p>

          {/* Profile Switch Controller */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveClinic('dental')}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-black transition-all duration-300 border flex items-center gap-2 ${
                activeClinic === 'dental'
                  ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30 scale-[1.02]'
                  : 'bg-theme-bg border-theme-border text-theme-textMuted hover:text-theme-text hover:bg-theme-bgTertiary hover:border-blue-500/40'
              }`}
            >
              <span>🦷 Apollo Dental</span>
              <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-black ${
                activeClinic === 'dental' ? 'bg-white text-blue-900 shadow-sm' : 'bg-theme-bgTertiary text-theme-textMuted'
              }`}>Hinglish / AI</span>
            </button>
            <button
              onClick={() => setActiveClinic('pediatric')}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-black transition-all duration-300 border flex items-center gap-2 ${
                activeClinic === 'pediatric'
                  ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-600/30 scale-[1.02]'
                  : 'bg-theme-bg border-theme-border text-theme-textMuted hover:text-theme-text hover:bg-theme-bgTertiary hover:border-purple-500/40'
              }`}
            >
              <span>👶 Apex Pediatrics</span>
              <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-black ${
                activeClinic === 'pediatric' ? 'bg-white text-purple-900 shadow-sm' : 'bg-theme-bgTertiary text-theme-textMuted'
              }`}>English / Sync</span>
            </button>
          </div>
        </div>

        {/* ═══ Visual Interactive Panel Grid ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">

          {/* LEFT COLUMN: Phone WhatsApp Simulator (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] h-[580px] bg-neutral-900 rounded-[40px] p-3 shadow-2xl border-4 border-neutral-800 flex flex-col overflow-hidden">

              {/* Speaker / Camera notches */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl z-20 flex items-center justify-center gap-1.5">
                <div className="w-12 h-1 bg-neutral-800 rounded-full" />
                <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full" />
              </div>

              {/* Phone Content Interface */}
              <div className="w-full h-full bg-[#0b141a] rounded-[30px] overflow-hidden flex flex-col relative">

                {/* WhatsApp Chat Header */}
                <div className="bg-[#075e54] text-white pt-6 pb-2.5 px-4 flex items-center gap-2.5 relative z-10 shadow-md">
                  <div className="w-8.5 h-8.5 rounded-full bg-emerald-950 flex items-center justify-center text-sm font-bold border border-emerald-800/40 text-emerald-300">
                    {activeClinic === 'dental' ? "🦷" : "👶"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-black truncate leading-tight text-white">{currentConfig.name}</h4>
                    <span className="text-[10px] text-emerald-300 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" /> Eazmate AI Assistant
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-200">
                    <Phone className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
                    <Video className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
                    <MoreVertical className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>

                {/* WhatsApp Messages Scroll Container */}
                <div
                  ref={chatContainerRef}
                  className={`flex-1 overflow-y-auto p-3 space-y-2.5 scrollbar-none pb-20 relative transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-[#0b141a]' : 'bg-[#efeae2] bg-opacity-95'
                  }`}
                >
                  {/* Subtle WhatsApp wallpaper icon backing */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                    <MessageSquare className="w-40 h-40 text-white" />
                  </div>

                  <AnimatePresence initial={false}>
                    {chatHistory.map((msg, idx) => (
                      <motion.div
                        key={`${activeClinic}-${idx}-${msg.time}`}
                        initial={{ opacity: 0, y: 12, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 450, damping: 28 }}
                        className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm relative transition-all duration-300 ${
                            msg.sender === 'user'
                              ? (theme === 'dark' ? 'bg-[#005c4b]' : 'bg-[#d9fdd3]') + ' rounded-tr-none'
                              : (theme === 'dark' ? 'bg-[#202c33]' : 'bg-[#ffffff] border border-neutral-200/50') + ' rounded-tl-none'
                          }`}
                        >
                          <div
                            className={`font-sans font-semibold text-[11.5px] leading-normal ${
                              msg.sender === 'user'
                                ? (theme === 'dark' ? '!text-white' : '!text-[#111111]')
                                : (theme === 'dark' ? '!text-neutral-100' : '!text-[#111111]')
                            }`}
                          >
                            {msg.text}
                          </div>
                          <div
                            className={`text-[9px] mt-1 text-right flex items-center justify-end gap-1 font-medium ${
                              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                            }`}
                          >
                            {msg.time}
                            {msg.sender === 'user' && (
                              <CheckCheck className="w-3 h-3 text-[#53bdeb] stroke-[2.5]" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex justify-start"
                    >
                      <div
                        className={`rounded-2xl rounded-tl-none px-4 py-2.5 text-xs shadow-sm flex items-center gap-1.5 transition-colors duration-300 ${
                          theme === 'dark' ? 'bg-[#202c33]' : 'bg-[#ffffff] border border-neutral-200/50'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Quick-Replies or Input Pane */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-2.5 border-t flex flex-col gap-2 z-10 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-[#101d25] border-t-neutral-800' : 'bg-[#f0f2f5] border-t-neutral-200'
                  }`}
                >
                  {step < 3 && !isTyping ? (
                    <div className="flex flex-col gap-1.5">
                      {step === 0 && currentConfig.services.map((service, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02, x: 2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuickReply(service)}
                          className={`text-[11px] font-extrabold py-2 px-3.5 rounded-lg border text-left transition-colors flex items-center justify-between ${
                            theme === 'dark'
                              ? 'bg-[#202c33] hover:bg-[#2a3942] text-brand-teal border-neutral-700/50'
                              : 'bg-[#ffffff] hover:bg-neutral-50 text-brand-primary border-neutral-200 shadow-sm'
                          }`}
                        >
                          <span>{service}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                        </motion.button>
                      ))}

                      {step === 1 && (
                        activeClinic === 'dental'
                          ? ["📅 Tomorrow, 10:00 AM", "📅 Tomorrow, 02:30 PM"]
                          : ["📅 Friday, 11:30 AM", "📅 Friday, 04:30 PM"]
                      ).map((time, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02, x: 2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuickReply(time)}
                          className={`text-[11px] font-extrabold py-2 px-3.5 rounded-lg border text-left transition-colors flex items-center justify-between ${
                            theme === 'dark'
                              ? 'bg-[#202c33] hover:bg-[#2a3942] text-brand-teal border-neutral-700/50'
                              : 'bg-[#ffffff] hover:bg-neutral-50 text-brand-primary border-neutral-200 shadow-sm'
                          }`}
                        >
                          <span>{time}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                        </motion.button>
                      ))}

                      {step === 2 && (
                        activeClinic === 'dental'
                          ? ["✅ Confirm, Rohan Sharma", "✏️ Edit Appointment Details"]
                          : ["✅ Confirm, Aarav Sharma", "✏️ Change Register Profile"]
                      ).map((confirmOpt, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02, x: 2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuickReply(confirmOpt)}
                          className={`text-[11px] font-extrabold py-2 px-3.5 rounded-lg border text-left transition-colors flex items-center justify-between ${
                            theme === 'dark'
                              ? 'bg-[#202c33] hover:bg-[#2a3942] text-brand-teal border-neutral-700/50'
                              : 'bg-[#ffffff] hover:bg-neutral-50 text-brand-primary border-neutral-200 shadow-sm'
                          }`}
                        >
                          <span>{confirmOpt}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                        </motion.button>
                      ))}
                    </div>
                  ) : step === 3 ? (
                    <div className="text-center p-1.5 space-y-2">
                      <p className={`text-[10px] font-semibold leading-normal ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        Simulated Patient Booking Complete!
                      </p>
                      <button
                        onClick={resetSandbox}
                        className={`inline-flex items-center gap-1.5 font-extrabold text-[10px] px-3.5 py-1.5 rounded-lg transition-colors border ${
                          theme === 'dark'
                            ? 'bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700'
                            : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-300 shadow-sm'
                        }`}
                      >
                        <RefreshCw className="w-3 h-3 text-brand-teal" /> Restart Demo
                      </button>
                    </div>
                  ) : (
                    <div className={`h-6 flex items-center justify-center text-[10px] font-semibold italic ${
                      theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                    }`}>
                      Eazmate AI is preparing response...
                    </div>
                  )}


                  {/* Mock Text Field */}
                  <div className="flex gap-2 items-center mt-1">
                    <div className={`flex-1 rounded-full px-3.5 py-1.5 text-[10.5px] font-medium select-none transition-colors duration-300 ${theme === 'dark' ? 'bg-[#2a3942] text-neutral-400' : 'bg-white text-neutral-500 border border-neutral-200 shadow-inner'
                      }`}>
                      Type a message...
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-sm select-none">
                      <Send className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Eazmate Clinic Dashboard Simulator (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="glass-card rounded-3xl p-6 shadow-xl relative h-full flex flex-col justify-between border border-theme-border bg-theme-bg/60">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-gradient opacity-35" />

              {/* Dashboard Content Container */}
              <div className="space-y-6">

                {/* Dashboard Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-theme-border">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 text-[10px] text-brand-primary uppercase tracking-widest font-black">
                      <Activity className="w-3 h-3" /> Live Clinic Operations Portal
                    </span>
                    <h3 className="text-xl font-black text-theme-text tracking-tight flex items-center gap-2">
                      {currentConfig.name} Scheduler
                    </h3>
                    <p className="text-xs text-theme-textMuted font-semibold">{currentConfig.doctor} • {currentConfig.specialty}</p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-md flex items-center gap-1.5 bg-emerald-600 text-white shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" /> Sync Active
                    </span>
                    <button
                      onClick={resetSandbox}
                      className="text-theme-textMuted hover:text-theme-text p-1.5 rounded-lg border border-theme-border bg-theme-bgAlt transition-colors"
                      title="Reset Sandbox Scheduler"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Dashboard Notification Alert Popups */}
                <AnimatePresence>
                  {dashboardAlert && (
                    <motion.div
                      initial={{ opacity: 0, y: -12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg border border-emerald-400/40 bg-emerald-600 text-white"
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-white/20 text-white">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black leading-tight text-white">
                          Live AI Webhook Dispatched
                        </p>
                        <p className="text-[11px] font-semibold truncate mt-0.5 text-emerald-100">
                          {dashboardAlert}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Scheduler Calendar Grid */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-black text-theme-textMuted uppercase tracking-widest px-1">
                    <span>Target Appointments</span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px]">
                      <CalendarIcon className="w-3.5 h-3.5 text-brand-primary" /> Today
                    </span>
                  </div>

                    {/* Booking Slots list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {slots.map((slot, idx) => {
                        const isAvail = slot.status === 'available';
                        const isBooking = slot.status === 'booking';
                        const isConf = slot.status === 'confirmed';

                        return (
                          <motion.div
                            key={idx}
                            layout
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[98px] ${
                              isAvail
                                ? 'bg-theme-bgAlt/50 border-theme-border/60 hover:bg-theme-bgAlt hover:border-cyan-500/40 hover:shadow-sm'
                                : isBooking
                                ? (theme === 'dark'
                                    ? 'bg-gradient-to-br from-amber-950/40 via-amber-900/20 to-theme-bgAlt border-amber-500/50 text-amber-300 shadow-lg shadow-amber-500/10'
                                    : 'bg-gradient-to-br from-amber-50 via-orange-50/50 to-white border-amber-400 text-amber-900 shadow-md') + ' scale-[1.01]'
                                : (theme === 'dark'
                                    ? 'bg-gradient-to-br from-emerald-950/40 via-teal-900/20 to-theme-bgAlt border-emerald-500/50 text-emerald-300 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                                    : 'bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-white border-emerald-400 text-emerald-900 shadow-md ring-1 ring-emerald-500/20')
                            }`}
                          >
                            <div className="flex justify-between items-start z-10">
                              <div className="flex items-center gap-2">
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                                  isAvail
                                    ? 'bg-theme-bgTertiary text-theme-textLight border border-theme-border'
                                    : isBooking
                                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                                    : 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                                }`}>
                                  <Clock className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-xs font-black tracking-tight">{slot.time}</span>
                              </div>

                              <span className={`text-[9.5px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-sm transition-colors duration-300 ${
                                isAvail
                                  ? 'bg-theme-bgTertiary text-theme-textMuted border border-theme-border'
                                  : isBooking
                                  ? 'bg-amber-500 text-slate-950 font-black'
                                  : 'bg-emerald-600 text-white font-black'
                              }`}>
                                {isConf ? `✓ ${slot.status}` : slot.status}
                              </span>
                            </div>

                            {/* Slot Details (Patient or Action CTA) */}
                            <div className="mt-3.5 pt-2 border-t border-theme-border/30 z-10">
                              {isAvail ? (
                                <span className="text-[11px] text-theme-textMuted font-semibold italic flex items-center gap-1.5">
                                  <Plus className="w-3 h-3 text-cyan-500" /> Slot open for booking
                                </span>
                              ) : isBooking ? (
                                <span className={`text-[11px] font-extrabold flex items-center gap-1.5 animate-pulse ${
                                  theme === 'dark' ? 'text-amber-300' : 'text-amber-700'
                                }`}>
                                  <span className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-amber-400' : 'bg-amber-600'}`} /> AI holding slot...
                                </span>
                              ) : (
                                <div className="space-y-0.5 text-left">
                                  <p className="text-[11px] font-black text-theme-text flex items-center gap-1.5">
                                    <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-black shadow-sm">
                                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                                    </span>
                                    {slot.patientName}
                                  </p>
                                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold leading-none pl-5">{slot.service}</p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                </div>

              </div>

              {/* Central Deployment CTA card */}
              <div className="mt-8 pt-6 border-t border-theme-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left space-y-0.5">
                  <h4 className="text-sm font-black text-theme-text">Impressed by the flow?</h4>
                  <p className="text-xs text-theme-textMuted font-semibold">Deploy a customized AI chat and scheduler layout tailored for your clinic vertical.</p>
                </div>
                <button
                  onClick={handleDeployBot}
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white text-xs font-black px-5 py-3.5 rounded-xl transition-all shadow-md shadow-purple-600/30 inline-flex items-center justify-center gap-1.5 group select-none"
                >
                  Deploy this Bot to My Clinic
                  <Zap className="w-3.5 h-3.5 text-white animate-pulse" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
