import { DiscIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-top mx-auto border-x border-line pt-4 group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://www.instagram.com/_dvnk.otb/"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon className="size-4" />
              <span className="sr-only">Instagram</span>
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://github.com/Kirito3518?utm_source=asynx.dev"
              target="_blank"
              rel="noopener"
            >
              <Icons.github className="size-4" />
              <span className="sr-only">GitHub</span>
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://discord.com/users/923983042853371945"
              target="_blank"
              rel="noopener"
            >
              <DiscIcon className="size-4" />
              <span className="sr-only">Discord</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-[color] hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://www.dmca.com/ProtectionPro.aspx"
              }
              target="_blank"
              rel="noopener"
            >
              <Icons.dmca className="h-4.5 w-auto" />
              <span className="sr-only">DMCA.com Protection Status</span>
            </a>
          </div>
        </div>

        <div className="*:absolute *:z-2 *:flex *:size-2 *:border *:border-line *:bg-background">
          <div className="bottom-[-3.5px] left-[-4.5px]" />
          <div className="right-[-4.5px] bottom-[-3.5px]" />
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-16 sm:h-2" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
