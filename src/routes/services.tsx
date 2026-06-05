import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";

const title = "Salon Services in Vasundhara Enclave — Hair, Nails, Bridal & More | My Salon Professional";
const description = "Full menu of salon services in East Delhi: bridal & HD makeup, balayage, keratin, hair smoothening, acrylic nails, facials, acne treatments, body waxing and beauty courses.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const categories = ["Makeup", "Hair", "Nails", "Skin", "Body", "Training"] as const;

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-blush py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our menu</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-semibold">
            Salon services in <span className="text-gradient-gold">Vasundhara Enclave</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
            A complete beauty menu — bridal, hair, skin, nails and body care — all under one premium roof in East Delhi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {categories.map((cat) => {
          const list = services.filter((s) => s.category === cat);
          if (!list.length) return null;
          return (
            <div key={cat}>
              <SectionHeading align="left" eyebrow={cat} title={<>{cat} services</>} />
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {list.map((s) => <ServiceCard key={s.slug} service={s} />)}
              </div>
            </div>
          );
        })}
      </section>

      <CTABanner />
    </>
  );
}
