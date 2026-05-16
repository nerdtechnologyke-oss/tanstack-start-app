const cats = [
  { name: "Kids", img: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800", note: "Ages 2–10" },
  { name: "Teens", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800", note: "Ages 11–17" },
  { name: "Women", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800", note: "Curated edit" },
  { name: "Men", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", note: "Daily to formal" },
];

export function Categories() {
  return (
    <section id="shop" className="py-24 md:py-32 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 reveal">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="label-mono">— Shop by chapter</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">For every foot in the family.</h2>
          </div>
          <p className="max-w-sm text-[var(--ink)]/70">
            Four collections, fitted with care. From first steps to the corner office.
          </p>
        </div>
      </div>

      <div className="scroll-row overflow-x-auto pl-6 md:pl-10 reveal">
        <div className="flex gap-5 pr-6 md:pr-10">
          {cats.map((c) => (
            <a
              key={c.name}
              href="#book"
              className="group relative shrink-0 w-[78vw] sm:w-[55vw] md:w-[28rem] aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={c.img}
                alt={`${c.name} shoes`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-5 right-5 w-10 h-10 border-t-2 border-r-2 border-[var(--teal)]" />
              <div className="absolute bottom-6 left-6 text-white transition-transform duration-500 group-hover:-translate-y-1">
                <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase opacity-80">{c.note}</span>
                <h3 className="font-display text-5xl md:text-6xl font-bold leading-none mt-1">{c.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
