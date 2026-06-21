"use client"

import { useState, useEffect } from "react"
import { Zap } from "lucide-react"

const links = ["Services", "Team", "Gallery", "Contact"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080812]/90 backdrop-blur-lg border-b border-white/[0.05] py-4"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Zap
            size={16}
            className="text-indigo-400 group-hover:text-indigo-300 transition-colors fill-indigo-400 group-hover:fill-indigo-300"
          />
          <span className="font-display text-2xl tracking-wider text-white group-hover:text-indigo-200 transition-colors">
            STATIC
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] font-sans tracking-[0.25em] uppercase text-slate-400 hover:text-indigo-300 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Book CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 text-[11px] font-sans tracking-[0.25em] uppercase hover:bg-indigo-600/40 hover:border-indigo-400 transition-all duration-300"
        >
          <Zap size={11} className="fill-indigo-400" />
          Book
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-slate-400 transition-all ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-px bg-slate-400 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-slate-400 transition-all ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#0d0d1a] border-t border-white/[0.04] px-6 py-7 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm font-sans tracking-[0.2em] uppercase text-slate-400 hover:text-indigo-300 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 text-xs font-sans tracking-[0.2em] uppercase hover:bg-indigo-600/40 transition-all"
          >
            <Zap size={11} className="fill-indigo-400" />
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  )
}
