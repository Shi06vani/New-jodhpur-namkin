/**
 * All shop details live here. Update the phone, WhatsApp and hours
 * with the real values before going live.
 */
export const site = {
  name: "New Jodhpur Sweets & Namkeens",
  shortName: "New Jodhpur",
  tagline: "Fresh mithai & crunchy namkeen on the NH65A",
  address: {
    line1: "NH65A, Ramdev Colony",
    line2: "Bar, Rajasthan 306105",
    full: "New Jodhpur Sweets and Namkeens, NH65A, Ramdev Colony, Bar, Rajasthan 306105",
  },
  // digits only, with country code
  phone: "917291085606",
  phoneDisplay: "+91 72910 85606",
  whatsapp: "917291085606",
  // TODO: confirm real opening hours (24h clock)
  hours: { open: 7, close: 22, label: "Every day · 7:00 AM – 10:00 PM" },
} as const;

export const mapsQuery = encodeURIComponent(site.address.full);
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
export const callUrl = `tel:+${site.phone}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#bestsellers", label: "Bestsellers" },
  { href: "#menu", label: "Menu" },
  { href: "#why", label: "Why us" },
  { href: "#bulk", label: "Bulk Orders" },
  { href: "#visit", label: "Visit" },
];
