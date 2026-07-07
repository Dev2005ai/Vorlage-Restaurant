"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Leaf, Star } from "lucide-react"

const kategorien = ["Antipasti", "Primi", "Secondi", "Dolci"] as const
type Kat = typeof kategorien[number]

const menu: Record<Kat, { name: string; desc: string; preis: string; vegan?: boolean; chef?: boolean }[]> = {
  Antipasti: [
    { name: "Burrata Pugliese", desc: "Cremige Burrata mit Kirschtomaten, Basilikumöl und geröstetem Ciabatta", preis: "14 €", chef: true },
    { name: "Carpaccio di Manzo", desc: "Hauchdünn geschnittenes Rinderfilet, Rucola, Parmesan und Trüffelöl", preis: "18 €" },
    { name: "Bruschetta al Pomodoro", desc: "Geröstetes Sauerteigbrot mit Tomaten-Concassée und frischem Basilikum", preis: "9 €", vegan: true },
    { name: "Antipasto della Casa", desc: "Auswahl an Aufschnitt, gereiften Käsesorten, Oliven und eingelegtem Gemüse", preis: "22 €" },
  ],
  Primi: [
    { name: "Cacio e Pepe", desc: "Tonnarelli, Pecorino Romano, schwarzer Pfeffer — das Original aus dem Rione Trastevere", preis: "19 €", chef: true },
    { name: "Risotto ai Funghi Porcini", desc: "Cremiges Risotto mit frischen Steinpilzen, Thymian und weißem Trüffel", preis: "24 €", vegan: true },
    { name: "Tagliatelle al Ragù", desc: "Handgemachte Tagliatelle mit langsam geschmortem Rinderragù alla Bolognese", preis: "21 €" },
    { name: "Spaghetti alle Vongole", desc: "Spaghetti mit Venusmuscheln, Weißwein, Knoblauch und Petersilie", preis: "22 €" },
    { name: "Gnocchi al Tartufo", desc: "Hausgemachte Kartoffelgnocchi mit schwarzem Trüffel und Parmesanschaum", preis: "26 €", chef: true },
  ],
  Secondi: [
    { name: "Branzino al Forno", desc: "Ganzer Wolfsbarsch aus dem Ofen mit Kapern, Oliven und Zitronenbutter", preis: "32 €", chef: true },
    { name: "Costolette d'Agnello", desc: "Lammkoteletts mit Rosmarinpolenta, Bohnenpüree und Salsa Verde", preis: "34 €" },
    { name: "Petto di Pollo al Limone", desc: "Zarte Hähnchenbrust mit Zitronensauce, Kapern und Salbei", preis: "24 €" },
    { name: "Tagliata di Manzo", desc: "Gegarter Rinderlachs mit Rucola, Kirschtomaten und gehobeltem Parmesan", preis: "38 €" },
  ],
  Dolci: [
    { name: "Tiramisù della Nonna", desc: "Das Original-Rezept von Rosa Conti — Espresso, Mascarpone, Savoiardi und Kakao", preis: "9 €", chef: true },
    { name: "Panna Cotta al Pistacchio", desc: "Seidig-cremige Panna Cotta mit sizilianischer Pistazien-Sauce", preis: "10 €" },
    { name: "Cannolo Siciliano", desc: "Knuspriger Teigmantel mit gesüßtem Ricotta, kandierten Orangen und Pistazie", preis: "8 €" },
    { name: "Gelato Artigianale", desc: "Hausgemachtes Eis der Saison — fragen Sie nach den aktuellen Sorten", preis: "7 €", vegan: true },
  ],
}

export function Speisekarte() {
  const [aktiv, setAktiv] = useState<Kat>("Antipasti")

  return (
    <section id="menu" style={{ background: "#FDFBF7", padding: "8rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>La Cucina</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "#120808", marginBottom: "0.5rem" }}>Unsere Speisekarte</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "#6B5B5B" }}>Alle Pasta handgemacht · Saisonale Zutaten · Weinempfehlung auf Anfrage</p>
        </div>

        {/* Kategorie-Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0", marginBottom: "3.5rem", borderBottom: "1px solid rgba(74,14,14,0.12)", flexWrap: "wrap" }}>
          {kategorien.map(k => (
            <button key={k} onClick={() => setAktiv(k)}
              style={{
                fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "0.85rem 2rem", background: "none", border: "none", cursor: "pointer",
                color: aktiv === k ? "#4A0E0E" : "#6B5B5B",
                borderBottom: aktiv === k ? "2px solid #4A0E0E" : "2px solid transparent",
                transition: "all 0.25s", marginBottom: "-1px",
              }}
            >{k}</button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div key={aktiv}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0", maxWidth: "52rem", margin: "0 auto" }}
          >
            {menu[aktiv].map((item, i) => (
              <motion.div key={item.name}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ padding: "1.75rem 0", borderBottom: "1px solid rgba(74,14,14,0.08)", display: "flex", justifyContent: "space-between", alignItems: "start", gap: "1.5rem" }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 500, color: "#120808" }}>{item.name}</h3>
                    {item.chef && <span title="Chef's Choice"><Star size={13} fill="#C9A84C" color="#C9A84C" /></span>}
                    {item.vegan && <span style={{ display: "flex", alignItems: "center", gap: "2px" }} title="Vegan"><Leaf size={13} color="#3D4A2D" /></span>}
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "#6B5B5B", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 500, color: "#4A0E0E", whiteSpace: "nowrap", flexShrink: 0 }}>{item.preis}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Legende */}
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "2.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", color: "#6B5B5B" }}><Star size={12} fill="#C9A84C" color="#C9A84C" /> Chef&apos;s Choice</span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", color: "#6B5B5B" }}><Leaf size={12} color="#3D4A2D" /> Vegan</span>
          <span style={{ fontSize: "0.75rem", color: "#6B5B5B" }}>Alle Preise inkl. MwSt. · Allergene auf Anfrage</span>
        </div>
      </div>
    </section>
  )
}
