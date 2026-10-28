import React, { useState } from 'react';
import { Image as ImageIcon, Video, ChevronDown, ChevronUp, ZoomIn, Play, Sparkles } from 'lucide-react';
import { useMediaModal } from '../context/MediaModalContext';

// Import all images from assets folder
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.jpeg';
import img12 from '../assets/img12.jpeg';
import img13 from '../assets/img13.jpeg';
import img14 from '../assets/img14.jpeg';
import img15 from '../assets/img15.jpeg';

// Import all videos from assets folder
import vid1 from '../assets/vid1.mp4';
import vid2 from '../assets/vid2.mp4';
import vid3 from '../assets/vid3.mp4';
import vid4 from '../assets/vid4.mp4';
import vid5 from '../assets/vid5.mp4';
import vid6 from '../assets/vid6.mp4';
import vid7 from '../assets/vid7.mp4';
import vid8 from '../assets/vid8.mp4';

const imageGalleryList = [
  { id: 1, type: 'image', src: img1, title: 'Outdoor AC Condenser Diagnostic', category: 'Inspection', desc: 'Comprehensive technician inspection of the outdoor condenser and compressor electrical circuit.' },
  { id: 2, type: 'image', src: img2, title: 'High-Pressure Jet Pump Foam Wash', category: 'Deep Clean', desc: 'High-pressure foam spray removing deep trapped dirt and allergens from cooling fins.' },
  { id: 3, type: 'image', src: img3, title: 'Nitrogen Pressure Test & Gas Refill', category: 'Gas Refilling', desc: 'Precision nitrogen testing to detect micro-leaks followed by 100% pure refrigerant recharge.' },
  { id: 4, type: 'image', src: img4, title: 'Indoor Split AC Drain Pipe Clearing', category: 'Water Leakage', desc: 'High suction unblocking and leveling of the indoor drain pipe to permanently eliminate water drops.' },
  { id: 5, type: 'image', src: img5, title: 'Technician Servicing Wall Unit', category: 'Servicing', desc: 'Expert technician servicing an indoor split AC wall unit with precision tools.' },
  { id: 6, type: 'image', src: img6, title: 'Inverter PCB Board Fault Repair', category: 'Electrical Repair', desc: 'Component-level motherboard repair fixing sensor failures and power communication codes.' },
  { id: 7, type: 'image', src: img7, title: 'Split AC Precision Installation', category: 'Installation', desc: 'Vibration-free heavy duty wall bracket mounting and copper tube insulation.' },
  { id: 8, type: 'image', src: img8, title: 'Copper Coil De-clogging & Cleaning', category: 'Maintenance', desc: 'Deep chemical wash restoring optimum thermal exchange on choked copper coils.' },
  { id: 9, type: 'image', src: img9, title: 'Compressor Amperage & Power Testing', category: 'Diagnostics', desc: 'Testing compressor starting capacitance and power draw under maximum summer heat load.' },
  { id: 10, type: 'image', src: img10, title: 'Outdoor Unit Bracket & Stand Fitting', category: 'Installation', desc: 'Balcony cantilever bracket securely fastened for rust-resistant outdoor support.' },
  { id: 11, type: 'image', src: img11, title: 'Evaporator Fins Restoration', category: 'Cooling Fix', desc: 'Delicate fin alignment restoring unobstructed airflow and icy cooling delivery.' },
  { id: 12, type: 'image', src: img12, title: 'Commercial Multi-Split Servicing', category: 'Commercial', desc: 'Simultaneous multi-unit servicing for commercial offices and retail stores in Kolkata.' },
  { id: 13, type: 'image', src: img13, title: 'R32 Refrigerant Weight-Scale Charge', category: 'Gas Refilling', desc: 'Digital weight-scale gas replenishment ensuring exact manufacturer specifications.' },
  { id: 14, type: 'image', src: img14, title: 'Full AC Disassembly & Deep Sanitization', category: 'Deep Clean', desc: 'Complete front panel and blower wheel extraction for hospital-grade air cleaning.' },
  { id: 15, type: 'image', src: img15, title: 'Pre-Summer Preventive Maintenance Check', category: 'Preventive', desc: 'Full 21-point preventive checklist before the peak summer heatwave.' },
];

const videoGalleryList = [
  { id: 1, type: 'video', src: vid1, title: 'Live High-Pressure AC Jet Pump Servicing', category: 'Jet Cleaning', desc: 'Watch our technician clean deep dust and grime from indoor cooling fins.' },
  { id: 2, type: 'video', src: vid2, title: 'Outdoor Condenser Coil Deep Chemical Wash', category: 'Condenser Wash', desc: 'Restoring air exchange efficiency on a heavily choked outdoor unit.' },
  { id: 3, type: 'video', src: vid3, title: 'Split AC Water Leakage Repair & Pipe Unclogging', category: 'Leak Repair', desc: 'Fixing stubborn interior water dripping with pressure suction.' },
  { id: 4, type: 'video', src: vid4, title: 'Precision Gas Charging & Leak Brazing in Action', category: 'Gas Refilling', desc: 'Welding micro-cracks on copper pipes and testing with nitrogen gas.' },
  { id: 5, type: 'video', src: vid5, title: 'Inverter AC Motherboard Diagnostic & Test Run', category: 'PCB Repair', desc: 'Troubleshooting circuit board communication error codes.' },
  { id: 6, type: 'video', src: vid6, title: 'Complete AC Servicing Procedure Walkthrough', category: 'Full Service', desc: 'From diagnosis to final icy temperature measurement.' },
  { id: 7, type: 'video', src: vid7, title: 'Rapid Doorstep Response in Kolkata', category: 'Doorstep Visit', desc: 'Technician on-site repairing customer AC within 60 minutes.' },
  { id: 8, type: 'video', src: vid8, title: 'AC Installation & Heavy-Duty Stand Mounting', category: 'Installation', desc: 'Vibration-free outdoor unit mounting on customer balcony.' },
];

