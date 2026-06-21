import { Zap } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-[#060610] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <Zap
              size={16}
              className="text-indigo-400 fill-indigo-400 group-hover:text-indigo-300 group-hover:fill-indigo-300 transition-colors"
            />
            <span className="font-display text-3xl tracking-wider text-white group-hover:text-indigo-200 transition-colors">
              STATIC
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-sans tracking-[0.25em] uppercase text-slate-500 hover:text-indigo-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-slate-700 text-xs font-sans">
            &copy; {new Date().getFullYear()} STATIC Barbershop. 88 Bleecker St, New York, NY 10012.
          </p>
          <p className="text-indigo-500/30 text-[10px] font-sans tracking-[0.4em] uppercase">
            Charged by craft.
          </p>
        </div>
      </div>
    </footer>
  )
}
