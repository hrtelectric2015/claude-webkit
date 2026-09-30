"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { bidHref, site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our work" },
  { href: "#how-we-work", label: "How we work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" aria-label="HRT Electric, home" className="rounded-sm">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem] font-medium text-steel">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="py-2 transition-colors duration-150 hover-fine:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 font-semibold text-ink transition-colors duration-150 hover-fine:text-brand"
          >
            <Phone className="size-4 text-brand" aria-hidden="true" />
            {site.phone}
          </a>
          <Button asChild size="sm">
            <a href={bidHref}>Request a Bid</a>
          </Button>
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-6!" aria-hidden="true" />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="sheet-overlay fixed inset-0 z-50 bg-ink/40" />
            <Dialog.Content className="sheet-panel fixed inset-y-0 right-0 z-50 flex w-[min(22rem,88vw)] flex-col bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-mark text-lg font-bold tracking-[0.04em]">
                  Menu
                </Dialog.Title>
                <Dialog.Close asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="size-6!" aria-hidden="true" />
                  </Button>
                </Dialog.Close>
              </div>
              <Dialog.Description className="sr-only">
                Site sections and contact options
              </Dialog.Description>
              <nav aria-label="Mobile" className="mt-8">
                <ul className="flex flex-col">
                  {links.map((l) => (
                    <li key={l.href} className="border-b border-rule">
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block py-4 font-serif text-2xl font-semibold text-ink"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Button asChild size="lg">
                  <a href={bidHref}>Request a Bid</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={site.phoneHref}>
                    <Phone aria-hidden="true" />
                    Call {site.phone}
                  </a>
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
