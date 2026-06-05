// Single source of truth for business info. Edit here to update site-wide.
export const business = {
  name: "My Salon Professional",
  tagline: "Premium Beauty & Bridal Salon in Vasundhara Enclave, East Delhi",
  shortDescription:
    "An elegant, hygienic, and personalized beauty experience for the women of Vasundhara Enclave, Mayur Vihar, Patparganj, IP Extension and all of East Delhi.",
  phone: "+918800223215",
  phoneDisplay: "+91 88002 23215",
  whatsapp: "918800223215",
  email: "hello@mysalonprofessional.in",
  address: {
    line1: "Shop No. B-16, B-Block",
    line2: "Near One On One Gym, Vasundhara Enclave",
    city: "New Delhi",
    region: "Delhi",
    postalCode: "110096",
    country: "IN",
  },
  fullAddress:
    "Shop No. B-16, B-Block, near One On One Gym, Vasundhara Enclave, New Delhi, Delhi 110096",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=My+Salon+Professional+Vasundhara+Enclave+B-16+B-Block+Delhi+110096",
  instagram: "https://www.instagram.com/mysalonprofessional_25",
  instagramHandle: "@mysalonprofessional_25",
  hours: [
    { day: "Monday", time: "10:00 AM – 8:30 PM" },
    { day: "Tuesday", time: "10:00 AM – 8:30 PM" },
    { day: "Wednesday", time: "10:00 AM – 8:30 PM" },
    { day: "Thursday", time: "10:00 AM – 8:30 PM" },
    { day: "Friday", time: "10:00 AM – 8:30 PM" },
    { day: "Saturday", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday", time: "10:00 AM – 8:00 PM" },
  ],
  // Schema.org opening hours specification
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "20:30" },
    { days: ["Saturday"], opens: "10:00", closes: "21:00" },
    { days: ["Sunday"], opens: "10:00", closes: "20:00" },
  ],
  serviceArea: [
    "Vasundhara Enclave",
    "Mayur Vihar",
    "Patparganj",
    "IP Extension",
    "Noida Sector 62",
    "Karkardooma",
    "Anand Vihar",
    "East Delhi",
    "Delhi NCR",
  ],
  geo: { latitude: 28.6125, longitude: 77.3219 }, // approximate Vasundhara Enclave
};

export const whatsappLink = (msg = "Hi! I'd like to book an appointment at My Salon Professional.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${business.phone}`;
