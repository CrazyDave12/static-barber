"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Zap } from "lucide-react"
import Reveal from "@/components/Reveal"

const info = [
  { icon: MapPin, label: "Find Us", value: "88 Bleecker St\nNew York, NY 10012" },
  { icon: Phone, label: "Call", value: "(212) 555-0193" },
  { icon: Mail, label: "Email", value: "cut@staticbarber.com" },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri  10am – 8pm\nSaturday  9am – 7pm\nSunday  11am – 5pm",
  },
]

const inputClass =
  "w-full bg-[#0d0d1a] border border-white/[0.07] text-slate-200 placeholder-slate-600 px-4 py-3.5 font-sans text-sm focus:outline-none focus:border-indigo-500/50 transition-colors duration-300"

const labelClass = "block text-slate-500 text-[10px] font-sans tracking-[0.35em] uppercase mb-2"

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-32 px-6 bg-[#080812]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-indigo-400 text-[10px] font-sans tracking-[0.55em] uppercase mb-4">
              Come In
            </p>
            <h2 className="font-display text-6xl md:text-8xl text-white leading-none">
              BOOK NOW
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: info */}
          <Reveal>
            <div>
              <p className="text-slate-500 font-sans text-sm leading-[1.9] mb-12 max-w-sm">
                Walk-ins are welcome when we have space. Booking ahead guarantees your barber and your slot.
              </p>
              <div className="space-y-8">
                {info.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="mt-0.5 shrink-0">
                      <Icon size={14} className="text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-slate-600 text-[10px] font-sans tracking-[0.35em] uppercase mb-1.5">
                        {label}
                      </div>
                      <div className="text-slate-300 font-sans text-sm leading-[1.8] whitespace-pre-line">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex flex-col justify-center py-16">
                <Zap size={24} className="text-indigo-400 fill-indigo-400 mb-6" />
                <h3 className="font-display text-4xl text-white mb-3 leading-none">You&apos;re Booked</h3>
                <p className="text-slate-400 font-sans text-sm leading-relaxed">
                  We&apos;ll confirm your appointment within a few hours. See you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>First</label>
                    <input type="text" className={inputClass} placeholder="Jordan" />
                  </div>
                  <div>
                    <label className={labelClass}>Last</label>
                    <input type="text" className={inputClass} placeholder="Blake" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" className={inputClass} placeholder="jordan@example.com" />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" className={inputClass} placeholder="(212) 000-0000" />
                </div>
                <div>
                  <label className={labelClass}>Service</label>
                  <select className={`${inputClass} text-slate-600 appearance-none cursor-pointer`} defaultValue="">
                    <option value="" disabled>Choose a service</option>
                    <option>Full Session — $120</option>
                    <option>The Cut — $55</option>
                    <option>Close Shave — $45</option>
                    <option>Texture Treatment — $65</option>
                    <option>Beard Trim — $35</option>
                    <option>Quick Cut — $30</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Preferred Date</label>
                  <input type="date" className={`${inputClass} text-slate-500`} />
                </div>
                <div>
                  <label className={labelClass}>Notes</label>
                  <textarea
                    rows={3}
                    className={`${inputClass} resize-none`}
                    placeholder="Anything we should know beforehand?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-4 font-sans text-[11px] tracking-[0.35em] uppercase hover:bg-indigo-500 active:bg-indigo-700 transition-colors duration-300 mt-2"
                >
                  <Zap size={12} className="fill-white" />
                  Confirm Booking
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
