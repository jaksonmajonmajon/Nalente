import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border font-semibold tracking-[0.08em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-accent bg-accent text-black shadow-[0_16px_40px_rgba(255,107,0,0.24)] hover:-translate-y-0.5 hover:bg-accent-strong",
  secondary:
    "border-white/15 bg-white text-black hover:-translate-y-0.5 hover:border-white hover:bg-white/90",
  outline:
    "border-white/20 bg-white/5 text-white hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10",
  ghost:
    "border-transparent bg-transparent text-white hover:border-white/10 hover:bg-white/8",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-[11px]",
  md: "h-12 px-7 text-xs",
  lg: "h-14 px-8 text-sm",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    if (asChild && React.isValidElement(children)) {
      const child =
        children as React.ReactElement<{ className?: string } & Record<string, unknown>>;
      return React.cloneElement(child, {
        className: cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className,
          child.props.className
        ),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
