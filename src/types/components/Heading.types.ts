import type { HTMLAttributes } from "react";

/**
 * Heading component variant props
 * Defines the visual variants available for the Heading component
 */
export interface HeadingVariantProps {
  /** Heading level variant */
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Text alignment */
  align?: "left" | "center" | "right";
}

/**
 * Heading component props
 * Extends HTML heading attributes with custom Heading props
 */
export interface HeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, "align">,
    HeadingVariantProps {
  /** Heading text content (alternative to children) */
  text?: React.ReactNode;
  /** Heading text content (preferred over text) */
  children?: React.ReactNode;
  /** Optional description text displayed below the heading */
  description?: React.ReactNode;
  /** Render as a different element using Radix Slot */
  asChild?: boolean;
}

