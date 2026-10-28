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
          href="https://wa.me/917439782485?text=Hello%20S%20A%20Cooling%20Solution,%20I%20need%20AC%20repair%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        {/* Direct Call Floating Button */}
        <a
          href="tel:+917439782485"
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/40 transition-all hover:scale-105 active:scale-95 animate-bounce-subtle"
          aria-label="Call S A Cooling Solution"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="font-extrabold">+91 7439 782 485</span>
        </a>
      </div>

      {/* Mobile Bottom Fixed Bar for 1-Tap Calling */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex sm:hidden items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:+917439782485"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-xs shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span>Call: 7439 782 485</span>
        </a>
        <a
          href="https://wa.me/917439782485?text=Hello%20S%20A%20Cooling%20Solution,%20I%20need%20AC%20repair%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-md"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#contact"
          className="px-3 py-2.5 rounded-xl bg-slate-800 text-cyan-300 font-bold text-xs border border-slate-700"
        >
          Book
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;
