import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const timeline = [
  {
    title: "Bloomytech Institute, Lagos",
    period: "2024 - 2025",
    text: "I began my coding journey at Bloomytech Institute, where I learnt the fundamentals of web development. During this time, I built a strong foundation in HTML, CSS, and JavaScript, and discovered much love and passion for creating websites dynamically.",
  },
  {
    title: "Self-taught Developer",
    period: "2025 - Present",
    text: "After completing my training at Bloomy, I continued learning independently. I dove deeper into modern technologies like React, TypeScript, and Next.js spending months researching, building real-world projects, and debugging challenges that strengthened my problem-solving skills.",
  },
  {
    title: "My Vision",
    period: "2025 - Present",
    text: "Grow into a confident web developer who builds websites that help people solve problems in the digital world.",
  },
  {
    title: "My Mission",
    period: "2025 - Present",
    text: "As a website developer, I aim to transform concepts into digital experiences that are meaningful, accessible, and tailored to connect with people on a personal and professional level.",
  },
];

const stack = [
  { icon: FaHtml5, label: "HTML", color: "text-orange-500" },
  { icon: FaCss3Alt, label: "CSS", color: "text-blue-500" },
  { icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-400" },
  { icon: FaJs, label: "JavaScript", color: "text-yellow-400" },
  { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
  { icon: FaReact, label: "React", color: "text-cyan-300" },
];

const About = () => {
  return (
    <section className="min-h-screen bg-brand-500 px-6 py-24 text-white md:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center font-display text-4xl font-bold md:text-5xl">
          About Me
        </h2>

        <div className="mb-16 max-w-3xl">
          <h3 className="mb-3 font-display text-xl font-semibold text-accent-400">
            My Journey
          </h3>
          <p className="leading-relaxed text-brand-100">
            From a curious beginner to a growing developer, my journey in tech
            has been driven by a love for learning and building dynamic
            websites.
          </p>
        </div>

        <div className="relative space-y-14 border-l border-white/15 pl-8">
          {timeline.map(({ title, period, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-9 top-1 h-3.5 w-3.5 rounded-full border-2 border-brand-500 bg-accent-400" />
              <h4 className="text-xl font-semibold">{title}</h4>
              <span className="text-sm text-brand-300">{period}</span>
              <p className="mt-3 max-w-3xl leading-relaxed text-brand-100">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="mb-12 text-center font-display text-2xl font-semibold md:text-3xl">
            Technologies I work with
          </h3>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-3">
            {stack.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/50 hover:bg-white/10"
              >
                <Icon className={`text-4xl ${color}`} />
                <p className="mt-3 text-sm text-brand-100">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;