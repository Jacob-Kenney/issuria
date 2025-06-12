"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="relative overflow-hidden from-emerald-300/20 to-emerald-600/20 py-20 dark:bg-gradient-to-br dark:from-emerald-950/20 dark:to-emerald-900/20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Primary gradient orbs with increased opacity */}
        <div className="absolute -top-[40%] left-[60%] h-[80rem] w-[80rem] rounded-full bg-primary/20 blur-2xl" />
        <div className="absolute -bottom-[30%] right-[60%] h-[50rem] w-[50rem] rounded-full bg-primary/15 blur-2xl" />
        {/* Additional accent orbs for more visual interest */}
        <div className="absolute top-[20%] right-[80%] h-[30rem] w-[30rem] rounded-full bg-purple-500/15 blur-xl" />
        <div className="absolute bottom-[10%] left-[80%] h-[40rem] w-[40rem] rounded-full bg-blue-500/12 blur-2xl" />
        {/* Enhanced grid pattern with better visibility */}
        <div className="absolute left-0 top-0 h-full w-full bg-grid-pattern-light opacity-[0.15] dark:bg-grid-pattern-dark dark:opacity-[0.4]" />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center rounded-full border border-border/40 bg-muted/30 px-3 py-1 text-sm">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-primary"></span>
              Introducing IssurIA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Issue, Invest, Innovate — Structured Products in{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-orange-500 bg-clip-text text-transparent">Minutes not Months</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8 text-xl text-muted-foreground"
          >
            Whether you're a bank packaging structured notes, a business issuing corporate bonds, or an investor hunting yield — we automate the whole lifecycle with intelligent agents. No middlemen. No bottlenecks. Just structured finance, built for the 21st century.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="gap-2">
              <Link href="/get-started">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {/*
            <Button asChild variant="outline" size="lg">
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
            */}
          </motion.div>

          {/* Security Badges */}
          {/*
          <motion.div
            className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/security" className="flex items-center hover:text-foreground">
              <ChevronRight className="mr-1 h-3 w-3" />
              SOC 2 Compliant
            </Link>
            <span className="mx-2 h-1 w-1 rounded-full bg-muted-foreground"></span>
            <Link href="/security" className="flex items-center hover:text-foreground">
              <ChevronRight className="mr-1 h-3 w-3" />
              ISO 27001 Certified
            </Link>
            <span className="mx-2 h-1 w-1 rounded-full bg-muted-foreground"></span>
            <Link href="/security" className="flex items-center hover:text-foreground">
              <ChevronRight className="mr-1 h-3 w-3" />
              GDPR Ready
            </Link>
          </motion.div>
          */}
        </div>

        {/* Hero Image */}
        {/*
        <motion.div
          className="mx-auto mt-16 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="overflow-hidden rounded-xl border border-border/40 bg-muted/30 shadow-lg">
            <img src="/placeholder.svg?height=720&width=1280" alt="BondForge Platform Dashboard" className="w-full" />
          </div>
        </motion.div>
        */}
      </div>
    </section>
  )
}
