import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { FaqJsonLd } from "@/components/StructuredData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const title = "FAQ | My Salon Professional — Vasundhara Enclave, East Delhi";
const description = "Common questions about bookings, pricing, hygiene, bridal trials and salon services at My Salon Professional in Vasundhara Enclave, East Delhi.";

const faqs = [
  { q: "Where is My Salon Professional located?",
    a: "We are at Shop No. B-16, B-Block, near One On One Gym, Vasundhara Enclave, New Delhi 110096 — close to Mayur Vihar, Patparganj and IP Extension." },
  { q: "Do I need to book an appointment or can I walk in?",
    a: "Walk-ins are welcome, but we strongly recommend booking — especially for bridal makeup, hair colour, keratin and nail extensions — so we can give you our undivided attention." },
  { q: "How can I book an appointment?",
    a: "The fastest way is WhatsApp on +91 88002 23215. You can also call us or fill the contact form on this site." },
  { q: "Do you offer bridal makeup at home or destination weddings?",
    a: "Yes — we travel for bridal makeup across Delhi NCR and to destination weddings. Share your date and venue on WhatsApp for a customised quote." },
  { q: "What about hygiene and sanitisation?",
    a: "Every tool is sanitised between clients and we use single-use disposables wherever possible — for makeup applicators, waxing strips, nail files and more." },
  { q: "How long do acrylic nails / nail extensions last?",
    a: "Typically 3–4 weeks with proper care. We recommend a refill every 2–3 weeks to keep them looking flawless." },
  { q: "How long does a hair smoothening or keratin treatment last?",
    a: "Hair smoothening usually lasts 4–6 months and keratin lasts around 3–5 months depending on your hair type and aftercare." },
  { q: "Do you provide a beauty parlor course?",
    a: "Yes — we run hands-on beauty parlor and beauty therapist courses with real-client practice. WhatsApp us for the current batch schedule and fees." },
  { q: "What are your timings?",
    a: "We are open all 7 days. Monday to Friday 10 AM – 8:30 PM, Saturday 10 AM – 9 PM and Sunday 10 AM – 8 PM." },
  { q: "Do you offer packages or membership discounts?",
    a: "Yes — bridal, pre-bridal and waxing packages are available, and we run seasonal offers regularly. Ask us on WhatsApp." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <section className="bg-gradient-blush py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Helpful answers</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-semibold">Frequently asked questions</h1>
          <p className="mt-4 text-muted-foreground">Everything you need to know about visiting My Salon Professional.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CTABanner />
    </>
  );
}
