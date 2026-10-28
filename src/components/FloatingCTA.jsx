import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

const FloatingCTA = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons: Bottom Left & Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Scroll To Top Pill */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3 rounded-full bg-slate-900/90 text-cyan-400 hover:text-white hover:bg-slate-800 shadow-xl border border-slate-700/80 transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919804685701?text=Hello%20S%20A%20Cooling%20Solution,%20I%20need%20AC%20repair%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 group"
          aria-label="Chat on WhatsApp +91 98046 85701"
          title="WhatsApp: +91 98046 85701"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        {/* Direct Call Floating Button */}
        <a
          href="tel:+919804685701"
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/40 transition-all hover:scale-105 active:scale-95 animate-bounce-subtle"
          aria-label="Call S A Cooling Solution Main Number"
          title="Call Main Number: +91 98046 85701"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="font-extrabold">+91 98046 85701</span>
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;
