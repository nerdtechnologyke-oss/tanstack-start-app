import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { StyleGrid } from "@/components/site/StyleGrid";
import { Brands } from "@/components/site/Brands";
import { Booking } from "@/components/site/Booking";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Hours } from "@/components/site/Hours";
import { Contact } from "@/components/site/Contact";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-[var(--cream)] text-[var(--ink)] overflow-x-hidden">
      <Nav />
      <Hero />
      <Categories />
      <StyleGrid />
      <Brands />
      <Booking />
      <About />
      <Services />
      <Hours />
      <Contact />
      <FloatingWhatsApp />
    </main>
  );
}
