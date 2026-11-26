"use client";

import { allItems } from "@/lib/menu";
import { useOrder } from "./OrderContext";
import { PlusIcon } from "./Icons";

const picks = allItems.filter((i) => i.tag === "Bestseller" || i.tag === "Spicy");
const tints = ["bg-haldi-300", "bg-neel-200", "bg-mirchi-400/25", "bg-haldi-200"];

export default function Bestsellers() {
  const { order, add } = useOrder();

  return (
    <section id="bestsellers" className="mx-auto max-w-[1720px] px-5 pt-20 sm:px-8 lg:px-12 xl:px-16 sm:pt-28">
      <div data-reveal="left" className="mb-8">
        <p className="font-hindi text-xl text-haldi-600">सबसे ज़्यादा पसंद</p>
        <h2 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-neel-900 sm:text-5xl">
          Our bestsellers
        </h2>
      </div>

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {picks.map((item, i) => {
          const qty = order[item.id] ?? 0;
          return (
            <li
              key={item.id}
              data-reveal
              style={{ ["--i" as string]: i }}
              className="group relative overflow-hidden rounded-[1.75rem] bg-white p-5 ring-1 ring-neel-100 transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* arch blob that grows on hover */}
              <span
                className={`jharokha absolute -right-6 -top-6 h-28 w-24 ${tints[i % tints.length]} transition-transform duration-500 group-hover:scale-[1.6]`}
              />
              <div className="relative">
                <p className="font-hindi text-neel-600/80">{item.hindi}</p>
                <h3 className="mt-1 font-display text-xl font-bold leading-tight text-neel-900 sm:text-2xl">{item.name}</h3>
                <p className="mt-6 font-display text-2xl font-extrabold text-neel-900">
                  ₹{item.price}
                  <span className="ml-1 font-sans text-xs font-medium text-muted">/ {item.unit}</span>
                </p>
                <button
                  type="button"
                  onClick={() => add(item.id)}
                  className="press mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-neel-700 py-2.5 text-sm font-bold text-white hover:bg-neel-800"
                  aria-label={`Add ${item.name}`}
                >
                  <PlusIcon width={16} height={16} />
                  {qty > 0 ? <span key={qty} className="animate-pop">Added · {qty}</span> : "Add"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
