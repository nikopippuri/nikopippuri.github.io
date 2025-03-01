import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'ATM project using modern tecnologies',
      description: 'A school project that compined MySQL, Node.js backend and QT frontend',
      link: 'https://github.com/nikopippuri/atm-project',
      image: 'https://raw.githubusercontent.com/nikopippuri/atm-project/refs/heads/main/images/logo.png',
    },
    {
      name: 'Arcade game project',
      description: 'A arcade game built with arduino.',
      link: 'https://github.com/nikopippuri/arcade-game-project',
      image: 'https://raw.githubusercontent.com/nikopippuri/arcade-game-project/refs/heads/main/Images/game_on_arduino.png',
    },
    {
      name: 'TBA',
      description: 'Always creating some new stuff...',
      link: 'https://github.com/nikopippuri/arcade-game-project',
      image: 'https://via.placeholder.com/300x200?text=Task+Manager',
    },
  ];

  return (
    <section id='projects' className="w-full py-16 mt-10 bg-orange-400 text-white text-center border-2 border-orange-950 rounded-lg p-2">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-stone-800 rounded-lg p-4 shadow-lg w-80 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-600 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
