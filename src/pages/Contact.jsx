import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import api from "../api/axios";

const socials = [
  { icon: FaGithub, label: "GitHub", handle: "bidex327", href: "https://github.com/bidex327" },
  { icon: FaTwitter, label: "Twitter", handle: "@bidexsneh", href: "https://x.com/bidexsneh?s=21" },
  { icon: FaInstagram, label: "Instagram", handle: "@bidextrade", href: "https://www.instagram.com/bidextrade" },
  { icon: SiTiktok, label: "TikTok", handle: "@bidex-webdev", href: "#" },
  { icon: FaLinkedin, label: "LinkedIn", handle: "Adebayo (Usman) Bidemi", href: "https://www.linkedin.com/in/adebayo-bidemi-0b81193a9" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setSubmitting(true);
    try {
      const response = await api.post("/api/messages", formData);
      if (response.data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Server error. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/15 bg-white/5 p-3 text-white placeholder-brand-200 transition-colors duration-200 focus:border-accent-400 focus:outline-none";

  return (
    <section className="min-h-screen bg-brand-500 px-6 py-20 text-white">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="mx-auto max-w-4xl space-y-16">
        <div className="rounded-2xl border border-white/15 bg-brand-700/60 p-10 text-center shadow-lg backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl">
          <h1 className="mb-4 font-display text-4xl font-semibold md:text-5xl">Contact Me</h1>
          <h2 className="mb-3 text-xl font-medium md:text-2xl">
            Looking for full-time, contract, or freelance work
          </h2>
          <p className="mb-8 text-brand-100">Let's build something great together</p>

          <div className="mb-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:adebayobidemi36@gmail.com"
              className="rounded-lg bg-white px-6 py-3 font-medium text-brand-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-400"
            >
              Email Me
            </a>
          </div>

          <p className="text-sm text-brand-100">adebayobidemi36@gmail.com</p>
        </div>

        <div className="space-y-10 text-center">
          <div>
            <h2 className="mb-4 font-display text-3xl font-semibold md:text-4xl">Get in Touch</h2>
            <p className="mx-auto max-w-2xl text-lg text-brand-100">
              I'd love to hear from you! Whether you have a question, a
              project idea, or just want to connect, feel free to reach out.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socials.map(({ icon: Icon, label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-brand-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-white"
              >
                <Icon className="text-base" />
                <span className="sr-only">{label}:</span>
                {handle}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-brand-700/60 p-10 shadow-lg backdrop-blur-md">
          <h2 className="mb-6 text-center font-display text-3xl font-semibold">
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-brand-100">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-brand-100">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-brand-100">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={inputClass}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-white py-3 font-semibold text-brand-800 transition-all duration-200 hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;