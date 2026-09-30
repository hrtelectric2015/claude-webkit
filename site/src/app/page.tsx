import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { Bulb, Logo } from "@/components/brand";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { bidHref, site } from "@/lib/site";

const credentials = [
  { figure: "2016", label: "Licensed in Nebraska ever since" },
  { figure: "Top 4%", label: "of Nebraska licensed contractors on BuildZoom" },
  { figure: "20+ yrs", label: "of combined field experience on the crew" },
  { figure: "EN / ES", label: "Bilingual crew and office. Se habla español." },
];

const services = [
  {
    title: "Commercial build-outs & tenant finish",
    body: "Offices, retail, restaurants and medical suites. We work from your drawings, coordinate with the other trades, and leave a panel schedule the next electrician can actually read.",
    items: ["New service & panels", "Lighting & controls", "Low-voltage rough-in", "Code corrections"],
  },
  {
    title: "Industrial power & controls",
    body: "Shops, warehouses and light manufacturing. Three-phase distribution, equipment hookups, motor circuits, and conduit runs that need to be right the first time.",
    items: ["3-phase distribution", "Equipment & motor feeds", "Rigid & EMT conduit", "Planned shutdowns"],
  },
  {
    title: "Service & maintenance",
    body: "A building still needs an electrician after the ribbon cutting. Property managers call us for troubleshooting, repairs, lighting retrofits and tenant turnovers.",
    items: ["Troubleshooting & repair", "LED retrofits", "Tenant turnovers", "Scheduled maintenance"],
  },
  {
    title: "Multifamily & residential new construction",
    body: "Walk-ups, townhomes, duplexes and custom homes. We price units the way we price commercial work: line by line, so draw day holds no surprises.",
    items: ["Unit rough-in & trim", "Meter banks", "Common-area lighting", "Custom homes"],
  },
  {
    title: "Inspections & lighting",
    body: "Buying, selling or renovating? We inspect the electrical, fix what doesn't meet code, and upgrade the lighting inside and out, for homes and businesses alike.",
    items: ["Electrical inspections", "Code corrections", "Interior & exterior lighting", "Panel upgrades"],
  },
];

const principles = [
  {
    title: "You deal with the owner.",
    body: "Orlando Hernandez runs every job from the bid to the final walkthrough. Your questions don't get lost between a salesman and a foreman.",
  },
  {
    title: "Bids you can read.",
    body: "We estimate in McCormick Systems, line by line. Material, labor and exclusions are spelled out, so change orders don't turn into arguments.",
  },
  {
    title: "The schedule is the schedule.",
    body: "If something is going to slip, you hear it from us first. Not from your superintendent, and not the morning of the inspection.",
  },
  {
    title: "A clean handoff.",
    body: "Labeled panels, an updated panel schedule, and a swept floor when we leave. Small things. They're why GCs call us back.",
  },
];

// Verified review from BuildZoom (July 2020). Add more as they come in.
const review = {
  quote:
    "HRT has always gotten work done on time and on budget. And they are very good at figuring out old house wiring and electrical problems.",
  name: "Murray H.",
  role: "Rewire of a century home",
  source: "BuildZoom",
  sourceUrl: "https://www.buildzoom.com/contractor/hrt-electric-llc",
};