const Gallery = () => {
  const { openModal } = useMediaModal();

  // State for Images Subsection
  const [showAllImages, setShowAllImages] = useState(false);
  const initialImageCount = 6;
  const displayedImages = showAllImages ? imageGalleryList : imageGalleryList.slice(0, initialImageCount);

  // State for Videos Subsection
  const [showAllVideos, setShowAllVideos] = useState(false);
  const initialVideoCount = 3;
  const displayedVideos = showAllVideos ? videoGalleryList : videoGalleryList.slice(0, initialVideoCount);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/90 text-cyan-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            Project Showcase & Proof Of Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Work in Photos & Live Videos
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            See real work performed by S A COOLING SOLUTION across homes, offices, and commercial establishments in Kolkata. Click any photo or video to view in fullscreen modal.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SUBSECTION 1: PHOTO GALLERY */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-md shadow-cyan-600/30">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  Image Gallery ({imageGalleryList.length} Photos)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Click any image to enlarge in modal with previous, next & close buttons
                </p>
              </div>
            </div>

            {/* Quick Stats or Indicator */}
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 self-start sm:self-auto shadow-sm">
              Showing {displayedImages.length} of {imageGalleryList.length}
            </span>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedImages.map((item, index) => {
              const fullIndex = imageGalleryList.findIndex((img) => img.id === item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => openModal(imageGalleryList, fullIndex >= 0 ? fullIndex : index)}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200/80 hover:-translate-y-1"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openModal(imageGalleryList, fullIndex >= 0 ? fullIndex : index);
                    }
                  }}
                  aria-label={`Open image: ${item.title}`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient Overlay and Hover Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base leading-snug mt-1">
                      {item.title}
                    </h4>
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                      <ZoomIn className="w-4 h-4 text-cyan-400" />
                      <span>Click to View in Modal</span>
                    </div>
                  </div>

                  {/* Persistent Bottom Bar on Mobile/Desktop */}
                  <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between">
                    <span className="font-semibold text-xs text-slate-800 truncate mr-2">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 shrink-0">
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More / Less Button for Images */}
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAllImages(!showAllImages)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-300 hover:border-cyan-500 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              {showAllImages ? (
                <>
                  <span>Show Less Photos</span>
                  <ChevronUp className="w-4 h-4 text-cyan-600" />
                </>
              ) : (
                <>
                  <span>View More Photos ({imageGalleryList.length - initialImageCount} More)</span>
                  <ChevronDown className="w-4 h-4 text-cyan-600" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SUBSECTION 2: VIDEO GALLERY */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  Video Demonstrations ({videoGalleryList.length} Live Clips)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Click any video to play in modal with previous, next & close buttons
                </p>
              </div>
            </div>

            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 self-start sm:self-auto shadow-sm">
              Showing {displayedVideos.length} of {videoGalleryList.length}
            </span>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedVideos.map((video, index) => {
              const fullIndex = videoGalleryList.findIndex((v) => v.id === video.id);
              return (
                <div
                  key={video.id}
                  onClick={() => openModal(videoGalleryList, fullIndex >= 0 ? fullIndex : index)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-1.5"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openModal(videoGalleryList, fullIndex >= 0 ? fullIndex : index);
                    }
                  }}
                  aria-label={`Play video in modal: ${video.title}`}
                >
                  {/* Video Thumbnail Preview with Play Overlay */}
                  <div className="relative aspect-video bg-slate-950 w-full overflow-hidden">
                    <video
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      playsInline
                      muted
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>

                    {/* Attractive Glowing Play Button & Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/25 to-transparent flex items-center justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-600/95 group-hover:bg-cyan-500 text-white flex items-center justify-center shadow-xl shadow-cyan-600/40 group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5" />
                      </div>
                      
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="font-semibold bg-slate-900/85 px-2.5 py-1 rounded-md backdrop-blur-md border border-slate-700/60 shadow-md">
                          Click to Play in Modal
                        </span>
                        <span className="text-cyan-300 font-bold bg-slate-900/85 px-2 py-1 rounded-md border border-slate-700/60">
                          Clip #{video.id}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Video Info Caption */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 mb-1">
                        <Play className="w-3.5 h-3.5 fill-cyan-600" />
                        <span>On-Site Servicing Clip #{video.id}</span>
                      </div>
                      <h4 className="font-bold text-base text-slate-900 leading-snug group-hover:text-cyan-700 transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {video.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-cyan-600 font-bold">
                      <span>Watch in Modal</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More / Less Button for Videos */}
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAllVideos(!showAllVideos)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-300 hover:border-blue-600 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              {showAllVideos ? (
                <>
                  <span>Show Less Videos</span>
                  <ChevronUp className="w-4 h-4 text-blue-600" />
                </>
              ) : (
                <>
                  <span>View More Videos ({videoGalleryList.length - initialVideoCount} More)</span>
                  <ChevronDown className="w-4 h-4 text-blue-600" />
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
