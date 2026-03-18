"use client"

import { motion } from "framer-motion"
import { companies } from "@/lib/companies"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function CompanyDetails() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          Our Partners
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
          Every tool in the ecosystem, designed to work together and accelerate
          your growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-white/[0.06] bg-neutral-950 p-4 sm:p-6 transition-colors hover:border-white/[0.12]"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center bg-neutral-900 border mb-5 overflow-hidden"
              style={{ borderColor: `${company.color}30` }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <h3 className="text-lg font-bold text-white mb-1">
              {company.name}
            </h3>
            <span
              className="text-xs font-medium mb-3 block"
              style={{ color: company.color }}
            >
              {company.tagline}
            </span>

            <p className="text-sm text-neutral-400 leading-relaxed mb-5 line-clamp-3">
              {company.description}
            </p>

            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Learn More
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
