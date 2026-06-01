import {
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CodeXmlIcon,
  LockIcon,
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/base/ui/button"
import { Tag } from "@/components/ui/tag"
import { cn } from "@/lib/utils"

import type { Project } from "../../types/projects"

export function ProjectCard({ project }: { project: Project }) {
  const { start, end } = project.period
  const isOngoing = !end
  const isSinglePeriod = end === start

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-background transition-[border-color,background-color,box-shadow,translate] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-accent-muted hover:shadow-lg hover:shadow-black/5">
      <div className="flex items-start gap-3 border-b border-line p-4">
        {project.logo ? (
          <Image
            src={project.logo}
            alt=""
            width={48}
            height={48}
            quality={100}
            unoptimized
            aria-hidden
            className="size-12 shrink-0 rounded-lg border border-line object-cover select-none"
          />
        ) : (
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-line bg-muted text-muted-foreground">
            <CodeXmlIcon className="size-5" />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate text-base leading-snug font-semibold">
              {project.title}
            </h3>
            <Tag
              className={cn(
                "shrink-0 gap-1 border-transparent text-[10px] uppercase",
                isOngoing
                  ? "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
                  : "bg-muted text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  isOngoing ? "bg-emerald-500" : "bg-muted-foreground/60"
                )}
              />
              {isOngoing ? "Active" : "Completed"}
            </Tag>
          </div>

          <dl className="mt-1 text-xs text-muted-foreground">
            <dt className="sr-only">Period</dt>
            <dd className="flex items-center gap-1">
              <CalendarDaysIcon className="size-3" />
              <span>{start}</span>
              {!isSinglePeriod && (
                <>
                  <span>-</span>
                  <span>{isOngoing ? "Present" : end}</span>
                </>
              )}
            </dd>
          </dl>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        {project.description && (
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        )}

        {project.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.skills.slice(0, 3).map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
            {project.skills.length > 3 && (
              <Tag>+{project.skills.length - 3}</Tag>
            )}
          </div>
        )}

        <div className="mt-auto flex gap-2 pt-5">
          {project.isPrivate ? (
            <Button
              className="flex-1 border-line text-muted-foreground"
              size="sm"
              variant="outline"
              disabled
            >
              <LockIcon className="size-3.5" />
              Private
            </Button>
          ) : (
            <Button
              className="flex-1 border-line text-muted-foreground hover:text-foreground"
              size="sm"
              variant="outline"
              nativeButton={false}
              render={
                <a href={project.link} target="_blank" rel="noopener noreferrer" />
              }
            >
              <CodeXmlIcon className="size-3.5" />
              GitHub
            </Button>
          )}

          {project.demoUrl && (
            <Button
              className="flex-1"
              size="sm"
              nativeButton={false}
              render={
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Demo
              <ArrowUpRightIcon className="size-3.5" />
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
