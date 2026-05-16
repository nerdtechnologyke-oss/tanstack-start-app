const services = [
  { icon: "👟", title: "Expert Fitting", body: "Personalized sizing for every foot type, every age." },
  { icon: "📅", title: "Appointment Booking", body: "Reserve your slot, skip the wait, walk in expected." },
  { icon: "👨‍👩‍👧", title: "Group Orders", body: "Family and team bulk shoe sourcing, simplified." },
  { icon: "🌍", title: "Brand Sourcing", body: "We track down any brand, any model — locally or abroad." },
  { icon: "🧹", title: "Repair & Care", body: "Cleaning, sole repair referrals, and care guidance." },
  { icon: "🎁", title: "Gift Wrapping", body: "Beautiful packaging for the shoe-shaped gift." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-14 reveal">
          <span className="label-mono">— What we do</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">Beyond the box.</h2>
          <p className="mt-5 text-[var(--ink)]/70">More than a transaction — a service built around your feet, your story, your time.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {services.map((s) => (
            <div key={s.title} className="group bg-[var(--mist)] rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]">
              <div className="w-14 h-14 rounded-full bg-[var(--teal)] grid place-items-center text-2xl mb-5">
                {s.icon}
              </div>
              <h3 className="font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[var(--ink)]/75">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
