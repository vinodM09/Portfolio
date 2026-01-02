// React and Router imports
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

// Page and component imports
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import BlogDetail from "./pages/BlogDetail";
import Blogs from "./pages/Blogs";
import ScrollToTop from "./components/ScrollToTop";

// Google Analytics Tracking ID from environment variables
const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

// Initialize Google Analytics only in production mode
if (TRACKING_ID && import.meta.env.PROD) {
  ReactGA.initialize(TRACKING_ID);
}

/**
 * RouteChangeTracker Component
 * Tracks page views and sends them to Google Analytics on route changes.
 * Only active in production builds.
 */
function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview event to Google Analytics only in production
    if (TRACKING_ID && import.meta.env.PROD) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

/**
 * Main App Component
 * Sets up the application's routing.
 */
export default function App() {
  return (
    <BrowserRouter>
      {/* Component to track route changes for analytics */}
      <RouteChangeTracker />
      {/* Component to scroll to the top of the page on route changes */}
      <ScrollToTop />

      {/* Main routing setup */}
      <Routes>
        {/* Redirect root path to the dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        {/* Route for the main dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Route for the projects page */}
        <Route path="/projects" element={<Projects />} />
        {/* Route for the blogs page */}
        <Route path="/blogs" element={<Blogs />} />
        {/* Route for detailed project view with a dynamic ID */}
        <Route path="/project/:id" element={<ProjectDetail />} />
        {/* Route for detailed blog view with a dynamic ID */}
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}