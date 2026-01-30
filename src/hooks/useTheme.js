import { useState, useEffect } from "react";

/**
 * Custom hook to manage the application theme (light/dark).
 * Persists the preference in localStorage and updates the document class.
 */
export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        // Check localStorage first
        if (typeof window !== "undefined" && window.localStorage) {
            const storedTheme = window.localStorage.getItem("theme");
            if (storedTheme) {
                return storedTheme;
            }
        }
        // Default to dark
        return "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Explicitly handle class updates
        if (theme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }

        // Update local storage
        if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
}
