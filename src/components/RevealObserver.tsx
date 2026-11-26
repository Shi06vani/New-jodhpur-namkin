"use client";

import { useEffect } from "react";

/** Adds `is-visible` to every [data-reveal] element as it scrolls into view. */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    const watch = () =>
      document
        .querySelectorAll("[data-reveal]:not(.is-visible)")
        .forEach((el) => io.observe(el));

    watch();
    // Pick up elements rendered later (e.g. when switching menu tabs)
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
