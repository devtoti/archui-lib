import type React from "react";

/**
 * LinkItem component variant props
 * Defines the visual variants available for the LinkItem component
 */
export interface LinkItemVariantProps {
  /** Visual variant of the link */
  variant?: "default" | "hover" | "active" | "minimal" | "visited";
}

/**
 * LinkItem component props
 * Extends HTML anchor attributes with custom LinkItem props
 */
export interface LinkItemProps
  extends LinkItemVariantProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  /** Link text content */
  children?: React.ReactNode;
  /** Link label text (alternative to children) */
  label?: React.ReactNode;
  /** Render as a different element using Radix Slot */
  asChild?: boolean;
  /** Optional icon displayed on the left side */
  leftIcon?: React.ReactNode;
  /** Optional icon displayed on the right side */
  rightIcon?: React.ReactNode;
  /** Open link in a new tab/window (sets target="_blank") */
  blank?: boolean;
  /** Add noopener and noreferrer to rel attribute for security (recommended when blank=true) */
  noopenreferrer?: boolean;
  /** Download the linked file instead of navigating */
  download?: boolean | string;
  /** Prefetch the linked resource (adds data-prefetch attribute for frameworks like Next.js) */
  prefetch?: boolean;
  /** Accessible label for screen readers (overrides aria-label if provided) */
  ariaLabel?: string;
}

