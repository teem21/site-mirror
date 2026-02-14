import heroImage from "@/assets/hero-uav.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Shadow Striker 3200 UAV in flight"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end pb-20 px-6 lg:px-16">
        <div className="max-w-4xl">
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            ISR & Strike UAV
          </p>
          <h1 className="mb-6 font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-gradient-tactical">
            SHADOW STRIKER 3200
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A versatile multi-role tactical VTOL UAV combining vertical take-off and landing with 
            fixed-wing endurance. Fully autonomous, rapid-deploy, and man-portable — mission-ready in seconds.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#specs"
              className="inline-flex items-center gap-2 bg-primary px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
            >
              View Specifications
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-foreground/20 bg-transparent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Decorative scan line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="h-px w-full bg-primary animate-scan-line" />
      </div>
    </section>
  );
};

export default HeroSection;
