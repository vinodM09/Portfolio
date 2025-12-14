// React hooks for managing side effects and accessing location
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 * A utility component that scrolls the window to the top of the page
 * whenever the route (pathname) changes.
 */
export default function ScrollToTop() {
  // Get the current pathname from the URL
  const { pathname } = useLocation();

  // Effect to scroll to the top whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component does not render anything
  return null;
}
