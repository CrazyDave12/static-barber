import Reveal from "@/components/Reveal"

const team = [
  {
    name: "KAI RIVERA",
    role: "Creative Director",
    specialty: "Textured cuts & styling",
    years: "11 yrs",
    initial: "K",
    gradient: "from-indigo-950 via-[#1a1040] to-[#080812]",
    accent: "border-indigo-500/30",
  },
  {
    name: "MARCUS CHEN",
    role: "Master Barber",
    specialty: "Straight razor shaves",
    years: "9 yrs",
    initial: "M",
    gradient: "from-violet-950 via-[#1a1040] to-[#080812]",
    accent: "border-violet-500/30",
  },
  {
    name: "JORDAN BLAKE",
    role: "Senior Barber",
    specialty: "Fades & precision lines",
    years: "6 yrs",
    initial: "J",
    gradient: "from-blue-950 via-[#0d1540] to-[#080812]",
    accent: "border-blue-500/30",
  },
  {
    name: "NOVA KIM",
    role: "Style Lead",
    specialty: "Colour & texture work",
    years: "7 yrs",
    initial: "N",
    gradient: "from-purple-950 via-[#1a0e40] to-[#080812]",
    accent: "border-purple-500/30",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 bg-[#060610]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-indigo-400 text-[10px] font-sans tracking-[0.55em] uppercase mb-4">
              The Artists
            </p>
            <h2 className="font-display text-6xl md:text-8xl text-white leading-none">
              OUR TEAM
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.07}>
              <div className="group">
                {/* Portrait placeholder */}
                <div
                  className={`relative aspect-[3/4] bg-gradient-to-b ${member.gradient} border ${member.accent} overflow-hidden mb-5`}
                >
                  {/* Subtle glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(99,102,241,0.08),transparent_70%)]" />

                  {/* Large initial */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[8rem] text-white/[0.06] group-hover:text-white/[0.1] transition-colors duration-700 select-none leading-none">
                      {member.initial}
                    </span>
                  </div>

                  {/* Corner marks */}
                  <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-indigo-400/30 group-hover:border-indigo-400/60 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-indigo-400/30 group-hover:border-indigo-400/60 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-indigo-400/30 group-hover:border-indigo-400/60 transition-colors duration-500" />
                  <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-indigo-400/30 group-hover:border-indigo-400/60 transition-colors duration-500" />
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-display text-2xl text-white leading-none mb-1 group-hover:text-indigo-200 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-indigo-400/70 text-[11px] font-sans tracking-[0.2em] uppercase mb-1">
                    {member.role}
                  </p>
                  <p className="text-slate-500 text-xs font-sans">{member.specialty}</p>
                  <p className="text-slate-600 text-xs font-sans mt-1">{member.years} experience</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
