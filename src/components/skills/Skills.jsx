import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'CSS', icon: '🎨' },
    { name: 'HTML', icon: '📄' },
    { name: 'Git', icon: '🐙' },
  ];

  return (
    <section id='skills' className="w-full py-16 mt-10 bg-orange-400 text-white text-center border-2 border-orange-950 rounded-lg p-2">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-stone-800 rounded-lg p-6 shadow-lg w-32">
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
