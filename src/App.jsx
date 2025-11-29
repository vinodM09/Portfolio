import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteChangeTracker />

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}