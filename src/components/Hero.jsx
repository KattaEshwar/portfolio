import React from 'react';
import { FaUserTie, FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const resumeUrl = '/Resume.pdf';
const heroBgUrl = '/WhatsApp Image 2025-06-06 at 18.00.06_860db624.jpg'; // Place the image in public/

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between relative overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBgUrl}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay for gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500 opacity-70 z-10" />
      <div className="w-full flex-grow flex items-center justify-center relative z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border-4 border-white/20 transform transition-all duration-700 hover:scale-105 p-8 sm:p-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg text-center">
            Hi, I'm <span className="text-yellow-300">Katta Eshwar</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-white/90 font-medium text-center">
            Full Stack Developer & Software Engineer
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200 border-2 border-yellow-300 hover:scale-105"
            >
              <FaUserTie className="text-2xl" /> Hire Me
            </Link>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-blue-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-200 border-2 border-blue-300 hover:scale-105"
            >
              <FaFileDownload className="text-2xl" /> View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full text-center p-4 bg-black/20 text-white font-medium mt-8 border-t-4 border-white/30 relative z-20">
        © 2025 Katta Eshwar. All rights reserved. Built with React and Tailwind CSS.
      </footer>
    </div>
  );
};

export default Hero;
