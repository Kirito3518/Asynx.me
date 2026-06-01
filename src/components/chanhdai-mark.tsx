export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 13 46 51h-6.5l-3-8.5h-9L24.5 51H18l14-38Zm3 23-3-8.8-3 8.8h6Z"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64"><path fill="${color}" d="M32 13 46 51h-6.5l-3-8.5h-9L24.5 51H18l14-38Zm3 23-3-8.8-3 8.8h6Z"/></svg>`
}
