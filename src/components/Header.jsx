import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaEnvelope, FaCode, FaLaptopCode, FaUserTie, FaEnvelopeOpenText, FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun, FaHome } from 'react-icons/fa';

function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Assuming dark mode state is managed higher up and passed down
  // const [isDarkMode, setIsDarkMode] = useState(theme === 'dark'); 
  
  // Removed scroll logic from here as it's handled in Hero for the Hero section's nav

  const navItems = [
    { name: 'Home', path: '/', icon: FaHome, color: 'from-blue-500 to-indigo-600' },
    { name: 'About', path: '/about', icon: FaUserTie, color: 'from-emerald-500 to-teal-600' },
    { name: 'Skills', path: '/skills', icon: FaCode, color: 'from-violet-500 to-purple-600' },
    { name: 'Projects', path: '/projects', icon: FaLaptopCode, color: 'from-rose-500 to-pink-600' },
    { name: 'Contact', path: '/contact', icon: FaEnvelopeOpenText, color: 'from-blue-500 to-indigo-600' }
  ];

  // Social links are not typically in the Header nav, keeping them in Hero/Footer
  // const socialLinks = [ ... ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      // Use the passed theme prop for styling
      theme === 'dark' ? 'bg-gray-900/90 text-white' : 'bg-white/90 text-gray-900'
    } shadow-lg backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-violet-600 transition-all duration-300">
              Katta Eshwar
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  to={item.path}
                  className="group relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span className="flex items-center">
                    <item.icon className="mr-2" />
                    {item.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-600 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </div>
            ))}
            {/* Theme Toggle Button - Use the passed toggleTheme prop */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              {/* Use the passed theme prop to determine the icon */}
              {theme === 'dark' ? <FaSun className="w-5 h-5 text-yellow-500" /> : <FaMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg transition-all duration-300"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                <div
                  className="flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} mr-3 group-hover:scale-110 transition-transform`}>
                    <item.icon className="text-white" />
                  </div>
                  {item.name}
                </div>
              </Link>
            ))}
            {/* Theme Toggle Button in Mobile Menu */}
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 mr-3">
                {theme === 'dark' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
              </div>
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;