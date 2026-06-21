"use client"

import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { Zap } from "lucide-react"

export default function Hero() {
  return (
    <AuroraBackground className="dark:bg-[#080812]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-indigo-400/50" />
          <span className="text-indigo-300/70 text-[10px] font-sans tracking-[0.6em] uppercase">
            New York · Est. 2015
          </span>
          <div className="h-px w-8 bg-indigo-400/50" />
        </motion.div>

        {/* The big wordmark — the signature moment */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[clamp(6rem,22vw,16rem)] leading-none text-white mb-4 select-none"
        >
          STATIC
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-indigo-200/50 font-sans text-sm md:text-base tracking-[0.4em] uppercase mb-3"
        >
          Charged by craft.
        </motion.p>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-slate-400/70 font-sans text-base max-w-xs leading-relaxed mb-12"
        >
          Precision grooming for the modern individual. 88 Bleecker St, NYC.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 mb-20"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 px-10 py-3.5 bg-indigo-600 text-white font-sans text-[11px] tracking-[0.3em] uppercase hover:bg-indigo-500 active:bg-indigo-700 transition-colors duration-300"
          >
            <Zap size={12} className="fill-white" />
            Book Now
          </a>
          <a
            href="#services"
            className="px-10 py-3.5 border border-white/15 text-slate-400 font-sans text-[11px] tracking-[0.3em] uppercase hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-300"
          >
            See Services
          </a>
        </motion.div>

        {/* Scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-indigo-400/50 to-transparent" />
          <span className="text-slate-500/50 text-[9px] font-sans tracking-[0.4em] uppercase">Scroll</span>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  )
}
