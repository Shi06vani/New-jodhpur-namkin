import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import RevealObserver from "@/components/RevealObserver";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["devanagari", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${site.name} | Sweets & Namkeen in Bar, Rajasthan`,
  description:
    "Mawa kachori, pyaz kachori, bhujia, laddoo and fresh mithai on NH65A, Ramdev Colony, Bar (Pali). Call, get directions or order on WhatsApp.",
};

export const viewport: Viewport = {
  themeColor: "#172d70",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${figtree.variable} ${tiro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
