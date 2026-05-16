const row1 = ["Nike","Adidas","Puma","Vans","Converse","Clarks","Zara","Skechers","New Balance","On Running","Hoka","Asics","Brooks","Under Armour","Crocs"];
const row2 = ["Dr. Martens","Timberland","Birkenstock","UGG","Cole Haan","Gucci","Prada","Manolo Blahnik","Berluti","Allen Edmonds","JM Weston","Santoni","Campa","Umoja","See Kai Run"];

function Row({ items, dir }: { items: string[]; dir: "l" | "r" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`marquee-track ${dir === "l" ? "marquee-l" : "marquee-r"}`}>
        {doubled.map((b, i) => (
          <span key={i} className="flex items-center gap-8 px-6 shrink-0">
            <span
              className="font-sans font-bold uppercase text-3xl md:text-5xl whitespace-nowrap"
              style={{ color: i % 2 === 0 ? "var(--ink)" : "var(--teal)" }}
            >
              {b}
            </span>
            <span className="text-[var(--leather)] text-3xl">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Brands() {
  return (
    <section id="brands" className="py-20 md:py-28 bg-[var(--cream)] border-y border-[var(--leather)]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 reveal mb-10">
        <span className="label-mono">— On our shelves</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">500+ Brands. Hand picked.</h2>
      </div>
      <div className="space-y-6">
        <Row items={row1} dir="l" />
        <Row items={row2} dir="r" />
      </div>
    </section>
  );
}
