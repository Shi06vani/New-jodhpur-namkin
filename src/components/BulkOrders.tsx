import { callUrl, site, whatsappUrl } from "@/lib/site";
import { ChatIcon, GiftIcon, PhoneIcon } from "./Icons";

const occasions = [
  { title: "Weddings & shaadi", hindi: "शादी", text: "Mithai boxes, namkeen platters and halwai-style counters for your guests." },
  { title: "Diwali & festivals", hindi: "त्योहार", text: "Festive gift boxes packed with kaju katli, laddoo and namkeen." },
  { title: "Office & events", hindi: "दफ़्तर", text: "Snack boxes with kachori, samosa and sweets for meetings and functions." },
];

export default function BulkOrders() {
  return (
    <section id="bulk" className="mx-auto max-w-[1720px] px-5 py-20 sm:px-8 lg:px-12 xl:px-16 sm:py-28">
      <div className="overflow-hidden rounded-[2.25rem] bg-haldi-400">
        <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div data-reveal="left">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-neel-900 text-haldi-300">
              <GiftIcon />
            </span>
            <p className="mt-6 font-hindi text-xl text-neel-800">बड़े ऑर्डर</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold leading-tight tracking-tight text-neel-950 sm:text-5xl">
              Bulk orders for every celebration
            </h2>
            <p className="mt-4 max-w-md text-neel-900/80">
              Tell us the date, the number of guests and what you’d like. We’ll suggest a menu and keep everything packed and ready on time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(`Namaste ${site.shortName}! I want to enquire about a bulk order.\nOccasion:\nDate:\nQuantity / guests:`)}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 rounded-full bg-neel-900 px-6 py-3.5 font-bold text-white hover:bg-neel-950"
              >
                <ChatIcon width={18} height={18} /> Enquire on WhatsApp
              </a>
              <a
                href={callUrl}
                className="press inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3.5 font-bold text-neel-950 hover:bg-white"
              >
                <PhoneIcon width={18} height={18} /> Call us
              </a>
            </div>
          </div>

          <ul className="grid gap-3">
            {occasions.map((o, i) => (
              <li
                key={o.title}
                data-reveal="right"
                style={{ ["--i" as string]: i }}
                className="group flex items-start gap-4 rounded-3xl bg-white/80 p-5 transition-all duration-300 hover:translate-x-1 hover:bg-white"
              >
                <span className="jharokha grid h-14 w-11 shrink-0 place-items-end bg-neel-700 pb-2 text-center font-hindi text-xs text-haldi-200 transition-colors duration-300 group-hover:bg-mirchi-500">
                  <span className="w-full">{o.hindi}</span>
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-neel-950">{o.title}</h3>
                  <p className="mt-1 text-neel-900/75">{o.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
