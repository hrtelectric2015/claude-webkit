import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type BulbProps = {
  className?: string;
  /** Draw the outline on mount (hero only). */
  animated?: boolean;
  /** Letters set inside the glass, as on the uniform. */
  label?: string;
  labelClassName?: string;
  labelSize?: number;
  labelY?: number;
};

/**
 * The HRT bulb, redrawn as a vector from the van wrap and business card.
 * Colors follow `currentColor` so the same mark works red-on-white and white-on-red.
 */
export function Bulb({
  className,
  animated,
  label,
  labelClassName,
  labelSize = 26,
  labelY = 54,
}: BulbProps) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      aria-hidden="true"
      className={cn("text-brand", className)}
    >
      <path
        d="M21.7 73.3 A40 40 0 1 1 78.3 73.3 C71 81 66.5 88 66.5 97 L33.5 97 C33.5 88 29 81 21.7 73.3 Z"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinejoin="round"
        pathLength={1}
        className={animated ? "bulb-draw" : undefined}
      />
      <path
        d="M24.5 38 A27 27 0 0 1 40 19.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={1}
        className={animated ? "bulb-draw" : undefined}
      />
      <g fill="currentColor">
        <path
          d="M31 103 L69 99 L69 106.5 L31 110.5 Z"
          className={animated ? "bulb-band" : undefined}
          style={animated ? ({ "--i": 0 } as CSSProperties) : undefined}
        />
        <path
          d="M31 115 L69 111 L69 118.5 L31 122.5 Z"
          className={animated ? "bulb-band" : undefined}
          style={animated ? ({ "--i": 1 } as CSSProperties) : undefined}
        />
        <path
          d="M38 125.5 L62 123 L62 127 Q62 136 50 136 Q38 136 38 128 Z"
          className={animated ? "bulb-band" : undefined}
          style={animated ? ({ "--i": 2 } as CSSProperties) : undefined}
        />
      </g>
      {label ? (
        <text
          x="50"
          y={labelY}
          textAnchor="middle"
          fill="currentColor"
          className={cn("font-sans font-bold", labelClassName)}
          style={{ fontSize: labelSize, letterSpacing: "0.02em" }}
        >
          {label}
        </text>
      ) : null}
    </svg>
  );
}

/** Primary lockup: red bulb, black serif caps, red italic tagline. */
export function Logo({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Bulb className={cn("h-11 w-auto shrink-0", inverse && "text-white")} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-mark text-[1.3rem] font-bold tracking-[0.04em]",
            inverse ? "text-white" : "text-ink",
          )}
        >
          HRT ELECTRIC
        </span>
        <span
          className={cn(
            "mt-1 font-serif text-[0.8rem] italic",
            inverse ? "text-white" : "text-brand",
          )}
        >
          The Best Solution
        </span>
      </span>
    </span>
  );
}
