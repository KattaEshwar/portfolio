import React, { useState } from 'react';
import { FaCode, FaShieldAlt, FaDatabase, FaPython, FaJs, FaReact, FaBrain } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMysql, SiNumpy, SiPandas, SiTensorflow, SiC } from 'react-icons/si';
import { motion } from 'framer-motion';

function SkillsPage() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = [
    {
      category: 'Web Development',
      icon: <FaCode className="text-blue-600 dark:text-blue-400" />,
      items: [
        { name: 'HTML', icon: <FaCode className="text-orange-500" />, level: 'Proficient', description: 'Building responsive and semantic web structures' },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, level: 'Proficient', description: 'Creating dynamic and interactive web applications' },
        { name: 'React.js', icon: <FaReact className="text-blue-500" />, level: 'Beginner', description: 'Developing modern single-page applications' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, level: 'Beginner', description: 'Crafting beautiful and responsive designs' },
      ],
    },
    {
      category: 'Programming & Data',
      icon: <FaPython className="text-green-600 dark:text-green-400" />,
      items: [
        { name: 'Python', icon: <FaPython className="text-blue-600" />, level: 'Proficient', description: 'Versatile programming for various applications' },
        { name: 'C', icon: <SiC className="text-blue-500" />, level: 'Component', description: 'System-level programming and optimization' },
        { name: 'NumPy', icon: <SiNumpy className="text-blue-500" />, level: 'Proficient', description: 'Efficient numerical computing and array operations' },
        { name: 'Pandas', icon: <SiPandas className="text-blue-500" />, level: 'Proficient', description: 'Data manipulation and analysis' },
      ],
    },
    {
      category: 'Machine Learning',
      icon: <FaBrain className="text-purple-600 dark:text-purple-400" />,
      items: [
        { name: 'Supervised Learning', icon: <SiTensorflow className="text-orange-500" />, level: 'Proficient', description: 'Building predictive models and classifiers' },
        { name: 'Unsupervised Learning', icon: <SiTensorflow className="text-orange-500" />, level: 'Proficient', description: 'Pattern recognition and clustering' },
        { name: 'NLP experiments', icon: <FaBrain className="text-purple-500" />, level: 'Proficient', description: 'Natural language processing and text analysis' },
      ],
    },
    {
      category: 'Database & Security',
      icon: <FaShieldAlt className="text-red-600 dark:text-red-400" />,
      items: [
        { name: 'SQL Management', icon: <FaDatabase className="text-blue-500" />, level: 'Proficient', description: 'Database design and optimization' },
        { name: 'MySQL', icon: <SiMysql className="text-blue-500" />, level: 'Proficient', description: 'Relational database management' },
        { name: 'Basic Cybersecurity', icon: <FaShieldAlt className="text-red-500" />, level: 'Basic', description: 'Security fundamentals and best practices' },
        { name: 'Networking', icon: <FaShieldAlt className="text-blue-500" />, level: 'Basic', description: 'Network protocols and infrastructure' },
      ],
    },
  ];

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Proficient':
        return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'Component':
        return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'Beginner':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="w-full">
        {/* Skills Heading with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Skills Categories and Items */}
        <div className="flex flex-col gap-12">
          {skillsData.map((skillCategory, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              {/* Category Header with 3D Effect */}
              <div className="flex items-center space-x-4 mb-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl text-gray-800 dark:text-gray-200 transform hover:rotate-12 transition-transform duration-300">
                  {skillCategory.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex-grow">
                  {skillCategory.category}
                </h3>
              </div>

              {/* Skill Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        {skill.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full text-white ${getProficiencyColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                    
                    {/* Skill Description Popup */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 right-0 mt-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-10"
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
              Dedicated to continuous learning and mastering new technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SkillsPage; 