import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../api/axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
}




  };

  return (
    <section className="min-h-screen bg-[#68727A] text-white px-6 py-20">
      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-4xl mx-auto space-y-16">

        {/* ===== New Highlight Card ===== */}
        <div className="bg-[#5c666d] border border-white/20 rounded-2xl p-10 text-center shadow-lg transition hover:shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Contact Me</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-3">
            Looking for full-time, contract, or freelance work
          </h2>
          <p className="text-gray-200 mb-8">Let’s build something great together</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="mailto:adebayobidemi36@gmail.com"
              className="bg-white text-[#68727A] px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Email Me
            </a>

            <a
              href="#"
              className="bg-black/30 px-6 py-3 rounded-lg font-medium hover:bg-black/40 transition"
            >
              Schedule a Call
            </a>
          </div>

          <p className="text-gray-200 text-sm">adebayobidemi36@gmail.com</p>
        </div>

        {/* ===== Your Original Info Section (Social Links first) ===== */}
        <div className="text-center space-y-8">

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Get in Touch</h1>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              I’d love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-4">Contact Information</h2>
            <p className="text-gray-200">
              <span className="font-semibold text-white">Email:</span>{" "}
              adebayobidemi36@gmail.com
            </p>
            <p className="text-gray-200 mt-2">
              <span className="font-semibold text-white">GitHub:</span>{" "}
              bidex327
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-4">Connect with me</h2>
            {/* ✅ Social <ul> */}
            <ul className="space-y-2 text-gray-200">
              <li>GitHub: bidex327</li>
              <li>Twitter: @bidexsneh</li>
              <li>Instagram: @bidextrade</li>
              <li>TikTok: @bidex-webdev</li>
              <li>LinkedIn: Adebayo (Usman) Bidemi</li>
            </ul>
          </div>
        </div>

        {/* ===== Contact Form LAST ===== */}
        <div className="bg-[#5c666d] border border-white/20 rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">Send Me a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#68727A] border border-white/30 focus:outline-none focus:border-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#68727A] border border-white/30 focus:outline-none focus:border-white"
            />

            <textarea
              name="message"
              placeholder="Your Suggestion"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#68727A] border border-white/30 focus:outline-none focus:border-white"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-white text-[#68727A] font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
