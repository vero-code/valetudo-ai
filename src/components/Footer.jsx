import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-[135px] bg-[#dfece9] w-full flex flex-col items-center justify-center text-[#2C3249] text-[16px] font-['Martel_Sans']">
      <p className="mb-2">
        © {new Date().getFullYear()} Valetudo. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/vero-code/valetudo-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2C3249] hover:text-[#437066] transition-colors"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;