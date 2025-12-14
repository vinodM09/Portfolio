/**
 * Main entry point for the React application.
 */

// React and ReactDOM imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Main CSS and App component imports
import "./index.css";
import App from "./App.jsx";

// Render the main App component into the root element in the DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);