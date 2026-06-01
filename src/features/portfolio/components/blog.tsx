import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { PROJECTS } from "../data/projects"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"
import { ProjectCard } from "./projects/project-card"

export function Blog() {
  return (
    <Panel id="projects">
      <PanelHeader className="flex items-end justify-between gap-4 pb-3">
        <div>
          <PanelTitle>
            Projects
            <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          </PanelTitle>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            A selection of things I have built.
          </p>
        </div>

        <Link
          className="flex shrink-0 items-center gap-1 pb-0.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          href="/projects"
        >
          View all
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </PanelHeader>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        {PROJECTS.slice(0, 4).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Panel>
  )
}
