import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.link/pkgecb"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-2xl transition-transform duration-200 hover:scale-110 focus-visible:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
      <IoLogoWhatsapp className="relative text-3xl text-white" />
    </a>
  );
};

export default WhatsappButton;