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
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-start">
              Hey there!{" "}
            </h3>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-start">
              I'm Vinod Mali
            </h1>
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-start">
            and I'm a Full-Stack Developer.
          </h3>
        </>
        <p className="mt-6 text-lg text-gray-700 text-start mb-2">
          I’m a full-stack developer. I build secure, scalable solutions with
          smooth API integration, optimized logic, high-performance systems and
          efficient data handling. I also have experience leading development
          teams and delivering well-structured projects from planning to
          deployment.
        </p>
        <p className="text-start">
          {/* Resume/CV Link */}
          {RESUME && (
            <a
              href={`https://drive.google.com/file/d/${RESUME}/preview`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150 mt-3"
              aria-label="View CV"
            >
              <span className="text-sm font-medium">View Resume/CV</span>
            </a>
          )}
        </p>
      </div>

      {/* Connect Section */}
      <div className="h-full flex justify-start md:justify-end align-bottom flex-col">
        <p className="text-base text-gray-700 mb-4 md:text-end">
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
              className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150"
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
              className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150"
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
              className="p-3 border border-gray-300 rounded-lg hover:border-black transition duration-150"
            >
              <img
                src="/images/leetcode.svg"
                alt="leetcode"
                className="w-5 h-5"
              />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}