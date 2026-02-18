import profile from "../assets/profile.jpeg";
import { useEffect, useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiTypescript } from "react-icons/si";

const Home = () => {
  // Typing animation for name
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
      {/* ====== HOME SECTION ====== */}
      <section
        id="home"
        className="min-h-screen bg-[#68727A] text-white flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-gray-300 mb-3 font-extrabold text-9x1">
              Software Developer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-white">
                {displayedText} <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-gray-300 max-w-lg mb-8 leading-relaxed font-extrabold">
              I build responsive, user-friendly web applications using modern
              technologies and write clean, maintainable code.
            </p>

            <div className="flex gap-6 text-gray-300 mb-10 text-2xl">
              <a
                href="https://github.com/bidex327"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/adebayo-bidemi-0b81193a9"
                className="hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a href="https://x.com/bidexsneh?s=21" className="hover:text-white">
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/bidextrade"
                className="hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="flex gap-12 mb-10">
              <div className="flex items-center">
                <h2 className="text-6xl font-bold text-gray-300">2</h2>
                <p className="text-sm text-gray-300">
                  Years of <br /> experience
                </p>
              </div>
            </div>

            <button className="bg-[#36535E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2b454b] transition">
              Download CV
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-full border-2 border-dashed border-[#cfe1b9] flex items-center justify-center">
              <img
                src={profile}
                alt="Profile"
                className="w-60 h-60 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
