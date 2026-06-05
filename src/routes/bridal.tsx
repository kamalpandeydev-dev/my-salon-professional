import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import bridalImg from "@/assets/bridal.jpg";
import makeupImg from "@/assets/makeup.jpg";
import { whatsappLink, telLink, business } from "@/lib/business";
import { Check, MessageCircle, Phone, Crown, Sparkles, Heart } from "lucide-react";

const title = "Bridal Makeup in Vasundhara Enclave | Best Bridal Makeup Artist East Delhi";
const description = "Premium bridal makeup in Vasundhara Enclave by My Salon Professional. HD & airbrush bridal looks, engagement, sangeet & party makeup packages in East Delhi.";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: "/bridal" },
    ],
    links: [{ rel: "canonical", href: "/bridal" }],
  }),
  component: BridalPage,
});

const packages = [
  {
    icon: Sparkles, name: "Engagement / Roka",
    features: ["HD or airbrush base", "Eye makeup + lashes", "Hairstyling", "Saree/lehenga draping", "Touch-up kit"],
  },
  {
    icon: Crown, name: "Bridal Day Package", featured: true,
    features: ["Premium HD bridal makeup", "Airbrush option available", "Bridal hairstyling", "Saree/lehenga draping", "Jewellery setting", "Dupatta setting"],
  },
  {
    icon: Heart, name: "Pre-Bridal + Bridal",
    features: ["Pre-bridal skin & hair plan", "Facials, cleanups, de-tan", "Hair spa & smoothening", "Bridal day makeup", "Mehendi / Haldi makeup add-on"],
  },
];

function BridalPage() {
  return (
    <>
      <section className="bg-gradient-blush py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Bridal & special occasion</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              Your wedding day, <span className="text-gradient-gold">beautifully you.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              From soft engagement glows to dreamy bridal HD looks — our bridal makeup
              artists in East Delhi craft makeup that lasts through every ritual,
              ceremony and photograph.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappLink("Hi! I'd like to enquire about bridal makeup packages.")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold">
                <MessageCircle className="w-4 h-4" fill="currentColor" /> Enquire on WhatsApp
              </a>
              <a href={telLink} className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-semibold hover:bg-secondary transition">
                <Phone className="w-4 h-4" /> {business.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/5]">
            <img src={bridalImg} alt="Bridal HD makeup in Vasundhara Enclave by My Salon Professional" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Bridal packages"
          title={<>Crafted for <span className="text-gradient-gold">every bride</span></>}
          description="Detailed quotes are shared on WhatsApp — every package is customised to your skin, outfit and ceremonies."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {packages.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.name}
                className={`rounded-2xl p-7 border ${p.featured ? "bg-gradient-hero border-accent shadow-gold" : "bg-card border-border"}`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-accent-foreground mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold">{p.name}</h3>
                {p.featured && <p className="text-xs uppercase tracking-wider text-accent font-semibold mt-1">Most popular</p>}
                <ul className="mt-5 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {f}</li>
                  ))}
                </ul>
                <a href={whatsappLink(`Hi! I'd like a quote for the "${p.name}" bridal package.`)} target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
                  Get quote on WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <img src={makeupImg} alt="Premium makeup tools at My Salon Professional" className="rounded-3xl shadow-soft" loading="lazy" />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Plan your trial" title={<>Tell us about your <span className="text-gradient-gold">big day</span></>} />
            <div className="mt-6 rounded-2xl bg-card border border-border p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
