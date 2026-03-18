"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { companies, type Company } from "@/lib/companies"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const NEON = "#a855f7" // neon purple for spokes

function FlywheelNode({
  company,
  index,
  total,
  isActive,
  onClick,
  radius,
}: {
  company: Company
  index: number
  total: number
  isActive: boolean
  onClick: () => void
  radius: number
}) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  const x = radius * Math.cos(angle)
  const y = radius * Math.sin(angle)

  return (
    <motion.button
      className="absolute flex flex-col items-center gap-1 group"
      style={{
        left: `calc(50% + ${x}px - 36px)`,
        top: `calc(50% + ${y}px - 36px)`,
      }}
      onClick={onClick}
      animate={{
        scale: isActive ? 1.2 : 1,
      }}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-neutral-900 border-2 transition-all duration-300 overflow-hidden"
        style={{
          borderColor: isActive ? company.color : "rgba(255,255,255,0.1)",
          boxShadow: isActive
            ? `0 0 20px ${company.color}40, 0 0 40px ${company.color}20`
            : "none",
        }}
      >
        <Image
          src={company.logo}
          alt={company.name}
          width={48}
          height={48}
          className="object-contain p-1"
        />
      </div>
      <span
        className="text-[10px] font-medium text-center whitespace-nowrap transition-colors duration-300 max-w-[80px] truncate"
        style={{ color: isActive ? company.color : "rgba(255,255,255,0.5)" }}
      >
        {company.name}
      </span>
    </motion.button>
  )
}

function NeonSpokes({
  radius,
  total,
  activeIndex,
}: {
  radius: number
  total: number
  activeIndex: number
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      {Array.from({ length: total }).map((_, i) => {
        const angle = (i / total) * 2 * Math.PI - Math.PI / 2
        const endX = radius + (radius - 36) * Math.cos(angle)
        const endY = radius + (radius - 36) * Math.sin(angle)
        const isActive = i === activeIndex

        return (
          <line
            key={i}
            x1={radius}
            y1={radius}
            x2={endX}
            y2={endY}
            stroke={isActive ? companies[i].color : NEON}
            strokeWidth={isActive ? 2 : 1}
            strokeDasharray="4 6"
            strokeLinecap="round"
            opacity={isActive ? 0.9 : 0.25}
            className="transition-all duration-500"
          />
        )
      })}
    </svg>
  )
}

function CompanyDetailPanel({ company }: { company: Company }) {
  return (
    <motion.div
      key={company.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border bg-neutral-950 p-8"
      style={{ borderColor: `${company.color}30` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center bg-neutral-900 border overflow-hidden"
          style={{ borderColor: `${company.color}40` }}
        >
          <Image
            src={company.logo}
            alt={company.name}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{company.name}</h3>
          <span
            className="text-sm font-medium"
            style={{ color: company.color }}
          >
            {company.tagline}
          </span>
        </div>
      </div>

      <p className="text-neutral-400 leading-relaxed mb-6">
        {company.description}
      </p>

      <a
        href={company.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:brightness-110"
        style={{ backgroundColor: company.color }}
      >
        Visit {company.name}
        <ExternalLink className="w-4 h-4" />
      </a>
    </motion.div>
  )
}

export function Flywheel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [radius, setRadius] = useState(200)

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 640 ? 130 : window.innerWidth < 1024 ? 170 : 200)
    }
    updateRadius()
    window.addEventListener("resize", updateRadius)
    return () => window.removeEventListener("resize", updateRadius)
  }, [])

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % companies.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(advance, 4000)
    return () => clearInterval(interval)
  }, [isPaused, advance])

  const handleNodeClick = (index: number) => {
    setActiveIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The Peak 301 Flywheel
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Eight interconnected solutions that create a self-reinforcing cycle of
          growth — from territory setup to profitable exit.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Flywheel */}
        <div
          className="relative flex-shrink-0"
          style={{
            width: radius * 2 + 160,
            height: radius * 2 + 160,
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Neon glow ring */}
          <div
            className="absolute rounded-full"
            style={{
              left: 38,
              top: 38,
              right: 38,
              bottom: 38,
              border: `1px solid ${NEON}15`,
              boxShadow: `0 0 40px ${NEON}08, inset 0 0 40px ${NEON}05`,
            }}
          />

          {/* Outer ring */}
          <div
            className="absolute rounded-full"
            style={{
              left: 40,
              top: 40,
              right: 40,
              bottom: 40,
              border: `1px solid ${NEON}20`,
            }}
          />

          {/* Dashed rotating ring */}
          <div
            className="absolute rounded-full animate-[spin_30s_linear_infinite]"
            style={{
              left: 55,
              top: 55,
              right: 55,
              bottom: 55,
              border: `1px dashed ${NEON}18`,
            }}
          />

          {/* Neon spokes from center to each node */}
          <div
            className="absolute"
            style={{
              left: 80,
              top: 80,
              width: radius * 2,
              height: radius * 2,
            }}
          >
            <NeonSpokes
              radius={radius}
              total={companies.length}
              activeIndex={activeIndex}
            />
          </div>

          {/* Center hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center border-2 transition-all duration-500"
              style={{
                borderColor: `${NEON}50`,
                boxShadow: `0 0 30px ${NEON}20, 0 0 60px ${NEON}10, inset 0 0 20px ${NEON}08`,
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
            >
              <span
                className="text-xs font-black text-center leading-tight tracking-wider"
                style={{
                  color: NEON,
                  textShadow: `0 0 10px ${NEON}60`,
                }}
              >
                PEAK
                <br />
                301
              </span>
            </div>
          </div>

          {/* Nodes */}
          <div
            className="absolute"
            style={{
              left: 80,
              top: 80,
              width: radius * 2,
              height: radius * 2,
            }}
          >
            {companies.map((company, i) => (
              <FlywheelNode
                key={company.id}
                company={company}
                index={i}
                total={companies.length}
                isActive={i === activeIndex}
                onClick={() => handleNodeClick(i)}
                radius={radius}
              />
            ))}
          </div>

          {/* Progress dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
            {companies.map((_, i) => (
              <button
                key={i}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    i === activeIndex
                      ? companies[activeIndex].color
                      : `${NEON}25`,
                  boxShadow:
                    i === activeIndex
                      ? `0 0 6px ${companies[activeIndex].color}80`
                      : "none",
                }}
                onClick={() => handleNodeClick(i)}
              />
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        <div className="flex-1 w-full min-w-0">
          <AnimatePresence mode="wait">
            <CompanyDetailPanel company={companies[activeIndex]} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
