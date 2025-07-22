import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFileAlt, FaCode } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="w-full bg-black">
      <div className="w-full py-20">
        <div className="text-center mb-16 transition-all duration-500">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-400">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Contact Information */}
          <div
            className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-3 sm:p-4 border border-gray-800 transition-all duration-500"
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:kattaeshwar4@gmail.com"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="w-6 h-6 mr-3" />
                <span>kattaeshwar4@gmail.com</span>
              </a>
              <a
                href="tel:+918187847904"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaPhone className="w-6 h-6 mr-3" />
                <span>+91 8187847904</span>
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div
            className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg p-3 sm:p-4 border border-gray-800 transition-all duration-500"
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Quick Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:kattaeshwar4@gmail.com"
                className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaEnvelope className="w-5 h-5 mr-2" />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/katta-eshwar-4b0b1b1b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-gradient-to-r from-[#0077B5] to-[#006399] text-white px-6 py-3 rounded-lg hover:from-[#006399] hover:to-[#005580] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaLinkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/kattaeshwar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                View GitHub
              </a>
              <a
                href="https://leetcode.com/u/katta_eshwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-gradient-to-r from-[#FFA116] to-[#E68A00] text-white px-6 py-3 rounded-lg hover:from-[#E68A00] hover:to-[#CC7A00] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaCode className="w-5 h-5 mr-2" />
                View LeetCode Profile
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaFileAlt className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;