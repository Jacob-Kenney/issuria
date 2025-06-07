"use client"

import { Button } from "@/components/ui/button"
import { Building2, Menu, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold">FinanceFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/bank" className="flex items-center space-x-2 text-sm font-medium hover:text-emerald-600">
              <Building2 className="h-4 w-4" />
              <span>Bank Portal</span>
            </Link>
            <Link href="/company" className="flex items-center space-x-2 text-sm font-medium hover:text-orange-600">
              <Users className="h-4 w-4" />
              <span>Company Portal</span>
            </Link>
            <Link href="/dashboard" className="flex items-center space-x-2 text-sm font-medium hover:text-slate-600">
              <TrendingUp className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/bank" className="flex items-center space-x-2 text-lg font-medium">
                  <Building2 className="h-5 w-5" />
                  <span>Bank Portal</span>
                </Link>
                <Link href="/company" className="flex items-center space-x-2 text-lg font-medium">
                  <Users className="h-5 w-5" />
                  <span>Company Portal</span>
                </Link>
                <Link href="/dashboard" className="flex items-center space-x-2 text-lg font-medium">
                  <TrendingUp className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
