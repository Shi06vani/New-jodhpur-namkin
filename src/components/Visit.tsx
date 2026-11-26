import { callUrl, directionsUrl, mapEmbedUrl, site, whatsappUrl } from "@/lib/site";
import OpenStatus from "./OpenStatus";
import { ChatIcon, ClockIcon, PhoneIcon, PinIcon } from "./Icons";

/** Blue-city rooftop line that draws itself when scrolled into view. */
function Skyline() {
  return (
    <svg viewBox="0 0 1200 140" className="skyline h-auto w-full" fill="none" aria-hidden>
      <path
        d="M0 130 H60 V90 H110 V70 H150 V90 H180 V60 a30 30 0 0 1 60 0 V100 H280 V80 H330 V50 H350 V30 H370 V50 H390 V80 H430 V100 H470 V70 H520 V95 H560 V40 a40 40 0 0 1 80 0 V60 H660 V20 H680 L690 5 L700 20 H720 V60 H740 V40 a40 40 0 0 1 80 0 V95 H860 V75 H900 V100 H940 V65 a25 25 0 0 1 50 0 V90 H1030 V70 H1080 V95 H1120 V80 H1160 V130 H1200"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M200 75 v-8 M560 80 h80 M760 70 h40 M330 65 h60 M1030 85 h50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1720px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div data-reveal className="text-neel-300">
          <Skyline />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div data-reveal="left" className="flex flex-col rounded-[2rem] bg-white p-7 ring-1 ring-neel-100 sm:p-9">
            <p className="font-hindi text-xl text-haldi-600">पधारो सा!</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-neel-900">Come visit us</h2>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <dt className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-neel-50 text-neel-700">
                  <PinIcon />
                  <span className="sr-only">Address</span>
                </dt>
                <dd>
                  <p className="font-bold text-neel-900">{site.address.line1}</p>
                  <p className="text-muted">{site.address.line2}</p>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-neel-50 text-neel-700">
                  <ClockIcon />
                  <span className="sr-only">Hours</span>
                </dt>
                <dd>
                  <p className="font-bold text-neel-900">{site.hours.label}</p>
                  <div className="mt-1.5">
                    <OpenStatus />
                  </div>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-neel-50 text-neel-700">
                  <PhoneIcon />
                  <span className="sr-only">Phone</span>
                </dt>
                <dd>
                  <a href={callUrl} className="font-bold text-neel-900 underline-offset-4 hover:underline">
                    {site.phoneDisplay}
                  </a>
                  <p className="text-muted">Call for bulk & festival orders</p>
                </dd>
              </div>
            </dl>

            <div className="mt-auto grid gap-3 pt-9 sm:grid-cols-2">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="press flex items-center justify-center gap-2 rounded-full bg-neel-700 py-3.5 font-bold text-white hover:bg-neel-800"
              >
                <PinIcon width={18} height={18} /> Directions
              </a>
              <a
                href={whatsappUrl(`Namaste ${site.shortName}! I have a question about an order.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="press flex items-center justify-center gap-2 rounded-full bg-haldi-400 py-3.5 font-bold text-neel-950 hover:bg-haldi-300"
              >
                <ChatIcon width={18} height={18} /> WhatsApp
              </a>
            </div>
          </div>

          <div data-reveal="right" className="jharokha min-h-[360px] overflow-hidden ring-8 ring-white shadow-[0_30px_60px_-30px_rgb(15_29_74/0.5)] lg:min-h-0">
            <iframe
              title={`Map showing ${site.name}`}
              src={mapEmbedUrl}
              className="h-full min-h-[360px] w-full grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
