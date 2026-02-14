import { Plane, Crosshair, Zap, Shield, Eye, Cpu } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "VTOL Capability",
    desc: "Automatic transition between vertical and horizontal flight modes with full autonomous operation.",
  },
  {
    icon: Crosshair,
    title: "ISR-Strike System",
    desc: "Integrated reconnaissance and strike platform — recoverable and reusable.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    desc: "Foldable design fits into a single case. Operable by one soldier, mission-ready in seconds.",
  },
  {
    icon: Eye,
    title: "Persistent Recon",
    desc: "Prolonged target search and tracking with precision geo-location capabilities.",
  },
  {
    icon: Cpu,
    title: "AI-Enhanced",
    desc: "Intuitive controls with video-click targeting and confirmed high-speed dive attack.",
  },
  {
    icon: Shield,
    title: "240 Min Endurance",
    desc: "Long flight time with multi-spectrum camera gimbal for extended surveillance missions.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-background py-20 px-6 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Exclusive Patented Design
        </p>
        <h2 className="mb-12 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          KEY CAPABILITIES
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group border border-border bg-card p-6 transition-all hover:border-primary/50 hover:border-glow"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <f.icon className="mb-4 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mb-2 font-heading text-lg font-bold tracking-tight text-foreground">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
