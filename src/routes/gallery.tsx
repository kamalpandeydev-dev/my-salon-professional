import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import heroImg from "@/assets/hero.jpg";
import bridalImg from "@/assets/bridal.jpg";
import nailsImg from "@/assets/nails.jpg";
import hairImg from "@/assets/hair.jpg";
import facialImg from "@/assets/facial.jpg";
import makeupImg from "@/assets/makeup.jpg";

const title = "Gallery | My Salon Professional — Vasundhara Enclave, East Delhi";
const description = "Bridal makeup, balayage, acrylic nails, facials and salon styling work by My Salon Professional in Vasundhara Enclave, East Delhi.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { img: bridalImg, label: "Bridal HD Makeup" },
  { img: hairImg, label: "Balayage Hair Color" },
  { img: nailsImg, label: "Acrylic Nail Art" },
  { img: facialImg, label: "Skin Glow Facial" },
  { img: makeupImg, label: "Party Makeup Setup" },
  { img: heroImg, label: "The Studio" },
  { img: bridalImg, label: "Engagement Makeup" },
  { img: hairImg, label: "Keratin Smoothening" },
  { img: nailsImg, label: "Nail Extensions" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-blush py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Gallery</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-semibold">
            Looks we’ve <span className="text-gradient-gold">loved creating</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A small selection of our recent bridal, hair, skin and nail work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {items.map((g, i) => (
            <figure key={i} className="mb-4 break-inside-avoid group relative overflow-hidden rounded-2xl">
              <img src={g.img} alt={`${g.label} — My Salon Professional Vasundhara Enclave`} loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 p-3 text-white text-sm font-medium bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
