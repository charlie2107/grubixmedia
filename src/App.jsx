import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  CoverPage, AboutUs, OurServices, WhyChooseUs, 
  OurTeam, TeamExperience, LetGrow 
} from './Slides';
import './index.css';

const slides = [
  CoverPage, AboutUs, OurServices, WhyChooseUs,
  OurTeam, TeamExperience, LetGrow
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

function App() {
  const [[page, direction], setPage] = useState([0, 0]);
  
  const currentSlideIndex = Math.abs(page % slides.length);
  const CurrentSlideComponent = slides[currentSlideIndex];

  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < slides.length) {
      setPage([newPage, newDirection]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page]);

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      setPage((prev) => {
        const [currentPage] = prev;
        if (currentPage < slides.length - 1) {
          return [currentPage + 1, 1];
        } else {
          return [0, 1]; // Loop back to the first slide
        }
      });
    }, 15000); // 15 seconds

    return () => clearInterval(autoSlideTimer);
  }, [page]);

  const progress = ((currentSlideIndex + 1) / slides.length) * 100;

  return (
    <div className="slide-container">
      {/* Animated Background */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Header */}
      <header className="slide-header">
        <img src="/grubix_media_logo2.png" alt="Grubix Media" className="logo" />
      </header>

      {/* Slide Content */}
      <div className="slide-content">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            className="slide-inner"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="controls">
        <button 
          className="control-btn" 
          onClick={() => paginate(-1)}
          disabled={currentSlideIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="control-btn" 
          onClick={() => paginate(1)}
          disabled={currentSlideIndex === slides.length - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Number */}
      <div className="slide-number">
        {String(currentSlideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default App;
