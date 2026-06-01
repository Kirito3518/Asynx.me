export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="640 64 928 192"
      {...props}
    >
      <path
        fill="currentColor"
        d="M672 64h96v32h-96zM640 96h32v128h-32zM672 224h64v32h-64zM736 192h32v32h-32zM768 64h32v192h-32zM864 64h96v32h-96zM832 96h32v32h-32zM864 128h96v32h-96zM960 160h32v64h-32zM832 192h32v32h-32zM864 224h96v32h-96zM1024 64h32v64h-32zM1152 64h32v64h-32zM1056 128h96v32h-96zM1088 160h32v96h-32zM1216 64h32v192h-32zM1248 64h96v32h-96zM1344 96h32v160h-32zM1408 64h32v64h-32zM1536 64h32v64h-32zM1440 128h96v64h-96zM1408 192h32v64h-32zM1536 192h32v64h-32z"
      />
    </svg>
  )
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="640 64 928 192"><path fill="${color}" d="M672 64h96v32h-96zM640 96h32v128h-32zM672 224h64v32h-64zM736 192h32v32h-32zM768 64h32v192h-32zM864 64h96v32h-96zM832 96h32v32h-32zM864 128h96v32h-96zM960 160h32v64h-32zM832 192h32v32h-32zM864 224h96v32h-96zM1024 64h32v64h-32zM1152 64h32v64h-32zM1056 128h96v32h-96zM1088 160h32v96h-32zM1216 64h32v192h-32zM1248 64h96v32h-96zM1344 96h32v160h-32zM1408 64h32v64h-32zM1536 64h32v64h-32zM1440 128h96v64h-96zM1408 192h32v64h-32zM1536 192h32v64h-32z"/></svg>`
}
