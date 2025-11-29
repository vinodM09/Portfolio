const VITE_ISA_LIVE_LINK = import.meta.env.VITE_ISA_LIVE_LINK || "";
const VITE_TCRM_LIVE_LINK = import.meta.env.VITE_TCRM_LIVE_LINK || "";
const VITE_TCRM_GITHUB_LINK = import.meta.env.VITE_TCRM_GITHUB_LINK || "";
const VITE_ECOGRID_LIVE_LINK = import.meta.env.VITE_ECOGRID_LIVE_LINK || "";
const VITE_ECOGRID_GITHUB_LINK = import.meta.env.VITE_ECOGRID_GITHUB_LINK || "";
const VITE_SHOPPING_LIVE_LINK = import.meta.env.VITE_SHOPPING_LIVE_LINK || "";
const VITE_SHOPPING_GITHUB_LINK = import.meta.env.VITE_SHOPPING_GITHUB_LINK || "";
export const projects = [
    {
      id: "isa",
      title: "Interstellar Spacetech Astronomy",
      client: "Interstellar Spacetech Astronamy Community",
      year: "2025",
      scope: "Team Lead, Full Stack Development",
      overview: "The ISA website showcases Interstellar Spacetech Astronomy’s projects and research through a modern, responsive platform with 40+ features, 15+ API endpoints, secure authentication, robust payments, and a complete registration and ticketing system with real-time updates.",
      description: "The ISA website was developed to present Interstellar Spacetech Astronomy’s projects and research in a modern, interactive, and user-friendly platform.\n\nBuilt with over 40+ features and 15+ API endpoints (each with multiple sub-endpoints), it offers seamless navigation, dynamic content updates, and responsive design across all devices.\n\nThe platform includes a fully integrated payment system with database reconciliation, a complete registration and ticketing workflow (from payment to on-site verification) and advanced authentication, authorization, and route protection for security.\n\nDesigned to engage and inform, the ISA website connects the scientific community through innovation, transparency, and accessibility.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
        "JavaScript",
        "Cloudinary",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JWT",
        "Nodemailer",
        "Axios",
        "React Query",
        "Node-Cron",
        "Yet-Another-React-Lightbox",
        "External APIs",
      ],
      liveLink: `${VITE_ISA_LIVE_LINK}`,
      gallery: [
        "/images/isa/isahomepage.png",
        "/images/isa/isafeatures.png",
        "/images/isa/upcomingLaunches.png"
      ],

      // for featured work card
      category: "Team Lead, Full Stack Development",
      imageUrl: "/images/isa/isahomepage.png",
      altText: "isa_banner",
      tag: "Team Project (Upcoming)",
    },
    {
      id: "microgrids",
      title: "Renewable Energy Monitoring System for Microgrids",
      client: "Team Project",
      year: "2025",
      scope: "Hardware, Software, Full Stack Development",
      overview: "This system enables real-time supervision, fault detection, and intelligent control of microgrids through an IoT-powered web application. It helps operators remotely optimize power generation, storage, and distribution, ensuring higher efficiency and sustainability.",
      description: "The Renewable Energy Monitoring System for Microgrids was designed to address the major challenges faced by technicians and operators in managing renewable energy systems, especially in rural and remote areas. Traditional microgrids require constant on-site supervision, which is time-consuming and often inefficient. Our solution bridges this gap by integrating IoT and AI technologies into a unified platform that allows real-time monitoring, automated fault detection, and remote access to system operations.\n\nAt the core of the project lies a hardware prototype built around an ESP32 microcontroller, powered by solar panels and Li-ion batteries for efficient energy storage. The system uses multiple sensors—including voltage, current, and power sensors—to collect operational data, which is transmitted to the ThingsBoard cloud platform for live visualization. This data is then processed and displayed on a user-friendly web application, giving operators complete insight into the performance of the microgrid.\n\nThe web application goes beyond simple monitoring—it includes an AI-based fault detection system that alerts users in case of anomalies or inefficiencies in the grid. Additionally, an 'Ask AI' multilingual chatbot is integrated to assist local technicians in understanding system behaviors and performing basic troubleshooting, even without deep technical expertise. This ensures accessibility and usability for communities across different linguistic backgrounds.\n\nFrom a sustainability standpoint, the project also promotes best practices in solar power maintenance, such as seasonal panel tilting and regular cleaning to maintain peak performance. By encouraging the use of advanced Li-ion batteries over traditional lead-acid ones, it increases energy storage efficiency and extends system lifespan, further contributing to environmental and economic sustainability.\n\nOverall, our solution represents a scalable and affordable step toward smart, self-sustaining microgrids. It reduces dependency on manual intervention, accelerates fault recovery, and empowers rural and industrial communities with reliable renewable energy. The system aligns with India's renewable energy policies and smart grid standards, making it a practical model for large-scale adoption across diverse regions.",
      techStack: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Vercel",
        "Node.js",
        "Express.js",
        "WebSocket",
        "ThingsBoard",
        "Weather API",
        "AI",
        "Groq"
      ],
      liveLink: `${VITE_ECOGRID_LIVE_LINK}`,
      githubRepoLink: `${VITE_ECOGRID_GITHUB_LINK}`,
      gallery: [
        "/images/monitoring/mshome.png",
        "/images/monitoring/msfaults.png",
        "/images/monitoring/mschatbot.png"
      ],
      // for featured work card
      category: "Renewable Energy, Real Time Monitoring",
      imageUrl: "/images/monitoring/mshome2.png",
      altText: "microgrids_banner",
      tag: "Team Project",
    },
    {
      id: "travelcrm",
      title: "Travel CRM",
      client: "Personal Project",
      year: "2025",
      scope: "Deployment, Full Stack Development",
      overview: "Travel CRM is a comprehensive dashboard for managing bookings, destinations, customers, and agents efficiently. It provides real-time insights, interactive charts, and seamless user management for travel businesses.",
      description: `Travel CRM is a comprehensive management system designed for travel businesses to efficiently handle bookings, customers, agents, destinations, and revenue. Users begin with a Login page, with Registration available for first-time users. Currently, registration is open to all, but for CRMs it should ideally be restricted to admin-assigned roles. Password recovery is supported through a “Forgot Password” flow, which sends a reset email to registered users using Nodemailer. Error handling is implemented thoughtfully, showing users only the necessary information for smooth navigation without revealing sensitive backend details.\n\n

      Once logged in, users are presented with a Dashboard that displays key metrics and charts for quick insights. The Sidebar provides access to all major sections:\n\n
      
      • Bookings: Displays all recent bookings. Clicking on a user’s name shows their entire journey, including previous bookings, total spendings, contact details, and notes tailored to their past trips. Filters and pagination can be added for managing large datasets.\n\n
      • Destinations: Lists all previous trips with detailed analytics per destination.\n\n
      • Customers: Shows top customers ranked by bookings, along with their contact details for potential future bookings.\n\n
      • Agents: Manages and views agent information efficiently.\n\n
      • Revenue: Monitors revenue generation by month and year. Graphs highlight popular journeys to help plan future trips.\n\n
      • Settings: Allows updating personal details such as name, email, and password.\n\n
      
      For desktop screens, the sidebar provides easy navigation, while mobile users access a responsive Navbar with a menu for all sections. The login information and a logout button are available in both layouts. Additionally, frontend routes are secured using private and public route setups, preventing unauthorized access to pages directly via URL. A Footer is consistently available across the website.\n\n
      
      The project is built on the MERN stack (MongoDB, Express.js, React.js, Node.js) with a focus on server-side logic and security. Styling is primarily handled by Tailwind CSS, with standard CSS for specific elements. Material UI is used for displaying important alerts to users. Authentication and authorization are managed with JWT tokens, and the server exposes all necessary routes for bookings, customers, packages, and users. Strong security measures include XSS protection, rate limiting to mitigate DDoS attacks, protected backend routes, and careful localStorage handling to avoid cross-origin cookie issues. Sensitive details are managed via .env files to prevent public exposure.\n\n
      
      The code is hosted on GitHub, accessible via the GitHub Code button. For deployment, the client is hosted on Vercel, while the server runs independently on Render. The UI is simple, mobile-friendly, and user-centric, while the backend emphasizes efficiency, security, and reliability. Overall, this project reflects a significant investment of time and effort, delivering a real-world, robust CRM solution for travel businesses.`,
      techStack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "MERN stack",
        "Tailwind CSS",
        "CSS",
        "Material UI",
        "JWT",
        "Nodemailer",
        "localStorage",
        ".env files",
        "GitHub",
        "Vercel",
        "Render",
        "XSS protection",
        "Rate limiting",
        "DDoS protection",
      ],
      liveLink: `${VITE_TCRM_LIVE_LINK}`,
      githubRepoLink: `${VITE_TCRM_GITHUB_LINK}`,
      gallery: [
        "/images/travelcrm/tcrmlogin.png",
        "/images/travelcrm/tcrmhome.png",
        "/images/travelcrm/tcrmcustomer.png",
      ],
      // for featued work card
      category: "Deployment, Full Stack Development",
      imageUrl: "/images/travelcrm/tcrmhome.png",
      altText: "travelcrm_banner",
      tag: "Personal Project",
    },
    {
      id: "shopping-app",
      title: "Next.js Shopping App",
      client: "Personal Project",
      year: "2025",
      scope: "Frontend, Backend, Full Stack Development",
      overview:
        "A modern e-commerce shopping application built with Next.js, featuring product listings, dynamic product pages, an admin panel, API routes, and full MongoDB integration for product management.",
        
      description: `This Shopping App is a full-stack e-commerce platform built using Next.js App Router, featuring product listings, admin product control, API routes, and MongoDB integration. The home page displays products fetched from the backend with a search feature for real-time filtering. Each item leads to a dynamic product page where detailed information is displayed.
    
    The application includes a lightweight Admin Panel where products can be added, edited, or deleted. All product-related operations are powered by dedicated API routes under /api/products, connected to MongoDB using Mongoose schemas. The app uses server-side rendering and dynamic routing to ensure fast performance and SEO optimization.
    
    Tailwind CSS and Material-UI components handle the styling, ensuring a clean and responsive UI across devices. The backend uses Next.js API routes as a server, eliminating the need for a separate backend deployment. Static assets such as product images are stored in the public folder, while product details are stored securely in MongoDB.
    
    This project demonstrates essential full-stack concepts including API development, database modeling, route protection (optional), dynamic UI rendering, and modern frontend development using React, TypeScript, and Tailwind CSS.`,
    
      techStack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "Material UI",
        "JavaScript",
        "API Routes",
        "Node.js"
      ],
    
      liveLink: `${VITE_SHOPPING_LIVE_LINK}`,
      githubRepoLink: `${VITE_SHOPPING_GITHUB_LINK}`,
    
      gallery: [
        "/images/shopping/home.png",
        "/images/shopping/rec.png",
        "/images/shopping/admin.png",
      ],
    
      // for featured work card
      category: "Full Stack Development, E-commerce",
      imageUrl: "/images/shopping/home.png",
      altText: "shopping_app_banner",
      tag: "Personal Project",
    }
  ];