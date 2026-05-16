import { useState, FormEvent } from "react";
import { MessageCircle, Check } from "lucide-react";

const PHONE = "254700000000";

export function Booking() {
  const [done, setDone] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "");
    const text =
      `Hello! I just booked an appointment.%0A` +
      `Name: ${encodeURIComponent(get("name"))}%0A` +
      `Phone: ${encodeURIComponent(get("phone"))}%0A` +
      `Email: ${encodeURIComponent(get("email"))}%0A` +
      `Date: ${encodeURIComponent(get("date"))}%0A` +
      `Time: ${encodeURIComponent(get("time"))}%0A` +
      `Category: ${encodeURIComponent(get("category"))}%0A` +
      `Style: ${encodeURIComponent(get("style"))}%0A` +
      `Notes: ${encodeURIComponent(get("notes"))}`;
    setWaUrl(`https://wa.me/${PHONE}?text=${text}`);
    setDone(true);
  };

  const input = "w-full bg-[var(--mist)] border border-transparent focus:border-[var(--teal)] outline-none rounded-lg px-4 py-3 font-body text-[var(--ink)] transition-colors";

  return (
    <section id="book" className="py-24 md:py-32 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-stretch">
        <div className="relative rounded-3xl overflow-hidden min-h-[460px] reveal">
          <img
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200"
            alt="Shoe fitting"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="label-mono !text-white/70">— By appointment</span>
            <p className="font-display text-3xl md:text-4xl leading-tight mt-2">
              "We'll have your size, ready and waiting."
            </p>
          </div>
        </div>

        <div className="reveal">
          <span className="label-mono">— Make it yours</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-8">Reserve your fitting.</h2>

          {done ? (
            <div className="bg-[var(--mist)] rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[var(--teal)] grid place-items-center mx-auto text-white">
                <Check size={26} />
              </div>
              <p className="font-display text-2xl mt-5">Your appointment is confirmed!</p>
              <p className="text-[var(--ink)]/70 mt-2">Tap below to send it to us on WhatsApp.</p>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-pill btn-primary mt-6 inline-flex">
                <MessageCircle size={16} /> Send via WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" required placeholder="Full name" className={input} />
                <input name="phone" required placeholder="Phone number" className={input} />
              </div>
              <input name="email" type="email" required placeholder="Email" className={input} />
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="date" type="date" required className={input} />
                <select name="time" required defaultValue="" className={input}>
                  <option value="" disabled>Pick a time</option>
                  {["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select name="category" required defaultValue="" className={input}>
                  <option value="" disabled>Category</option>
                  {["Kids","Teens","Women's","Men's"].map(t => <option key={t}>{t}</option>)}
                </select>
                <select name="style" required defaultValue="" className={input}>
                  <option value="" disabled>Style</option>
                  {["Casual","Sport","Fashion","Official","Hike"].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <textarea name="notes" rows={4} placeholder="Special requests (size notes, occasion, gift...)" className={input} />
              <button type="submit" className="btn-pill btn-primary w-full justify-center">Confirm Appointment</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
