import { Phone, MessageCircle } from "lucide-react";
import { whatsappLink, telLink } from "@/lib/business";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" fill="white" />
      </a>
      <a
        href={telLink}
        aria-label="Call us"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold text-accent-foreground shadow-gold hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
