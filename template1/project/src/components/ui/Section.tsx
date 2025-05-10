import React from 'react';
import Container from './Container';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ 
  className = '', 
  children, 
  id,
  title,
  subtitle
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;