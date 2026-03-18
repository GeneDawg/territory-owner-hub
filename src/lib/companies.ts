export interface Company {
  id: string
  name: string
  tagline: string
  description: string
  url: string
  logo: string
  color: string
}

export const companies: Company[] = [
  {
    id: "rpm",
    name: "RPM Roof Solutions",
    tagline: "Territory + Training",
    description:
      "Foundational contractor onboarding, territory management, and equipment procurement. RPM provides the training and resources needed to launch and grow your roofing business from day one.",
    url: "https://rpmroofsolutions.copilot.app/login?step=signIn",
    logo: "/logos/RPMLogoFull.webp",
    color: "#f97316",
  },
  {
    id: "peak301",
    name: "Peak 301",
    tagline: "Roof Rejuvenation",
    description:
      "High-margin roof rejuvenation service that fills the gap between repair and replacement. Peak 301 certified applicators deliver a proven solution that extends roof life and generates recurring revenue.",
    url: "https://peak301.com",
    logo: "/logos/PEAK_CA_LOGO.png",
    color: "#ef4444",
  },
  {
    id: "stormview",
    name: "StormView",
    tagline: "AI Drone Proof + Leads",
    description:
      "Drone-powered aerial roof imagery with AI damage detection and lead generation. StormView gives your team the first-in-the-door advantage with verified visual proof of damage before competitors arrive.",
    url: "https://www.stormview.io/",
    logo: "/logos/stormviewIcon.svg",
    color: "#dc2626",
  },
  {
    id: "supreme-supply",
    name: "Supreme Supply",
    tagline: "Materials + Delivery",
    description:
      "Quick. Reliable. Affordable. Supreme Supply delivers roofing, siding, and construction materials with same-day delivery across Georgia and regional delivery throughout the Southeast.",
    url: "https://supremesupply-us.com/home",
    logo: "/logos/supreme-supply-logo.webp",
    color: "#facc15",
  },
  {
    id: "peak-pros-usa",
    name: "Peak Pros USA",
    tagline: "White Label Rejuvenation",
    description:
      "National white-label roof rejuvenation platform that lets you rebrand and resell roof restoration services under your own company name. Rapid market entry with minimal capital investment.",
    url: "https://peakprosusa.com/",
    logo: "/logos/peakpros-logo.png",
    color: "#a855f7",
  },
  {
    id: "5th-element",
    name: "5th Element Adjusting",
    tagline: "Public Adjusting",
    description:
      "Full-service public adjusting firm that assists with disputed insurance claims nationwide. 5th Element fights for maximum claim settlements so your customers get what they deserve.",
    url: "https://www.feaclaims.com/",
    logo: "/logos/FEA_LOGO.jpeg",
    color: "#3b82f6",
  },
  {
    id: "iink",
    name: "iink Payments",
    tagline: "Claim Check Processing",
    description:
      "Streamlines insurance claim check processing and multi-party endorsements. iink eliminates the hassle of coordinating between homeowners, contractors, attorneys, and mortgage companies.",
    url: "https://iink.com/",
    logo: "/logos/IINK.logo.jpg",
    color: "#10b981",
  },
  {
    id: "tradegauge",
    name: "TradeGauge.ai",
    tagline: "AI Valuations + Exit",
    description:
      "AI-powered Quality of Earnings reports, business valuations, and exit readiness assessments delivered in 24-48 hours. Know your company's worth and build toward a profitable exit.",
    url: "https://tradegauge.ai/",
    logo: "/logos/tradegaugeai-logo.webp",
    color: "#f43f5e",
  },
]
