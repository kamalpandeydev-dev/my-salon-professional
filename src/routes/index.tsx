import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Award,
  Heart,
  Instagram,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import bridalImg from "@/assets/bridal.jpg";
import nailsImg from "@/assets/nails.jpg";
import hairImg from "@/assets/hair.jpg";
import facialImg from "@/assets/facial.jpg";
import makeupImg from "@/assets/makeup.jpg";
import bridalVideo from "@/assets/video-bg-compressed.mp4";
import { popularServices } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { ContactForm } from "@/components/ContactForm";
import { business, telLink, whatsappLink } from "@/lib/business";

const title =
  "My Salon Professional | Beauty Parlor & Bridal Makeup in Vasundhara Enclave, East Delhi";
const description =
  "Premium beauty parlor in Vasundhara Enclave offering bridal makeup, balayage, keratin, acrylic nails, facials & more. Trusted salon for women in East Delhi & Delhi NCR.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const galleryItems = [
  { img: bridalImg, label: "Bridal Makeup" },
  { img: hairImg, label: "Balayage & Hair" },
  { img: nailsImg, label: "Acrylic Nails" },
  { img: facialImg, label: "Skin & Facials" },
  { img: makeupImg, label: "HD Makeup" },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Hygiene first",
    text: "Sanitised tools, single-use disposables and a spotless studio for every guest.",
  },
  {
    icon: Award,
    title: "Trained experts",
    text: "Years of experience in bridal, hair, skin and nails — work you can trust.",
  },
  {
    icon: Sparkles,
    title: "Premium products",
    text: "Loreal, Schwarzkopf, MAC, Huda Beauty and more — only the best touches your skin.",
  },
  {
    icon: Heart,
    title: "Personalised care",
    text: "Every service is tailored to you — your skin, your style, your occasion.",
  },
];

const testimonials = [
  {
    name: "Pooja R.",
    text: "Booked them for my wedding and I cannot stop staring at my photos. Best bridal makeup artist in East Delhi — period.",
    area: "Mayur Vihar",
  },
  {
    name: "Anjali S.",
    text: "I’ve been getting my hair balayage and keratin done here for over a year. The hair feels amazing every single time.",
    area: "Vasundhara Enclave",
  },
  {
    name: "Sneha K.",
    text: "Acrylic nails done so beautifully and they last forever. The studio is clean, calm and the staff is so warm.",
    area: "IP Extension",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden salon-hero-section">
        {/* 🎥 Background Layers Stack */}
        <div className="absolute inset-0 salon-hero-video-wrapper">
          {/* LAYER 1: Static interior fallback image sitting behind the video */}
          <div
            className="absolute inset-0 salon-static-bg"
            style={{ backgroundImage: `url(${heroImg})` }}
          />

          {/* LAYER 2: Moving abstract pattern video backdrop */}
          <video
            autoPlay
            loop={true}
            muted
            playsInline
            poster={heroImg} // Uses your heroImg as a structural element while downloading
            className="w-full h-full object-cover salon-bg-video"
          >
            <source src={bridalVideo} type="video/mp4" />
          </video>

          {/* LAYER 3: The peach color wash overlay that sets combined transparency */}
          <div className="absolute inset-0 salon-video-overlay" />
        </div>

        {/* Keeping your exact content structural layout and dynamic data intact */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-float-in">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                <span className="w-8 h-px bg-accent" /> Premium salon in Vasundhara Enclave
              </p>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display font-semibold leading-[1.05]">
                Where beauty <span className="text-gradient-gold">becomes a feeling.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                {business.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold hover:opacity-90 transition"
                >
                  <MessageCircle className="w-4 h-4" fill="currentColor" /> Book on WhatsApp
                </a>
                <a
                  href={telLink}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-semibold hover:bg-secondary transition"
                >
                  <Phone className="w-4 h-4" /> {business.phoneDisplay}
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="ml-1 font-medium text-foreground">Loved by 500+ clients</span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-border" />
                <span>Open 7 days · Walk-ins welcome</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-soft aspect-[5/6] lg:aspect-[4/5]">
                <img
                  src={heroImg}
                  alt="Luxurious salon interior at My Salon Professional Vasundhara Enclave"
                  className="w-full h-full object-cover"
                  width={1536}
                  height={1024}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card border border-border p-5 shadow-soft max-w-xs animate-float-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-accent-foreground">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Today’s favourite
                    </p>
                    <p className="text-sm font-semibold">Bridal Glow Package</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* QUICK HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyUs.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-border p-6 hover:shadow-soft transition"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-blush flex items-center justify-center text-primary mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          eyebrow="What we do best"
          title={
            <>
              Loved services at <span className="text-gradient-gold">My Salon Professional</span>
            </>
          }
          description="From bridal makeup to balayage, acne treatments to acrylic nails — every service is crafted to make you feel beautifully you."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our work"
            title={
              <>
                A studio that <span className="text-gradient-gold">loves details</span>
              </>
            }
            description="A glimpse of our most-loved looks from brides, parties and everyday beauty."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {galleryItems.map((g, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : ""} aspect-square`}
              >
                <img
                  src={g.img}
                  alt={`${g.label} at My Salon Professional Vasundhara Enclave`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                  {g.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              See full gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Kind words"
          title={
            <>
              Loved by women across <span className="text-gradient-gold">East Delhi</span>
            </>
          }
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-card border border-border p-6 shadow-soft"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-muted-foreground"> · {t.area}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* INSTAGRAM TEASER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl bg-gradient-blush p-8 sm:p-12 text-center">
          <Instagram className="w-8 h-8 mx-auto text-primary" />
          <h3 className="mt-4 text-2xl sm:text-3xl font-display font-semibold">
            Follow our daily glow-ups
          </h3>
          <p className="mt-2 text-muted-foreground">
            See behind-the-scenes, fresh looks and client transformations.
          </p>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            <Instagram className="w-4 h-4" /> {business.instagramHandle}
          </a>
        </div>
      </section>

      <CTABanner />

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in touch"
              title={
                <>
                  Let’s plan your <span className="text-gradient-gold">beauty appointment</span>
                </>
              }
              description="Fill the form and we’ll get back within a few hours. For instant bookings, WhatsApp us directly."
            />
            <div className="mt-8 space-y-4 text-sm">
              <p>
                <span className="font-semibold">Address:</span> {business.fullAddress}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a className="text-primary" href={telLink}>
                  {business.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a className="text-primary" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-soft">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
