import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#135E4B] text-white hover:bg-[#0f4a3a]',
    light: 'bg-white text-[#135E4B] hover:bg-gray-50',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#135E4B]',
    secondary: 'bg-[#4CB572] text-white hover:bg-[#3a9657]'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;