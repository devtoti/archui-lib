import type {
  RadioGroupItemProps as RadixRadioGroupItemProps,
  RadioGroupProps as RadixRadioGroupProps,
} from "@radix-ui/react-radio-group";
import type React from "react";

/**
 * RadioGroup props — wraps Radix Radio Group root (`Root`).
 */
export type RadioGroupProps = RadixRadioGroupProps;

/**
 * RadioItem variant props (visual density)
 */
export interface RadioItemVariantProps {
  /** `sm`: circular control (default). `lg`: rounded-square control per DS */
  size?: "sm" | "lg";
}

/**
 * Single radio option with label and optional helper text.
 * Figma: **radioText** → `label`, **descriptionText** → `description`.
 */
export interface RadioItemProps
  extends RadioItemVariantProps,
    Omit<RadixRadioGroupItemProps, "children"> {
  /** Visible label beside control (Figma: radioText) */
  label: React.ReactNode;
  /** Helper line beneath label (Figma: descriptionText); omit for no helper */
  description?: React.ReactNode;
}
