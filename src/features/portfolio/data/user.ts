import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Asynx",
  lastName: "",
  displayName: "Asynx",
  username: "asynx",
  gender: "male",
  pronouns: "he/him",
  bio: "Building fast, clean, and meaningful web experiences.",
  flipSentences: [
    "Building fast, clean, and meaningful web experiences.",
    "Frontend Developer",
    "Creative Technologist",
  ],
  address: "Bangkok, Thailand",
  phoneNumber: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "", // base64 encoded
  website: "https://asynx.dev",
  jobTitle: "Frontend Developer",
  jobs: [
    {
      title: "Founder",
      company: "Asynx",
      website: "https://asynx.dev",
      experienceId: "asynx",
    },
  ],
  about: `
- Frontend developer focused on **Next.js**, **React**, and performance-first UI.
- Building modern interfaces with attention to speed, usability, and consistency.
- Open to collaboration, freelance opportunities, and product partnerships.
`,
  avatar: "/IMG_9344.JPG",
  ogImage: "/IMG_9344.JPG",
  namePronunciationUrl: "",
  timeZone: "Asia/Bangkok",
  keywords: [
    "asynx",
    "asynx profile",
    "portfolio",
    "nextjs portfolio",
    "frontend developer",
    "creative technologist",
  ],
  dateCreated: "2026-04-10", // YYYY-MM-DD
}
