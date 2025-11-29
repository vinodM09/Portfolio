import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("snvinod09@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text">
        <Link to={"/"}>VINOD MALI</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <nav className="space-x-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:underline text-gray-700 opacity-60"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("hero")}
            className="hover:underline text-gray-700 opacity-60"
          >
            About me
          </button>
        </nav>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="text-sm border px-3 py-1 rounded-full opacity-60"
          >
            snvinod09@gmail.com
          </button>
          {copied && <span className="text-sm ml-2 transition-opacity">Copied!</span>}
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-xl">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute w-full top-full right-1 mt-2 items-center bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-3 md:hidden z-50">
          <a href="#projects" className="hover:underline text-gray-700">
            Projects
          </a>
          <a href="#hero" className="hover:underline text-gray-700">
            About me
          </a>
          <button
            onClick={handleCopy}
            className="text-sm border px-3 py-1 rounded-full opacity-60"
          >
            snvinod09@gmail.com
          </button>
          {copied && (
            <span className="text-sm transition-opacity">Copied!</span>
          )}
        </div>
      )}
    </header>
  );
}