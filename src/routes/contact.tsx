import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { business, telLink, whatsappLink } from "@/lib/business";
import { Phone, MapPin, Mail, MessageCircle, Clock, Instagram } from "lucide-react";

const title = "Contact | My Salon Professional, Vasundhara Enclave — East Delhi Salon";
const description = "Visit, call or WhatsApp My Salon Professional — beauty parlor in Vasundhara Enclave, East Delhi. Open 7 days. Get directions, book an appointment online.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-blush py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Contact</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-semibold">Let’s plan your visit</h1>
          <p className="mt-4 text-muted-foreground">Reach us by WhatsApp, phone or the form below — we usually reply within a few hours.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm font-semibold">Visit us</p>
                <p className="text-sm text-muted-foreground mt-1">{business.fullAddress}</p>
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent">
                  Get directions →
                </a>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a href={telLink} className="rounded-2xl border border-border bg-card p-5 hover:shadow-soft transition group">
              <Phone className="w-5 h-5 text-primary" />
              <p className="mt-3 text-sm font-semibold group-hover:text-primary">Call now</p>
              <p className="text-sm text-muted-foreground">{business.phoneDisplay}</p>
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-border bg-card p-5 hover:shadow-soft transition group">
              <MessageCircle className="w-5 h-5 text-primary" />
              <p className="mt-3 text-sm font-semibold group-hover:text-primary">WhatsApp us</p>
              <p className="text-sm text-muted-foreground">Fastest replies</p>
            </a>
            <a href={`mailto:${business.email}`} className="rounded-2xl border border-border bg-card p-5 hover:shadow-soft transition group">
              <Mail className="w-5 h-5 text-primary" />
              <p className="mt-3 text-sm font-semibold group-hover:text-primary">Email</p>
              <p className="text-sm text-muted-foreground break-all">{business.email}</p>
            </a>
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-border bg-card p-5 hover:shadow-soft transition group">
              <Instagram className="w-5 h-5 text-primary" />
              <p className="mt-3 text-sm font-semibold group-hover:text-primary">Instagram</p>
              <p className="text-sm text-muted-foreground">{business.instagramHandle}</p>
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold"><Clock className="w-4 h-4 text-primary" /> Business hours</div>
            <ul className="mt-4 space-y-1.5 text-sm">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border aspect-video">
            <iframe
              title="My Salon Professional location map"
              src="https://www.google.com/maps?q=Vasundhara+Enclave+B-Block+New+Delhi+110096&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
          <SectionHeading align="left" eyebrow="Send a message" title="Tell us how we can help" />
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
