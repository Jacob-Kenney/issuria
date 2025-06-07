"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    setIsSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-3xl text-center">
      <h3 className="mb-3 font-heading text-2xl font-bold">Stay Updated</h3>
      <p className="mb-6 text-muted-foreground">
        Subscribe to our newsletter for the latest updates on financial innovation, product releases, and industry
        insights.
      </p>

      {isSubmitted ? (
        <div className="flex items-center justify-center gap-2 text-primary">
          <Check className="h-5 w-5" />
          <span>Thank you for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11"
          />
          <Button type="submit" className="h-11 gap-2">
            Subscribe <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      )}
    </div>
  )
}
