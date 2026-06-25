import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeProvider';
import { 
  MessageSquare, 
  Calendar as CalendarIcon, 
  User, 
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
  
  const chatEndRef = useRef<HTMLDivElement>(null);

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

  // Scroll to bottom of chat when history changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/2 rounded-full blur-[140px] pointer-events-none" />
      
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
          <div className="flex justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveClinic('dental')}
              className={`px-5 py-2.5 rounded-xl text-sm font-extrabold transition-all duration-350 border ${
                activeClinic === 'dental'
                  ? 'bg-brand-gradient text-white border-transparent shadow-md'
                  : 'bg-theme-bg border-theme-border text-theme-textMuted hover:text-theme-text hover:bg-theme-bgTertiary'
              }`}
            >
              🦷 Apollo Dental (Bilingual / Hinglish)
            </button>
            <button
              onClick={() => setActiveClinic('pediatric')}
              className={`px-5 py-2.5 rounded-xl text-sm font-extrabold transition-all duration-350 border ${
                activeClinic === 'pediatric'
                  ? 'bg-brand-gradient text-white border-transparent shadow-md'
                  : 'bg-theme-bg border-theme-border text-theme-textMuted hover:text-theme-text hover:bg-theme-bgTertiary'
              }`}
            >
              💉 Apex Pediatrics (English)
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
                <div className="bg-[#075e54] text-white pt-6 pb-2.5 px-4 flex items-center gap-2.5 relative z-10">
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
                    <Phone className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                    <Video className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                    <MoreVertical className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  </div>
                </div>

                {/* WhatsApp Messages Scroll Container */}
                <div className={`flex-1 overflow-y-auto p-3 space-y-3 scrollbar-none pb-20 relative transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-[#0b141a]' : 'bg-[#efeae2] bg-opacity-95'
                }`}>
                  {/* Subtle WhatsApp wallpaper icon backing */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                    <MessageSquare className="w-40 h-40 text-white" />
                  </div>

                  {chatHistory.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl px-3 py-2 shadow-sm relative transition-all duration-300 ${
                          msg.sender === 'user'
                            ? (theme === 'dark' ? 'bg-[#005c4b]' : 'bg-[#d9fdd3]') + ' rounded-tr-none'
                            : (theme === 'dark' ? 'bg-[#202c33]' : 'bg-[#ffffff] border border-neutral-200/50') + ' rounded-tl-none'
                        }`}
                      >
                        <div className={`font-sans font-semibold text-[11.5px] leading-normal ${
                          msg.sender === 'user'
                            ? (theme === 'dark' ? '!text-white' : '!text-[#111111]')
                            : (theme === 'dark' ? '!text-neutral-100' : '!text-[#111111]')
                        }`}>
                          {msg.text}
                        </div>
                        <div className={`text-[9px] mt-1 text-right flex items-center justify-end gap-1 font-medium ${
                          theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                        }`}>
                          {msg.time}
                          {msg.sender === 'user' && (
                            <CheckCheck className="w-3 h-3 text-[#53bdeb] stroke-[2.5]" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start animate-pulse">
                      <div className={`rounded-xl rounded-tl-none px-3.5 py-2.5 text-xs shadow-sm flex items-center gap-1.5 transition-colors duration-300 ${
                        theme === 'dark' ? 'bg-[#202c33]' : 'bg-[#ffffff] border border-neutral-200/50'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${theme === 'dark' ? 'bg-neutral-400' : 'bg-neutral-400'}`} style={{ animationDelay: '0ms' }} />
                        <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${theme === 'dark' ? 'bg-neutral-400' : 'bg-neutral-400'}`} style={{ animationDelay: '150ms' }} />
                        <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${theme === 'dark' ? 'bg-neutral-400' : 'bg-neutral-400'}`} style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}
                  
                  <div ref={chatEndRef} />
                </div>

                {/* Bottom Quick-Replies or Input Pane */}
                <div className={`absolute bottom-0 left-0 right-0 p-2.5 border-t flex flex-col gap-2 z-10 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-[#101d25] border-t-neutral-805/50 border-t' : 'bg-[#f0f2f5] border-t-neutral-200 border-t'
                }`}>
                  {step < 3 && !isTyping ? (
                    <div className="flex flex-col gap-1.5 animate-slide-up">
                      {step === 0 && currentConfig.services.map((service, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickReply(service)}
                          className={`text-[11px] font-extrabold py-2 px-3.5 rounded-lg border text-left transition-colors flex items-center justify-between ${
                            theme === 'dark' 
                              ? 'bg-[#202c33] hover:bg-[#2a3942] text-brand-teal border-neutral-700/50' 
                              : 'bg-[#ffffff] hover:bg-neutral-50 text-brand-primary border-neutral-200 shadow-sm'
                          }`}
                        >
                          <span>{service}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-neutral-450" />
                        </button>
                      ))}
                      
                      {step === 1 && (
                        activeClinic === 'dental' 
                          ? ["📅 Tomorrow, 10:00 AM", "📅 Tomorrow, 02:30 PM"]
                          : ["📅 Friday, 11:30 AM", "📅 Friday, 04:30 PM"]
                      ).map((time, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickReply(time)}
                          className={`text-[11px] font-extrabold py-2 px-3.5 rounded-lg border text-left transition-colors flex items-center justify-between ${
                            theme === 'dark' 
                              ? 'bg-[#202c33] hover:bg-[#2a3942] text-brand-teal border-neutral-700/50' 
                              : 'bg-[#ffffff] hover:bg-neutral-50 text-brand-primary border-neutral-200 shadow-sm'
                          }`}
                        >
                          <span>{time}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-neutral-450" />
                        </button>
                      ))}

                      {step === 2 && (
                        activeClinic === 'dental'
                          ? ["✅ Confirm, Rohan Sharma", "✏️ Edit Appointment Details"]
                          : ["✅ Confirm, Aarav Sharma", "✏️ Change Register Profile"]
                      ).map((confirmOpt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickReply(confirmOpt)}
                          className={`text-[11px] font-extrabold py-2 px-3.5 rounded-lg border text-left transition-colors flex items-center justify-between ${
                            theme === 'dark' 
                              ? 'bg-[#202c33] hover:bg-[#2a3942] text-brand-teal border-neutral-700/50' 
                              : 'bg-[#ffffff] hover:bg-neutral-50 text-brand-primary border-neutral-200 shadow-sm'
                          }`}
                        >
                          <span>{confirmOpt}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-neutral-450" />
                        </button>
                      ))}
                    </div>
                  ) : step === 3 ? (
                    <div className="text-center p-1.5 space-y-2 animate-fade-in">
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
                    <div className={`flex-1 rounded-full px-3.5 py-1.5 text-[10.5px] font-medium select-none transition-colors duration-300 ${
                      theme === 'dark' ? 'bg-[#2a3942] text-neutral-400' : 'bg-white text-neutral-500 border border-neutral-200 shadow-inner'
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
                    <p className="text-xs text-theme-textLight font-semibold">{currentConfig.doctor} • {currentConfig.specialty}</p>
                  </div>
                  
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" /> Sync Active
                    </span>
                    <button
                      onClick={resetSandbox}
                      className="text-theme-textLight hover:text-theme-text p-1.5 rounded-lg border border-theme-border bg-theme-bgAlt transition-colors"
                      title="Reset Sandbox Scheduler"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Dashboard Notification Alert Popups */}
                {dashboardAlert && (
                  <div className={`px-4 py-3 rounded-2xl flex items-center gap-3 animate-slide-up shadow-sm border transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-emerald-950/40 border-emerald-850/30 text-emerald-400' 
                      : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  }`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-300 ${
                      theme === 'dark' ? 'bg-emerald-900/50 border-emerald-800/50' : 'bg-emerald-100 border-emerald-300'
                    }`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-black leading-tight ${theme === 'dark' ? 'text-emerald-300' : 'text-emerald-900'}`}>Live AI Webhook Received</p>
                      <p className={`text-[11px] font-semibold truncate mt-0.5 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`}>{dashboardAlert}</p>
                    </div>
                  </div>
                )}

                {/* Scheduler Calendar Grid */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-black text-theme-textLight uppercase tracking-widest px-1">
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
                        <div
                          key={idx}
                          className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[95px] ${
                            isAvail
                              ? 'bg-theme-bgAlt/50 border-theme-border/60 hover:bg-theme-bgAlt'
                              : isBooking
                              ? (theme === 'dark' ? 'bg-amber-950/20 border-amber-800/40 text-amber-300' : 'bg-amber-50/50 border-amber-200/80 text-amber-900') + ' scale-[1.01] shadow-inner'
                              : 'bg-brand-primary/5 border-brand-primary/25 text-theme-text shadow-sm'
                          }`}
                        >
                          {/* Inner glowing accent for active slots */}
                          {isConf && (
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-md pointer-events-none" />
                          )}

                          <div className="flex justify-between items-start z-10">
                            <div className="flex items-center gap-2">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                                isAvail ? 'bg-theme-bgTertiary text-theme-textLight border border-theme-border' 
                                : isBooking ? (theme === 'dark' ? 'bg-amber-950 border border-amber-800 text-amber-400' : 'bg-amber-100 border border-amber-250 text-amber-700') + ' animate-pulse'
                                : 'bg-brand-gradient text-white shadow-sm'
                              }`}>
                                <Clock className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-xs font-black tracking-tight">{slot.time}</span>
                            </div>

                            {/* Badge */}
                            <span className={`text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded border transition-colors duration-300 ${
                              isAvail ? 'bg-theme-bgTertiary text-theme-textLight border-theme-border'
                              : isBooking ? (theme === 'dark' ? 'bg-amber-950/80 text-amber-400 border-amber-800/30' : 'bg-amber-50 text-amber-700 border-amber-200')
                              : (theme === 'dark' ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/30' : 'bg-emerald-50 text-emerald-700 border-emerald-200')
                            }`}>
                              {slot.status}
                            </span>
                          </div>

                          {/* Slot Details (Patient or Action CTA) */}
                          <div className="mt-3.5 pt-2 border-t border-theme-border/30 z-10">
                            {isAvail ? (
                              <span className="text-[11px] text-theme-textLight font-semibold italic flex items-center gap-1.5">
                                <Plus className="w-3 h-3 text-theme-textLight" /> Slot open for booking
                              </span>
                            ) : isBooking ? (
                              <span className={`text-[11px] font-extrabold flex items-center gap-1.5 animate-pulse ${
                                theme === 'dark' ? 'text-amber-400' : 'text-amber-700'
                              }`}>
                                <span className={`w-1.5 h-1.5 rounded-full animate-ping ${theme === 'dark' ? 'bg-amber-400' : 'bg-amber-600'}`} /> AI holding slot...
                              </span>
                            ) : (
                              <div className="space-y-0.5 text-left">
                                <p className="text-[11px] font-black text-theme-text flex items-center gap-1">
                                  <User className="w-3 h-3 text-brand-primary" /> {slot.patientName}
                                </p>
                                <p className="text-[10px] text-theme-textMuted font-semibold leading-none">{slot.service}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Central Deployment CTA card */}
              <div className="mt-8 pt-6 border-t border-theme-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left space-y-0.5">
                  <h4 className="text-sm font-black text-theme-text">Impressed by the flow?</h4>
                  <p className="text-xs text-theme-textLight font-semibold">Deploy a customized AI chat and scheduler layout tailored for your clinic vertical.</p>
                </div>
                <button
                  onClick={handleDeployBot}
                  className="w-full sm:w-auto bg-brand-gradient hover:brightness-105 text-white text-xs font-extrabold px-5 py-3.5 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-1.5 group select-none"
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
