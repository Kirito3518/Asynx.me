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
              href="https://github.com/Kirito3518?utm_source=asynx.me"
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
              <DiscordIcon className="size-4" />
              <span className="sr-only">Discord</span>
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

function DiscordIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 127.14 96.36"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83A97.68 97.68 0 0 0 49 6.83 72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.71 56.6.54 80.21h.04a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.17 68.42 68.42 0 0 1-10.84-5.18c.91-.66 1.8-1.34 2.66-2.05a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.67 2.05a68.68 68.68 0 0 1-10.86 5.19 77.25 77.25 0 0 0 6.89 11.16A105.25 105.25 0 0 0 126.6 80.22c2.64-27.38-4.5-51.11-18.9-72.15ZM42.45 65.69c-6.27 0-11.41-5.73-11.41-12.8S36.08 40.1 42.45 40.1c6.37 0 11.52 5.78 11.41 12.79 0 7.08-5.04 12.8-11.41 12.8Zm42.24 0c-6.27 0-11.41-5.73-11.41-12.8S78.32 40.1 84.69 40.1c6.37 0 11.52 5.78 11.41 12.79 0 7.08-5.03 12.8-11.41 12.8Z" />
    </svg>
  )
}
