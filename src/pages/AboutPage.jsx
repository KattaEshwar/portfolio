import React from 'react';
import { FaGraduationCap, FaCodeBranch, FaAward, FaChalkboardTeacher, FaCalendarAlt, FaPercent, FaClipboardList, FaPython, FaDatabase, FaJs, FaMale, FaCalendarDay, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function AboutPage() {
  const educationData = [
    {
      year: '2022 - 2026',
      institution: 'Parul University',
      details: 'B.Tech. - CSE - Artificial Intelligence - PIET | CGPA: 7.66 / 10',
    },
    {
      year: '2022',
      institution: 'Sri Chaitanaya Junior Kalasala',
      details: '12th | TSBIE | Percentage: 92.50 / 100',
    },
    {
      year: '2020',
      institution: 'Sri Chaitanaya School',
      details: '10th | Board of Secondary Education | CGPA: 9.80 / 10',
    },
  ];

  const expertiseText = "Expertise in computer networks and internet protocols. Certified by NPTEL, demonstrating proficiency in TCP/IP networking, routing & switching, subnetting, and network security. Strong problem-solving and troubleshooting abilities with hands-on experience in network configuration, monitoring, and optimization.";

  const certificationsData = [
    {
      name: 'Computer Networks and Internet Protocol',
      date: '12 Apr, 2024',
      aggregate: '80 / 100',
      subjects: [{ name: 'computer networks and internet protocol', score: '80 / 100' }],
      keySkills: ['TCP/IP Protocol Suite', 'Network Security', 'Subnetting & IP Addressing', 'VPN Configuration', 'Network Monitoring Tools'],
      description: 'A highly motivated and detail-oriented individual with expertise in computer networks and internet protocols. Certified by NPTEL, demonstrating proficiency in TCP/IP networking, routing & switching, subnetting, and network security. Strong problem-solving and troubleshooting abilities with hands-on experience in network configuration, monitoring, and optimization.',
    },
    {
      name: 'Basics of Python',
      date: '',
      aggregate: '',
      subjects: [{ name: 'python', score: '90 / 100' }],
      keySkills: ['Functions, error handling, and file operations', 'Object-oriented programming principles', 'Basic data analysis using NumPy and Pandas', 'Core Python syntax, variables, and control structures', 'Functions, file handling, and exception handling', 'Object-Oriented Programming principles', 'Basics of data manipulation using NumPy & Pandas'],
      description: 'Certified in fundamental Python programming, demonstrating expertise in: Core Python syntax, variables, and control structures Functions, file handling, and exception handling Object-Oriented Programming principles Basics of data manipulation using NumPy & Pandas Writing.',
      icon: <FaPython className="text-yellow-600 dark:text-yellow-400" />
    },
    {
      name: 'Database and SQL',
      date: '',
      aggregate: '',
      subjects: [{ name: 'Database and sql', score: '90 / 100' }],
      keySkills: ['normalization, indexing, and performance optimization', 'database design', 'schema creation', 'PostgreSQL, and SQL Server', 'mysql'],
      description: 'Proficient in writing efficient SQL queries for data retrieval and manipulation. Skilled in database design, schema creation, and relational data modeling. Strong understanding of normalization, indexing, and query optimization',
      icon: <FaDatabase className="text-teal-600 dark:text-teal-400" />
    },
  ];

  const trainingsData = [
    {
      name: 'Data Dive: Hands-On Exploration of Visualization & Analysis',
      date: '13 Mar, 2024 - 14 May, 2025',
      institute: 'Parul University',
      keySkills: ['Machine Learning', 'Python & ML Libraries', 'Natural Language Processing', 'JavaScript Development'],
      description: 'Engaged in data visualization and analysis using industry-standard tools like Matplotlib, Seaborn, and Plotly. Learned techniques for data exploration, statistical analysis, and storytelling through impactful visualizations, helping drive data-driven decision-making',
    },
    {
      name: 'MACHINE LEARNING',
      date: '03 Feb, 2025 - 03 May, 2025',
      institute: 'Parul University',
      keySkills: ['Supervised & Unsupervised Learning', 'Neural Networks & Deep Learning', 'Natural Language Processing (NLP)'],
      description: 'Learning Workshop, designed to provide in-depth knowledge and practical experience in ML concepts, algorithms, and real-world applications. From Qubit certification program in Machine Learning, acquired in-depth knowledge of core ML concepts, algorithms, and practical applications. This highlights proficiency in utilizing machine learning tools and techniques to solve real-world problems',
    },
    {
      name: 'JavaScript Unleashed: Building Dynamic Web Applications',
      date: '20 Dec, 2024 - 21 Dec, 2024',
      institute: 'Parul University',
      keySkills: ['Core JavaScript Concepts', 'DOM Manipulation', 'performance Optimization', 'Introduction to Node.js & Backend Integration', 'Working with APIs'],
      description: 'JavaScript Workshop Acquired hands-on experience in JavaScript programming, covering DOM manipulation, event handling, asynchronous JavaScript, API integration, and debugging techniques. Developed interactive web applications using modern JavaScript frameworks and libraries add this in about page with an attractive styles',
    },
  ];

  const personalDetails = {
    gender: 'Male',
    maritalStatus: 'Single',
    dob: '04 Mar, 2005',
    currentAddress: 'Dhayan Bhavan, Parul University, Vadodara, Gujarat, India',
    permanentAddress: 'H no. 21-48, Atmakur, Atmakur, Telangana, India - 509131',
    phoneNumbers: ['+91-8187847904', '+91-9948725304'],
    emails: ['2203031240588@paruluniversity.ac.in', 'kattaeshwar4@gmail.com'],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Heading */}
        <div className="text-center mb-12 animate-fadeIn transition-all duration-500">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-900 dark:text-white leading-tight">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
            Get to know me better
          </p>
           <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main About Section with Image and Text */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-2xl p-8 mb-12 flex flex-col md:flex-row items-center md:items-start transition-all duration-500 transform hover:scale-105 animate-fadeInUp">
          {/* Profile Image */}
          <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0 animate-slideInLeft">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden ring-4 ring-blue-300 dark:ring-blue-700 shadow-lg">
              <img 
                src="/image.jpg" 
                alt="Katta Eshwar" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* About Text Content */}
          <div className="flex-grow text-center md:text-left p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600 animate-slideInRight delay-150">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Full Stack Developer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
              A passionate web developer with expertise in both frontend and backend technologies. I specialize in creating modern, responsive, and user-friendly web applications.
              <br /><br />
              With a strong foundation in computer science and a keen eye for detail, I strive to build applications that are not only functional but also provide an exceptional user experience.
              <br /><br />
              I'm constantly learning and exploring new technologies to stay at the forefront of web development trends and best practices.
            </p>
          </div>
        </div>

        {/* Education and Expertise Sections below main section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg p-6 animate-fadeInUp delay-300">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-slideInUp">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center"><FaGraduationCap className="mr-2 text-blue-600 dark:text-blue-400 text-2xl" /> Education</h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div key={index} className="text-gray-700 dark:text-gray-300 text-base leading-relaxed border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-1">
                  <p className="font-medium text-gray-900 dark:text-white">{edu.year}</p>
                  <p>{edu.institution}</p>
                  <p>{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl animate-slideInUp delay-150">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center"><FaCodeBranch className="mr-2 text-purple-600 dark:text-purple-400 text-2xl" /> Expertise</h3>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {expertiseText}
            </p>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-2xl p-8 mb-12 transition-all duration-500 animate-fadeInUp delay-450">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
             <FaMale className="mr-3 text-green-600 dark:text-green-400 text-2xl" /> Personal Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 dark:text-gray-300 text-base">
            <div className="flex items-start gap-2 border-b border-gray-300 dark:border-gray-600 pb-3"><span className="font-semibold text-gray-900 dark:text-white flex-shrink-0">Gender:</span> {personalDetails.gender}</div>
            <div className="flex items-start gap-2 border-b border-gray-300 dark:border-gray-600 pb-3"><span className="font-semibold text-gray-900 dark:text-white flex-shrink-0">Marital Status:</span> {personalDetails.maritalStatus}</div>
            <div className="flex items-start gap-2 border-b border-gray-300 dark:border-gray-600 pb-3"><FaCalendarDay className="text-blue-500 flex-shrink-0 mt-1" /><span className="font-semibold text-gray-900 dark:text-white">Date of Birth:</span> {personalDetails.dob}</div>
            <div className="flex items-start gap-2 md:col-span-2 border-b border-gray-300 dark:border-gray-600 pb-3"><FaMapMarkerAlt className="text-red-500 flex-shrink-0 mt-1" /><span className="font-semibold text-gray-900 dark:text-white">Current Address:</span> {personalDetails.currentAddress}</div>
            <div className="flex items-start gap-2 md:col-span-2 border-b border-gray-300 dark:border-gray-600 pb-3"><FaMapMarkerAlt className="text-red-500 flex-shrink-0 mt-1" /><span className="font-semibold text-gray-900 dark:text-white">Permanent Address:</span> {personalDetails.permanentAddress}</div>
            <div className="flex items-start gap-2 md:col-span-2 border-b border-gray-300 dark:border-gray-600 pb-3">
              <FaPhone className="text-green-500 flex-shrink-0 mt-1" /><span className="font-semibold text-gray-900 dark:text-white">Phone:</span> 
              {personalDetails.phoneNumbers.join(', ')}
            </div>
            <div className="flex items-start gap-2 md:col-span-2 border-b border-gray-300 dark:border-gray-600 pb-3 last:border-b-0">
              <FaEnvelope className="text-blue-500 flex-shrink-0 mt-1" /><span className="font-semibold text-gray-900 dark:text-white">Email:</span> 
              {personalDetails.emails.join(', ')}
            </div>
          </div>
        </div>

        {/* Assessments / Certifications Section */}
        <div className="bg-gradient-to-r from-teal-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-2xl p-8 mb-12 transition-all duration-500 animate-fadeInUp delay-600">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <FaAward className="mr-3 text-yellow-600 dark:text-yellow-400 text-2xl" /> Assessments / Certifications
          </h2>
          <div className="space-y-6">
            {certificationsData.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start mb-4">
                   {cert.icon && (
                     <div className="flex-shrink-0 mr-4 text-4xl text-blue-600 dark:text-blue-400">
                       {cert.icon}
                     </div>
                   )}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                       {cert.name}
                    </h3>
                    {cert.date && <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1"><FaCalendarAlt className="mr-1 text-gray-500 dark:text-gray-400" /> {cert.date}</p>}
                     {cert.aggregate && <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1"><FaPercent className="mr-1 text-gray-500 dark:text-gray-400" /> Aggregate: {cert.aggregate}</p>}
                   </div>
                </div>
                
                {cert.subjects && cert.subjects.length > 0 && (
                   <div className="mb-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                     <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Subjects:</p>
                     <ul className="list-none text-gray-700 dark:text-gray-300 text-sm pl-0 space-y-1">
                       {cert.subjects.map((subject, subIndex) => (
                         <li key={subIndex} className="flex items-center"><FaClipboardList className="mr-2 text-blue-500 flex-shrink-0" /> {subject.name} ({subject.score})</li>
                       ))}
                     </ul>
                   </div>
                 )}

                 {cert.keySkills && cert.keySkills.length > 0 && (
                   <div className="mb-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                     <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Key Skills:</p>
                     <div className="flex flex-wrap gap-2">
                       {cert.keySkills.map((skill, skillIndex) => (
                         <span key={skillIndex} className="bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 text-xs font-medium px-3 py-1 rounded-full">{skill}</span>
                       ))}
                     </div>
                   </div>
                 )}

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pt-4 border-t border-gray-200 dark:border-gray-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Seminars / Trainings / Workshops Section */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-2xl p-8 mb-12 transition-all duration-500 animate-fadeInUp delay-750">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
             <FaChalkboardTeacher className="mr-3 text-orange-600 dark:text-orange-400 text-2xl" /> Seminars / Trainings / Workshops
          </h2>
           <div className="space-y-6">
             {trainingsData.map((training, index) => (
               <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-xl">
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{training.name}</h3>
                 <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mb-2"><FaCalendarAlt className="mr-1 text-gray-500 dark:text-gray-400" /> {training.date}</p>
                 <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mb-3"><FaGraduationCap className="mr-1 text-gray-500 dark:text-gray-400" /> {training.institute}</p>

                 {training.keySkills && training.keySkills.length > 0 && (
                   <div className="mb-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                     <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Key Skills:</p>
                     <div className="flex flex-wrap gap-2">
                       {training.keySkills.map((skill, skillIndex) => (
                         <span key={skillIndex} className="bg-purple-200 dark:bg-purple-700 text-purple-900 dark:text-purple-100 text-xs font-medium px-3 py-1 rounded-full">{skill}</span>
                       ))}
                     </div>
                   </div>
                 )}

                 <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pt-4 border-t border-gray-200 dark:border-gray-600">
                   {training.description}
                 </p>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}

export default AboutPage;