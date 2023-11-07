import React, { useState, useEffect } from 'react';
import '../css/ScrollHeader.css';

const ScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'scroll-header fixed' : 'scroll-header'}>
      전체 메뉴
    </header>
  );
}

export default ScrollHeader;