import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative h-8 w-8", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <rect width="32" height="32" rx="8" className="fill-primary" />
        <path
          d="M8 10H24M8 16H24M8 22H24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="stroke-primary-foreground"
        />
        <path
          d="M12 7V25M20 7V25"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="stroke-primary-foreground"
        />
      </svg>
    </div>
  )
}
