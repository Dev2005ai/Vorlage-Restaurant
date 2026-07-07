"use client"

import { AnimateOnScroll } from "./AnimateOnScroll"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

function isOpen(): { open: boolean; text: string } {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60

  if (day === 0) return hour >= 12 && hour < 21 ? { open: true, text: "Heute geöffnet bis 21:00 Uhr" } : { open: false, text: "Heute geschlossen" }
  if (day >= 1 && day <= 6) {
    if ((hour >= 12 && hour < 14.5) || (hour >= 18 && hour < 23)) return { open: true, text: "Jetzt geöffnet" }
    if (hour < 12) return { open: false, text: "Öffnet heute um 12:00 Uhr" }
    if (hour >= 14.5 && hour < 18) return { open: false, text: "Öffnet heute wieder um 18:00 Uhr" }
  }
  return { open: false, text: "Aktuell geschlossen" }
}

export function Kontakt() {
  const status = isOpen()

  return (
    <section id="kontakt" style={{ background: "#FDFBF7", padding: "8rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <AnimateOnScroll>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>Dove Siamo</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#120808" }}>Finden Sie uns</h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "5rem", alignItems: "start" }}>

          <AnimateOnScroll>
            {/* Status */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: status.open ? "rgba(61,74,45,0.1)" : "rgba(74,14,14,0.08)", marginBottom: "2.5rem", borderRadius: "2px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: status.open ? "#3D4A2D" : "#4A0E0E" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600, color: status.open ? "#3D4A2D" : "#4A0E0E" }}>{status.text}</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                { icon: MapPin, label: "Adresse", value: "Via Roma 14\n20144 Hamburg-Altona" },
                { icon: Phone, label: "Telefon", value: "040 987 654 321" },
                { icon: Mail, label: "E-Mail", value: "buonasera@lanima-diroma.de" },
                { icon: Clock, label: "Öffnungszeiten", value: "Mo–Sa: 12:00–14:30 & 18:00–23:00\nSo: 12:00–21:00 Uhr" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: "1.25rem" }}>
                  <div style={{ width: "44px", height: "44px", border: "1px solid rgba(74,14,14,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <item.icon size={16} color="#4A0E0E" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "0.35rem" }}>{item.label}</p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#6B5B5B", lineHeight: 1.65, whiteSpace: "pre-line" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div style={{ borderRadius: "2px", overflow: "hidden", height: "400px", background: "linear-gradient(135deg, #f5e6d0 0%, #ecdcc8 50%, #f0e4ce 100%)", border: "1px solid rgba(74,14,14,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", color: "#4A0E0E" }}>
                <MapPin size={40} style={{ margin: "0 auto 1rem" }} strokeWidth={1.2} />
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.3rem" }}>Via Roma 14</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "#6B5B5B" }}>Hamburg-Altona</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "#C9A84C", marginTop: "0.75rem" }}>S-Bahn Altona · 3 Min. Fußweg</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
