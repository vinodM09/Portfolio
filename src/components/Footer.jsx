import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const LINKEDIN = import.meta.env.VITE_LINKEDIN;
  const GITHUB = import.meta.env.VITE_GITHUB;
  const LEETCODE = import.meta.env.VITE_LEETCODE || "";
  return (
    // Outer container with padding and a light gray background (or just white if it matches the body)
    <footer className="mt-20 pt-8 pb-20 text-center text-gray-600">
      
      {/* Top Section: Contact, Nav, and Socials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-gray-200">
        
        {/* Contact Info */}
        <div className="mb-8 md:mb-0 text-start">
          <p className="text-lg text-gray-700 font-light mb-1">Get in touch with me at</p>
          <a 
            href="mailto:hello@amercer.com" 
            className="text-2xl text-black hover:text-gray-700 transition"
          >
            snvinod09@gmail.com
          </a>
        </div>
        
        {/* Navigation Links */}
        <nav className="items-center space-x-6 mr-16 hidden sm:flex">
          <a href="#projects" className="hover:underline text-gray-700" style={{ opacity: "0.6" }} >
            Projects
          </a>
          <a href="#hero" className="hover:underline text-gray-700"   style={{ opacity: "0.6" }} >
            About me
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-3">
          {/* LinkedIn */}
          <a href={`${LINKEDIN}`} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          {/* GitHub */}
          <a href={`${GITHUB}`} aria-label="Dribbble" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150">
             <FaGithub className='W-5 H-5' />
          </a>
          <a href={`${LEETCODE}`} aria-label="Dribbble" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150">
          <img src="/images/leetcode.svg" alt="leetcode" className="w-5 h-5"/>
          </a>
          
        </div>

      </div>

      {/* Bottom Section: Credits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Vinod Mali</p>
        {/* <a href="#" className="mx-4 hover:underline">Get this template for free</a> */}
        {/* <span className="ml-4">Created by **Krzysztof**</span> */}
      </div>

    </footer>
  );
};

export default Footer;