"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — Session 23 luxury restraint pass.
 *
 * Previously carried: `btn-sheen btn-always-on`, `data-magnetic=""`, heavy
 * dual-layer gold glow shadows, cursor-magnetic pull, shimmer sweep. All
 * removed. What's left is a clean editorial button — color, a hair of motion
 * on press, a focus ring. Nothing else. Variants differ only in palette;
 * behavior is consistent across all of them.
 *
 * btn-gold variant still gets a subtle shimmer sweep via `btn-gold` in
 * globals.css — kept for the primary CTA only, not universal.
 */
const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium tracking-wide",
    "transition-[background-color,color,border-color,opacity] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:opacity-90",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-gold text-white hover:bg-gold-dark",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-gold/60 bg-transparent text-navy-deep hover:bg-gold hover:text-white hover:border-gold",
        "outline-gold":
          "border border-gold/60 bg-transparent text-gold hover:bg-gold/10 hover:border-gold",
        secondary:
          "bg-cream text-navy-deep border border-taupe/20 hover:bg-cream-dark",
        ghost:
          "text-gold/90 border border-gold/30 bg-transparent hover:bg-gold/10 hover:text-gold hover:border-gold/60",
        "ghost-dark":
          "text-navy-deep/90 border border-navy-deep/15 bg-transparent hover:bg-navy-deep/5 hover:border-navy-deep/30",
        link: "text-gold underline-offset-4 hover:underline hover:text-gold-light",
        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
