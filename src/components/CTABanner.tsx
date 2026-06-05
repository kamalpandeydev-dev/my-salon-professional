import { Phone, MessageCircle } from "lucide-react";
import { whatsappLink, telLink, business } from "@/lib/business";

export function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 sm:p-14 text-center shadow-soft">
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle at 20% 20%, var(--gold), transparent 50%), radial-gradient(circle at 80% 80%, var(--rose), transparent 55%)" }} />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Book your appointment</p>
          <h2 className="mt-4 text-3xl sm:text-5xl font-display font-semibold">
            Feel beautiful. <span className="text-gradient-gold">Feel like you.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Walk-ins welcome — but appointments get our undivided attention.
            Chat with us on WhatsApp or call {business.phoneDisplay} to reserve your slot.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
            >
              <MessageCircle className="w-4 h-4" fill="white" /> Chat on WhatsApp
            </a>
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background hover:opacity-90 transition"
            >
              <Phone className="w-4 h-4" /> Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
