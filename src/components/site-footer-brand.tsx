import { ChanhDaiWordmark } from "@/components/chanhdai-wordmark"

export function SiteFooterInteractiveLogotype() {
  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/10">
      <div className="overflow-hidden">
        <div className="flex w-full items-center justify-center px-4 py-6">
          <ChanhDaiWordmark className="h-auto w-full max-w-5xl text-foreground/15" />
        </div>
      </div>
    </div>
  )
}
