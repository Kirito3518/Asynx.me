import type { Metadata } from "next"

import { X_USERNAME } from "@/config/site"
import { ProjectCard } from "@/features/portfolio/components/projects/project-card"
import { PROJECTS } from "@/features/portfolio/data/projects"

const title = "Projects"
const description = "A showcase of things I have built and contributed to."

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_USERNAME,
    creator: X_USERNAME,
    images: [ogImage],
  },
}

export default function Page() {
  const liveDemoCount = PROJECTS.filter((project) => project.demoUrl).length
  const activeCount = PROJECTS.filter((project) => !project.period.end).length

  return (
    <div className="min-h-svh">
      <div className="screen-line-bottom px-4 pb-4">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">
          {title}
        </h1>
      </div>

      <div className="screen-line-bottom p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {description}
        </p>

        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
          <div>
            <dt className="sr-only">Total projects</dt>
            <dd>
              <strong className="text-foreground">{PROJECTS.length}</strong>{" "}
              projects
            </dd>
          </div>
          <div>
            <dt className="sr-only">Active projects</dt>
            <dd>
              <strong className="text-foreground">{activeCount}</strong> active
            </dd>
          </div>
          <div>
            <dt className="sr-only">Live demos</dt>
            <dd>
              <strong className="text-foreground">{liveDemoCount}</strong> live
              demos
            </dd>
          </div>
        </dl>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="h-4" />
    </div>
  )
}
