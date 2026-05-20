import type React from "react";

/**
 * Visual variants for `Input` label + field density
 */
export interface InputVariantProps {
  /** Label + control scale — default `sm` per DS */
  size?: "sm" | "md" | "lg";
  /** Label font weight — default `normal` */
  weight?: "normal" | "medium" | "semibold" | "bold";
}

/** Shared props for `Input.Text` and `Input.Password` */
export interface InputBaseProps
  extends InputVariantProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Visible label above the field */
  label: React.ReactNode;
  /** Helper copy beneath label — shown when provided and non-empty */
  description?: React.ReactNode;
  /** Error styling on the field, `aria-invalid`, and room for `errorMessage` */
  error?: boolean;
  /** Copy below description when `error` is true */
  errorMessage?: React.ReactNode;
  /** Compliant / success styling on the field (ignored when `error` is true) */
  success?: boolean;
  /** Copy below description when `success` is true and not in `error` */
  successMessage?: React.ReactNode;
}

/**
 * Text-like native input (`Input` / `Input.Text`).
 * Use `type="email"`, `search`, etc. when needed — not for passwords.
 */
export interface InputTextProps extends InputBaseProps {
  type?: Exclude<React.HTMLInputTypeAttribute, "password">;
}

/** Password field with visibility toggle (`Input.Password`) */
export type InputPasswordProps = InputBaseProps;

/** @deprecated Use `InputTextProps` — alias kept for existing imports */
export type InputProps = InputTextProps;
