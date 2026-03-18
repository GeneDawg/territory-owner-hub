"use client"

import { SplineScene } from "@/components/spline-scene"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

const NEON = "#a855f7"

export function HeroSection() {
  return (
    <Card className="w-full min-h-[100svh] sm:min-h-[600px] lg:h-[750px] bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill={NEON} />

      <div className="flex flex-col lg:flex-row h-full">
        {/* Left content - Text */}
        <motion.div
          className="flex-1 px-5 py-10 sm:p-8 lg:p-16 relative z-10 flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border w-fit"
            style={{ borderColor: `${NEON}30`, backgroundColor: `${NEON}08` }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: NEON }} />
            <span className="text-xs sm:text-sm" style={{ color: `${NEON}cc` }}>Territory Owner Hub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            <span
              className="block"
              style={{
                color: "transparent",
                WebkitTextStroke: `2px ${NEON}`,
                textShadow: `0 0 30px ${NEON}30`,
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              }}
            >
              Peak 301
            </span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Growth Engine
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-neutral-400 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed">
            A la carte or all-inclusive — drive and grow your business from
            procurement, detailed lead generation with marketing to B2B
            partnerships, revenue share, claims resolution and complete exit
            strategy geared to maximize your investment.
          </p>

          <p className="mt-3 sm:mt-4 text-neutral-500 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
            Offload the most difficult parts and take total control of the
            direction of your company.{" "}
            <span className="font-semibold" style={{ color: NEON }}>
              Built to scale, scale to win.
            </span>
          </p>

          <a
            href="#flywheel"
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold rounded-lg transition-all duration-200 w-fit text-white hover:brightness-125 text-sm sm:text-base"
            style={{
              backgroundColor: `${NEON}`,
              boxShadow: `0 0 20px ${NEON}40, 0 4px 12px ${NEON}30`,
            }}
          >
            Explore the Flywheel
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Right content - 3D Robot (hidden on small mobile for performance) */}
        <motion.div
          className="hidden sm:block flex-1 relative min-h-[300px] sm:min-h-[400px]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </Card>
  )
}
