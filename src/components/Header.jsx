// React imports and hooks
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// Icons for mobile menu
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import useTheme from "../hooks/useTheme";

/**
 * Header Component
 * Displays the navigation bar with a logo, desktop menu, and mobile menu.
 */
export default function Header() {
  // State to track if the email has been copied to the clipboard
  const [copied, setCopied] = useState(false);
  // State to manage the visibility of the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Scrolls to a specific section on the page.
   * If not on the homepage, navigates to the homepage first.
   * @param {string} id - The ID of the section to scroll to.
   */
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false); // Close mobile menu on navigation
  };

  /**
   * Copies the email address to the clipboard and shows a confirmation message.
   */
  const handleCopy = () => {
    navigator.clipboard.writeText("snvinod09@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  /**
   * Toggles the visibility of the mobile menu.
   */
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text font-medium dark:text-white">
        <Link to={"/"}>VINOD MALI</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <nav className="space-x-6">
          <Link
            to="/projects"
            className="hover:underline text-gray-700 dark:text-gray-300 opacity-60"
          >
            Projects
          </Link>

          <Link to="/blogs" className="hover:underline text-gray-700 dark:text-gray-300 opacity-60">
            Blogs
          </Link>

          <Link to="/contact" className="hover:underline text-gray-700 dark:text-gray-300 opacity-60">
            Contact
          </Link>


        </nav>

        {/* Email copy button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="text-sm border dark:border-gray-600 px-3 py-1 rounded-lg opacity-60 text-gray-700 dark:text-gray-300"
          >
            snvinod09@gmail.com
          </button>
          {copied && (
            <span className="text-sm ml-2 transition-opacity">Copied!</span>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center dark:text-white">
        <button onClick={toggleMobileMenu} className="text-xl">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute w-full top-full right-1 items-center bg-white dark:bg-neutral-900 shadow-lg rounded-lg p-4 flex flex-col space-y-3 md:hidden z-50 transition-colors duration-300">
          <Link
            to="/projects"
            className="hover:underline text-gray-700 dark:text-gray-300"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            to="/blogs"
            className="hover:underline text-gray-700 dark:text-gray-300"
            onClick={toggleMobileMenu}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="hover:underline text-gray-700 dark:text-gray-300"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>

          <button
            onClick={handleCopy}
            className="text-sm border dark:border-gray-600 px-3 py-1 rounded-lg opacity-60 text-gray-700 dark:text-gray-300"
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