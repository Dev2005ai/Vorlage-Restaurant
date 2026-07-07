"use client"

export function Footer() {
  return (
    <footer style={{ background: "#120808", padding: "3rem 1.5rem", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap: "1.5rem", marginBottom: "2rem" }}>
          <div>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#C9A84C", letterSpacing: "0.1em" }}>L&apos;Anima di Roma</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "rgba(253,251,247,0.3)", marginTop: "0.2rem" }}>Ristorante Italiano · Hamburg</p>
          </div>
          <nav style={{ display: "flex", gap: "2rem" }}>
            {["Impressum", "Datenschutz", "Allergene"].map(l => (
              <a key={l} href="#" style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "rgba(253,251,247,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(253,251,247,0.3)"}
              >{l}</a>
            ))}
          </nav>
        </div>
        <div style={{ borderTop: "1px solid rgba(201,168,76,0.08)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "rgba(253,251,247,0.2)" }}>© 2025 L&apos;Anima di Roma · Tutti i diritti riservati</p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "rgba(253,251,247,0.2)" }}>Demo-Website von <a href="#" style={{ color: "#C9A84C", textDecoration: "none" }}>SwiftSites</a></p>
        </div>
      </div>
    </footer>
  )
}
