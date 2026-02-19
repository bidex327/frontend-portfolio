import React from "react";

import gensler from "../assets/gensler.png"
const Projects = () => {
  const projects = [
    {
      title: "Gensler",
      description: "A simple, responsive website built with React.",
      image: gensler,
      link: "https://gensler-1ula.vercel.app/#", // link to project
    },
    // Add more projects here
  ];

  return (
   <section className="min-h-screen bg-linear-to-br  from-[#68727A] to-[#4f5a61] text-white px-6 md:px-10 py-28">
  <div className="max-w-6xl mx-auto">
    
    <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 font-cursive">
      My Project
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#36535E]/90 backdrop-blur-md rounded-2xl 
          overflow-hidden shadow-2xl border border-white/10
          hover:-translate-y-3 hover:shadow-cyan-400/20 
          transition-all duration-500"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover"
          />

          <div className="p-7">
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#36535E] 
              px-5 py-2 rounded-lg font-semibold 
              hover:bg-cyan-400 hover:text-[#1f2f36]
              transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
  );
};

export default Projects;


