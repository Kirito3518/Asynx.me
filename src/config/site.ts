import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://asynx.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Projects",
    href: "/projects",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_USERNAME = "@asynx"
export const GITHUB_USERNAME = "Kirito3518"
export const SOURCE_CODE_GITHUB_REPO = "Kirito3518/Asynx.me"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Kirito3518/Asynx.me"

export const SPONSORSHIP_URL = "https://github.com/sponsors/Kirito3518"

export const UTM_PARAMS = {
  utm_source: "asynx.dev",
}