const work = [
  {
    src: "/images/van-new-homes.jpg",
    alt: "HRT Electric van parked at a row of new homes under construction",
    caption: "New homes, residential new construction",
    className: "col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-auto",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
  {
    src: "/images/restaurant-sign-lift.jpg",
    alt: "Electrician in a boom lift working on a restaurant pole sign",
    caption: "Sign power, restaurant",
    className: "aspect-[3/4] lg:row-span-2 lg:aspect-auto",
    sizes: "(min-width: 1024px) 25vw, 50vw",
  },
  {
    src: "/images/conduit-rack-ceiling.jpg",
    alt: "Rack of EMT conduit running along a commercial ceiling",
    caption: "Conduit rack, commercial",
    className: "aspect-[3/4] lg:aspect-auto",
    sizes: "(min-width: 1024px) 25vw, 50vw",
  },
  {
    src: "/images/service-pedestal.jpg",
    alt: "New electrical service pedestal with meter and panels next to a field",
    caption: "New service pedestal",
    className: "col-span-2 aspect-[16/9] lg:col-span-1 lg:aspect-auto",
    sizes: "(min-width: 1024px) 25vw, 100vw",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: site.name,
  slogan: site.tagline,
  url: site.url,
  telephone: "+1-402-981-6635",
  email: site.email,
  foundingDate: "2016",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.street} ${site.suite}`,
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.zip,
    addressCountry: "US",
  },
  areaServed: ["Omaha, NE", "Douglas County, NE", "Sarpy County, NE"],
  knowsLanguage: ["en", "es"],
  sameAs: [site.facebook, review.sourceUrl],
};

const i = (n: number) => ({ "--i": n }) as CSSProperties;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-12 sm:px-8 md:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-24">
            <div className="flex flex-col justify-center">
              <p
                className="rise mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-steel"
                style={i(0)}
              >
                <span className="h-0.5 w-8 bg-brand" aria-hidden="true" />
                Licensed electrical contractor · Omaha, NE
              </p>
              <h1
                className="rise max-w-[15ch] font-serif text-display font-bold tracking-[-0.015em] text-ink"
                style={i(1)}
              >
                The electrical sub your super never has to{" "}
                <span className="text-brand">chase.</span>
              </h1>
              <p className="rise mt-7 max-w-[54ch] text-lede text-steel" style={i(2)}>
                HRT Electric wires commercial build-outs, industrial shops and
                multifamily projects across the Omaha metro. We show up on the
                day the schedule says, and we build every job to pass inspection
                the first time.
              </p>
              <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={i(3)}>
                <Button asChild size="lg">
                  <a href={bidHref}>
                    Request a Bid
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={site.phoneHref}>
                    <Phone aria-hidden="true" />
                    Call {site.phone}
                  </a>
                </Button>
              </div>
            </div>

            {/* Real job photo, with the van-door lockup pinned over it. */}
            <div className="rise relative pb-16 sm:pb-10 lg:pb-0" style={i(2)}>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-paper-warm lg:aspect-[4/5]">
                <Image
                  src="/images/conduit-runs-commercial.jpg"
                  alt="Parallel EMT conduit runs and junction boxes installed by HRT Electric on a commercial project"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute right-3 top-3 rounded-[3px] bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink">
                  Our work · Commercial conduit, Omaha
                </figcaption>
              </figure>
              <div className="absolute bottom-0 left-4 flex items-center gap-4 rounded-[4px] border border-rule bg-white px-5 py-4 shadow-[0_12px_32px_-12px_rgb(17_17_17/0.35)] sm:left-6 lg:-left-8 lg:bottom-10">
                <div className="flex items-center font-serif font-bold leading-none text-ink" aria-hidden="true">
                  <span className="text-4xl sm:text-5xl">H</span>
                  <Bulb
                    animated
                    label="R"
                    labelClassName="font-serif text-ink"
                    labelSize={44}
                    labelY={66}
                    className="-mx-0.5 h-16 w-auto sm:h-20"
                  />
                  <span className="text-4xl sm:text-5xl">T</span>
                </div>
                <div>
                  <a
                    href={site.phoneHref}
                    className="block font-serif text-2xl font-bold italic tracking-tight text-ink transition-colors duration-150 hover-fine:text-brand sm:text-3xl"
                  >
                    {site.phone}
                  </a>
                  <p className="mt-1 text-sm text-steel">White van, red bulb. That&apos;s us.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Credentials ---------- */}
        <section aria-label="Credentials" className="border-y border-rule bg-white">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
            {credentials.map((c, n) => (
              <li
                key={c.figure}
                className={[
                  "py-8 pr-4 lg:py-10",
                  n % 2 === 1 ? "border-l border-rule pl-5 sm:pl-8" : "",
                  n >= 2 ? "border-t border-rule lg:border-t-0" : "",
                  n === 2 ? "lg:border-l lg:pl-8" : "",
                ].join(" ")}
              >
                <p className="font-serif text-3xl font-bold text-ink sm:text-4xl">
                  {c.figure}
                </p>
                <p className="mt-2 max-w-[22ch] text-sm leading-snug text-steel">
                  {c.label}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Services ---------- */}
        <section id="services" className="scroll-mt-20 bg-white pb-16 pt-20 lg:pb-20 lg:pt-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <h2 className="font-serif text-headline font-bold tracking-[-0.01em] text-ink">
                What we wire
              </h2>
              <p className="max-w-[56ch] text-lede text-steel lg:pt-3">
                Most of our work comes from general contractors, property managers
                and owners who want one electrical crew they can count on, from
                rough-in to final.
              </p>
            </div>

            <ol className="mt-14 border-t-2 border-ink">
              {services.map((s, n) => (
                <Reveal
                  as="li"
                  key={s.title}
                  className="grid gap-5 border-b border-rule py-10 md:grid-cols-[5rem_1fr] lg:grid-cols-[6rem_1.1fr_1fr] lg:gap-10"
                >
                  <span
                    className="font-serif text-2xl font-bold text-brand lg:text-3xl"
                    aria-hidden="true"
                  >
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-title font-bold text-ink">{s.title}</h3>
                    <p className="mt-3 max-w-[52ch] text-steel leading-relaxed">{s.body}</p>
                  </div>
                  <ul className="flex flex-wrap content-start gap-2 md:col-start-2 lg:col-start-auto lg:pt-1">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[3px] border border-rule bg-paper-warm px-3 py-1.5 text-sm font-medium text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Recent work ---------- */}
        <section id="work" aria-labelledby="work-title" className="scroll-mt-20 bg-white pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="work-title" className="font-serif text-headline font-bold tracking-[-0.01em] text-ink">
                Recent work
              </h2>
              <p className="max-w-[44ch] text-steel">
                Photos from our own job sites. No stock images, no renderings.
              </p>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-[repeat(2,minmax(0,16rem))]">
              {work.map((w, n) => (
                <Reveal
                  as="li"
                  key={w.src}
                  index={n % 4}
                  className={w.className}
                >
                  <figure className="group relative h-full min-h-44 overflow-hidden rounded-[4px] bg-paper-warm">
                    <Image
                      src={w.src}
                      alt={w.alt}
                      fill
                      sizes={w.sizes}
                      className="object-cover"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-3 pb-2.5 pt-8 text-sm font-medium text-white">
                      {w.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- How we work ---------- */}
        <section id="how-we-work" className="scroll-mt-20 bg-paper-warm py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-serif text-headline font-bold tracking-[-0.01em] text-ink">
                How we run a job
              </h2>
              <p className="mt-5 max-w-[40ch] text-lede text-steel">
                Good electrical work is the price of entry. What GCs remember is
                whether they had to babysit the sub.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src="/images/orlando-hernandez.jpg"
                  alt="Orlando Hernandez"
                  width={72}
                  height={72}
                  className="size-18 rounded-[4px] object-cover"
                />
                <p className="text-sm leading-snug">
                  <span className="block font-semibold text-ink">Orlando Hernandez</span>
                  <span className="text-steel">Owner &amp; Project Manager</span>
                </p>
              </div>
              <Button asChild variant="outline" className="mt-8">
                <a href={bidHref}>
                  Send us your drawings
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>

            <ol className="grid gap-x-10 sm:grid-cols-2">
              {principles.map((p, n) => (
                <Reveal
                  as="li"
                  key={p.title}
                  index={n % 2}
                  className="border-t-2 border-ink py-8"
                >
                  <h3 className="font-serif text-title font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-steel">{p.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Reviews ---------- */}
        <section id="reviews" className="scroll-mt-20 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-serif text-headline font-bold tracking-[-0.01em] text-ink">
                From the people who hire us
              </h2>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
              <Reveal as="figure" className="relative border-l-4 border-brand pl-6 sm:pl-8">
                <p className="mb-4 flex items-center gap-1 text-brand" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((k) => (
                    <Star key={k} className="size-5 fill-current" aria-hidden="true" />
                  ))}
                </p>
                <blockquote className="font-serif text-[1.5rem] leading-snug text-ink sm:text-[1.875rem]">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-ink">{review.name}</span>
                  <span className="text-steel"> · {review.role} · </span>
                  <a
                    href={review.sourceUrl}
                    className="text-steel underline underline-offset-4 transition-colors duration-150 hover-fine:text-ink"
                  >
                    Verified on {review.source}
                  </a>
                </figcaption>
              </Reveal>

              <Reveal index={1} className="flex flex-col justify-center rounded-[4px] bg-paper-warm p-6 sm:p-8">
                <h3 className="font-serif text-title font-bold text-ink">Worked with us?</h3>
                <p className="mt-3 leading-relaxed text-steel">
                  A two-line review helps the next GC or homeowner decide. We read every one.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Button asChild variant="outline" size="sm">
                    <a href={site.facebook}>Review us on Facebook</a>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="underline underline-offset-4">
                    <a href={review.sourceUrl}>Review us on BuildZoom</a>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Closing CTA: the uniform ---------- */}
        <section id="contact" className="scroll-mt-20 bg-brand text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[auto_1fr] lg:gap-20 lg:py-28">
            <Bulb
              label="HRT"
              labelClassName="fill-white"
              className="mx-auto h-44 w-auto text-white sm:h-56 lg:mx-0 lg:h-72"
            />
            <div>
              <h2 className="max-w-[18ch] font-serif text-headline font-bold tracking-[-0.01em]">
                Send us the drawings. We’ll send back a number.
              </h2>
              <p className="mt-5 max-w-[52ch] text-lede text-white">
                Email the plans and your bid date, or pick up the phone. You’ll get
                a straight answer from the owner, in English or Spanish.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="inverse" size="lg">
                  <a href={bidHref}>
                    Request a Bid
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outlineLight" size="lg">
                  <a href={site.phoneHref}>
                    <Phone aria-hidden="true" />
                    Call {site.phone}
                  </a>
                </Button>
              </div>
              <address className="mt-12 grid gap-6 border-t border-white/40 pt-8 not-italic sm:grid-cols-2">
                <a href={site.phoneHref} className="group flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-[0.1em]">Phone</span>
                    <span className="underline-offset-4 group-hover:underline">{site.phone}</span>
                  </span>
                </a>
                <a href={`mailto:${site.email}`} className="group flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold uppercase tracking-[0.1em]">Email</span>
                    <span className="break-words underline-offset-4 group-hover:underline">{site.email}</span>
                  </span>
                </a>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-[0.1em]">Mailing address</span>
                    {site.street}
                    <br />
                    {site.suite}
                    <br />
                    {site.city}, {site.region} {site.zip}
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-[0.1em]">Hours</span>
                    Mon–Fri, 8am–5pm
                    <br />
                    Weekends by appointment
                  </span>
                </p>
              </address>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-col gap-2 text-sm text-steel md:items-end">
            <a
              href="https://electrical.nebraska.gov/"
              className="inline-flex items-center gap-1.5 font-medium text-ink underline decoration-rule decoration-2 underline-offset-4 transition-colors duration-150 hover-fine:decoration-brand"
            >
              <BadgeCheck className="size-4 text-brand" aria-hidden="true" />
              Licensed in Nebraska. Verify with the State Electrical Division
            </a>
            <p>We accept Visa, Mastercard, Amex, Discover, PayPal, cash and checks.</p>
            <p>
              <a
                href={site.facebook}
                className="font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4"
              >
                Facebook
              </a>
              <span aria-hidden="true"> · </span>
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>
        </div>
        <p className="border-t border-rule px-5 py-5 text-center text-sm text-steel">
          Built with Claude Web Builder by{" "}
          <a href="https://tododeia.com" className="underline underline-offset-4">
            Tododeia
          </a>
        </p>
      </footer>
    </>
  );
}
