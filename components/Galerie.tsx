"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"

const fotos = [
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80&auto=format&fit=crop", alt: "Restaurantinterieur", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80&auto=format&fit=crop", alt: "Handgemachte Pasta" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80&auto=format&fit=crop", alt: "Pizza Napoletana" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80&auto=format&fit=crop", alt: "Abendstimmung" },
  { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=500&q=80&auto=format&fit=crop", alt: "Weinauswahl" },
  { src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&q=80&auto=format&fit=crop", alt: "Burger & Pasta Gericht" },
]

export function Galerie() {
  return (
    <section id="galerie" style={{ background: "#120808", padding: "8rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>La Nostra Vita</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#FDFBF7" }}>Einblicke</h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto", gap: "0.75rem" }}>
            {fotos.map((f, i) => (
              <div
                key={i}
                style={{
                  overflow: "hidden",
                  gridColumn: i === 0 ? "span 2" : "span 1",
                  gridRow: i === 0 ? "span 2" : "span 1",
                  aspectRatio: i === 0 ? "unset" : "1",
                  cursor: "pointer",
                }}
                onMouseEnter={e => (e.currentTarget.querySelector("img")!.style.transform = "scale(1.06)")}
                onMouseLeave={e => (e.currentTarget.querySelector("img")!.style.transform = "scale(1)")}
              >
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: i === 0 ? "100%" : "auto",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.55s ease",
                    filter: "brightness(0.88)",
                  }}
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
