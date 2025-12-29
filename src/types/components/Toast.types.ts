import type React from "react";
import type * as ToastPrimitive from "@radix-ui/react-toast";

/**
 * Toast component variant props
 * Defines the visual variants and sizes available for the Toast component
 */
export interface ToastVariantProps {
  /** Visual variant of the toast */
  variant?: "default" | "minimal";
  /** Size of the toast */
  size?: "sm" | "md" | "lg";
}

/**
 * Toast component props
 * Extends Radix UI ToastProps with custom Toast props
 */
export interface ToastProps
  extends ToastVariantProps,
    ToastPrimitive.ToastProps {
  /** Aria label for the toast action button */
  ariaLabel?: string;
  /** Icon for the toast */
  icon?: React.ReactNode;
  /** Title for the toast */
  title?: string;
  /** Description for the toast */
  description?: string;
  /** Whether to show a divider between the icon and the content */
  hasDivider?: boolean;
  /** Content for the toast (preferred over title/description) */
  children?: React.ReactNode;
  /** Action button for the toast */
  actionButton?: React.ReactNode;
  /** Whether the toast is open */
  open?: boolean;
}

