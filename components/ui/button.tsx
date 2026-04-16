"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Premium button system.
 *
 * Every variant has:
 *  - A shimmer sweep on hover (::before pseudo via `btn-sheen` class)
 *  - A tactile scale-down on press (`active:scale-[0.97]`)
 *  - A subtle 1px lift on hover (`hover:-translate-y-[1px]`)
 *  - Smooth multi-property transition
 *  - Focus-visible ring
 *  - prefers-reduced-motion guard (see .btn-sheen in globals.css)
 */
const buttonVariants = cva(
  [
    "btn-sheen btn-always-on", // shine sweep + universal gold glow signature
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
    "transition-[transform,box-shadow,background-color,color,border-color,filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep",
    "disabled:pointer-events-none disabled:opacity-50",
    "hover:-translate-y-[1px] active:scale-[0.97] active:translate-y-0 will-change-transform",
    // Universal idle gold glow — every button glows at rest so site feels "on"
    "shadow-[0_4px_18px_-6px_rgba(201,162,39,0.45),0_0_0_1px_rgba(201,162,39,0.12)]",
    "hover:shadow-[0_12px_34px_-8px_rgba(201,162,39,0.7),0_0_44px_-10px_rgba(201,162,39,0.55),0_0_0_1px_rgba(201,162,39,0.35)]",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-gold text-white hover:bg-gold-dark",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border-2 border-gold/60 bg-transparent text-navy-deep hover:bg-gold hover:text-white hover:border-gold",
        "outline-gold":
          "border border-gold/60 bg-transparent text-gold hover:bg-gold/10 hover:border-gold",
        secondary:
          "bg-cream text-navy-deep border border-gold/30 hover:bg-cream-dark",
        ghost:
          "text-gold/90 border border-gold/25 bg-white/[0.02] hover:bg-gold/10 hover:text-gold hover:border-gold/60",
        "ghost-dark":
          "text-navy-deep/90 border border-gold/25 bg-white/50 hover:bg-gold/10 hover:text-navy-deep hover:border-gold/60",
        link: "text-gold underline-offset-4 hover:underline hover:text-gold-light !shadow-none hover:!shadow-none",
        glass:
          "bg-white/10 backdrop-blur-md border border-gold/30 text-white hover:bg-white/20 hover:border-gold/60",
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
        data-magnetic=""
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
