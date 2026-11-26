import { directionsUrl, site } from "@/lib/site";
import HeroArt from "./HeroArt";
import { LeafIcon, PinIcon } from "./Icons";

const headline = ["Sweet,", "salty", "&", "straight", "from", "the", "kadai."];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      {/* soft blue wash shapes in the background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-neel-100 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-haldi-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1720px] items-center gap-12 px-5 pb-16 sm:px-8 lg:px-12 xl:px-16 md:grid-cols-[1.1fr_1fr] md:pb-24">
        <div>
          <p
            className="unblur mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-neel-800 ring-1 ring-neel-100"
            style={{ ["--d" as string]: "0.1s" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-haldi-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-haldi-500" />
            </span>
            On the NH65A · Bar, Pali
          </p>

          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-neel-900 sm:text-6xl lg:text-7xl">
            {headline.map((w, i) => (
              <span key={i} className="rise-mask mr-[0.22em]">
                <span
                  style={{ ["--i" as string]: i }}
                  className={w === "kadai." ? "text-neel-500" : w === "&" ? "text-haldi-500" : ""}
                >
                  {w}
                </span>
              </span>
            ))}
          </h1>

          <p className="unblur mt-6 max-w-md text-lg leading-relaxed text-muted" style={{ ["--d" as string]: "1.1s" }}>
            Mawa kachori, hot pyaz kachori, Bikaneri bhujia and fresh mithai — made every morning at{" "}
            <span className="font-semibold text-neel-900">{site.name}</span>. Stop by on your journey or pack a box for home.
          </p>

          <div className="unblur mt-8 flex flex-wrap gap-3" style={{ ["--d" as string]: "1.3s" }}>
            <a
              href="#menu"
              className="press rounded-full bg-neel-700 px-7 py-3.5 font-bold text-white shadow-[0_10px_24px_-10px_rgb(29_58_146/0.8)] hover:bg-neel-800"
            >
              See the menu
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center gap-2 rounded-full bg-haldi-400 px-7 py-3.5 font-bold text-neel-950 hover:bg-haldi-300"
            >
              <PinIcon width={18} height={18} /> Get directions
            </a>
          </div>

          <p className="unblur mt-8 font-hindi text-xl text-neel-700/70" style={{ ["--d" as string]: "1.5s" }}>
            “स्वाद जो सफ़र याद रखे”
          </p>
        </div>

        {/* Jharokha window with the art inside */}
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="window-open jharokha relative aspect-[4/5] overflow-hidden bg-neel-700 shadow-[0_40px_80px_-30px_rgb(15_29_74/0.6)] ring-8 ring-white">
            <div className="absolute inset-0">
              <HeroArt />
            </div>
          </div>

          {/* floating chips */}
          <div
            className="unblur absolute -left-4 top-[18%] sm:-left-10"
            style={{ ["--d" as string]: "1.4s" }}
          >
            <div className="animate-bob rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-neel-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Must try</p>
              <p className="font-display text-lg font-bold text-neel-900">Mawa Kachori</p>
            </div>
          </div>
          <div
            className="unblur absolute -right-3 top-[46%] sm:-right-8"
            style={{ ["--d" as string]: "1.6s" }}
          >
            <div className="animate-bob-late flex items-center gap-2 rounded-2xl bg-haldi-400 px-4 py-3 font-bold text-neel-950 shadow-xl">
              <LeafIcon width={18} height={18} />
              <span>
                100% Veg
                <span className="block font-hindi text-sm font-normal">शुद्ध शाकाहारी</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
