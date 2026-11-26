"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { allItems } from "@/lib/menu";

/**
 * Order state lives only in the visitor's browser (no backend).
 * The order and customer name are saved to localStorage so they
 * survive a refresh or coming back later.
 */
type Order = Record<string, number>;

const ORDER_KEY = "njs-order-v1";
const NAME_KEY = "njs-name-v1";

function readOrder(): Order {
  try {
    const raw = localStorage.getItem(ORDER_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    const clean: Order = {};
    for (const [id, qty] of Object.entries(parsed as Record<string, unknown>)) {
      // drop items that were removed from the menu or bad values
      if (allItems.some((i) => i.id === id) && typeof qty === "number" && qty > 0 && qty < 1000) {
        clean[id] = Math.floor(qty);
      }
    }
    return clean;
  } catch {
    return {};
  }
}

function write(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* storage blocked (private mode etc.) — site still works without saving */
  }
}

type Ctx = {
  order: Order;
  add: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
  total: number;
  name: string;
  setName: (v: string) => void;
  trayOpen: boolean;
  setTrayOpen: (v: boolean) => void;
};

const OrderCtx = createContext<Ctx | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [order, setOrder] = useState<Order>({});
  const [name, setName] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [trayOpen, setTrayOpen] = useState(false);

  // Load saved data after mount (server render has no localStorage)
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- one-time hydration from localStorage */
    setOrder(readOrder());
    try {
      setName(localStorage.getItem(NAME_KEY) ?? "");
    } catch {}
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Save whenever it changes (only after the first load, so we don't wipe saved data)
  useEffect(() => {
    if (!loaded) return;
    write(ORDER_KEY, Object.keys(order).length ? JSON.stringify(order) : null);
  }, [order, loaded]);

  useEffect(() => {
    if (!loaded) return;
    write(NAME_KEY, name.trim() ? name : null);
  }, [name, loaded]);

  // Keep several open tabs in sync
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === ORDER_KEY) setOrder(readOrder());
      if (e.key === NAME_KEY) setName(e.newValue ?? "");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const add = useCallback(
    (id: string) => setOrder((o) => ({ ...o, [id]: (o[id] ?? 0) + 1 })),
    [],
  );
  const remove = useCallback(
    (id: string) =>
      setOrder((o) => {
        const next = { ...o };
        if ((next[id] ?? 0) <= 1) delete next[id];
        else next[id] -= 1;
        return next;
      }),
    [],
  );
  const clear = useCallback(() => setOrder({}), []);

  const value = useMemo(() => {
    let count = 0;
    let total = 0;
    for (const [id, qty] of Object.entries(order)) {
      const item = allItems.find((i) => i.id === id);
      if (!item) continue;
      count += qty;
      total += qty * item.price;
    }
    return { order, add, remove, clear, count, total, name, setName, trayOpen, setTrayOpen };
  }, [order, add, remove, clear, name, trayOpen]);

  return <OrderCtx.Provider value={value}>{children}</OrderCtx.Provider>;
}

export function useOrder() {
  const ctx = useContext(OrderCtx);
  if (!ctx) throw new Error("useOrder must be used inside OrderProvider");
  return ctx;
}
