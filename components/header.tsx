"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { BarChart3, Building2, ChevronDown, Menu, Shield, Users } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from "@/components/logo"
import { useSession, signOut } from "next-auth/react"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { data: session } = useSession()
  const accountType = session?.user?.accountType

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        isScrolled
          ? "border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "border-transparent bg-background",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="hidden font-heading text-xl font-bold sm:inline-block">IssurIA</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/solutions"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Financial Solutions</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore our comprehensive suite of financial product creation and management tools.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/solutions/banks" title="For Banks" icon={<Building2 className="h-4 w-4" />}>
                      Create sophisticated financial products with AI assistance.
                    </ListItem>
                    <ListItem href="/solutions/businesses" title="For Businesses" icon={<Users className="h-4 w-4" />}>
                      Design custom financing solutions for your business needs.
                    </ListItem>
                    <ListItem
                      href="/solutions/investors"
                      title="For Investors"
                      icon={<BarChart3 className="h-4 w-4" />}
                    >
                      Discover and analyze innovative financial products.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/products/bonds" title="Bonds" icon={<Shield className="h-4 w-4" />}>
                      Corporate, municipal, and government bond creation and management.
                    </ListItem>
                    <ListItem
                      href="/products/structured-products"
                      title="Structured Products"
                      icon={<BarChart3 className="h-4 w-4" />}
                    >
                      Custom financial instruments with tailored risk-return profiles.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <div className="hidden md:flex md:gap-2">
            {session ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="ghost" onClick={() => signOut()}>
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild>
                  <Link href="/get-started">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Logo className="mb-8 h-8 w-8" />
              <nav className="flex flex-col gap-4">
                <MobileNavGroup
                  title="Solutions"
                  items={[
                    { href: "/solutions/banks", label: "For Banks" },
                    { href: "/solutions/businesses", label: "For Businesses" },
                    { href: "/solutions/investors", label: "For Investors" },
                  ]}
                />
                <MobileNavGroup
                  title="Products"
                  items={[
                    { href: "/products/bonds", label: "Bonds" },
                    { href: "/products/structured-products", label: "Structured Products" },
                  ]}
                />
                <Link href="/pricing" className="flex h-10 items-center border-b border-border/40 px-4 font-medium">
                  Pricing
                </Link>
                <Link href="/about" className="flex h-10 items-center border-b border-border/40 px-4 font-medium">
                  About
                </Link>
                <div className="mt-4 flex flex-col gap-2">
                      {session ? (
                    <>
                      <Button variant="ghost" asChild>
                        <Link href="/dashboard">Dashboard</Link>
                      </Button>
                      <Button variant="ghost" onClick={() => signOut()}>
                        Sign out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" asChild>
                        <Link href="/login">Log in</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/get-started">Get Started</Link>
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

interface ListItemProps {
  className?: string
  title: string
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, href, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="flex items-center gap-2 text-sm font-medium leading-none">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

interface MobileNavGroupProps {
  title: string
  items: { href: string; label: string }[]
}

function MobileNavGroup({ title, items }: MobileNavGroupProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <button
        className="flex h-10 w-full items-center justify-between border-b border-border/40 px-4 font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="ml-4 mt-2 flex flex-col gap-2 pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-8 items-center px-4 text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
