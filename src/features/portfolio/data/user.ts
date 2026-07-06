import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Asynx",
  lastName: "",
  displayName: "Asynx",
  username: "asynx",
  gender: "male",
  pronouns: "he/him",
  bio: "Building scalable full-stack applications with modern web technologies.",
  flipSentences: [
    "Building scalable full-stack applications.",
    "Full Stack Developer",
    "Creating products from frontend to backend.",
  ],
  address: "Nakhon Ratchasima, Thailand",
  phoneNumber: "", // E.164 format, base64 encoded
  email: "", // base64 encoded
  website: "https://asynx.me",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Full Stack Developer",
      company: "0JAYSHOP",
      website: "https://0jay-shop.com",
      experienceId: "0JAYSHOP",
    },
    {
      title: "Full Stack Developer",
      company: "JameShop",
      website: "https://jameshop.cloud",
      experienceId: "JameShop",
    },
  ],
  about: `
- Full Stack Developer specializing in **Next.js**, **React**, **TypeScript**, **Node.js**, and **PostgreSQL**.
- Building scalable web applications from frontend interfaces to backend APIs and databases.
- Passionate about clean architecture, performance optimization, and great user experiences.
- Open to collaboration, freelance opportunities, and product partnerships.
`,
  avatar: "/profile.png",
  ogImage: "/profile.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Bangkok",
  keywords: [
    "asynx",
    "asynx profile",
    "portfolio",
    "full stack developer",
    "nextjs",
    "react",
    "typescript",
    "node.js",
    "supabase",
    "postgresql",
    "web developer",
  ],
  dateCreated: "2026-04-10",
}
