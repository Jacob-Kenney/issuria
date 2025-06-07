import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="font-heading text-xl font-bold">IssurIA</span>
            </Link>
            <p className="mb-4 leading-5 text-sm text-muted-foreground">
              The only intelligent structured finance platform.
              <br/>For banks: design and issue complex products in plain language.
              <br/>For businesses: raise capital through fully digital bond issuance.
              <br/>For investors: discover, buy, and trade—all in one place.
              <br/>Fast. Compliant. End-to-end. First of its kind.
            </p>
            {/*
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild aria-label="Twitter">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Facebook">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Instagram">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
            */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div>
              <h3 className="mb-3 text-sm font-medium">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/solutions/banks" className="text-muted-foreground hover:text-foreground">
                    For Banks
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/businesses" className="text-muted-foreground hover:text-foreground">
                    For Businesses
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/investors" className="text-muted-foreground hover:text-foreground">
                    For Investors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                {/*
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Footer */}
      {/*
      <div className="border-t border-border/40 bg-muted/60">
        <div className="container py-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="text-xs text-muted-foreground">
              <p className="mb-2">
                <strong>Risk Warning:</strong> Financial products involve risk. The value of your investment may go down
                as well as up. Past performance is not indicative of future results.
              </p>
              <p>
                BondForge is a technology platform and does not provide investment advice. Please consult with qualified
                professionals before making investment decisions.
              </p>
            </div>
            <div className="text-xs text-muted-foreground md:text-right">
              <p className="mb-2">
                BondForge is registered with the Financial Conduct Authority (FCA) under reference number 123456.
              </p>
              <p>
                Authorized and regulated by the Securities and Exchange Commission (SEC) and the Commodity Futures
                Trading Commission (CFTC).
              </p>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* Legal Footer */}
      {/*
      <div className="border-t border-border/40 bg-background">
        <div className="container py-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span>© {new Date().getFullYear()} BondForge, Inc. All rights reserved.</span>
              <Separator orientation="vertical" className="hidden h-4 md:block" />
              <Link href="/legal/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/legal/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/legal/cookies" className="hover:text-foreground">
                Cookie Policy
              </Link>
              <Link href="/legal/disclosures" className="hover:text-foreground">
                Regulatory Disclosures
              </Link>
              <Link href="/legal/security" className="hover:text-foreground">
                Security
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">Language:</span>
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                English (US)
              </Button>
            </div>
          </div>
        </div>
      </div>
      */}
    </footer>
  )
}
