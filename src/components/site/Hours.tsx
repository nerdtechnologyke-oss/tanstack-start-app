import { MapPin } from "lucide-react";

const hours = [
  ["Monday – Friday", "8:00 AM – 7:00 PM"],
  ["Saturday", "9:00 AM – 6:00 PM"],
  ["Sunday", "10:00 AM – 4:00 PM"],
  ["Public Holidays", "10:00 AM – 3:00 PM"],
];

export function Hours() {
  return (
    <section className="py-24 md:py-32 bg-[var(--mist)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
        <div className="reveal">
          <span className="label-mono">— When we're open</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-8">Drop by, anytime.</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--leather)]/20">
            {hours.map(([d, h], i) => (
              <div
                key={d}
                className={`flex items-center justify-between px-6 py-5 border-l-4 border-[var(--teal)] ${
                  i % 2 === 0 ? "bg-[var(--cream)]" : "bg-white"
                }`}
              >
                <span className="font-sans text-sm tracking-wider uppercase">{d}</span>
                <span className="font-body text-[var(--ink)]/80">{h}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <span className="label-mono">— Find us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-8">Come walk in.</h2>
          <div className="flex items-start gap-3 mb-5">
            <MapPin className="text-[var(--teal)] mt-1 shrink-0" />
            <p className="font-body text-[var(--ink)]/80">
              Ground Floor, Boutique Lane<br />
              Nairobi, Kenya
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[var(--leather)]/20 aspect-[4/3]">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Nairobi&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Nairobi"
            target="_blank" rel="noopener noreferrer"
            className="btn-pill btn-primary mt-6 inline-flex"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
