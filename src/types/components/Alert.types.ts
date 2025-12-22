import type React from "react";

/**
 * Alert component variant props
 * Defines the visual variants available for the Alert component
 */
export interface AlertVariantProps {
  /** Visual intent of the alert */
  variant?: "success" | "info" | "warning" | "error";
  /** Size of the alert */
  size?: "sm" | "md" | "lg";
}

/**
 * Alert component props
 * Extends HTML div attributes with custom Alert props
 */
export interface AlertProps
  extends AlertVariantProps,
    React.HTMLAttributes<HTMLDivElement> {
  /** Alert label text (alternative to children) */
  label?: React.ReactNode;
  /** Alert content (preferred over label) */
  children?: React.ReactNode;
  /** Render as a different element using Radix Slot */
  asChild?: boolean;
  /** Optional icon as a React component, element, or custom SVG */
  icon?: React.ReactNode;
}

