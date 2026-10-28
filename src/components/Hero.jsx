import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ShieldCheck, Sparkles, Snowflake, ZoomIn } from 'lucide-react';
import { useMediaModal } from '../context/MediaModalContext';

// Import AI generated AC Repairing images matching each service
import serviceCoolingFix from '../assets/service_cooling_fix.jpg';
import serviceJetCleaning from '../assets/service_jet_cleaning.jpg';
import serviceGasRefill from '../assets/service_gas_refill.jpg';
import serviceWaterLeak from '../assets/service_water_leak.jpg';
import serviceElectricalRepair from '../assets/service_electrical_repair.jpg';
import serviceInstallation from '../assets/service_installation.jpg';

const heroSlides = [
    {
        image: serviceCoolingFix,
        tag: '⚡ Fast & Reliable Doorstep Response',
        serviceTitle: 'Outdoor AC Condenser & Cooling Diagnostic',
        title: 'Top-Rated AC Repair & Servicing in Kolkata',
        subtitle: 'Facing cooling issues, gas leakage, or strange noises? Our certified technicians restore your AC cooling at budget-friendly rates.',
        badge: '100% Cooling Restored',
    },
    {
        image: serviceJetCleaning,
        tag: '❄️ Precision Jet-Pump AC Servicing',
        serviceTitle: 'High-Pressure Jet Chemical Cleaning',
        title: 'Deep Chemical & Jet Pump AC Cleaning',
        subtitle: 'Eliminate 99% dust, mold, and blockages with high-pressure deep coil cleaning for icy cold airflow and lower electric bills.',
        badge: 'Power Saving Service',
    },
    {
        image: serviceGasRefill,
        tag: '🔧 Genuine Gas Charging & Leak Detection',
        serviceTitle: 'Precision Manifold Gas Charging & Leak Fix',
        title: '100% Pure AC Gas Refilling With Leak Fix',
        subtitle: 'R32, R410A, and R22 refrigerant charging with advanced nitrogen pressure testing to ensure zero future gas leakage.',
        badge: 'Genuine Refrigerant',
    },
    {
        image: serviceWaterLeak,
        tag: '💧 Immediate Water Leakage Rectification',
        serviceTitle: 'Split AC Drain Pipe & Water Leakage Fix',
        title: 'Stop Indoor AC Water Dripping Today',
        subtitle: 'Complete drainage declogging, condensate tray leveling, and piping repairs to safeguard your walls and interiors.',
        badge: 'Same-Day Fix',
    },
    {
        image: serviceElectricalRepair,
        tag: '🔌 Expert PCB & Electrical Fault Diagnostics',
        serviceTitle: 'Inverter AC Motherboard & Circuit Repair',
        title: 'Advanced Circuit Board & Inverter AC Repair',
        subtitle: 'Comprehensive troubleshooting of inverter PCBs, capacitor failure, sensor breakdown, and compressor tripping.',
        badge: 'Inverter Specialists',
    },
    {
        image: serviceInstallation,
        tag: '🏆 Kolkata’s Trusted Cooling Specialists',
        serviceTitle: 'Split AC Wall Mounting & Installation',
        title: 'Complete AC Solutions for Home & Office',
        subtitle: 'Split, Window, Cassette, and Multi-Inverter systems. Transparent upfront pricing with 30-day post-service warranty.',
        badge: '30-Day Warranty',
    },
];

const heroMediaList = heroSlides.map((slide, i) => ({
    id: i + 1,
    type: 'image',
    src: slide.image,
    title: slide.serviceTitle || slide.title,
    category: 'Live AC Servicing',
    desc: slide.subtitle,
}));

