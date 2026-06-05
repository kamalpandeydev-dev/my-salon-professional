import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import heroImg from "@/assets/hero.jpg";
import { ShieldCheck, Award, Heart, Sparkles } from "lucide-react";

const title = "About | My Salon Professional — Vasundhara Enclave, East Delhi";
const description = "The story behind My Salon Professional — a premium beauty parlor in Vasundhara Enclave dedicated to hygienic, personalised beauty services for women across East Delhi.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Spotless hygiene", text: "Sanitised tools, single-use disposables and a calm, premium environment." },
  { icon: Award, title: "Trained experts", text: "Bridal artists, hair colourists and nail technicians with years of experience." },
  { icon: Heart, title: "Personalised care", text: "We listen first — every service is built around your skin, hair and style." },
  { icon: Sparkles, title: "Premium products", text: "Loreal, Schwarzkopf, MAC, Huda Beauty and trusted Indian brands." },
];

function About() {
  return (
    <>
      <section className="bg-gradient-blush py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our story</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-semibold">
            Beauty, the way <span className="text-gradient-gold">you deserve</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            My Salon Professional was built with a simple promise — that every woman who
            walks in should walk out feeling more like herself. Premium, personalised,
            and unhurried beauty care in the heart of Vasundhara Enclave.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/5]">
          <img src={heroImg} alt="Inside My Salon Professional in Vasundhara Enclave" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Who we are"
            title={<>A neighbourhood salon with a <span className="text-gradient-gold">premium soul</span></>}
          />
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Tucked into B-Block of Vasundhara Enclave, just next to One On One Gym, our
              studio has become a quiet favourite for women across East Delhi — from Mayur
              Vihar and Patparganj to IP Extension and beyond.
            </p>
            <p>
              We specialise in <strong>bridal makeup, balayage, keratin, acrylic nails,
              facials and acne treatments</strong> — but what brings clients back is the
              feeling. Unhurried appointments, honest advice, and beauty that lasts.
            </p>
            <p>
              We also run a <strong>professional beauty parlor course</strong> for aspiring
              beauty therapists who want to learn from working artists in a real studio
              setting.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we stand for"
            title={<>Built on <span className="text-gradient-gold">four promises</span></>}
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-card border border-border p-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center text-accent-foreground mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
