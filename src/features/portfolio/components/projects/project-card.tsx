import { ArrowUpRightIcon, CodeXmlIcon, LockIcon } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/base/ui/button"
import { Tag } from "@/components/ui/tag"

import type { Project } from "../../types/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-background transition-[border-color,background-color,box-shadow,translate] duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-accent-muted hover:shadow-lg hover:shadow-black/5">
      <div className="flex flex-1 flex-col p-4">
        {project.image && (
          <div className="mb-4 rounded-lg border border-line bg-muted/40">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={640}
              height={360}
              quality={100}
              unoptimized
              className="aspect-video w-full rounded-md object-cover"
            />
          </div>
        )}

        {project.description && (
          <p className="line-clamp-3 text-xs leading-5 text-muted-foreground">
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                />
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
