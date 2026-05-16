import { useEffect, useState } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600",
    head: "Every Step, A Statement.",
    sub: "Sneakers · Sport · Street",
  },
  {
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1600",
    head: "Clean Lines. Bold Moves.",
    sub: "Casual · Minimalist · Everyday",
  },
  {
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1600",
    head: "Walk Into Every Room Ready.",
    sub: "Fashion · Official · Women's Collection",
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1600",
    head: "Trail Ready. Always.",
    sub: "Hike · Outdoor · Adventure",
  },
  {
    img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=1600",
    head: "Little Feet. Big Adventures.",
    sub: "Kids · Teens · Play",
  },
];

const tickerBrands = ["Nike", "Adidas", "Hoka", "Birkenstock", "On Running", "Vans"];

export function Hero() {
  const [i, setI] = useState(0);
  const [t, setT] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const id = setInterval(() => setT((p) => (p + 1) % tickerBrands.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={s.img}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.img}
            alt={s.head}
            className={`w-full h-full object-cover ${i === idx ? "ken-burns" : ""}`}
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/75 via-[#1A1A1A]/40 to-transparent" />
        </div>
      ))}

      {/* Top ticker badge */}
      <div className="absolute top-24 right-6 md:right-10 z-10">
        <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/25">
          <span className="text-[var(--teal)]">✦</span>
          <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase">New Arrivals In</span>
          <div className="relative h-4 overflow-hidden w-20">
            {tickerBrands.map((b, idx) => (
              <span
                key={b}
                className={`absolute inset-0 font-mono text-[0.75rem] transition-all duration-500 ${
                  t === idx ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <div className="max-w-2xl text-white">
            <span className="label-mono !text-white/70">Sole & Story Boutique</span>
            <h1 className="font-display font-bold leading-[0.95] mt-4 text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] tracking-tight">
              {slides[i].head}
            </h1>
            <p className="mt-6 font-body text-lg md:text-xl text-white/85 italic">{slides[i].sub}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#book" className="btn-pill btn-primary">Book an Appointment</a>
              <a href="#shop" className="btn-pill btn-ghost">Browse Collections</a>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-[2px] transition-all duration-500 ${
              i === idx ? "w-12 bg-white" : "w-6 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
