import Reveal from "@/components/Reveal"

const testimonials = [
  {
    quote: "Static doesn't just cut hair. They design it. Walked out of there feeling like a different person.",
    author: "Theo G.",
    since: "Client since 2021",
  },
  {
    quote: "The atmosphere alone is worth the trip. Then you realize the cut is on another level entirely.",
    author: "Demi A.",
    since: "Client since 2022",
  },
  {
    quote: "Best barbershop I've been to in New York. Not even close. Kai sees something in your hair you don't.",
    author: "Ray S.",
    since: "Client since 2020",
  },
  {
    quote: "Full Session is the move. 90 minutes, a drink, and you walk out owning whatever room you enter.",
    author: "Chris L.",
    since: "Client since 2023",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-[#060610]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-indigo-400 text-[10px] font-sans tracking-[0.55em] uppercase mb-4">
              The Word
            </p>
            <h2 className="font-display text-6xl md:text-8xl text-white leading-none">
              REVIEWS
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.06}>
              <div className="bg-[#060610] p-10 md:p-12">
                {/* Quote mark */}
                <div className="font-display text-[5rem] text-indigo-500/15 leading-none mb-4 select-none" aria-hidden>
                  &ldquo;
                </div>
                {/* Quote text */}
                <p className="font-sans text-slate-300 text-lg leading-[1.8] mb-8 italic">
                  {t.quote}
                </p>
                {/* Attribution */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent" />
                  <div className="text-right">
                    <div className="text-white font-sans text-sm font-medium">{t.author}</div>
                    <div className="text-slate-600 font-sans text-xs mt-0.5">{t.since}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
