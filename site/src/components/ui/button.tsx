import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[3px] font-semibold",
    "transition-[transform,background-color,color,border-color] duration-150 ease-[var(--ease-out)]",
    "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-brand text-white hover-fine:bg-brand-deep",
        inverse: "bg-white text-ink hover-fine:bg-paper-warm",
        outline:
          "border-2 border-ink bg-transparent text-ink hover-fine:bg-ink hover-fine:text-white",
        outlineLight:
          "border-2 border-white bg-transparent text-white hover-fine:bg-white hover-fine:text-brand-deep",
        ghost: "text-ink hover-fine:bg-paper-warm",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-3 text-base",
        lg: "px-7 py-4 text-base sm:text-lg",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
