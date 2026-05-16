import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, run: boolean, ms = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, ms]);
  return v;
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const a = useCountUp(500, run);
  const b = useCountUp(1000, run);

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--mist)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden reveal">
          <img
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1000"
            alt="Inside our boutique"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-[var(--cream)] px-5 py-3 rounded-full">
            <span className="label-mono">Est. in your city</span>
          </div>
        </div>
        <div ref={ref} className="reveal">
          <span className="label-mono">— Our story</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 leading-[1.05]">
            Shoes that fit your every chapter.
          </h2>
          <p className="mt-6 text-[var(--ink)]/80 font-body text-lg leading-loose">
            Sole & Story began with a simple belief: a good pair of shoes is never just a purchase — it's
            a quiet promise to your day. We curate footwear for every age and every occasion, and we still
            do it the old way: by hand, by fit, and by getting to know the foot in front of us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-5 py-2 rounded-full bg-[var(--teal)] text-white font-sans text-sm tracking-wider">
              {a}+ Brands
            </span>
            <span className="px-5 py-2 rounded-full bg-[var(--teal)] text-white font-sans text-sm tracking-wider">
              {b.toLocaleString()}+ Happy Customers
            </span>
            <span className="px-5 py-2 rounded-full bg-[var(--teal)] text-white font-sans text-sm tracking-wider">
              All Ages Served
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
