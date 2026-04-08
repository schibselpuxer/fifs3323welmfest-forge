import CinemaHeader from "@/components/CinemaHeader";
import CinemaFooter from "@/components/CinemaFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const colorTokens = [
  { name: "Background", var: "--background", value: "220 20% 6%", desc: "Haupthintergrund" },
  { name: "Foreground", var: "--foreground", value: "40 20% 95%", desc: "Primärtext" },
  { name: "Primary (Gold)", var: "--primary", value: "38 80% 55%", desc: "Haupt-Akzentfarbe" },
  { name: "Primary Foreground", var: "--primary-foreground", value: "220 20% 6%", desc: "Text auf Primary" },
  { name: "Secondary", var: "--secondary", value: "220 15% 16%", desc: "Sekundäre Flächen" },
  { name: "Muted", var: "--muted", value: "220 15% 14%", desc: "Gedämpfte Bereiche" },
  { name: "Muted Foreground", var: "--muted-foreground", value: "220 10% 55%", desc: "Sekundärtext" },
  { name: "Card", var: "--card", value: "220 18% 10%", desc: "Kartenoberflächen" },
  { name: "Border", var: "--border", value: "220 15% 18%", desc: "Ränder & Trennlinien" },
  { name: "Destructive", var: "--destructive", value: "0 84.2% 60.2%", desc: "Fehlerzustände" },
];

const goldTokens = [
  { name: "Gold", var: "--gold", value: "38 80% 55%" },
  { name: "Gold Light", var: "--gold-light", value: "38 70% 70%" },
  { name: "Gold Dark", var: "--gold-dark", value: "38 90% 40%" },
];

const cinemaTokens = [
  { name: "Cinema Dark", var: "--cinema-dark", value: "220 20% 4%" },
  { name: "Cinema Surface", var: "--cinema-surface", value: "220 18% 10%" },
  { name: "Cinema Surface Hover", var: "--cinema-surface-hover", value: "220 18% 14%" },
];

const ColorSwatch = ({ name, value, desc }: { name: string; value: string; desc?: string }) => (
  <div className="flex items-center gap-4">
    <div
      className="w-16 h-16 rounded-lg border border-border shrink-0 shadow-lg"
      style={{ backgroundColor: `hsl(${value})` }}
    />
    <div>
      <p className="text-sm font-semibold text-foreground">{name}</p>
      <p className="text-xs text-muted-foreground font-mono">hsl({value})</p>
      {desc && <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>}
    </div>
  </div>
);

