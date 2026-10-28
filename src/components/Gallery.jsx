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
  { id: 1, type: 'image', src: img1, hideDetails: true },
  { id: 2, type: 'image', src: img2, hideDetails: true },
  { id: 3, type: 'image', src: img3, hideDetails: true },
  { id: 4, type: 'image', src: img4, hideDetails: true },
  { id: 5, type: 'image', src: img5, hideDetails: true },
  { id: 6, type: 'image', src: img6, hideDetails: true },
  { id: 7, type: 'image', src: img7, hideDetails: true },
  { id: 8, type: 'image', src: img8, hideDetails: true },
  { id: 9, type: 'image', src: img9, hideDetails: true },
  { id: 10, type: 'image', src: img10, hideDetails: true },
  { id: 11, type: 'image', src: img11, hideDetails: true },
  { id: 12, type: 'image', src: img12, hideDetails: true },
  { id: 13, type: 'image', src: img13, hideDetails: true },
  { id: 14, type: 'image', src: img14, hideDetails: true },
  { id: 15, type: 'image', src: img15, hideDetails: true },
];

const videoGalleryList = [
  { id: 1, type: 'video', src: vid1, hideDetails: true },
  { id: 2, type: 'video', src: vid2, hideDetails: true },
  { id: 3, type: 'video', src: vid3, hideDetails: true },
  { id: 4, type: 'video', src: vid4, hideDetails: true },
  { id: 5, type: 'video', src: vid5, hideDetails: true },
  { id: 6, type: 'video', src: vid6, hideDetails: true },
  { id: 7, type: 'video', src: vid7, hideDetails: true },
  { id: 8, type: 'video', src: vid8, hideDetails: true },
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
            See real work performed by S A COOLING SOLUTION across homes, offices, and commercial establishments in Kolkata.
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
                  Click any image to view in fullscreen modal
                </p>
              </div>
            </div>

            {/* Quick Stats or Indicator */}
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 self-start sm:self-auto shadow-sm">
              Showing {displayedImages.length} of {imageGalleryList.length}
            </span>
          </div>

          {/* Photo Grid - Only Clean Images, No Details or Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedImages.map((item, index) => {
              const fullIndex = imageGalleryList.findIndex((img) => img.id === item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => openModal(imageGalleryList, fullIndex >= 0 ? fullIndex : index)}
                  className="group relative rounded-2xl overflow-hidden bg-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200/80 hover:-translate-y-1"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openModal(imageGalleryList, fullIndex >= 0 ? fullIndex : index);
                    }
                  }}
                  aria-label={`View photo ${item.id}`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.src}
                      alt="AC Servicing Photo"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Clean subtle hover overlay with zoom icon - NO text or details */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform">
                      <ZoomIn className="w-5 h-5 text-cyan-400" />
                    </div>
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
                  Click any video to play in fullscreen modal
                </p>
              </div>
            </div>

            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 self-start sm:self-auto shadow-sm">
              Showing {displayedVideos.length} of {videoGalleryList.length}
            </span>
          </div>

          {/* Video Grid - Only Clean Video Thumbnails with Play Button, No Details or Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedVideos.map((video, index) => {
              const fullIndex = videoGalleryList.findIndex((v) => v.id === video.id);
              return (
                <div
                  key={video.id}
                  onClick={() => openModal(videoGalleryList, fullIndex >= 0 ? fullIndex : index)}
                  className="group relative rounded-2xl overflow-hidden bg-slate-950 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200/80 hover:-translate-y-1"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openModal(videoGalleryList, fullIndex >= 0 ? fullIndex : index);
                    }
                  }}
                  aria-label={`Play video ${video.id}`}
                >
                  <div className="aspect-[4/3] sm:aspect-video w-full overflow-hidden bg-slate-950">
                    <video
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      playsInline
                      muted
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>

                  {/* Clean Glowing Play Button - NO text, NO details */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-600/90 group-hover:bg-cyan-500 text-white flex items-center justify-center shadow-xl shadow-cyan-600/40 group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5" />
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
