import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={(e) => toggleTheme(e)}
      className="relative flex items-center justify-between w-[72px] h-[36px] p-1 rounded-full bg-theme-bgAlt/80 border border-theme-border shadow-soft hover:shadow-md hover:border-brand-primary/25 transition-all select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary relative overflow-hidden"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Inner Glow Backdrop for Dark Mode */}
      <motion.div
        className="absolute inset-0 bg-brand-primary/5 rounded-full pointer-events-none"
        animate={{
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Sliding Active Pill */}
      <motion.div
        className="absolute w-[28px] h-[28px] rounded-full bg-brand-gradient shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 34 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 24,
        }}
      />

      {/* Sun Icon (☀) */}
      <div className="z-10 flex items-center justify-center w-[28px] h-[28px]">
        <motion.span
          animate={{
            scale: theme === 'light' ? 1 : 0.8,
            rotate: theme === 'light' ? 0 : -35,
          }}
          transition={{ duration: 0.4 }}
          className={`flex items-center justify-center transition-colors duration-300 ${
            theme === 'light' ? 'text-white' : 'text-theme-textLight hover:text-theme-text'
          }`}
        >
          <Sun className="w-4 h-4 stroke-[2.5]" />
        </motion.span>
      </div>

      {/* Moon Icon (🌙) */}
      <div className="z-10 flex items-center justify-center w-[28px] h-[28px]">
        <motion.span
          animate={{
            scale: theme === 'dark' ? 1 : 0.8,
            rotate: theme === 'dark' ? 0 : 35,
          }}
          transition={{ duration: 0.4 }}
          className={`flex items-center justify-center transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-theme-textLight hover:text-theme-text'
          }`}
        >
          <Moon className="w-3.8 h-3.8 stroke-[2.5]" />
        </motion.span>
      </div>
    </button>
  );
};
export default ThemeToggle;
