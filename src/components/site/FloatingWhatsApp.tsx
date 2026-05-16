import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/254700000000?text=Hello!%20I%27d%20like%20to%20inquire%20about%20your%20shoes."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[var(--teal)] text-white grid place-items-center shadow-xl wa-float"
    >
      <MessageCircle size={24} />
      <span className="absolute right-16 bg-[var(--ink)] text-white text-xs font-sans tracking-wider uppercase px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat with us!
      </span>
    </a>
  );
}
