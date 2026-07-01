import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "0JAYSHOP",
    title: "0JAYSHOP",
    period: {
      start: "06.2026",
    },
    link: "https://github.com/Kirito3518/0jay-shop",
    demoUrl: "https://0jay-shop.com",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Radix UI",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Zod",
      "Discord Webhook",
      "TrueMoney Angpao",
      "Vercel",
    ],
    description:
      "A full-stack e-commerce and rental platform built with Next.js, Supabase, and Tailwind CSS. It supports product sales, rental workflows, user authentication, balance top-ups, admin and vendor operations, Discord notifications, and TrueMoney Angpao payment integration.",
    image: "https://img2.pic.in.th/imageaf85e41d32f6e8ea.png",
    logo: "https://ui-avatars.com/api/?name=0JAYSHOP&background=111827&color=ffffff&size=128",
    isExpanded: true,
    isPrivate: true,
  },
  {
    id: "jameshop",
    title: "JameShop",
    period: {
      start: "05.2026",
      end: "06.2026",
    },
    link: "https://github.com/Kirito3518/saas-dashboard",
    demoUrl: "https://jameshop.cloud",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "Vitest",
      "Vercel",
    ],
    description:
      "A digital rental and store platform for JameShop, built with Next.js and Supabase. The system includes authentication, product browsing and purchasing, wallet top-ups, rental machine management, purchase history, announcements, FAQ, and a full admin dashboard for managing users, machines, rentals, products, top-ups, and site settings.",
    image: "https://img1.pic.in.th/images/image9fcb0c1ea0a122c4.png",
    logo: "https://ui-avatars.com/api/?name=JameShop&background=111827&color=ffffff&size=128",
    isPrivate: true,
    isExpanded: true,
  },
]
