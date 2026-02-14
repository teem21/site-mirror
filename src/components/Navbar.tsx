import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-16">
        <a href="/" className="font-heading text-xl font-bold tracking-wider text-foreground">
          SKYPATH<span className="text-primary">UAV</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {["Products", "Specifications", "Features", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          {["Products", "Specifications", "Features", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2 font-heading text-sm uppercase tracking-wider text-muted-foreground"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
