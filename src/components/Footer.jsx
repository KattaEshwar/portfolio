import React from 'react';

function Footer() {
  return (
    <footer className={`py-6 px-4 mt-12 transition-colors duration-300 ${
      document.documentElement.classList.contains('dark') 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Katta Eshwar. All rights reserved.</p>
        <p className="text-sm mt-2 opacity-75">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer; 