import { navLinks, site } from "@/lib/site";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer className="bg-neel-950 pb-28 pt-14 text-neel-200 md:pb-14">
      <div className="mx-auto flex max-w-[1720px] flex-col gap-8 px-5 sm:px-8 lg:px-12 xl:px-16 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm">{site.tagline}. {site.address.line1}, {site.address.line2}.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold" aria-label="Footer">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-haldi-300">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-[1720px] border-t border-white/10 px-5 pt-6 text-xs text-neel-300 sm:px-8 lg:px-12 xl:px-16">
        © {site.name}. Made with ghee & love in Bar, Rajasthan.
      </div>
    </footer>
  );
}
