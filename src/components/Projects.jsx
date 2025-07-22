import React from 'react';

const projects = [
  {
    name: 'CURABOT',
    teamSize: 4,
    keySkills: 'React mean stack',
    link: 'https://superb-maamoul-d26aad.netlify.app/',
    description: 'CuraBot is an AI-powered healthcare assistant that enhances hospital management by streamlining appointments, medicine recommendations, and urgent care assistance',
  },
  {
    name: 'Automated resume',
    keySkills: 'flask python generative ai',
    link: 'https://automated-resume.onrender.com',
    description: 'A web application that helps users generate professional resumes using AI. The application provides a user-friendly interface to create, edit, and download resumes in various formats.',
  },
  {
    name: 'gold prediction',
    keySkills: 'Machine Learning Python Flask',
    link: 'https://gold-prediction-1e7a.onrender.com',
    description: 'A Flask-based web application that predicts gold prices using a polynomial regression model. This application allows users to input a future date and get predicted gold prices in Indian Rupees.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-12 text-center transition-all duration-500">
          Projects
        </h2>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 md:w-1/2 w-full transition-all duration-500"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/* Project Image Placeholder */}
                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" /> */}
                <div className="p-6">
                  <h3 className="title-font text-lg font-medium text-gray-900 mb-3">{project.name}</h3>
                  <p className="leading-relaxed mb-3">{project.description}</p>
                  <p className="leading-relaxed mb-3"><strong>Key Skills:</strong> {project.keySkills}</p>
                  {project.teamSize && <p className="leading-relaxed mb-3"><strong>Team Size:</strong> {project.teamSize}</p>}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Project Link
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 