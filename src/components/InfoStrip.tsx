import { site } from "@/lib/site";
import { ClockIcon, FlameIcon, GiftIcon, TruckIcon } from "./Icons";

const items = [
  { icon: ClockIcon, title: "Open daily", text: site.hours.label },
  { icon: FlameIcon, title: "Hot snacks", text: "Kachori & samosa fresh off the kadai" },
  { icon: TruckIcon, title: "Highway stop", text: "Easy parking for cars & buses" },
  { icon: GiftIcon, title: "Bulk orders", text: "Weddings, festivals & office boxes" },
];

export default function InfoStrip() {
  return (
    <section className="relative z-10 mx-auto -mt-4 max-w-[1720px] px-5 sm:px-8 lg:px-12 xl:px-16" aria-label="Shop highlights">
      <div className="grid grid-cols-2 gap-3 rounded-3xl bg-neel-800 p-3 sm:p-4 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            data-reveal
            style={{ ["--i" as string]: i }}
            className="group rounded-2xl bg-neel-700/60 p-4 transition-colors duration-300 hover:bg-neel-600"
          >
            <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-haldi-400 text-neel-950 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
              <Icon width={20} height={20} />
            </span>
            <p className="font-display text-lg font-bold text-white">{title}</p>
            <p className="mt-0.5 text-sm leading-snug text-neel-200">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
