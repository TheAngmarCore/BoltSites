import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const highlight = document.getElementById('hero-highlight');
      if (highlight) {
        highlight.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      id="home"
      ref={heroRef} 
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* Background highlight */}
      <div 
        id="hero-highlight" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-300/20 to-emerald-300/20 dark:from-blue-900/20 dark:to-emerald-900/20 blur-3xl transition-transform duration-100"
      />
      
      <Container className="z-10 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-8 animate-fadeIn">
            Creative Designer & Developer
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 max-w-4xl animate-fadeInUp">
            Transforming <span className="text-blue-600 dark:text-blue-400">ideas</span> into 
            <span className="relative">
              <span className="relative z-10"> captivating </span>
              <svg className="absolute bottom-1 left-0 w-full h-3 text-blue-200 dark:text-blue-900 -z-10" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
            experiences
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 animate-fadeInUp animation-delay-100">
            Creating beautiful, functional designs and experiences that help brands connect with their audience and stand out in a digital world.
          </p>
        </div>
      </Container>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-white dark:text-gray-800">
          <path d="M0,60 C240,100 480,0 720,60 C960,120 1200,40 1440,80 L1440,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;