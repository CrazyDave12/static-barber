import Reveal from "@/components/Reveal"
import { Zap } from "lucide-react"

const services = [
  {
    name: "The Cut",
    price: "$55",
    duration: "45 min",
    description: "Consultation, precision cut, and a finish that actually lasts.",
    featured: false,
  },
  {
    name: "Close Shave",
    price: "$45",
    duration: "40 min",
    description: "Hot towel, straight razor, cool finish. The complete ritual.",
    featured: false,
  },
  {
    name: "Beard Trim",
    price: "$35",
    duration: "30 min",
    description: "Shape, detail, and a conditioning treatment to keep it sharp.",
    featured: false,
  },
  {
    name: "Texture Treatment",
    price: "$65",
    duration: "60 min",
    description: "Scalp care and curl definition for textured hair done properly.",
    featured: false,
  },
  {
    name: "Quick Cut",
    price: "$30",
    duration: "20 min",
    description: "A sharp cut with no extras. Clean in, clean out.",
    featured: false,
  },
]

const featured = {
  name: "Full Session",
  price: "$120",
  duration: "90 min",
  description:
    "The complete STATIC experience. Cut, close shave, and beard trim. Includes a drink. This is the one.",
}

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#080812]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-indigo-400 text-[10px] font-sans tracking-[0.55em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-display text-6xl md:text-8xl text-white leading-none">
              SERVICES
            </h2>
          </div>
        </Reveal>

        {/* Featured service */}
        <Reveal delay={0.1}>
          <div className="group relative border border-indigo-500/30 bg-indigo-950/20 p-8 md:p-10 mb-2 hover:border-indigo-400/50 hover:bg-indigo-950/30 transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-500 via-indigo-300 to-transparent" />
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={12} className="text-indigo-400 fill-indigo-400" />
                  <span className="text-indigo-300 text-[10px] font-sans tracking-[0.4em] uppercase">
                    Most Popular
                  </span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl text-white mb-3 leading-none">
                  {featured.name.toUpperCase()}
                </h3>
                <p className="text-slate-400 font-sans text-sm leading-relaxed max-w-md">
                  {featured.description}
                </p>
              </div>
              <div className="text-right shrink-0 md:pl-8">
                <div className="font-display text-4xl text-indigo-300 leading-none">{featured.price}</div>
                <div className="text-slate-500 text-xs font-sans mt-1 tracking-wider">{featured.duration}</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Service list — menu format, no cards */}
        <div className="border-t border-white/[0.05]">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={0.05 * i}>
              <div className="group flex items-center justify-between py-7 border-b border-white/[0.05] hover:border-indigo-500/20 transition-colors duration-300 gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-4 mb-1.5">
                    <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-indigo-200 transition-colors duration-300 leading-none">
                      {service.name.toUpperCase()}
                    </h3>
                    <span className="text-slate-600 text-xs font-sans tracking-wider hidden md:block">
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-slate-500 font-sans text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="font-display text-2xl text-slate-300 group-hover:text-indigo-300 transition-colors duration-300 leading-none">
                    {service.price}
                  </span>
                  <div className="text-slate-600 text-xs font-sans mt-1 md:hidden">{service.duration}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
