import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center button-hover";
  
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-blue-500/25",
    secondary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-emerald-500/25",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400 hover:shadow-blue-500/25",
    ghost: "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 hover:shadow-gray-500/25",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-2.5",
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;