import gensler from "../assets/gensler.png";

const projects = [
  {
    title: "Gensler",
    description: "A simple, responsive website built with React.",
    image: gensler,
    link: "https://gensler-m53g.vercel.app",
  },
  // Add more projects here
];

const Project = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-brand-500 to-brand-700 px-6 py-28 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center font-display text-4xl font-bold md:text-5xl">
          My Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-brand-800/80 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-accent-400/20"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h3 className="mb-3 text-2xl font-display font-bold">{project.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-brand-100">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-white px-5 py-2.5 font-semibold text-brand-800 transition-all duration-300 hover:bg-accent-400 hover:text-brand-950"
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

export default Project;