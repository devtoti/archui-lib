import type { ButtonHTMLAttributes } from "react";

/**
 * Button component variant props
 * Defines the visual variants available for the Button component
 */
export interface ButtonVariantProps {
  /** Visual intent of the button */
  intent?: "primary" | "secondary";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
}

/**
 * Button component props
 * Extends HTML button attributes with custom Button props
 */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  /** Button label text (alternative to children) */
  label?: React.ReactNode;
  /** Button content (preferred over label) */
  children?: React.ReactNode;
  /** Render as a different element using Radix Slot */
  asChild?: boolean;
}