const DesignSystem = () => {
  const [activeTab, setActiveTab] = useState<"colors" | "typo" | "components" | "utilities">("colors");

  const tabs = [
    { id: "colors" as const, label: "Farben" },
    { id: "typo" as const, label: "Typografie" },
    { id: "components" as const, label: "Komponenten" },
    { id: "utilities" as const, label: "Utilities" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CinemaHeader />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">
              <span className="text-gradient-gold">Design System</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Das visuelle Fundament des THEGA Filmpalast. Alle Farben, Typografie-Regeln und
              Komponenten auf einen Blick – für eine konsistente Gestaltung.
            </p>
          </div>

          {/* Tab navigation */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "gradient-gold text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Colors */}
          {activeTab === "colors" && (
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Kern-Tokens</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {colorTokens.map((c) => (
                    <ColorSwatch key={c.var} name={c.name} value={c.value} desc={c.desc} />
                  ))}
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Gold-Palette</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {goldTokens.map((c) => (
                    <ColorSwatch key={c.var} name={c.name} value={c.value} />
                  ))}
                </div>
                <div className="mt-6 h-16 rounded-xl gradient-gold shadow-lg" />
                <p className="text-xs text-muted-foreground mt-2 font-mono">.gradient-gold</p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Cinema-Oberflächen</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {cinemaTokens.map((c) => (
                    <ColorSwatch key={c.var} name={c.name} value={c.value} />
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Typography */}
          {activeTab === "typo" && (
            <div className="space-y-10 max-w-3xl">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Schriftfamilie</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-4xl font-black text-foreground mb-2">Inter</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      Google Fonts · Gewichte 300–900
                    </p>
                    <p className="text-foreground" style={{ fontFamily: "Inter" }}>
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                      abcdefghijklmnopqrstuvwxyz<br />
                      0123456789 !@#$%^&*()
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Größen-Skala</h2>
                <div className="space-y-4">
                  {[
                    { label: "Hero / H1", cls: "text-4xl md:text-5xl font-black" },
                    { label: "Section / H2", cls: "text-2xl font-bold" },
                    { label: "Card Title / H3", cls: "text-lg font-bold" },
                    { label: "Body", cls: "text-base" },
                    { label: "Small / Caption", cls: "text-sm text-muted-foreground" },
                    { label: "Micro", cls: "text-xs text-muted-foreground" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-baseline gap-4 border-b border-border pb-3">
                      <span className="text-xs text-muted-foreground w-32 shrink-0 font-mono">{item.label}</span>
                      <span className={`text-foreground ${item.cls}`}>Filmpalast</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Gold-Textgradient</h2>
                <p className="text-3xl font-black text-gradient-gold">Alle Spielzeiten</p>
                <p className="text-xs text-muted-foreground mt-2 font-mono">.text-gradient-gold</p>
              </section>
            </div>
          )}

          {/* Components */}
          {activeTab === "components" && (
            <div className="space-y-10 max-w-3xl">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Buttons</h2>
                <div className="flex flex-wrap gap-3">
                  <Button>Standard</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="ghost">Ghost</Button>
                  <button className="gradient-gold text-primary-foreground font-bold px-6 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
                    Gold CTA
                  </button>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Badges</h2>
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge className="bg-primary text-primary-foreground font-bold">FSK 12</Badge>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Cards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Filmkarte</CardTitle>
                      <CardDescription>Standard-Card für Filminhalte</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Verwendet bg-card mit border-border und abgerundeten Ecken.
                      </p>
                    </CardContent>
                  </Card>
                  <div className="glass-dark rounded-xl border border-border p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">Glass Card</h3>
                    <p className="text-sm text-muted-foreground">
                      Glassmorphism-Effekt mit backdrop-blur.
                    </p>
                  </div>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Showtime-Buttons</h2>
                <div className="flex flex-wrap gap-2">
                  <button className="px-5 py-2.5 text-sm font-semibold rounded-lg border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    14:30 Uhr
                  </button>
                  <button className="px-5 py-2.5 text-sm font-semibold rounded-lg gradient-gold text-primary-foreground border border-transparent">
                    17:00 Uhr
                  </button>
                  <button className="px-5 py-2.5 text-sm font-semibold rounded-lg border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    20:15 Uhr
                  </button>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Sitzplatz-States</h2>
                <div className="flex gap-4">
                  {[
                    { label: "Frei", cls: "bg-secondary" },
                    { label: "Gewählt", cls: "bg-primary text-primary-foreground" },
                    { label: "Belegt", cls: "bg-muted/40" },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col items-center gap-1.5">
                      <div className={`w-8 h-8 rounded-t-md ${s.cls}`} />
                      <span className="text-xs text-muted-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Utilities */}
          {activeTab === "utilities" && (
            <div className="space-y-10 max-w-3xl">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">CSS-Utilities</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="font-mono text-sm text-primary mb-2">.gradient-gold</p>
                      <div className="h-10 rounded-lg gradient-gold" />
                      <p className="text-xs text-muted-foreground mt-2">
                        Goldener Verlauf für CTAs und Highlights.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <p className="font-mono text-sm text-primary mb-2">.text-gradient-gold</p>
                      <p className="text-2xl font-bold text-gradient-gold">Goldener Textgradient</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Für Section-Überschriften und Highlights.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <p className="font-mono text-sm text-primary mb-2">.glass-dark</p>
                      <div className="glass-dark rounded-lg p-4 border border-border">
                        <p className="text-foreground text-sm">Glassmorphism-Effekt</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Halbtransparenter Hintergrund mit Backdrop-Blur.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Border-Radius</h2>
                <div className="flex gap-4">
                  {[
                    { label: "sm", cls: "rounded-sm" },
                    { label: "md", cls: "rounded-md" },
                    { label: "lg", cls: "rounded-lg" },
                    { label: "xl", cls: "rounded-xl" },
                    { label: "full", cls: "rounded-full" },
                  ].map((r) => (
                    <div key={r.label} className="flex flex-col items-center gap-2">
                      <div className={`w-14 h-14 bg-primary ${r.cls}`} />
                      <span className="text-xs text-muted-foreground font-mono">{r.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </main>
      <CinemaFooter />
    </div>
  );
};

export default DesignSystem;
