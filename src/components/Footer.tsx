import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Mail, Clock } from "lucide-react";
import { business, telLink } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-display">
              My Salon <span className="text-gradient-gold">Professional</span>
            </h3>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              A premium beauty parlor in Vasundhara Enclave offering bridal makeup,
              hair, nails, skin and body services — crafted with care for the women
              of East Delhi and Delhi NCR.
            </p>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-background/80 hover:text-accent transition"
            >
              <Instagram className="w-5 h-5" /> {business.instagramHandle}
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/80">
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent">All Services</Link></li>
              <li><Link to="/bridal" className="hover:text-accent">Bridal Makeup</Link></li>
              <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-accent">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Visit Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/80">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {business.fullAddress}
                </a>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <a href={telLink} className="hover:text-accent">{business.phoneDisplay}</a>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <a href={`mailto:${business.email}`} className="hover:text-accent">{business.email}</a>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>Open 7 days · 10 AM – 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider my-10" />
        <p className="text-xs text-background/60 text-center">
          © {new Date().getFullYear()} {business.name}. All rights reserved. ·
          Beauty parlor & bridal makeup in Vasundhara Enclave, East Delhi.
        </p>
      </div>
    </footer>
  );
}
