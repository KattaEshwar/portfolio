import React from 'react';

// Assuming theme is provided via context or prop
// import { useTheme } from '../context/ThemeContext'; // Example if using context

const Layout = ({ children, theme }) => {
  // If using context, get theme like this:
  // const { theme } = useTheme();

  const backgroundClass = theme === 'dark'
    ? 'bg-gradient-to-br from-black via-gray-900 to-black' // Dark theme gradient
    : 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'; // Light theme gradient - adjust as needed

  return (
    <div className={`w-screen h-screen relative overflow-hidden ${backgroundClass}`}>
      {/* Background elements can go here if needed, e.g., particles or shapes */}
      {/* Main content area, allows scrolling if content overflows */}
      <div className="w-full h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout; 