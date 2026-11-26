"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { categories, type MenuItem } from "@/lib/menu";
import { useOrder } from "./OrderContext";
import { MinusIcon, PlusIcon } from "./Icons";

const tagStyle: Record<NonNullable<MenuItem["tag"]>, string> = {
  Bestseller: "bg-haldi-300 text-neel-950",
  Spicy: "bg-mirchi-500 text-white",
  "Fresh daily": "bg-neel-100 text-neel-800",
  "Travel pack": "bg-neel-800 text-white",
};

function ItemCard({ item, index, dot }: { item: MenuItem; index: number; dot: string }) {
  const { order, add, remove } = useOrder();
  const qty = order[item.id] ?? 0;

  return (
    <li
      data-reveal
      style={{ ["--i" as string]: index }}
      className={`group relative flex flex-col rounded-3xl bg-white p-5 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgb(23_45_112/0.35)] ${
        qty > 0 ? "ring-2 ring-neel-500" : "ring-neel-100"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} />
            <h3 className="font-display text-xl font-bold text-neel-900">{item.name}</h3>
          </div>
          <p className="mt-0.5 pl-[18px] font-hindi text-neel-600/80">{item.hindi}</p>
        </div>
        {item.tag && (
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${tagStyle[item.tag]}`}>
            {item.tag}
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{item.desc}</p>

      <div className="mt-5 flex items-end justify-between border-t border-dashed border-neel-100 pt-4">
        <p className="font-display text-2xl font-extrabold text-neel-900">
          ₹{item.price}
          <span className="ml-1 font-sans text-sm font-medium text-muted">/ {item.unit}</span>
        </p>

        {qty === 0 ? (
          <button
            type="button"
            onClick={() => add(item.id)}
            className="press inline-flex items-center gap-1.5 rounded-full bg-neel-50 px-4 py-2.5 text-sm font-bold text-neel-700 ring-1 ring-neel-200 hover:bg-neel-700 hover:text-white"
            aria-label={`Add ${item.name}`}
          >
            <PlusIcon width={16} height={16} /> Add
          </button>
        ) : (
          <div className="animate-pop flex items-center gap-1 rounded-full bg-neel-700 p-1 text-white">
            <button
              type="button"
              onClick={() => remove(item.id)}
              className="press grid h-9 w-9 place-items-center rounded-full hover:bg-neel-600"
              aria-label={`Remove one ${item.name}`}
            >
              <MinusIcon width={16} height={16} />
            </button>
            <span key={qty} className="animate-pop w-6 text-center font-bold" aria-live="polite">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => add(item.id)}
              className="press grid h-9 w-9 place-items-center rounded-full hover:bg-neel-600"
              aria-label={`Add one more ${item.name}`}
            >
              <PlusIcon width={16} height={16} />
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const current = categories.find((c) => c.id === active)!;

  // Slide the yellow pill under the active tab
  useLayoutEffect(() => {
    const update = () => {
      const el = tabRefs.current[active];
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  return (
    <section id="menu" className="mx-auto max-w-[1720px] px-5 py-20 sm:px-8 lg:px-12 xl:px-16 sm:py-28">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div data-reveal="left">
          <p className="font-hindi text-xl text-haldi-600">आज क्या लेंगे?</p>
          <h2 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-neel-900 sm:text-5xl">
            What will it be today?
          </h2>
        </div>
        <p data-reveal="right" className="max-w-sm text-muted">
          Tap <span className="font-bold text-neel-700">Add</span> on anything you like, then send your list to us on WhatsApp. We’ll keep it packed and ready.
        </p>
      </div>

      {/* Category tabs with sliding pill */}
      <div className="no-scrollbar -mx-4 mb-10 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div role="tablist" aria-label="Menu categories" className="relative inline-flex gap-1 rounded-full bg-white p-1.5 ring-1 ring-neel-100">
          <span
            aria-hidden
            className="absolute bottom-1.5 top-1.5 rounded-full bg-haldi-400 transition-all duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)]"
            style={{ left: pill.left, width: pill.width }}
          />
          {categories.map((c) => (
            <button
              key={c.id}
              ref={(el) => {
                tabRefs.current[c.id] = el;
              }}
              role="tab"
              aria-selected={active === c.id}
              onClick={() => setActive(c.id)}
              className={`relative z-10 whitespace-nowrap rounded-full px-5 py-2.5 text-[15px] font-bold transition-colors duration-300 ${
                active === c.id ? "text-neel-950" : "text-muted hover:text-neel-800"
              }`}
            >
              {c.label}
              <span className="ml-1.5 font-hindi text-sm font-normal opacity-70">{c.hindi}</span>
            </button>
          ))}
        </div>
      </div>

      <ul key={active} role="tabpanel" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {current.items.map((item, i) => (
          <ItemCard key={item.id} item={item} index={i} dot={current.color} />
        ))}
      </ul>

      <p className="mt-8 text-center text-sm text-muted">
        Prices may change with season and festival demand. Please confirm at the counter.
      </p>
    </section>
  );
}
