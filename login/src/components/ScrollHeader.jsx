import React, { useState, useEffect } from 'react';
import '../css/ScrollHeader.css';

const ScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`scroll-header ${isScrolled ? 'fixed' : ''}`}>
      전체 메뉴
    </header>
  );
};

export default ScrollHeader;