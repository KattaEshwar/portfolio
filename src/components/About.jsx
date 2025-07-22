import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div className="w-full flex py-24 md:flex-row flex-col items-center">
        {/* Left Side Text */}
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.h1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Katta Eshwar
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A highly motivated and detail-oriented individual with expertise in computer networks and internet protocols.
          </motion.p>

          {/* Education */}
          <motion.h2
            className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Education
          </motion.h2>
          <motion.div
            className="mb-8 leading-relaxed text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p><strong>2022 - 2026:</strong> Parul University</p>
            <p className="ml-4">B.Tech. - CSE - Artificial Intelligence - PIET | CGPA: 7.66 / 10</p>
            <p><strong>2022:</strong> Sri Chaitanaya Junior Kalasala</p>
            <p className="ml-4">12th | TSBIE | Percentage: 92.50 / 100</p>
            <p><strong>2020:</strong> Sri Chaitanaya School</p>
            <p className="ml-4">10th | Board of Secondary Education | CGPA: 9.80 / 10</p>
          </motion.div>

          {/* Key Expertise */}
          <motion.h2
            className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Key Expertise
          </motion.h2>
          <motion.p
            className="mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Expertise in computer networks and internet protocols. Certified by NPTEL, demonstrating proficiency in TCP/IP networking, routing & switching, subnetting, and network security. Strong problem-solving and troubleshooting abilities with hands-on experience in network configuration, monitoring, and optimization.
          </motion.p>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-full md:w-1/2 w-full rounded-full bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500 shadow-lg p-4">
          <motion.img
            src="/images/profile.png"
            alt="Katta Eshwar"
            className="object-cover object-center rounded-full border-4 border-white shadow-lg w-full h-full block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
