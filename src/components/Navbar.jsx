import React, { useState, useEffect } from 'react';
import { Phone, Snowflake, Menu, X, Wrench, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section for nav highlight
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-cyan-950/20 border-b border-cyan-500/20 py-3'
            : 'bg-slate-900/80 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform">
                <Snowflake className="w-6 h-6 animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1">
                  S A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">COOLING</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-cyan-300/80 -mt-1">
                  SOLUTION • KOLKATA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeSection === link.id
                      ? 'text-cyan-400 bg-cyan-950/60 shadow-inner border border-cyan-800/50'
                      : 'text-slate-200 hover:text-cyan-300 hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="tel:+919804685701"
                className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
                title="Call Main Number: +91 98046 85701"
              >
                <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>+91 98046 85701</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="tel:+919804685701"
                className="p-2 rounded-lg bg-cyan-600 text-white shadow-md shadow-cyan-600/30 active:scale-95 transition-transform"
                title="Call Main: +91 98046 85701"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none border border-slate-700/60"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 border-t border-slate-800 mt-3 pt-2 bg-slate-950/95 backdrop-blur-xl px-4 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-950/70 border border-cyan-800/50'
                    : 'text-slate-200 hover:text-cyan-300 hover:bg-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 mt-2 flex flex-col gap-2">
              <a
                href="tel:+919804685701"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-center shadow-lg shadow-cyan-600/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call Main: +91 98046 85701</span>
              </a>
              <a
                href="https://wa.me/919804685701?text=Hello%20S%20A%20Cooling%20Solution,%20I%20need%20AC%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center shadow-md shadow-emerald-700/30"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp: +91 98046 85701</span>
              </a>
              <a
                href="tel:+917439782485"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-cyan-300 text-xs font-semibold text-center border border-slate-700/80"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Secondary: +91 7439 782 485</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-cyan-400/80 py-1">
                <Wrench className="w-3.5 h-3.5" />
                <span>24/7 Doorstep AC Repair Service in Kolkata</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
