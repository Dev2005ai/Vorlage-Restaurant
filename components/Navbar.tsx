"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Geschichte",  href: "#storia" },
  { label: "Speisekarte", href: "#menu" },
  { label: "Galerie",     href: "#galerie" },
  { label: "Reservierung",href: "#reservierung" },
  { label: "Kontakt",     href: "#kontakt" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.4s",
      background: scrolled ? "rgba(18,8,8,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
    }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "76px" }}>
        <a href="#" style={{ textDecoration: "none" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.12em", lineHeight: 1.1 }}>L'Anima</p>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.65rem", fontWeight: 400, color: "rgba(201,168,76,0.65)", letterSpacing: "0.3em", textTransform: "uppercase" }}>di Roma</p>
          </div>
        </a>

        <nav style={{ display: "flex", gap: "2rem" }} className="hidden md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.08em", color: "rgba(253,251,247,0.65)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(253,251,247,0.65)"}
            >{l.label}</a>
          ))}
        </nav>

        <a href="#reservierung" className="hidden md:flex" style={{ padding: "0.6rem 1.5rem", border: "1px solid #C9A84C", color: "#C9A84C", fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textDecoration: "none", transition: "all 0.3s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#120808" }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C" }}
        >RESERVIEREN</a>

        <button onClick={() => setOpen(o => !o)} className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
          {open ? <X size={24} color="#C9A84C" /> : <Menu size={24} color="#C9A84C" />}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(18,8,8,0.98)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: "rgba(253,251,247,0.8)", textDecoration: "none", padding: "0.75rem 0", fontSize: "0.95rem", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>{l.label}</a>
          ))}
          <a href="#reservierung" onClick={() => setOpen(false)} style={{ marginTop: "1rem", padding: "0.85rem", textAlign: "center", border: "1px solid #C9A84C", color: "#C9A84C", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.1em" }}>RESERVIEREN</a>
        </div>
      )}
    </header>
  )
}
