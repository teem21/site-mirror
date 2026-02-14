import { Mail, Phone } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-secondary py-20 px-6 lg:px-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Get in Touch
        </p>
        <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          REQUEST A QUOTE
        </h2>
        <p className="mb-10 text-muted-foreground">
          Contact our team for detailed specifications, pricing, and customization options 
          for the Shadow Striker 3200 tactical UAV platform.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:info@skypathuav.com"
            className="inline-flex items-center gap-2 bg-primary px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
          >
            <Mail className="h-4 w-4" />
            Email Us
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
