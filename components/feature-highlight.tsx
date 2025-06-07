import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureHighlightProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
}

export function FeatureHighlight({
  icon: Icon,
  title,
  description,
  iconColor = "text-primary",
}: FeatureHighlightProps) {
  return (
    <div className="group rounded-lg border border-border/40 bg-card/50 p-6 transition-all hover:border-primary/20 hover:bg-card">
      <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted", iconColor)}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
