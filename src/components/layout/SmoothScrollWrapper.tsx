'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SmoothScrollWrapperProps {
  children: React.ReactNode
}

export default function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for scroll speed (lower = faster)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    })
    lenisRef.current = lenis

    // Integrate with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Use GSAP ticker for the animation frame loop
    const update = (time: number) => {
      lenis.raf(time * 1000) // Lenis expects time in milliseconds
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0) // Optional: Improve smoothing

    // Cleanup function
    return () => {
      gsap.ticker.remove(update)
      lenis.destroy() // Destroy the Lenis instance on unmount
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}