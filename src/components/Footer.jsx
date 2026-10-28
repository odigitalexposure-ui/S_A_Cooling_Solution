import React from "react";
import {
  Snowflake,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Heart,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-cyan-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Columns as specified in Requirement 7 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          {/* Left Section: Name and branding */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                <Snowflake className="w-6 h-6 animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl sm:text-2xl tracking-tight text-white">
                  S A{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    COOLING
                  </span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-cyan-300/80 -mt-1">
                  SOLUTION • KOLKATA
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Kolkata's trusted destination for prompt, professional, and
              affordable air conditioner repair, gas charging, jet pump
              servicing, and installation. 100% genuine parts, transparent
              pricing, and 30-day warranty.
            </p>

            <div className="flex items-center gap-2 text-xs text-cyan-300/90 bg-cyan-950/60 border border-cyan-800/50 p-3 rounded-xl max-w-md">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>
                Certified multi-brand technicians with on-site testing tools.
              </span>
            </div>
          </div>

          {/* Middle Section: Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-cyan-500 text-xs">▸</span> Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-cyan-500 text-xs">▸</span> About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-cyan-500 text-xs">▸</span> Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-cyan-500 text-xs">▸</span> Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-cyan-500 text-xs">▸</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Address with phone number, email, and secondary number (+91 7439 782 485) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact & Support
            </h4>

            <div className="space-y-3 text-sm">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  3/2 Nill Ratan Mukherjee Lane , Shibpur, Near Honey Bee School, Howrah, West Bengal,
                  711102
                </span>
              </div>

              {/* Primary Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">
                    Primary Contact:
                  </span>
                  <a
                    href="tel:+917439782485"
                    className="font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    +91 7439 782 485
                  </a>
                </div>
              </div>

              {/* Secondary Number (+91 7439 782 485) as specifically requested */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">
                    Secondary Number:
                  </span>
                  <a
                    href="tel:+917439782485"
                    className="font-bold text-cyan-300 hover:text-white transition-colors"
                  >
                    +91 7439 782 485
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">
                    Email Address:
                  </span>
                  <a
                    href="mailto:contact@sacoolingsolution.com"
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    contact@sacoolingsolution.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400 space-y-0.5">
                  <div>Mon–Thu: 10:00 am – 7:00 pm</div>
                  <div>Fri: 10:00 am – 12:00 am | Sat: 12–7 am, 10 am–7 pm</div>
                  <div className="text-emerald-400 font-semibold">
                    Sunday: Open 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar with Copyright & Promotional Banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            © {new Date().getFullYear()}{" "}
            <strong className="text-white">S A COOLING SOLUTION</strong>
          </div>

          {/* Banner in footer with the exact link specified by the user */}
          <div className="flex items-center flex-wrap justify-center text-slate-400 text-xs sm:text-sm">
            <span>Designed & Developed By</span>
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Services
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-cyan-900/60 border border-slate-800 text-slate-300 hover:text-white transition-all shadow-md cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
