import type { ComponentPropsWithoutRef } from "react";
import type * as SwitchPrimitive from "@radix-ui/react-switch";

/**
 * Switch component variant props
 * Defines the visual variants available for the Switch component
 */
export interface SwitchVariantProps {
  /** Visual variant of the switch */
  variant?: "default" | "accent" | "disabled";
  /** Size of the switch */
  size?: "sm" | "md" | "lg";
}

/**
 * Switch component props
 * Extends Radix UI Switch Root props with custom Switch props
 */
export interface SwitchProps
  extends ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    SwitchVariantProps {
  /** Custom label for the switch (optional) */
  label?: string;
}

