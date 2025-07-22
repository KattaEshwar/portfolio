import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTag, FaRobot, FaBrain, FaDatabase, FaHospital, FaFileAlt, FaChartLine, FaPlay, FaCode, FaLaptopCode, FaStar } from 'react-icons/fa';
import { SiTensorflow, SiPython, SiReact, SiTailwindcss, SiFlask, SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: 'Aha Clone',
      tags: ['HTML', 'CSS', 'JavaScript', 'Frontend Development'],
      description: 'A frontend clone of the Aha streaming platform built using only HTML, CSS, and vanilla JavaScript. It focuses on replicating the user interface and core layout of the homepage, demonstrating proficiency in fundamental web development technologies. This project showcases my ability to build responsive web interfaces from scratch, paying close attention to design details and user experience. It was developed to practice and reinforce core frontend skills.',
      githubLink: null,
      liveLink: 'https://aha-clone.netlify.app',
      icon: <FaPlay className="text-red-500" />,
      category: 'Frontend Development',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*GjRHfMZlA9u8pzFBqGDXcw.png',
      features: [
        'Responsive movie carousel',
        'Dynamic content loading',
        'Interactive UI elements',
        'Mobile-first design',
        'Smooth animations'
      ]
    },
    {
      title: 'CuraBot',
      tags: ['React', 'MongoDB', 'Express', 'Node.js', 'AI Integration', 'Healthcare AI', 'Mean Stack'],
      description: 'CuraBot is an AI-powered healthcare assistant developed using the MERN stack, designed to enhance hospital management. It streamlines appointments, provides intelligent medicine recommendations, and assists with urgent care, showcasing integration of AI in healthcare.',
      githubLink: null,
      liveLink: 'https://superb-maamoul-d26aad.netlify.app/',
      icon: <FaHospital className="text-green-500" />,
      category: 'Healthcare AI',
      image: 'https://eco-cdn.iqpc.com/eco/images/channel_content/images/transforming_healthcare_with_ai9ioi87Snj7ZgNpbaUo3q30s91a6yUj2wqpaIUDPw.webp',
      features: [
        'AI-powered healthcare assistance',
        'Appointment management system',
        'Medicine recommendations',
        'Urgent care support',
        'Real-time patient monitoring'
      ],
      teamSize: 4
    },
    {
      title: 'Automated Resume Generator',
      tags: ['Flask', 'Python', 'Generative AI', 'Web Development', 'AI Application'],
      description: 'A Flask and Python-based web application leveraging Generative AI to simplify resume creation. It offers a user-friendly interface for generating, editing, and downloading professional resumes in various formats, making job application preparation efficient.',
      githubLink: null,
      liveLink: 'https://automated-resume.onrender.com',
      icon: <FaFileAlt className="text-blue-500" />,
      category: 'AI Application',
      image: 'https://miro.medium.com/v2/resize:fit:1358/0*K5qRHLWNHa8MGZF7.png',
      features: [
        'AI-powered resume generation',
        'Multiple format support',
        'Professional templates',
        'Real-time editing',
        'Easy download options'
      ]
    },
    {
      title: 'Gold Price Prediction',
      tags: ['Machine Learning', 'Python', 'Flask', 'Data Analysis', 'Financial Forecasting'],
      description: 'A Flask-based web application utilizing a polynomial regression model for accurate gold price prediction in Indian Rupees. Users can input future dates to receive predicted prices, providing a data-driven tool for potential investors.',
      githubLink: null,
      liveLink: 'https://gold-prediction-1e7a.onrender.com',
      icon: <FaChartLine className="text-yellow-500" />,
      category: 'Machine Learning',
      image: 'https://th.bing.com/th/id/OIP.KMHKMMgfFKDccVCt_U9ovAHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain',
      features: [
        'Polynomial regression model',
        'Real-time price predictions',
        'Historical data analysis',
        'Interactive date selection',
        'Accurate price forecasting'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 dark:from-black dark:via-gray-900 dark:to-black py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-80 -right-80 w-2/5 h-2/5 bg-blue-700 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute -bottom-80 -left-80 w-2/5 h-2/5 bg-purple-700 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 left-1/3 w-2/5 h-2/5 bg-pink-700 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-10 left-10 w-10 h-10 bg-blue-600 dark:bg-blue-800 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-10 w-8 h-8 bg-purple-600 dark:bg-purple-800 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-pink-600 dark:bg-pink-800 rounded-full animate-pulse animation-delay-2000"></div>
      </div>

      <div className="w-full relative">
        {/* Projects Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-blue-600/70 to-purple-600/70 rounded-full blur-4xl"></div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-300 relative z-10 drop-shadow-lg">
            Featured Projects
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-12 -top-4 text-yellow-300"
            >
              <FaStar className="w-10 h-10" />
            </motion.div>
          </h1>
          <p className="text-xl text-cyan-200 font-light relative z-10">
            A collection of my best work, showcasing my skills and expertise
          </p>
          <div className="h-1.5 w-28 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 mx-auto mt-6 rounded-full relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer"></div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white/5 dark:bg-gray-800/5 backdrop-blur-3xl rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 dark:border-gray-700/10 cursor-pointer overflow-hidden flex flex-col hover:border-gradient-to-r hover:border-amber-500 hover:border-fuchsia-500"
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/90 via-purple-700/90 to-pink-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Content Wrapper */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="text-4xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 text-white dark:text-gray-100">
                    {project.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-white dark:text-white mb-2">{project.title}</h3>
                    <span className="text-sm text-blue-200 dark:text-blue-200">{project.category}</span>
                  </div>
                </div>

                <div className="mt-4 relative h-48 w-full overflow-hidden rounded-lg z-10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center bg-black text-yellow-300 text-xs font-bold px-3 py-1 rounded-full hover:scale-105 transition-transform duration-200 shadow-md border border-yellow-400"
                    >
                      <FaTag className="mr-1" /> {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-pink-100 dark:text-pink-200 text-sm line-clamp-3">
                  {project.description}
                </p>

                {project.teamSize && (
                  <div className="mt-4 text-sm text-blue-200 dark:text-blue-200 relative z-10">
                    Team Size: {project.teamSize} members
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-end items-center pt-3 border-t border-white/10 dark:border-gray-600/10 relative z-10">
                {project.liveLink && (
                  <motion.a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-200 dark:text-blue-300 hover:text-purple-300 dark:hover:text-purple-400 transition-colors duration-300 flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white/5 dark:bg-gray-800/5 rounded-xl p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={e => e.stopPropagation()}
              >
                {/* Modal gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-purple-600/70 to-pink-600/70 rounded-xl"></div>

                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl text-white dark:text-gray-100">
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400">
                        {selectedProject.title}
                      </h3>
                      <p className="text-blue-100 dark:text-blue-100">{selectedProject.category}</p>
                      {selectedProject.teamSize && (
                        <p className="text-sm text-blue-100 dark:text-blue-100 mt-1">
                          Team Size: {selectedProject.teamSize} members
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6 relative h-64 w-full overflow-hidden rounded-lg z-10">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="bg-gradient-to-r from-blue-500/90 to-purple-500/90 dark:from-blue-600/90 dark:to-purple-600/90 text-white dark:text-blue-50 text-sm font-medium px-3 py-1 rounded-full hover:scale-105 transition-transform duration-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-white dark:text-gray-100 mb-6 relative z-10">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6 relative z-10">
                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-white dark:text-gray-100">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end relative z-10">
                    {selectedProject.liveLink && (
                      <motion.a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectsPage;