'use client'
import React, { useState, useEffect } from 'react';
import {ArrowUp} from '../../../public/icons/svg';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
  if (window.scrollY > 1000) {
    setShowButton(true);
  } else {
    setShowButton(false);
  }
};

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (<button title='Back to the top'
          onClick={scrollToTop}
          className="fixed bottom-4 right-2 sm:right-4 z-50 bg-white shadow rounded-lg"> <ArrowUp className="stroke-red-600 w-7 h-7 sm:w-9 sm:h-9"/>  
          </button>)
    
  );
};

export default ScrollToTopButton;
