import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Team from "@/components/Team"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
