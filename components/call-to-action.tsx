import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
    return (
        <section className="relative overflow-hidden border-t border-border/40 bg-muted/30 py-20">
            <div className="absolute inset-0 z-0 opacity-5">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                preserveAspectRatio="none"
            >
                <path d="M0,0 L100,0 L100,100 L0,100 Z" />
                <path d="M0,0 L100,100 M100,0 L0,100" strokeWidth="0.5" stroke="currentColor" fill="none" />
            </svg>
            </div>
            <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-6 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Ready to Transform Your Financial Operations?
                </h2>
                <p className="mb-8 text-xl text-muted-foreground">
                Join the leading financial institutions already using IssurIA to create innovative, compliant financial
                products.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                    <Link href="/get-started">
                    Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/book-demo">Schedule a Demo</Link>
                    </Button>
                </div>
            </div>
            </div>
        </section>        
    )
}