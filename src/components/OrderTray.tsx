"use client";

import { useEffect } from "react";
import { allItems } from "@/lib/menu";
import { site, whatsappUrl } from "@/lib/site";
import { useOrder } from "./OrderContext";
import { BagIcon, ChatIcon, CloseIcon, MinusIcon, PlusIcon } from "./Icons";

export default function OrderTray() {
  const { order, add, remove, clear, count, total, name, setName, trayOpen, setTrayOpen } = useOrder();

  useEffect(() => {
    document.body.style.overflow = trayOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setTrayOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [trayOpen, setTrayOpen]);

  const lines = Object.entries(order)
    .map(([id, qty]) => ({ item: allItems.find((i) => i.id === id)!, qty }))
    .filter((l) => l.item);

  const message = [
    `Namaste ${site.shortName}! I'd like to order:`,
    "",
    ...lines.map((l) => `• ${l.item.name} × ${l.qty} (${l.item.unit})`),
    "",
    `Approx total: ₹${total}`,
    name ? `Name: ${name}` : "",
    "Please confirm availability and pickup time. Thank you!",
  ]
    .filter((x, i, arr) => x !== "" || arr[i - 1] !== "")
    .join("\n");

  return (
    <>
      {/* Floating "view order" pill */}
      <button
        type="button"
        onClick={() => setTrayOpen(true)}
        className={`press fixed bottom-[88px] left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full bg-neel-900 py-2.5 pl-3 pr-5 text-white shadow-2xl transition-all duration-500 md:bottom-8 ${
          count > 0 && !trayOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-haldi-400 text-neel-950">
          <BagIcon width={18} height={18} />
        </span>
        <span className="text-left text-sm leading-tight">
          <span className="block font-bold">
            {count} item{count === 1 ? "" : "s"} · ₹{total}
          </span>
          <span className="text-neel-200">View your order</span>
        </span>
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setTrayOpen(false)}
        className={`fixed inset-0 z-50 bg-neel-950/50 backdrop-blur-sm transition-opacity duration-300 ${
          trayOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Bottom sheet */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
        className={`fixed inset-x-0 bottom-0 z-50 flex max-h-[88vh] flex-col rounded-t-[2rem] bg-chuna shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.2,0.9,0.2,1)] md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:w-[440px] md:rounded-l-[2rem] md:rounded-tr-none ${
          trayOpen ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-x-full md:translate-y-0"
        }`}
      >
        <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-neel-200 md:hidden" />
        <div className="flex items-center justify-between px-6 pb-3 pt-4 md:pt-7">
          <h2 className="font-display text-2xl font-extrabold text-neel-900">Your order</h2>
          <button
            type="button"
            onClick={() => setTrayOpen(false)}
            className="press grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-neel-100"
            aria-label="Close"
          >
            <CloseIcon width={18} height={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {lines.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-hindi text-2xl text-neel-700">डिब्बा खाली है</p>
              <p className="mt-2 text-muted">Your box is empty. Add something tasty from the menu.</p>
              <a
                href="#menu"
                onClick={() => setTrayOpen(false)}
                className="press mt-6 inline-block rounded-full bg-neel-700 px-6 py-3 font-bold text-white"
              >
                Browse menu
              </a>
            </div>
          ) : (
            <ul className="divide-y divide-dashed divide-neel-100">
              {lines.map(({ item, qty }) => (
                <li key={item.id} className="flex items-center justify-between gap-3 py-4">
                  <div>
                    <p className="font-bold text-neel-900">{item.name}</p>
                    <p className="text-sm text-muted">
                      ₹{item.price} / {item.unit}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-white p-1 ring-1 ring-neel-100">
                    <button type="button" onClick={() => remove(item.id)} className="press grid h-8 w-8 place-items-center rounded-full hover:bg-neel-50" aria-label={`Remove one ${item.name}`}>
                      <MinusIcon width={14} height={14} />
                    </button>
                    <span className="w-6 text-center font-bold">{qty}</span>
                    <button type="button" onClick={() => add(item.id)} className="press grid h-8 w-8 place-items-center rounded-full hover:bg-neel-50" aria-label={`Add one more ${item.name}`}>
                      <PlusIcon width={14} height={14} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-neel-100 bg-white px-6 pb-6 pt-4">
            <label className="mb-3 block">
              <span className="text-sm font-semibold text-neel-900">Your name (optional)</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh"
                className="mt-1 w-full rounded-xl border border-neel-100 bg-chuna px-4 py-3 outline-none focus:border-neel-400 focus:ring-2 focus:ring-neel-100"
              />
            </label>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-muted">Approx total</span>
              <span className="font-display text-2xl font-extrabold text-neel-900">₹{total}</span>
            </div>
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="press flex w-full items-center justify-center gap-2 rounded-full bg-[#1fa855] py-4 font-bold text-white hover:bg-[#178a45]"
            >
              <ChatIcon width={20} height={20} /> Send order on WhatsApp
            </a>
            <button type="button" onClick={clear} className="mt-3 w-full py-1 text-sm font-semibold text-muted hover:text-mirchi-500">
              Clear all
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
