import React from 'react';
import { ShieldCheck, Award, Users, ThumbsUp, Wrench, CheckCircle, Clock, Sparkles, Phone, ZoomIn } from 'lucide-react';
import { useMediaModal } from '../context/MediaModalContext';
import aboutImg1 from '../assets/img8.jpeg';
import aboutImg2 from '../assets/img5.jpeg';

const aboutMediaList = [
  {
    id: 1,
    type: 'image',
    src: aboutImg1,
    title: 'Comprehensive Troubleshooting & Deep Jet Cleaning',
    category: 'On-Site Precision',
    desc: 'Our certified technicians in action delivering high-precision AC diagnostics and jet coil cleaning.',
  },
  {
    id: 2,
    type: 'image',
    src: aboutImg2,
    title: 'Certified AC Engineer On-Site',
    category: 'Expert Technicians',
    desc: 'Company-trained AC repair specialists equipped with professional tools for rapid doorstep response.',
  },
];

const About = () => {
  const { openModal } = useMediaModal();
  const highlights = [
    {
      title: 'Certified & Verified Technicians',
      description: 'Background-verified, company-trained AC engineers with deep expertise in all top brands.',
    },
    {
      title: 'Prompt Doorstep Response Across Kolkata',
      description: 'Dedicated fleet equipped with precision tools for prompt response across Kolkata.',
    },
    {
      title: '100% Genuine Spare Parts',
      description: 'OEM compressors, high-grade copper piping, and certified eco-friendly refrigerants.',
    },
    {
      title: 'Transparent, Fixed Pricing',
      description: 'Zero hidden inspection charges upon approval. Upfront estimates before work starts.',
    },
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '12,500+', label: 'Happy Customers' },
    { value: '98.8%', label: 'First-Visit Resolution' },
    { value: '24/7', label: 'Emergency Support' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background glow & pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 text-cyan-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            About S A Cooling Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Kolkata’s Most Dependable <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Air Conditioning Specialists
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Founded with a commitment to uncompromised indoor comfort, <strong className="text-slate-800">S A COOLING SOLUTION</strong> delivers quick, dependable, and affordable AC repair, gas refilling, jet cleaning, and installation services throughout Kolkata.
          </p>
        </div>

        {/* Content Grid: Visual Story + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composite with Real Assets */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image - Clickable to open in modal */}
              <div
                onClick={() => openModal(aboutMediaList, 0)}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group"
                title="Click to view photo in modal"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openModal(aboutMediaList, 0);
                  }
                }}
              >
                <img
                  src={aboutImg1}
                  alt="S A Cooling Solution AC Repair Work"
                  className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-600/90 text-white text-[10px] font-bold shadow-lg">
                  <ZoomIn className="w-3 h-3" />
                  <span>Zoom</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider font-semibold text-cyan-300">On-Site Precision</span>
                  <p className="font-bold text-sm sm:text-base">Comprehensive Troubleshooting & Deep Jet Cleaning</p>
                </div>
              </div>

              {/* Secondary Overlapping Image - Clickable to open in modal */}
              <div
                onClick={() => openModal(aboutMediaList, 1)}
                className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block cursor-pointer group"
                title="Click to view photo in modal"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openModal(aboutMediaList, 1);
                  }
                }}
              >
                <img
                  src={aboutImg2}
                  alt="AC Servicing Technician"
                  className="w-full h-36 sm:h-44 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-2.5 py-1 rounded-md bg-black/80 text-white text-[10px] font-bold shadow">Zoom</span>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-gradient-to-tr from-cyan-600 to-blue-600 text-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/20">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black">10+ Years</div>
                  <div className="text-xs text-cyan-100 font-medium">Service Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Core Advantages */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Keeping Your Home & Office Chill All Year Long
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether your split AC suddenly stopped cooling amidst Kolkata’s scorching heatwave or water is dripping down your wall, our rapid-response crew brings factory-grade diagnostics right to your doorstep. We diagnose accurately before suggesting any repairs to save your money and protect your appliance life.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-cyan-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to action & Direct contact */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-sm shadow-md"
              >
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>Explore All Services</span>
              </a>
              <a
                href="tel:+917439782485"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-cyan-700 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline: +91 7439 782 485</span>
              </a>
            </div>
          </div>
        </div>

        {/* Impact Numbers / Counter Strip */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-slate-50 to-cyan-50/40 p-6 rounded-2xl border border-slate-200/90 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
