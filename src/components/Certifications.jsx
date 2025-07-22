import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Computer Networks and Internet Protocol',
    issuer: 'NPTEL',
    date: '12 Apr, 2024',
    aggregate: '80 / 100',
    keySkills: 'TCP/IP Protocol Suite, Network Security, Subnetting & IP Addressing, VPN Configuration, Network Monitoring Tools',
    description: 'A highly motivated and detail-oriented individual with expertise in computer networks and internet protocols. Certified by NPTEL, demonstrating proficiency in TCP/IP networking, routing & switching, subnetting, and network security. Strong problem-solving and troubleshooting abilities with hands-on experience in network configuration, monitoring, and optimization.',
  },
  {
    name: 'Basics of Python',
    date: null, // Assuming no specific date provided for certification, only assessment date
    aggregate: '90 / 100', // Assuming this is the assessment score
    keySkills: 'Functions, error handling, and file operations, Object-oriented programming principles, Basic data analysis using NumPy and Pandas',
    description: 'Certified in fundamental Python programming, demonstrating expertise in: Core Python syntax, variables, and control structures, Functions, file handling, and exception handling, Object-Oriented Programming principles, Basics of data manipulation using NumPy & Pandas Writing.',
  },
  {
    name: 'Database and SQL',
    date: null, // Assuming no specific date provided for certification, only assessment date
    aggregate: '90 / 100', // Assuming this is the assessment score
    keySkills: 'normalization, indexing, and performance optimization, database design schema creation, PostgreSQL, and SQL Server, mysql',
    description: 'Proficient in writing efficient SQL queries for data retrieval and manipulation. Skilled in database design, schema creation, and relational data modeling. Strong understanding of normalization, indexing, and query optimization.',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.h2
          className="text-4xl font-medium text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Assessments / Certifications
        </motion.h2>
        <div className="flex flex-wrap -m-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="p-4 md:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6">
                <h3 className="title-font text-lg font-medium text-gray-900 mb-3">{cert.name}</h3>
                {cert.date && <p className="leading-relaxed mb-3"><strong>Date:</strong> {cert.date}</p>}
                {cert.issuer && <p className="leading-relaxed mb-3"><strong>Issuer:</strong> {cert.issuer}</p>}
                {cert.aggregate && <p className="leading-relaxed mb-3"><strong>Aggregate:</strong> {cert.aggregate}</p>}
                <p className="leading-relaxed mb-3"><strong>Key Skills:</strong> {cert.keySkills}</p>
                <p className="leading-relaxed mb-3">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 