const Hero = () => {
    const { openModal } = useMediaModal();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Strictly automatic sliding with 3-second (3000ms) interval
    // Runs continuously without pause so user sees constant, smooth auto-sliding
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    // Reusable Auto-Sliding Showcase Card (Bright, Crystal Clear, No dimming)
    const renderSliderBlock = () => (
        <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-blue-500/30 border border-cyan-500/40 shadow-2xl shadow-cyan-950/50">

            {/* Image Frame - Clickable to open modal with 100% brightness */}
            <div
                onClick={() => openModal(heroMediaList, currentSlide)}
                className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-slate-950 cursor-pointer group"
                title="Click to expand photo in modal"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        openModal(heroMediaList, currentSlide);
                    }
                }}
            >
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide
                                ? 'opacity-100 z-10'
                                : 'opacity-0 z-0 pointer-events-none'
                            }`}
                    >
                        {/* Clear, bright image with natural colors and high definition */}
                        <img
                            src={slide.image}
                            alt="S A Cooling Solution AC Repair Work"
                            className="w-full h-full object-cover object-center filter brightness-100 contrast-100 group-hover:scale-105 transition-transform duration-700"
                            loading={index === 0 ? 'eager' : 'lazy'}
                        />
                    </div>
                ))}

                {/* Floating Top Trust Badge */}
                <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-30 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/50 text-white text-[10px] sm:text-xs font-bold shadow-lg">
                    <Snowflake className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                    <span>S A COOLING SOLUTION • LIVE WORK</span>
                </div>

                {/* Click to expand hover hint */}
                <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-600/90 text-white text-[10px] sm:text-xs font-bold shadow-lg">
                    <ZoomIn className="w-3 h-3" />
                    <span>Click to Zoom</span>
                </div>

                {/* 3-Second Auto-Sliding Progress Line at the very bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-slate-800/80">
                    <div
                        key={currentSlide}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{
                            animation: 'heroProgress 3s linear forwards',
                        }}
                    />
                </div>
            </div>

            {/* Centered Visual Indicators (Text Removed) */}
            <div className="pt-2 sm:pt-2.5 pb-0.5 flex items-center justify-center gap-1.5">
                {heroSlides.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide
                                ? 'w-6 sm:w-7 bg-cyan-400 shadow-sm shadow-cyan-400/50'
                                : 'w-2 bg-slate-700'
                            }`}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <section
            id="home"
            className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16 sm:py-28 overflow-hidden"
        >
            {/* Ambient Cool Glow Effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Main Content Column */}
                    <div className="lg:col-span-6 text-left space-y-5 sm:space-y-6">

                        {/* Animated Tagline Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-950/60">
                            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                            <span>{heroSlides[currentSlide].tag}</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.15]">
                            Kolkata's Premier <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                                AC Repair & Servicing
                            </span>{' '}
                            Specialists
                        </h1>

                        {/* MOBILE VIEW ONLY: Sliding portion displayed immediately after hero heading */}
                        <div className="block lg:hidden my-4">
                            {renderSliderBlock()}
                        </div>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
                            {heroSlides[currentSlide].subtitle}
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm sm:text-base text-center"
                            >
                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>Book Instant AC Service</span>
                            </a>
                            <a
                                href="tel:+917439782485"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-cyan-200 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 hover:text-white shadow-lg transition-all text-sm sm:text-base text-center group"
                            >
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                                <span>Call +91 7439 782 485</span>
                            </a>
                        </div>

                        {/* Brand mentions & Live Status */}
                        <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-slate-400">
                            <span className="inline-flex items-center gap-1.5 font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/50">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                Technicians Available Across Kolkata
                            </span>
                            <span>All Brands: Voltas, Daikin, LG, Samsung, Blue Star, Lloyd</span>
                        </div>

                        {/* MOBILE ONLY: Mini Stats strip under CTAs */}
                        <div className="grid grid-cols-3 gap-2.5 pt-2 lg:hidden">
                            <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-2.5 text-center">
                                <div className="text-base font-black text-cyan-400">10,000+</div>
                                <div className="text-[10px] text-slate-400">ACs Serviced</div>
                            </div>
                            <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-2.5 text-center">
                                <div className="text-base font-black text-amber-400">4.9 ★</div>
                                <div className="text-[10px] text-slate-400">Google Rating</div>
                            </div>
                            <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-2.5 text-center">
                                <div className="text-base font-black text-emerald-400">24/7</div>
                                <div className="text-[10px] text-slate-400">Support</div>
                            </div>
                        </div>

                    </div>

                    {/* DESKTOP ONLY: Right Column with Slider & Stats */}
                    <div className="hidden lg:block lg:col-span-6 space-y-4">
                        {renderSliderBlock()}

                        {/* Desktop Mini Stats strip below image */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-3 text-center">
                                <div className="text-lg sm:text-xl font-black text-cyan-400">10,000+</div>
                                <div className="text-[11px] text-slate-400">ACs Serviced</div>
                            </div>
                            <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-3 text-center">
                                <div className="text-lg sm:text-xl font-black text-amber-400">4.9 ★</div>
                                <div className="text-[11px] text-slate-400">Google Rating</div>
                            </div>
                            <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-3 text-center">
                                <div className="text-lg sm:text-xl font-black text-emerald-400">24/7</div>
                                <div className="text-[11px] text-slate-400">Support</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Progress animation keyframe */}
            <style>{`
        @keyframes heroProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
