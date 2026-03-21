import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Particle implements Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 1.5 + 0.5
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgba(0, 212, 255, 0.5)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx
        this.y += this.vy

        if (this.x - this.radius < 0 || this.x + this.radius > canvasWidth) {
          this.vx = -this.vx
          this.x = Math.max(this.radius, Math.min(canvasWidth - this.radius, this.x))
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvasHeight) {
          this.vy = -this.vy
          this.y = Math.max(this.radius, Math.min(canvasHeight - this.radius, this.y))
        }
      }
    }

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 30 : window.innerWidth < 1024 ? 50 : 90
    const particles: Particle[] = Array.from(
      { length: particleCount },
      () => new Particle(canvas.width, canvas.height)
    )

    const animate = () => {
      ctx.fillStyle = '#0a0e27'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height)
        particle.draw(ctx)
      })

      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)'
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}
