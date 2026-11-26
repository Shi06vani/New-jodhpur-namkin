import { callUrl, directionsUrl, site, whatsappUrl } from "@/lib/site";
import { ChatIcon, PhoneIcon, PinIcon } from "./Icons";

/** Always-visible quick actions for phone users. */
export default function MobileBar() {
  const actions = [
    { href: callUrl, label: "Call", icon: PhoneIcon, external: false },
    { href: directionsUrl, label: "Directions", icon: PinIcon, external: true },
    { href: whatsappUrl(`Namaste ${site.shortName}!`), label: "WhatsApp", icon: ChatIcon, external: true },
  ];

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 gap-1 rounded-2xl bg-neel-900/95 p-1.5 shadow-2xl backdrop-blur md:hidden"
    >
      {actions.map(({ href, label, icon: Icon, external }, i) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`press flex flex-col items-center gap-1 rounded-xl py-2 text-xs font-bold ${
            i === 0 ? "bg-haldi-400 text-neel-950" : "text-white hover:bg-white/10"
          }`}
        >
          <Icon width={20} height={20} />
          {label}
        </a>
      ))}
    </nav>
  );
}
