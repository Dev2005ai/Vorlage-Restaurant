import { AnimateOnScroll } from "./AnimateOnScroll"

export function Storia() {
  return (
    <section id="storia" style={{ background: "#120808", padding: "8rem 1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Decorative */}
      <div style={{ position: "absolute", top: "4rem", right: "5%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(74,14,14,0.15)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "6rem", alignItems: "center" }}>

          <AnimateOnScroll>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "2px", overflow: "hidden", aspectRatio: "3/4" }}>
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=85&auto=format&fit=crop" alt="Nonna kocht" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
              </div>
              <div style={{ position: "absolute", bottom: "-2rem", right: "-1.5rem", background: "#4A0E0E", padding: "2rem", textAlign: "center", maxWidth: "160px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>1987</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "rgba(253,251,247,0.6)", marginTop: "0.3rem", letterSpacing: "0.1em" }}>Gegründet</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.25rem" }}>La Nostra Storia</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#FDFBF7", lineHeight: 1.2, marginBottom: "2rem" }}>
              Nonnas Rezepte.<br />
              <em style={{ color: "#C9A84C" }}>Moderne Seele.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "rgba(253,251,247,0.65)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              Es begann mit einer vergilbten Rezeptsammlung und dem unerschütterlichen Glauben, dass gutes Essen Menschen verbindet. Rosa Conti, unsere Gründerin, brachte die Aromen ihrer Kindheit in den Vicoli Roms nach Hamburg.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "rgba(253,251,247,0.65)", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              Heute, über drei Jahrzehnte später, kochen wir mit denselben Rezepten — verfeinert durch moderne Technik, getrieben von demselben Feuer. Jeder Teller erzählt eine Geschichte.
            </p>
            <div style={{ display: "flex", gap: "2.5rem" }}>
              {[["100%", "Hausgemachte Pasta"], ["40+", "Weinpositionen"], ["3", "Köche aus Italien"]].map(([n, l]) => (
                <div key={l}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 600, color: "#C9A84C", lineHeight: 1 }}>{n}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "rgba(253,251,247,0.45)", marginTop: "0.35rem" }}>{l}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}
