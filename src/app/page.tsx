import { HeroSection } from "@/components/hero-section"
import { Flywheel } from "@/components/flywheel"
import { CompanyDetails } from "@/components/company-details"
import { DottedSurface } from "@/components/ui/dotted-surface"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />

      <section id="flywheel" className="py-20 px-4 md:px-8 relative overflow-hidden">
        <DottedSurface />
        <div className="relative z-10">
          <Flywheel />
        </div>
      </section>

      <section id="companies" className="py-20 px-4 md:px-8 border-t border-white/[0.04]">
        <CompanyDetails />
      </section>

      <footer className="py-12 px-4 text-center border-t border-white/[0.04]">
        <p className="text-sm text-neutral-500">
          Peak 301 Territory Owner Hub &mdash; Powering contractor growth nationwide.
        </p>
      </footer>
    </main>
  )
}
