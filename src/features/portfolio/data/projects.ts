import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "asynx-dev",
    title: "asynx.dev",
    period: {
      start: "04.2026",
    },
    link: "https://github.com/Kirito3518/Asynx.me",
    demoUrl: "https://asynx.dev",
    skills: [
      "Open Source",
      "Next.js 16",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "shadcn registry",
      "Vercel",
    ],
    description: "A minimal, pixel-perfect dev portfolio and shadcn registry.",
    logo: "https://ui-avatars.com/api/?name=Asynx&background=111827&color=ffffff&size=128",
    isExpanded: true,
  },
  {
    id: "react-wheel-picker",
    title: "React Wheel Picker",
    period: {
      start: "05.2025",
    },
    link: "https://github.com/Kirito3518/react-wheel-picker",
    demoUrl: "https://react-wheel-picker.vercel.app",
    skills: [
      "Open Source",
      "React",
      "TypeScript",
      "Package Publishing",
      "NPM Registry",
      "GitHub Actions",
    ],
    description: `iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.
- Natural touch scrolling with smooth inertia, mouse drag and scroll for desktop
- Infinite loop scrolling
- Unstyled core for complete style customization
- Full keyboard navigation and type-ahead search
`,
    logo: "https://ui-avatars.com/api/?name=React+Wheel+Picker&background=111827&color=ffffff&size=128",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    period: {
      start: "03.2024",
      end: "06.2024",
    },
    link: "https://github.com/Kirito3518/task-manager",
    demoUrl: "https://task-manager-demo.vercel.app",
    isPrivate: true,
    skills: [
      "Pet Project",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    description:
      "A modern task management application with drag-and-drop functionality and real-time updates.",
    logo: "https://ui-avatars.com/api/?name=Task+Manager&background=111827&color=ffffff&size=128",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    period: {
      start: "01.2024",
      end: "02.2024",
    },
    link: "https://github.com/Kirito3518/weather-dashboard",
    demoUrl: "https://weather-dashboard-demo.vercel.app",
    skills: [
      "Pet Project",
      "React",
      "TypeScript",
      "Chart.js",
      "OpenWeather API",
      "Geolocation API",
    ],
    description:
      "A responsive weather dashboard with real-time data visualization and location-based forecasts.",
    logo: "https://ui-avatars.com/api/?name=Weather+Dashboard&background=111827&color=ffffff&size=128",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    period: {
      start: "09.2023",
      end: "12.2023",
    },
    link: "https://github.com/Kirito3518/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.vercel.app",
    isPrivate: true,
    skills: [
      "Company Project",
      "Next.js 14",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
    ],
    description:
      "Full-stack e-commerce platform with payment processing, inventory management, and admin dashboard.",
    logo: "https://ui-avatars.com/api/?name=E-commerce&background=111827&color=ffffff&size=128",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot Assistant",
    period: {
      start: "11.2023",
      end: "02.2024",
    },
    link: "https://github.com/Kirito3518/ai-chatbot",
    demoUrl: "https://ai-chatbot-demo.vercel.app",
    skills: [
      "Pet Project",
      "OpenAI API",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "WebSocket",
    ],
    description:
      "Intelligent chatbot powered by GPT-4 with real-time responses and conversation history.",
    logo: "https://ui-avatars.com/api/?name=AI+Chatbot&background=111827&color=ffffff&size=128",
  },
  {
    id: "mobile-app",
    title: "Fitness Tracker Mobile",
    period: {
      start: "07.2023",
      end: "10.2023",
    },
    link: "https://github.com/Kirito3518/fitness-tracker",
    isPrivate: true,
    skills: [
      "Pet Project",
      "React Native",
      "TypeScript",
      "Firebase",
      "Redux Toolkit",
      "Expo",
    ],
    description:
      "Cross-platform mobile fitness tracking app with workout logging and progress analytics.",
    logo: "https://ui-avatars.com/api/?name=Fitness+Tracker&background=111827&color=ffffff&size=128",
  },
  {
    id: "data-visualization",
    title: "Data Visualization Dashboard",
    period: {
      start: "05.2023",
      end: "08.2023",
    },
    link: "https://github.com/Kirito3518/data-viz",
    demoUrl: "https://data-viz-demo.vercel.app",
    skills: [
      "Pet Project",
      "D3.js",
      "React",
      "TypeScript",
      "WebSocket",
      "Node.js",
    ],
    description:
      "Interactive data visualization dashboard with real-time charts and customizable widgets.",
    logo: "https://ui-avatars.com/api/?name=Data+Viz&background=111827&color=ffffff&size=128",
  },
]
