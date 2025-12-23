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
            href="#blogs"
            className="hover:underline text-gray-700"
            style={{ opacity: "0.6" }}
          >
            Blogs
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
            <FaLinkedinIn className="w-5 h-5 text-gray-700" />
          </a>
          {/* GitHub */}
          <a
            href={`${GITHUB}`}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150"
          >
            <FaGithub className="w-5 h-5 text-gray-700" />
          </a>
          {/* LeetCode */}
          <a
            href={`${LEETCODE}`}
            aria-label="LeetCode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
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