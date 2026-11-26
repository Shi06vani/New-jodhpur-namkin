const points = [
  {
    no: "01",
    title: "Made this morning",
    text: "Namkeen is fried in small batches and mithai is made fresh, so what you take home is crisp and soft the way it should be.",
  },
  {
    no: "02",
    title: "Real Jodhpuri taste",
    text: "Mawa kachori, mirchi bada and dal moth — the classic recipes of Marwar, with honest ghee and spices.",
  },
  {
    no: "03",
    title: "Packed for the road",
    text: "Sealed boxes and travel packs that survive the bus ride. Great as gifts for family back home.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="tile-bg relative overflow-hidden bg-neel-800 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[1720px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div data-reveal="left">
            <p className="font-hindi text-xl text-haldi-300">क्यों रुकें यहाँ?</p>
            <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Why travellers <span className="text-haldi-400">stop here</span> again and again
            </h2>
            <p className="mt-5 max-w-md text-neel-200">
              Whether you’re driving through Bar on the highway or living just around the corner, a quick stop here means hot snacks now and a sweet box for later.
            </p>
          </div>

          <ol className="space-y-4">
            {points.map((p, i) => (
              <li
                key={p.no}
                data-reveal="right"
                style={{ ["--i" as string]: i }}
                className="group flex gap-5 rounded-3xl bg-neel-900/50 p-6 ring-1 ring-white/10 transition-colors duration-300 hover:bg-neel-900/80"
              >
                <span className="font-display text-4xl font-extrabold text-haldi-400 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                  {p.no}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-neel-200">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
