import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

const links = [
  { href: "#shop", label: "Shop" },
  { href: "#brands", label: "Brands" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[var(--cream)] shadow-[0_6px_30px_-20px_rgba(0,0,0,0.3)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-2">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-[var(--teal)]">
              <path d="M3 14c0-1 1-2 2-2h3l4-6 5 1c2 .4 4 2 5 5l1 3c.3 1-.3 2-1.3 2H5c-1.1 0-2-.9-2-2v-1Z" />
            </svg>
            <span className="font-display text-2xl font-bold tracking-tight text-[var(--ink)]">
              Sole<span className="text-[var(--teal)]">&</span>Story
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-[var(--ink)]">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/254700000000"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-[var(--ink)]/20 grid place-items-center hover:bg-[var(--teal)] hover:text-white hover:border-transparent transition"
            >
              <MessageCircle size={18} />
            </a>
            <a href="#book" className="btn-pill btn-primary">Book Now</a>
          </div>

          <button
            className="md:hidden w-10 h-10 grid place-items-center text-[var(--ink)]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[var(--teal)] text-white transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-display text-2xl font-bold">Sole&Story</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="w-10 h-10 grid place-items-center">
            <X />
          </button>
        </div>
        <nav className="flex flex-col items-start gap-6 px-8 pt-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl"
            >
              {l.label}
            </a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="btn-pill bg-white text-[var(--ink)] mt-6">Book Now</a>
        </nav>
      </div>
    </>
  );
}
