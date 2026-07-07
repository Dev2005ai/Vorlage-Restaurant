"use client"

import { useState } from "react"
import { AnimateOnScroll } from "./AnimateOnScroll"
import { Users, Calendar, Clock, CheckCircle } from "lucide-react"

const input: React.CSSProperties = {
  width: "100%", padding: "0.9rem 1rem",
  background: "rgba(253,251,247,0.05)",
  border: "1px solid rgba(201,168,76,0.2)",
  color: "#FDFBF7",
  fontFamily: "var(--font-sans)", fontSize: "0.9rem",
  outline: "none", transition: "border-color 0.2s",
  borderRadius: "2px",
}

export function Reservierung() {
  const [form, setForm] = useState({ name: "", email: "", datum: "", uhrzeit: "", personen: "2", nachricht: "" })
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSuccess(true)
  }

  return (
    <section id="reservierung" style={{ background: "#1A0A0A", padding: "8rem 1.5rem", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }} />

      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "6rem", alignItems: "center" }}>

          <AnimateOnScroll>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.25rem" }}>Tavola Riservata</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#FDFBF7", lineHeight: 1.2, marginBottom: "1.75rem" }}>
              Reservieren Sie<br /><em style={{ color: "#C9A84C" }}>Ihren Tisch.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "rgba(253,251,247,0.55)", lineHeight: 1.8, marginBottom: "3rem" }}>
              Ein Abend bei L'Anima di Roma beginnt mit Ihrer Reservierung. Für besondere Anlässe stehen unsere Privatzimmer zur Verfügung.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                [Calendar, "Mo–Sa: 12:00–14:30 & 18:00–23:00"],
                [Clock, "So: 12:00–21:00 Uhr"],
                [Users, "Gruppen ab 10 Personen: kontakt@lanima-diroma.de"],
              ].map(([Icon, text], i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: "42px", height: "42px", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color="#C9A84C" strokeWidth={1.5} />
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "rgba(253,251,247,0.55)" }}>{text as string}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div style={{ border: "1px solid rgba(201,168,76,0.15)", padding: "3rem", background: "rgba(74,14,14,0.08)" }}>
              {success ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <CheckCircle size={48} color="#C9A84C" strokeWidth={1.2} style={{ margin: "0 auto 1.5rem" }} />
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "#FDFBF7", marginBottom: "0.75rem" }}>Grazie mille!</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "rgba(253,251,247,0.55)" }}>Wir bestätigen Ihre Reservierung innerhalb von 24 Stunden.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#FDFBF7", marginBottom: "0.5rem" }}>Tischreservierung</h3>

                  <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Name *</label>
                      <input style={input} placeholder="Ihr Name" required value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))}
                        onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"}
                        onBlur={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Personen *</label>
                      <select style={{ ...input, cursor: "pointer" }} value={form.personen} onChange={e => setForm(p => ({...p, personen: e.target.value}))}
                        onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"}
                        onBlur={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"}
                      >
                        {["1","2","3","4","5","6","7","8","9","10+"].map(n => <option key={n} style={{ background: "#1A0A0A" }}>{n}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>E-Mail *</label>
                    <input style={input} type="email" placeholder="ihre@email.de" required value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))}
                      onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"}
                      onBlur={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"}
                    />
                  </div>

                  <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Datum *</label>
                      <input style={{ ...input, colorScheme: "dark" }} type="date" required value={form.datum} onChange={e => setForm(p => ({...p, datum: e.target.value}))}
                        onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"}
                        onBlur={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Uhrzeit *</label>
                      <select style={{ ...input, cursor: "pointer" }} value={form.uhrzeit} onChange={e => setForm(p => ({...p, uhrzeit: e.target.value}))}
                        onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"}
                        onBlur={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"}
                      >
                        <option value="" style={{ background: "#1A0A0A" }}>Wählen…</option>
                        {["12:00","12:30","13:00","13:30","14:00","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"].map(t => <option key={t} style={{ background: "#1A0A0A" }}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Besondere Wünsche</label>
                    <textarea style={{ ...input, resize: "none", height: "90px" }} placeholder="Allergien, besondere Anlässe, Sitzwünsche…" value={form.nachricht} onChange={e => setForm(p => ({...p, nachricht: e.target.value}))}
                      onFocus={e => e.currentTarget.style.borderColor = "#C9A84C"}
                      onBlur={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"}
                    />
                  </div>

                  <button type="submit" disabled={loading} style={{
                    padding: "1rem", background: loading ? "rgba(201,168,76,0.4)" : "#C9A84C",
                    color: "#120808", fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 700,
                    letterSpacing: "0.15em", textTransform: "uppercase", border: "none", cursor: loading ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                  }}>
                    {loading ? "Wird gesendet …" : "Tisch reservieren"}
                  </button>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
