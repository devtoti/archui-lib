import type React from "react";

/**
 * Callout component variant props
 * Defines the visual variants available for the Callout component
 */
export interface CalloutVariantProps {
  /** Visual intent of the callout */
  variant?: "success" | "info" | "warning" | "error" | "neutral";
  /** Size of the callout */
  size?: "sm" | "md" | "lg";
}

/**
 * Callout component props
 * Extends HTML div attributes with custom Callout props
 */
export interface CalloutProps
  extends CalloutVariantProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Callout title text */
  title?: React.ReactNode;
  /** Callout label text (alternative to children) */
  label?: React.ReactNode;
  /** Callout content (preferred over label) */
  children?: React.ReactNode;
  /** Render as a different element using Radix Slot */
  asChild?: boolean;
  /** Optional icon as a React component, element, or custom SVG */
  icon?: React.ReactNode;
}
