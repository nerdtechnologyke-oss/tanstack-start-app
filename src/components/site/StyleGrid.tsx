const styles = [
  { name: "Casual", tag: "for the in-between days", img: "https://images.unsplash.com/photo-1520256862855-398228c41684?w=800", span: "md:col-span-2 md:row-span-2" },
  { name: "Sport",   tag: "built to move with you",  img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800", span: "" },
  { name: "Fashion", tag: "wear the conversation",   img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800", span: "" },
  { name: "Official",tag: "presence, in a pair",     img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800", span: "md:col-span-2" },
  { name: "Hike",    tag: "the trail is calling",    img: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=800", span: "" },
];

export function StyleGrid() {
  return (
    <section className="py-24 md:py-32 bg-[var(--mist)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12 reveal">
          <div>
            <span className="label-mono">— A style for every story</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">Five ways to walk.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 reveal">
          {styles.map((s) => (
            <div
              key={s.name}
              className={`group relative overflow-hidden rounded-2xl bg-white aspect-[4/5] ${s.span}`}
            >
              <img src={s.img} alt={s.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <span className="absolute top-0 left-0 h-1 w-full bg-[var(--teal)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-[0.7rem] tracking-[0.22em] uppercase">{s.name}</span>
                <p className="font-body italic text-base md:text-lg mt-1 leading-snug">{s.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
