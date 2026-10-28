import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';

const MediaModalContext = createContext(null);

export const MediaModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Opens the media modal
   * @param {Array<{ type: 'image' | 'video', src: string, title?: string, category?: string, desc?: string }>} mediaItems
   * @param {number} startIndex
   */
  const openModal = useCallback((mediaItems, startIndex = 0) => {
    if (!mediaItems || mediaItems.length === 0) return;
    setItems(mediaItems);
    setCurrentIndex(Math.max(0, Math.min(startIndex, mediaItems.length - 1)));
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextMedia = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevMedia = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Lock body scroll and handle keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextMedia();
      } else if (e.key === 'ArrowLeft') {
        prevMedia();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, nextMedia, prevMedia, closeModal]);

  const currentItem = items[currentIndex];

  return (
    <MediaModalContext.Provider value={{ openModal, closeModal, nextMedia, prevMedia, isOpen, currentItem }}>
      {children}

      {/* Global Interactive Media Modal */}
      {isOpen && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 transition-all duration-300"
          onClick={closeModal}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl bg-slate-900/95 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Modal Top Bar */}
            <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider ${
                  currentItem.type === 'video'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                }`}>
                  {currentItem.type === 'video' ? (
                    <>
                      <VideoIcon className="w-3.5 h-3.5" />
                      Video
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-3.5 h-3.5" />
                      Photo
                    </>
                  )}
                </span>

                {!currentItem.hideDetails && currentItem.category && (
                  <span className="hidden sm:inline-block text-xs font-semibold text-slate-400 border-l border-slate-700 pl-3">
                    {currentItem.category}
                  </span>
                )}

                <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {currentIndex + 1} / {items.length}
                </span>
              </div>

              {/* Cross / Close Icon Button */}
              <button
                type="button"
                onClick={closeModal}
                className="p-2 sm:p-2.5 rounded-full bg-slate-800/90 hover:bg-red-600 text-slate-300 hover:text-white border border-slate-700 hover:border-red-500 shadow-md transition-all duration-200 cursor-pointer active:scale-90 flex items-center justify-center"
                aria-label="Close modal"
                title="Close (Esc)"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* 2. Media Viewport with Previous & Next Navigation Buttons */}
            <div className="relative flex-1 min-h-[280px] max-h-[66vh] sm:max-h-[72vh] flex items-center justify-center bg-black/80 overflow-hidden select-none">
              
              {/* Previous Icon Button (Inside Modal) */}
              <button
                type="button"
                onClick={prevMedia}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-slate-900/80 hover:bg-cyan-500 hover:text-white text-slate-200 border border-slate-700/90 hover:border-cyan-400 backdrop-blur-md shadow-2xl transition-all duration-200 cursor-pointer active:scale-90 group flex items-center justify-center"
                aria-label="Previous item"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Next Icon Button (Inside Modal) */}
              <button
                type="button"
                onClick={nextMedia}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-slate-900/80 hover:bg-cyan-500 hover:text-white text-slate-200 border border-slate-700/90 hover:border-cyan-400 backdrop-blur-md shadow-2xl transition-all duration-200 cursor-pointer active:scale-90 group flex items-center justify-center"
                aria-label="Next item"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Render Media: Image or Video */}
              {currentItem.type === 'video' ? (
                <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
                  <video
                    key={currentItem.src}
                    src={currentItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[62vh] sm:max-h-[68vh] w-full max-w-4xl object-contain mx-auto rounded-xl shadow-2xl bg-black"
                  >
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
                  <img
                    key={currentItem.src}
                    src={currentItem.src}
                    alt={currentItem.hideDetails ? 'AC Service Work' : (currentItem.title || 'S A Cooling Solution')}
                    className="max-h-[62vh] sm:max-h-[68vh] w-auto max-w-full object-contain mx-auto rounded-xl shadow-2xl transition-opacity duration-200"
                  />
                </div>
              )}
            </div>

            {/* 3. Modal Bottom Bar with Navigation Controls */}
            <div className="p-3.5 sm:p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-3 text-slate-200">
              {!currentItem.hideDetails && (currentItem.title || currentItem.desc) ? (
                <div className="min-w-0 flex-1">
                  {currentItem.title && (
                    <h4 className="font-bold text-sm sm:text-base text-white truncate">
                      {currentItem.title}
                    </h4>
                  )}
                  {currentItem.desc && (
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 sm:line-clamp-2">
                      {currentItem.desc}
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-xs font-semibold text-slate-400">
                  {items.length > 1 && <span>Gallery Showcase ({currentIndex + 1} of {items.length})</span>}
                </div>
              )}

              {/* Action Buttons for Easy Navigation */}
              <div className="flex items-center gap-2 shrink-0 ml-auto">
                <button
                  type="button"
                  onClick={prevMedia}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                  title="Previous"
                >
                  <ChevronLeft className="w-4 h-4 text-cyan-400" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={nextMedia}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                  title="Next"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-xs font-semibold text-red-300 border border-red-800/50 transition-colors cursor-pointer"
                  title="Close Modal"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MediaModalContext.Provider>
  );
};

export const useMediaModal = () => {
  const context = useContext(MediaModalContext);
  if (!context) {
    throw new Error('useMediaModal must be used within a MediaModalProvider');
  }
  return context;
};
