// React hooks and icons
import { useState } from "react";
import { FaLinkedinIn, FaXTwitter, FaWhatsapp, FaLink } from "react-icons/fa6";

/**
 * ShareBar Component
 * A bar with social media icons to share the current page.
 * @param {{ title: string }} props - The props for the component, containing the title of the page.
 */
const ShareBar = ({ title }) => {
  // State to track if the URL has been copied
  const [copied, setCopied] = useState(false);
  // Get the current URL
  const url = window.location.href;

  /**
   * Copies the current URL to the clipboard and shows a confirmation message.
   */
  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center gap-3 text-sm text-gray-600 mb-12">
      <span className="font-medium">Share:</span>

      {/* Copy Link Button */}
      <button
        onClick={copyLink}
        className="p-2 border rounded-md hover:border-black transition"
        aria-label="Copy link"
      >
        <FaLink />
      </button>

      {/* LinkedIn Share Button */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border rounded-md hover:border-black transition"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      {/* Twitter Share Button */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border rounded-md hover:border-black transition"
        aria-label="Share on Twitter"
      >
        <FaXTwitter />
      </a>

      {/* WhatsApp Share Button */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(
          `${title} ${url}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border rounded-md hover:border-black transition"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* "Copied" confirmation message */}
      {copied && <span className="text-xs text-green-600">Copied</span>}
    </div>
  );
};

export default ShareBar;