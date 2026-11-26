/**
 * Menu shown on the site. Prices are sample values — edit them to match
 * the shop's board. `unit` is what the price is for.
 */
export type MenuItem = {
  id: string;
  name: string;
  hindi: string;
  desc: string;
  price: number;
  unit: string;
  tag?: "Bestseller" | "Spicy" | "Fresh daily" | "Travel pack";
};

export type Category = {
  id: string;
  label: string;
  hindi: string;
  color: string; // tailwind bg class for the item dot
  items: MenuItem[];
};

export const categories: Category[] = [
  {
    id: "sweets",
    label: "Sweets",
    hindi: "मिठाई",
    color: "bg-haldi-400",
    items: [
      { id: "mawa-kachori", name: "Mawa Kachori", hindi: "मावा कचौरी", desc: "Jodhpur's famous sweet kachori, stuffed with mawa and dipped in chashni.", price: 30, unit: "piece", tag: "Bestseller" },
      { id: "moong-halwa", name: "Moong Dal Halwa", hindi: "मूंग दाल हलवा", desc: "Slow-roasted in desi ghee till it turns golden and grainy.", price: 600, unit: "kg" },
      { id: "besan-laddoo", name: "Besan Laddoo", hindi: "बेसन लड्डू", desc: "Roasted gram flour, ghee and a pinch of elaichi.", price: 440, unit: "kg" },
      { id: "kaju-katli", name: "Kaju Katli", hindi: "काजू कतली", desc: "Thin cashew diamonds with silver vark.", price: 1000, unit: "kg" },
      { id: "ghevar", name: "Ghevar", hindi: "घेवर", desc: "Honeycomb disc of crisp batter, plain or with rabri on top.", price: 480, unit: "kg", tag: "Fresh daily" },
      { id: "gulab-jamun", name: "Gulab Jamun", hindi: "गुलाब जामुन", desc: "Soft, warm and soaked in rose-cardamom syrup.", price: 20, unit: "piece" },
    ],
  },
  {
    id: "namkeen",
    label: "Namkeen",
    hindi: "नमकीन",
    color: "bg-mirchi-500",
    items: [
      { id: "bhujia", name: "Bikaneri Bhujia", hindi: "भुजिया", desc: "Thin, crunchy moth-dal sev with black pepper bite.", price: 280, unit: "kg", tag: "Bestseller" },
      { id: "mixture", name: "Jodhpuri Mixture", hindi: "मिक्सचर", desc: "Sev, boondi, peanuts and dal — the full masala mix.", price: 260, unit: "kg" },
      { id: "dal-moth", name: "Dal Moth", hindi: "दाल मोठ", desc: "Fried moth dal with a tangy chatpata masala.", price: 260, unit: "kg" },
      { id: "chana-dal", name: "Chana Dal", hindi: "चना दाल", desc: "Light, salty and crisp. Perfect with chai.", price: 240, unit: "kg" },
      { id: "mathri", name: "Methi Mathri", hindi: "मठरी", desc: "Flaky, ajwain-methi mathri. Stays fresh for days.", price: 280, unit: "kg", tag: "Travel pack" },
    ],
  },
  {
    id: "snacks",
    label: "Hot Snacks",
    hindi: "गरमा गरम",
    color: "bg-neel-500",
    items: [
      { id: "pyaz-kachori", name: "Pyaz Kachori", hindi: "प्याज़ कचौरी", desc: "Crisp shell, spicy onion filling, served with chutney.", price: 25, unit: "piece", tag: "Bestseller" },
      { id: "mirchi-bada", name: "Mirchi Bada", hindi: "मिर्ची बड़ा", desc: "Big green chili stuffed with masala aloo, fried in besan.", price: 25, unit: "piece", tag: "Spicy" },
      { id: "samosa", name: "Samosa", hindi: "समोसा", desc: "Peas and potato with whole spices, hot from the kadai.", price: 15, unit: "piece" },
      { id: "dal-kachori", name: "Dal Kachori", hindi: "दाल कचौरी", desc: "Khasta kachori with a spiced moong dal filling.", price: 20, unit: "piece" },
      { id: "masala-chai", name: "Masala Chai", hindi: "मसाला चाय", desc: "Kadak, sweet, with adrak and elaichi.", price: 15, unit: "cup" },
    ],
  },
  {
    id: "boxes",
    label: "Gift Boxes",
    hindi: "डिब्बे",
    color: "bg-neel-800",
    items: [
      { id: "mix-sweet-box", name: "Mixed Mithai Box", hindi: "मिठाई डिब्बा", desc: "Assorted sweets packed in a sturdy gift box.", price: 300, unit: "500 g" },
      { id: "namkeen-combo", name: "Namkeen Combo", hindi: "नमकीन कॉम्बो", desc: "Bhujia, mixture and dal moth — three 250 g packs.", price: 200, unit: "box", tag: "Travel pack" },
      { id: "festive-box", name: "Festive Box", hindi: "त्योहार डिब्बा", desc: "Kaju katli, laddoo and namkeen. Ideal for Diwali and weddings.", price: 650, unit: "1 kg" },
    ],
  },
];

export const allItems = categories.flatMap((c) => c.items);
