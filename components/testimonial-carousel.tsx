"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "BondForge has transformed how we create and manage structured products. The AI-powered platform has reduced our time-to-market by 70% while ensuring full regulatory compliance.",
    author: "Sarah Johnson",
    title: "Head of Structured Products, Global Bank",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "As a mid-sized company, we struggled to access sophisticated financing options. BondForge's platform democratized the process, allowing us to create custom financial products tailored to our growth needs.",
    author: "Michael Chen",
    title: "CFO, TechInnovate Inc.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The analytics and risk assessment tools provided by BondForge give us unprecedented visibility into potential investments. It's revolutionized our due diligence process.",
    author: "Aisha Patel",
    title: "Investment Director, Horizon Capital",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "BondForge's natural language interface makes creating complex financial products intuitive and efficient. What used to take weeks now takes hours, with better results.",
    author: "Thomas Rodriguez",
    title: "SVP of Innovation, Atlantic Financial",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [direction, setDirection] = React.useState<"left" | "right" | null>(null)

  const next = () => {
    setDirection("right")
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection("left")
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={cn(
                "min-w-full shrink-0 border-primary/10 bg-card/50",
                activeIndex === index ? "opacity-100" : "opacity-0",
              )}
            >
              <CardContent className="flex flex-col items-center p-6 text-center md:p-10">
                <Quote className="mb-6 h-12 w-12 text-primary/40" />
                <blockquote className="mb-6 text-xl italic md:text-2xl">{testimonial.quote}</blockquote>
                <div className="flex flex-col items-center">
                  <Avatar className="mb-3 h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                activeIndex === index ? "bg-primary w-4" : "bg-muted-foreground/30",
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
