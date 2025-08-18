import { Card } from "@/components/ui/card";

const clients: string[] = [
  "LANVIN",
  "KOSE",
  "gelato pique",
  "Francfranc",
  "OLIVE des OLIVE",
  "Banner Barrett",
  "DUCATI",
  "VICTORINOX",
  "Cosme Kitchen",
  "Right-on",
  "BILLABONG",
  "ARMANI EXCHANGE",
  "I-PRIMO",
  "audio-technica",
];

export const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-studio-accent/10 text-studio-accent rounded text-sm font-medium tracking-wide mb-4">
            CLIENTS
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            さまざまなブランドの撮影をサポート
          </h2>
        </div>

        <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-studio">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
            {clients.map((name) => (
              <div
                key={name}
                className="h-20 rounded-lg bg-gradient-card flex items-center justify-center text-center px-4"
              >
                <span className="text-studio-charcoal text-sm md:text-base font-semibold tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};


