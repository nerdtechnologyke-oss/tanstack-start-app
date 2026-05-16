import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Music2 } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--ink)] text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
        <div className="reveal">
          <span className="label-mono !text-[var(--teal)]">— Say hello</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 leading-tight">
            Let's find your<br />perfect pair.
          </h2>
          <div className="mt-10 space-y-5 text-white/85">
            <a href="tel:+254700000000" className="flex items-center gap-4 hover:text-[var(--teal)] transition">
              <Phone size={20} className="text-[var(--teal)]" /> +254 700 000 000
            </a>
            <a href="https://wa.me/254700000000" className="flex items-center gap-4 hover:text-[var(--teal)] transition">
              <MessageCircle size={20} className="text-[var(--teal)]" /> WhatsApp us
            </a>
            <a href="mailto:hello@soleandstory.co.ke" className="flex items-center gap-4 hover:text-[var(--teal)] transition">
              <Mail size={20} className="text-[var(--teal)]" /> hello@soleandstory.co.ke
            </a>
            <div className="flex items-center gap-4">
              <MapPin size={20} className="text-[var(--teal)]" /> Boutique Lane, Nairobi
            </div>
          </div>
        </div>

        <div className="reveal md:pl-12 md:border-l border-white/10">
          <span className="label-mono !text-[var(--teal)]">— Follow along</span>
          <h3 className="font-display text-3xl md:text-4xl mt-3 mb-8">On the socials.</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Music2, href: "#", label: "TikTok" },
              { Icon: MessageCircle, href: "https://wa.me/254700000000", label: "WhatsApp", solid: true },
            ].map(({ Icon, href, label, solid }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`w-14 h-14 rounded-full grid place-items-center border transition-all duration-300 ${
                  solid ? "bg-[var(--teal)] border-[var(--teal)]" : "border-white/30 hover:bg-[var(--teal)] hover:border-[var(--teal)]"
                }`}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
          <p className="mt-12 text-white/60 max-w-sm leading-loose">
            Tag us in your fits. We feature our favorite pairs from real customers, every week.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20 pt-8 border-t border-white/10 text-center">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-white/50">
          © {new Date().getFullYear()} Sole & Story · Crafted with care
        </p>
      </div>
    </section>
  );
}
