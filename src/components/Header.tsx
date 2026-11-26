"use client";

import { useEffect, useState } from "react";
import { site, callUrl, navLinks } from "@/lib/site";
import { useOrder } from "./OrderContext";
import { BagIcon, CloseIcon, MenuIcon, PhoneIcon } from "./Icons";
import LogoMark from "./LogoMark";

const links = navLinks;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
      <LogoMark size={38} light={light} />
      <span className="leading-none">
        <span
          className={`unblur block font-display text-[1.35rem] font-extrabold tracking-tight ${light ? "text-white" : "text-neel-900"}`}
          style={{ ["--d" as string]: "0.5s" }}
        >
          New <span className={light ? "text-haldi-400" : "text-neel-500"}>Jodhpur</span>
        </span>
        <span
          className={`unblur mt-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] ${
            light ? "text-haldi-300" : "text-haldi-600"
          }`}
          style={{ ["--d" as string]: "0.8s" }}
        >
          <span className="h-px w-3 bg-current transition-all duration-500 group-hover:w-5" />
          Sweets & Namkeens
          <span className="h-px w-3 bg-current transition-all duration-500 group-hover:w-5" />
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const { count, setTrayOpen } = useOrder();

  // Scroll spy: the active tab is the last section whose top has passed 40% of the screen
  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.4;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = links[0].href;
      for (const l of links) {
        const el = document.querySelector<HTMLElement>(l.href);
        if (el && el.getBoundingClientRect().top <= line) current = l.href;
      }
      if (atBottom) current = links[links.length - 1].href;
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-chuna/95 shadow-[0_8px_30px_-12px_rgb(23_45_112/0.25)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1720px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-12 xl:px-16">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors duration-300 ${
                  isActive ? "text-neel-600" : "text-neel-900 hover:text-neel-600"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3.5 bottom-1 h-0.5 origin-left rounded bg-haldi-500 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTrayOpen(true)}
            className="press relative grid h-11 w-11 place-items-center rounded-full bg-white text-neel-800 ring-1 ring-neel-100"
            aria-label={`Your order, ${count} items`}
          >
            <BagIcon />
            {count > 0 && (
              <span
                key={count}
                className="animate-pop absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-mirchi-500 px-1 text-[11px] font-bold text-white"
              >
                {count}
              </span>
            )}
          </button>
          <a
            href={callUrl}
            className="press hidden items-center gap-2 rounded-full bg-neel-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-neel-800 sm:flex"
          >
            <PhoneIcon width={16} height={16} /> Call shop
          </a>
          <button
            type="button"
            className="press grid h-11 w-11 place-items-center rounded-full text-neel-900 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden bg-chuna transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[30rem] shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 pb-4" aria-label="Mobile">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between border-b border-neel-100 py-3.5 font-display text-xl font-bold transition-all duration-500 ${
                active === l.href ? "text-neel-600" : "text-neel-900"
              } ${
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${open ? i * 70 + 100 : 0}ms` }}
            >
              {l.label}
              {active === l.href && <span className="h-2 w-2 rounded-full bg-haldi-500" />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
