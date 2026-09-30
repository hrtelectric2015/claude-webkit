import type { Metadata, Viewport } from "next";
import { Cinzel, IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "HRT Electric | Commercial Electrical Contractor in Omaha, NE";
const description =
  "Licensed Nebraska electrical contractor since 2016. Commercial build-outs, industrial power, service contracts and multifamily wiring across the Omaha metro. Request a bid.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#e91c26",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${sourceSerif.variable} ${plex.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
