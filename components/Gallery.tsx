import Reveal from "@/components/Reveal"

const images = [
  { seed: "static-g1", label: "The Cut" },
  { seed: "static-g2", label: "Blade Work" },
  { seed: "static-g3", label: "Detail" },
  { seed: "static-g4", label: "The Fade" },
  { seed: "static-g5", label: "Clean Lines" },
  { seed: "static-g6", label: "The Shave" },
  { seed: "static-g7", label: "Texture" },
  { seed: "static-g8", label: "Beard Work" },
  { seed: "static-g9", label: "Finish" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-[#080812]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-indigo-400 text-[10px] font-sans tracking-[0.55em] uppercase mb-4">
              Our Work
            </p>
            <h2 className="font-display text-6xl md:text-8xl text-white leading-none">
              GALLERY
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
          {images.map((img, i) => (
            <Reveal key={img.seed} delay={i * 0.04}>
              <div className="group relative aspect-square overflow-hidden bg-[#0f0f1a]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${img.seed}/700/700`}
                  alt={img.label}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-60 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Permanent dark overlay */}
                <div className="absolute inset-0 bg-[#080812]/20 group-hover:bg-[#080812]/0 transition-colors duration-500" />
                {/* Indigo frame on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-indigo-500/30 transition-colors duration-500" />
                {/* Label slide-up */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out bg-gradient-to-t from-[#080812]/80 to-transparent">
                  <span className="text-indigo-200/80 text-[10px] font-sans tracking-[0.3em] uppercase">
                    {img.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
