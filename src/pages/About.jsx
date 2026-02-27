import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";







const About = () => {
  return (
    <section className="min-h-screen bg-[#68727A] text-white px-6 md:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 font-cursive">
          About me
        </h2>

        <div className="max-w-3xl mb-16">
          <h2 className="text-xl italic font-semibold mb-3">My Journey</h2>
          <p className="text-gray-300 leading-relaxed">
            From a curious beginner to a growing developer, my journey in tech
            has been driven by a love for learning, building dynamics websites
          </p>
        </div>

        <div className="relative pl-8 border-l border-gray-700 space-y-16">
          
          <div className="relative">
            <span className="absolute -left-2.5 top-1 w-4 h-4 bg-white rounded-full" />
            <h4 className="text-xl font-semibold">
              Bloomytech institute, Lagos
            </h4>
            <span className="text-sm text-gray-400">2024 - 2025</span>
            <p className="text-gray-300 mt-3 leading-relaxed max-w-3xl">
              I began my coding journey at Bloomytech Institute, where I learnt
              the fundamentals of web development. During this time, I built a
              strong foundation in HTML, CSS, and JavaScript, and discovered
              much love and passion for creating websites dynamically.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-2.5 top-1 w-4 h-4 bg-white rounded-full" />
            <h4 className="text-xl font-semibold">Self-taught Developer</h4>
            <span className="text-sm text-gray-400">2025 - Present</span>
            <p className="text-gray-300 mt-3 leading-relaxed max-w-3xl">
              After completing my training at Bloomy, I continued learning
              independently. I dove deeper into modern technologies like React,
              TypeScript, and Next.js spending months researching, building
              real-world projects, and debugging challenges that strengthened my
              problem-solving skills.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-2.5 top-1 w-4 h-4 bg-white rounded-full" />
            <h4 className="text-xl font-semibold">My vision</h4>
            <span className="text-sm text-gray-400">2025 - Present</span>
            <p className="text-gray-300 mt-3 leading-relaxed max-w-3xl">
              Grow into a confident web developer who build website that helps
              people solve problems on the digital world.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-2.5 top-1 w-4 h-4 bg-white rounded-full" />
            <h4 className="text-xl font-semibold">My Mission</h4>
            <span className="text-sm text-gray-400">2025 - Present</span>
            <p className="text-gray-300 mt-3 leading-relaxed max-w-3xl">
              As a website developer, I aim to transform concepts into digital
              experiences that are meaningful, accessible, and tailored to
              connect with people on a personal and professional level.
            </p>
          </div>

        </div>

        {/* ===== SKILLS SECTION (ADDED, NO COLOR CHANGES) ===== */}
       {/* SKILLS */}
<div className="mt-24">
  <h3 className="text-center text-2xl md:text-3xl font-semibold mb-12 text-white">
    I have experience with the following technologies
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
    
    <div className="border border-cyan-400/40 rounded-xl p-6 flex flex-col items-center justify-center">
      <FaHtml5 className="text-4xl text-orange-500" />
      <p className="text-sm text-gray-300 mt-3">HTML</p>
    </div>

    <div className="border border-cyan-400/40 rounded-xl p-6 flex flex-col items-center justify-center">
      <FaCss3Alt className="text-4xl text-blue-500" />
      <p className="text-sm text-gray-300 mt-3">CSS</p>
    </div>

    <div className="border border-cyan-400/40 rounded-xl p-6 flex flex-col items-center justify-center">
      <SiTailwindcss className="text-4xl text-cyan-400" />
      <p className="text-sm text-gray-300 mt-3">Tailwind</p>
    </div>

    <div className="border border-cyan-400/40 rounded-xl p-6 flex flex-col items-center justify-center">
      <FaJs className="text-4xl text-yellow-400" />
      <p className="text-sm text-gray-300 mt-3">JavaScript</p>
    </div>

    <div className="border border-cyan-400/40 rounded-xl p-6 flex flex-col items-center justify-center">
      <FaNodeJs className="text-green-600 text-4xl" />
      <p className="text-sm text-gray-300 mt-3">Nodejs</p>
    </div>

    <div className="border border-cyan-400/40 rounded-xl p-6 flex flex-col items-center justify-center">
      <FaReact className="text-4xl text-cyan-300" />
      <p className="text-sm text-gray-300 mt-3">React</p>
    </div>

  </div>
</div>

        {/* ===== END SKILLS SECTION ===== */}

      </div>
    </section>
  );
};

export default About;
