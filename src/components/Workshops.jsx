import React from 'react';
import { motion } from 'framer-motion';

const workshops = [
  {
    name: 'data dive:hands-on exploration of visulalization and analysis',
    institute: 'Parul University',
    dateRange: '13 Mar, 2024 - 14 May, 2025',
    keySkills: 'Machine Learning, Python & ML Libraries, Natural Language Processing, JavaScript Development',
    description: 'Engaged in data visualization and analysis using industry-standard tools like Matplotlib, Seaborn, and Plotly. Learned techniques for data exploration, statistical analysis, and storytelling through impactful visualizations, helping drive data-driven decision-making',
  },
  {
    name: 'MACHINE LEARNING',
    institute: 'Parul University',
    dateRange: '03 Feb, 2025 - 03 May, 2025',
    keySkills: 'Supervised & Unsupervised Learning, Neural Networks & Deep Learning, Natural Language Processing (NLP)',
    description: 'Learning Workshop, designed to provide in-depth knowledge and practical experience in ML concepts, algorithms, and real-world applications. From Qubit certification program in Machine Learning, acquired in-depth knowledge of core ML concepts, algorithms, and practical applications. This highlights proficiency in utilizing machine learning tools and techniques to solve real-world problems',
  },
  {
    name: 'Java script Unleashed building dynamic web applications',
    institute: 'Parul University',
    dateRange: '20 Dec, 2024 - 21 Dec, 2024',
    keySkills: 'Core JavaScript Concepts, DOM Manipulation, performance Optimization, Introduction to Node.js & Backend Integration, Working with APIs',
    description: 'Acquired hands-on experience in JavaScript programming, covering DOM manipulation, event handling, asynchronous JavaScript, API integration, and debugging techniques. Developed interactive web applications using modern JavaScript frameworks and libraries',
  },
];

const Workshops = () => {
  return (
    <section id="workshops" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.h2
          className="text-4xl font-medium text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Seminars / Trainings / Workshops
        </motion.h2>
        <div className="flex flex-wrap -m-4">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              className="p-4 md:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6">
                <h3 className="title-font text-lg font-medium text-gray-900 mb-3">{workshop.name}</h3>
                {workshop.institute && <p className="leading-relaxed mb-3"><strong>Institute:</strong> {workshop.institute}</p>}
                {workshop.dateRange && <p className="leading-relaxed mb-3"><strong>Date:</strong> {workshop.dateRange}</p>}
                <p className="leading-relaxed mb-3"><strong>Key Skills:</strong> {workshop.keySkills}</p>
                <p className="leading-relaxed mb-3">{workshop.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops; 