import { Navbar }       from "@/components/Navbar"
import { Hero }         from "@/components/Hero"
import { Storia }       from "@/components/Storia"
import { Speisekarte }  from "@/components/Speisekarte"
import { Galerie }      from "@/components/Galerie"
import { Reservierung } from "@/components/Reservierung"
import { Kontakt }      from "@/components/Kontakt"
import { Footer }       from "@/components/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Storia />
      <Speisekarte />
      <Galerie />
      <Reservierung />
      <Kontakt />
      <Footer />
    </>
  )
}
