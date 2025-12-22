// React and icon imports
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

/**
 * Footer Component
 * Displays contact information, navigation links, and social media icons.
 */
const Footer = () => {
  // Social media and contact links from environment variables
  const LINKEDIN = import.meta.env.VITE_LINKEDIN;
  const GITHUB = import.meta.env.VITE_GITHUB;
  const LEETCODE = import.meta.env.VITE_LEETCODE || "";

  return (
    // Footer container
    <footer className="pb-20 text-center text-gray-600">
      {/* Top Section: Contact, Navigation, and Social Links */}
      <div className="max-w-5xl mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-gray-200">
        {/* Contact Information */}
        <div className="mb-8 md:mb-0 text-start">
          <p className="text-lg text-gray-700 font-light mb-1">
            Get in touch with me at
          </p>
          <a
            href="mailto:snvinod09@gmail.com"
            className="text-2xl text-black hover:text-gray-700 transition"
          >
            snvinod09@gmail.com
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="items-center space-x-6 hidden sm:flex">
          <a
            href="#projects"
            className="hover:underline text-gray-700"
            style={{ opacity: "0.6" }}
          >
            Projects
          </a>
          <a
            href="#hero"
            className="hover:underline text-gray-700"
            style={{ opacity: "0.6" }}
          >
            About me
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-3">
          {/* LinkedIn */}
          <a
            href={`${LINKEDIN}`}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          {/* GitHub */}
          <a
            href={`${GITHUB}`}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          {/* LeetCode */}
          <a
            href={`${LEETCODE}`}
            aria-label="LeetCode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150"
          >
            <img src="/images/leetcode.svg" alt="leetcode" className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="max-w-7xl mx-auto py-3 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Vinod Mali</p>
      </div>
    </footer>
  );
};

export default Footer;