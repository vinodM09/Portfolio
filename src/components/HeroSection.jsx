// Icon imports
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

/**
 * HeroSection Component
 * The main introductory section of the portfolio, displaying a greeting, a brief bio, and social links.
 */
export default function HeroSection() {
  // Social media and resume links from environment variables
  const LINKEDIN = import.meta.env.VITE_LINKEDIN || "";
  const GITHUB = import.meta.env.VITE_GITHUB || "";
  const LEETCODE = import.meta.env.VITE_LEETCODE || "";
  const RESUME = import.meta.env.VITE_RESUME || "";

  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8 px-4 sm:px-0"
    >
      {/* Introduction Section */}
      <div className="md:col-span-2">
        <>
          <span>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-start">
              Hi, Vinod here
            </h1>
          </span>
          <p className="text-2xl md:text-3xl leading-tight text-start">
            A Developer.
          </p>
        </>
        <p className="mt-6 text-gray-700 dark:text-gray-300 text-start mb-2">
          tldr; learnt by building, I have experience working with full-stack, cloud & devops, leading development
          teams and delivering scalable, secure, high-performance solutions.
        </p>
        <p className="text-start">
          {/* Resume/CV Link */}
          {RESUME && (
            <a
              href={`https://drive.google.com/file/d/${RESUME}/preview`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center p-3 border border-gray-300 dark:border-neutral-700 rounded-lg hover:border-black dark:hover:border-white transition duration-150 mt-3"
              aria-label="View CV"
            >
              <span className="text-sm font-medium">View Resume/CV</span>
            </a>
          )}
        </p>
      </div>

      {/* Connect Section */}
      <div className="h-full flex justify-start md:justify-end align-bottom flex-col">
        <p className="text-base text-gray-700 dark:text-gray-300 mb-4 md:text-end">
          Connect with me here:
        </p>
        <div className="flex md:justify-end space-x-3">
          {/* LinkedIn */}
          {LINKEDIN && (
            <a
              href={`${LINKEDIN}`}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 dark:border-neutral-700 rounded-lg hover:border-black dark:hover:border-white transition duration-150"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          )}
          {/* GitHub */}
          {GITHUB && (
            <a
              href={`${GITHUB}`}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 dark:border-neutral-700 rounded-lg hover:border-black dark:hover:border-white transition duration-150"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {/* LeetCode */}
          {LEETCODE && (
          <a
            href={`${LEETCODE}`}
            aria-label="LeetCode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-300 dark:border-neutral-700 rounded-lg hover:border-black dark:hover:border-white transition duration-150"
          >
            <svg
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </a>
          )}
        </div>
      </div>
    </section>
  );
}