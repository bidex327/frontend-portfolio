import { useEffect, useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import WhatsappButton from "../component/whatsappIcon";

const socials = [
  { icon: FaGithub, href: "https://github.com/bidex327", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/adebayo-bidemi-0b81193a9",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://x.com/bidexsneh?s=21", label: "Twitter" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/bidextrade",
    label: "Instagram",
  },
];

const Home = () => {
  const fullText = "Adebayo Bidemi U.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 180);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-brand-500 text-white flex items-center"
      >
        {/* animated background blobs */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <motion.div
            animate={{
              x: [0, 60, -40, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent-500/30 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -50, 40, 0],
              y: [0, 50, -30, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 -right-32 h-28rem w-md rounded-full bg-brand-700/40 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 30, -60, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-16 md:grid-cols-2 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
              Fullstack Web Developer
            </p>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              Hi, I'm <br />
              <span className="text-white">
                {displayedText}
                <span className="animate-pulse text-accent-400">|</span>
              </span>
            </h1>
            <p className="mb-8 max-w-lg leading-relaxed text-brand-100">
              I build responsive, user-friendly web applications using modern
              technologies and write clean, maintainable code.
            </p>

            <div className="mb-10 flex gap-5 text-2xl text-brand-200">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-all duration-200 hover:-translate-y-0.5 hover:text-accent-400"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <div className="flex w-fit gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4">
              <h2 className="font-display text-5xl font-bold text-accent-400">
                2
              </h2>
              <p className="self-center text-sm text-brand-100">
                Years of <br /> experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative flex h-72 w-72 items-center justify-center">
              {/* animated rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #22d3ee, #06b6d4, #345460, #22d3ee)",
                }}
              />

              {/* inner mask so only a ring shows, not a solid disc */}
              <div className="absolute inset-6px rounded-full bg-brand-500" />

              {/* glow */}
              <div className="absolute inset-0 rounded-full bg-accent-400/25 blur-2xl" />

              <img
                src={profile}
                alt="Adebayo Bidemi, Fullstack Web Developer"
                className="relative h-64 w-64 rounded-full border-4 border-white/30 object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <WhatsappButton />
    </div>
  );
};

export default Home;
