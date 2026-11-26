"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/** Shows "Open now" / "Closed now" using India time. Renders nothing until mounted. */
export default function OpenStatus() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const hour = Number(
        new Intl.DateTimeFormat("en-GB", { hour: "numeric", hour12: false, timeZone: "Asia/Kolkata" }).format(new Date()),
      );
      setOpen(hour >= site.hours.open && hour < site.hours.close);
    };
    check();
    const t = setInterval(check, 60_000);
    return () => clearInterval(t);
  }, []);

  if (open === null) return <span className="inline-block h-7 w-24" />;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-bold ${
        open ? "bg-[#e3f6ea] text-[#137a3b]" : "bg-mirchi-400/15 text-mirchi-600"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${open ? "animate-pulse bg-[#1fa855]" : "bg-mirchi-500"}`} />
      {open ? "Open now" : "Closed now"}
    </span>
  );
}
