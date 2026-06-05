import {
  Sparkles,
  Scissors,
  Brush,
  Crown,
  Hand,
  Flower2,
  Heart,
  Droplets,
  Palette,
  Wand2,
  Star,
  Gem,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  category: "Hair" | "Makeup" | "Nails" | "Skin" | "Body" | "Training";
  description: string;
  icon: LucideIcon;
  popular?: boolean;
};

export const services: Service[] = [
  // Bridal & Makeup
  { slug: "bridal-makeup", name: "Bridal Makeup", category: "Makeup", icon: Crown, popular: true,
    description: "Signature HD bridal makeup with airbrush finish, premium products and a long-lasting flawless look for your big day." },
  { slug: "hd-makeup", name: "HD Makeup", category: "Makeup", icon: Sparkles, popular: true,
    description: "High-definition makeup that looks luminous in person and picture-perfect on camera." },
  { slug: "airbrush-makeup", name: "Airbrush Makeup", category: "Makeup", icon: Wand2,
    description: "Featherlight airbrush base for a silky, poreless finish that lasts all day and night." },
  { slug: "engagement-makeup", name: "Engagement Makeup", category: "Makeup",  icon: Heart,
    description: "Romantic, glow-from-within makeup designed specially for your engagement and roka." },
  { slug: "party-makeup", name: "Party Makeup", category: "Makeup", icon: Star,
    description: "Statement looks for cocktails, sangeet nights and parties — bold, beautiful and bespoke." },
  { slug: "bridal-makeup-services", name: "Bridal Makeup Packages", category: "Makeup", icon: Gem,
    description: "Curated bridal packages covering pre-bridal skin care, trials, mehendi, haldi and the wedding day." },

  // Hair
  { slug: "balayage", name: "Balayage", category: "Hair", icon: Palette, popular: true,
    description: "Hand-painted balayage hair color in Delhi for a soft, sun-kissed and natural dimension." },
  { slug: "hair-color", name: "Global Hair Color", category: "Hair", icon: Palette,
    description: "Premium ammonia-free global colour to refresh, brighten or completely transform your hair." },
  { slug: "root-touch-up", name: "Root Touch Up", category: "Hair", icon: Brush,
    description: "Seamless root touch-up to keep your colour looking fresh between salon visits." },
  { slug: "hair-smoothening", name: "Hair Smoothening", category: "Hair", icon: Scissors, popular: true,
    description: "Frizz-free, silky smooth hair with our premium smoothening treatments." },
  { slug: "hair-straightening", name: "Hair Straightening", category: "Hair", icon: Scissors,
    description: "Salon-grade permanent straightening for sleek, manageable, poker-straight hair." },
  { slug: "keratin-treatment", name: "Keratin Treatment", category: "Hair", icon: Droplets,
    description: "Repair, strengthen and smooth damaged hair with our nourishing keratin treatments." },
  { slug: "hair-spa", name: "Hair Spa", category: "Hair", icon: Flower2,
    description: "Deep-conditioning hair spa rituals to restore shine, softness and scalp health." },
  { slug: "scalp-treatment", name: "Scalp Treatment", category: "Hair", icon: Droplets,
    description: "Targeted scalp therapies for dandruff, dryness and healthy hair growth." },
  { slug: "blow-dry", name: "Blow Dry & Styling", category: "Hair", icon: Wand2,
    description: "Voluminous blowouts and styling — from sleek and straight to bouncy curls." },
  { slug: "box-braids", name: "Box Braids", category: "Hair", icon: Scissors,
    description: "Neat, long-lasting box braids done with care and precision." },
  { slug: "braids", name: "Braids & Updos", category: "Hair", icon: Scissors,
    description: "Beautiful braids, fishtails and updos for every occasion." },
  { slug: "shampoo-conditioning", name: "Shampoo + Conditioning", category: "Hair", icon: Droplets,
    description: "Salon-grade wash and condition with premium products for soft, fragrant hair." },

  // Nails
  { slug: "acrylic-nails", name: "Acrylic Nails", category: "Nails", icon: Hand, popular: true,
    description: "Strong, beautifully shaped acrylic nails — the best in East Delhi for length and finish." },
  { slug: "nail-extensions", name: "Nail Extensions", category: "Nails", icon: Hand,
    description: "Gel and acrylic nail extensions in every length and shape you can dream of." },
  { slug: "nail-art", name: "Nail Art", category: "Nails", icon: Sparkles,
    description: "Custom nail art — from minimal chrome to intricate hand-painted designs." },
  { slug: "manicure", name: "Manicure", category: "Nails", icon: Hand,
    description: "Classic, spa and luxury manicures that leave your hands silky and your nails glowing." },
  { slug: "pedicure", name: "Pedicure", category: "Nails", icon: Hand,
    description: "Relaxing pedicures with exfoliation, massage and a perfect polish finish." },

  // Skin & Facial
  { slug: "facial-cleanup", name: "Facial & Cleanup", category: "Skin", icon: Flower2, popular: true,
    description: "Deep-cleansing facials and cleanups suited to your skin type for an instant glow." },
  { slug: "acne-treatments", name: "Acne Treatments", category: "Skin", icon: Droplets,
    description: "Gentle, effective acne treatments to calm breakouts and clear congested skin." },
  { slug: "de-tan-treatment", name: "De-Tan Treatment", category: "Skin", icon: Sparkles,
    description: "Brightening de-tan therapy that reverses sun damage and evens out your skin tone." },
  { slug: "skin-glow", name: "Skin Glow Services", category: "Skin", icon: Star,
    description: "Targeted glow treatments for radiant, healthy, picture-ready skin." },

  // Body & Waxing
  { slug: "body-waxing", name: "Body Waxing", category: "Body", icon: Flower2,
    description: "Smooth, less-painful body waxing using premium roll-on and rica wax." },
  { slug: "waxing-packages", name: "Waxing Packages", category: "Body", icon: Gem,
    description: "Affordable waxing packages combining arms, legs, underarms and full body." },
  { slug: "threading", name: "Threading", category: "Body", icon: Brush,
    description: "Precise eyebrow, upper-lip and face threading for clean, defined features." },

  // Training
  { slug: "beauty-parlor-course", name: "Beauty Parlor Course", category: "Training", icon: Crown,
    description: "Professional beauty parlor course — learn makeup, hair, skin and nails from working experts." },
  { slug: "beauty-therapist", name: "Beauty Therapist Training", category: "Training", icon: Heart,
    description: "Become a certified beauty therapist with hands-on training and live client practice." },
];

export const popularServices = services.filter((s) => s.popular);
