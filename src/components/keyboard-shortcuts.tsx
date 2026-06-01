"use client"

import { useRouter } from "@bprogress/next/app"
import { useHotkeys } from "react-hotkeys-hook"

export function KeyboardShortcuts() {
  const router = useRouter()

  useHotkeys("g>h", () => router.push("/"))
  useHotkeys("g>p", () => router.push("/projects"))
  useHotkeys("g>w", () => router.push("/wall-of-love"))

  return null
}
