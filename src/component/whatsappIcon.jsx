import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.link/pkgecb"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
    >
      <IoLogoWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsappButton;