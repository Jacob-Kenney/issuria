"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

interface StatProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

function Stat({ value, label, prefix = "", suffix = "" }: StatProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const startTime = Date.now()
    const endValue = value

    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const currentValue = Math.floor(progress * endValue)

      setCount(currentValue)

      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="mb-2 text-4xl font-bold md:text-5xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="border-y border-border/40 bg-muted/30 py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 font-heading text-3xl font-bold md:text-4xl">Transforming Financial Markets</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <Stat value={500} suffix="+" label="Financial Institutions" />
            <Stat value={10} suffix="B+" prefix="$" label="Products Created" />
            <Stat value={98} suffix="%" label="Compliance Rate" />
            <Stat value={75} suffix="%" label="Time Saved" />
          </div>
        </div>
      </div>
    </section>
  )
}
