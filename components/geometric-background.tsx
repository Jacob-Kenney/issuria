"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface GeometricShape {
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
  type: "triangle" | "square" | "hexagon" | "diamond"
  color: string
  strokeWidth: number
}

interface FloatingLine {
  x1: number
  y1: number
  x2: number
  y2: number
  opacity: number
  animationOffset: number
  color: string
}

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const shapesRef = useRef<GeometricShape[]>([])
  const linesRef = useRef<FloatingLine[]>([])
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)
  const { theme } = useTheme()

  // Initialize geometric shapes
  const initShapes = (width: number, height: number) => {
    const shapeCount = Math.floor((width * height) / 25000) // Responsive shape count
    const shapes: GeometricShape[] = []
    const lines: FloatingLine[] = []

    const isDark = theme === "dark"

    // Color palette for shapes
    const primaryColors = [
      isDark ? "rgba(34, 197, 94, 0.15)" : "rgba(34, 197, 94, 0.1)",
      isDark ? "rgba(34, 197, 94, 0.1)" : "rgba(34, 197, 94, 0.08)",
    ]

    const accentColors = [
      isDark ? "rgba(139, 92, 246, 0.12)" : "rgba(139, 92, 246, 0.08)",
      isDark ? "rgba(59, 130, 246, 0.12)" : "rgba(59, 130, 246, 0.08)",
    ]

    const colors = [...primaryColors, ...accentColors]
    const shapeTypes: GeometricShape["type"][] = ["triangle", "square", "hexagon", "diamond"]

    // Create geometric shapes
    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 40 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        opacity: Math.random() * 0.3 + 0.1,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        strokeWidth: Math.random() * 2 + 0.5,
      })
    }

    // Create floating lines
    const lineCount = Math.floor(shapeCount / 3)
    for (let i = 0; i < lineCount; i++) {
      const startX = Math.random() * width
      const startY = Math.random() * height
      const length = Math.random() * 200 + 100
      const angle = Math.random() * Math.PI * 2

      lines.push({
        x1: startX,
        y1: startY,
        x2: startX + Math.cos(angle) * length,
        y2: startY + Math.sin(angle) * length,
        opacity: Math.random() * 0.2 + 0.05,
        animationOffset: Math.random() * Math.PI * 2,
        color: isDark ? "rgba(34, 197, 94, 0.1)" : "rgba(34, 197, 94, 0.08)",
      })
    }

    shapesRef.current = shapes
    linesRef.current = lines
  }

  // Draw geometric shapes
  const drawShape = (ctx: CanvasRenderingContext2D, shape: GeometricShape) => {
    ctx.save()
    ctx.translate(shape.x, shape.y)
    ctx.rotate(shape.rotation)
    ctx.strokeStyle = shape.color
    ctx.lineWidth = shape.strokeWidth
    ctx.globalAlpha = shape.opacity

    const size = shape.size

    switch (shape.type) {
      case "triangle":
        ctx.beginPath()
        ctx.moveTo(0, -size / 2)
        ctx.lineTo(-size / 2, size / 2)
        ctx.lineTo(size / 2, size / 2)
        ctx.closePath()
        ctx.stroke()
        break

      case "square":
        ctx.strokeRect(-size / 2, -size / 2, size, size)
        break

      case "hexagon":
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3
          const x = (Math.cos(angle) * size) / 2
          const y = (Math.sin(angle) * size) / 2
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.stroke()
        break

      case "diamond":
        ctx.beginPath()
        ctx.moveTo(0, -size / 2)
        ctx.lineTo(size / 2, 0)
        ctx.lineTo(0, size / 2)
        ctx.lineTo(-size / 2, 0)
        ctx.closePath()
        ctx.stroke()
        break
    }

    ctx.restore()
  }

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    timeRef.current += 0.01
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw floating lines with subtle animation
    linesRef.current.forEach((line) => {
      const animatedOpacity = line.opacity * (0.5 + 0.5 * Math.sin(timeRef.current + line.animationOffset))

      ctx.save()
      ctx.strokeStyle = line.color
      ctx.lineWidth = 1
      ctx.globalAlpha = animatedOpacity
      ctx.beginPath()
      ctx.moveTo(line.x1, line.y1)
      ctx.lineTo(line.x2, line.y2)
      ctx.stroke()
      ctx.restore()
    })

    // Draw and animate geometric shapes
    shapesRef.current.forEach((shape) => {
      // Update rotation
      shape.rotation += shape.rotationSpeed

      // Subtle floating animation
      const floatOffset = Math.sin(timeRef.current + shape.x * 0.001) * 2
      shape.y += floatOffset * 0.1

      // Wrap around edges
      if (shape.x < -50) shape.x = canvas.width + 50
      if (shape.x > canvas.width + 50) shape.x = -50
      if (shape.y < -50) shape.y = canvas.height + 50
      if (shape.y > canvas.height + 50) shape.y = -50

      drawShape(ctx, shape)
    })

    animationRef.current = requestAnimationFrame(animate)
  }

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { offsetWidth, offsetHeight } = canvasRef.current.parentElement
        setDimensions({
          width: offsetWidth,
          height: offsetHeight,
        })

        // Reinitialize shapes on resize
        initShapes(offsetWidth, offsetHeight)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  // Start animation
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      animate()
    }

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, theme])

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="absolute inset-0 z-0 opacity-60"
    />
  )
}
