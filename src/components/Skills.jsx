import React from 'react';
import { FaReact, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaNetworkWired, FaShieldAlt, FaFlask, FaBrain, FaGithub, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiOpenai } from 'react-icons/si';

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-4xl text-orange-500" />,
    level: "Advanced",
    description: "Semantic HTML, Accessibility, Forms, Multimedia, Canvas, SVG"
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-4xl text-blue-500" />,
    level: "Advanced",
    description: "Flexbox, Grid, Animations, Responsive Design, CSS Variables"
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-4xl text-yellow-400" />,
    level: "Advanced",
    description: "ES6+, DOM Manipulation, Async Programming, OOP, Modern JS Features"
  },
  {
    name: "ReactJS",
    icon: <FaReact className="text-4xl text-blue-600" />,
    level: "Intermediate",
    description: "Hooks, Context API, Redux Integration, Component Lifecycle, Performance Optimization"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-teal-400" />,
    level: "Advanced",
    description: "Utility-first CSS, Responsive Design, Customization, Dark Mode, Animation"
  },
  {
    name: "Python",
    icon: <FaPython className="text-4xl text-blue-700" />,
    level: "Intermediate",
    description: "Core Concepts, Data Structures, Algorithms, Object-Oriented Programming, File I/O"
  },
  {
    name: "Flask",
    icon: <FaFlask className="text-4xl text-gray-700" />,
    level: "Intermediate",
    description: "Routing, Templating, REST APIs, Database Integration, Authentication"
  },
  {
    name: "Machine Learning",
    icon: <FaBrain className="text-4xl text-red-600" />,
    level: "Intermediate",
    description: "Supervised/Unsupervised Learning, Model Evaluation, Data Preprocessing, Scikit-learn, TensorFlow"
  },
  {
    name: "Data Analysis",
    icon: <FaDatabase className="text-4xl text-green-600" />,
    level: "Intermediate",
    description: "NumPy, Pandas, Data Cleaning, Exploratory Data Analysis, Data Visualization (Matplotlib, Seaborn)"
  },
  {
    name: "Networking",
    icon: <FaNetworkWired className="text-4xl text-gray-600" />,
    level: "Intermediate",
    description: "TCP/IP, HTTP, DNS, Network Security Basics, Troubleshooting"
  },
  {
    name: "Git",
    icon: <FaGithub className="text-4xl text-red-600" />,
    level: "Advanced",
    description: "Version Control, Branching, Merging, Conflict Resolution, Remote Repositories"
  },
  {
    name: "VS Code",
    icon: <FaCode className="text-4xl text-blue-500" />,
    level: "Advanced",
    description: "Extensions, Debugging, Integrated Terminal, Shortcuts, Customization"
  },
];

function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-500">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            As a passionate web developer, I specialize in creating responsive and user-friendly web applications. 
            My expertise spans from fundamental web technologies to modern frameworks and tools. 
            I focus on writing clean, maintainable code and implementing best practices in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 dark:border-gray-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills; 