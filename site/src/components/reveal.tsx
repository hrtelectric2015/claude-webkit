"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

/** Fades a block up once as it enters the viewport. Marketing surfaces only. */
export function Reveal({
  children,
  index = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "li" | "article" | "figure";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Comp = Tag as "div";
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <Comp
      ref={ref}
      data-visible={inView}
      className={cn("reveal", className)}
      style={{ "--i": index } as CSSProperties}
    >
      {children}
    </Comp>
  );
}
