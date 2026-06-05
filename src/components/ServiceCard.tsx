import type { Service } from "@/lib/services";
import { whatsappLink } from "@/lib/business";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group relative rounded-2xl bg-card border border-border p-6 hover:shadow-soft hover:-translate-y-1 transition-all">
      <div className="w-12 h-12 rounded-xl bg-gradient-blush flex items-center justify-center text-primary mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-display font-semibold">{service.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
      <a
        href={whatsappLink(`Hi! I'd like to book ${service.name} at My Salon Professional.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition"
      >
        Enquire on WhatsApp <ArrowRight className="w-4 h-4" />
      </a>
    </article>
  );
}
