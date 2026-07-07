"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section style={{ position: "relative", height: "100svh", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=90&auto=format&fit=crop"
          alt="L'Anima di Roma"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(18,8,8,0.55) 0%, rgba(18,8,8,0.35) 50%, rgba(18,8,8,0.75) 100%)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem", maxWidth: "800px" }}>
        <motion.p initial={{ opacity: 0, letterSpacing: "0.5em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }} transition={{ duration: 1.2, delay: 0.2 }}
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Hamburg · Ristorante Italiano
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 9vw, 7rem)", fontWeight: 400, color: "#FDFBF7", lineHeight: 1.05, marginBottom: "0.5rem" }}>
          L&apos;Anima
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.55 }}
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(2rem, 6vw, 5rem)", fontWeight: 400, color: "#C9A84C", lineHeight: 1.05, marginBottom: "2rem" }}>
          di Roma
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
          style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", color: "rgba(253,251,247,0.72)", lineHeight: 1.75, marginBottom: "3rem", maxWidth: "500px", margin: "0 auto 3rem" }}>
          Die Seele Roms auf Ihrem Teller. Authentische Küche, handgemachte Pasta und die besten Weine Italiens.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#menu"
            style={{ padding: "1rem 2.5rem", background: "#4A0E0E", color: "#FDFBF7", fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s", border: "1px solid #4A0E0E" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#350A0A"; e.currentTarget.style.transform = "translateY(-2px)" }}
            onMouseLeave={e => { e.currentTarget.style.background = "#4A0E0E"; e.currentTarget.style.transform = "translateY(0)" }}>
            Speisekarte
          </a>
          <a href="#reservierung"
            style={{ padding: "1rem 2.5rem", background: "transparent", color: "#C9A84C", fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s", border: "1px solid #C9A84C" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#120808" }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C" }}>
            Tisch reservieren
          </a>
        </motion.div>
      </div>

      {/* Scroll */}
      <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", animation: "bounce 2.5s ease-in-out infinite" }}>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.6))" }} />
        <ChevronDown size={16} color="rgba(201,168,76,0.6)" />
      </div>
      <style>{`@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }`}</style>
    </section>
  )
}
