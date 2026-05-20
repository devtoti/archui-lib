import {
  forwardRef,
  useId,
  useState,
  type HTMLInputTypeAttribute,
} from "react";
import { cva } from "class-variance-authority";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import type {
  InputBaseProps,
  InputPasswordProps,
  InputTextProps,
} from "../../types/components/Input.types";

/**
 * @author: @devtoti
 * @description: Input — labeled field with optional helper and password toggle
 * @version: 1.0.0
 * @license: MIT
 * @date: 2026-05-16
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */

/* eslint-disable react-refresh/only-export-components -- cva tokens for lib consumers */
export const inputRootVariants = cva("flex min-w-[160px] flex-col items-stretch", {
  variants: {
    size: {
      sm: "gap-0",
      md: "gap-0",
      lg: "gap-0",
    },
    disabled: {
      false: "",
      true: "opacity-60",
    },
  },
  defaultVariants: {
    size: "sm",
    disabled: false,
  },
});

export const labelRowVariants = cva(
  "inline-flex flex-wrap items-baseline gap-0.5 text-arch-txt-primary",
  {
    variants: {
      size: {
        sm: "",
        md: "",
        lg: "",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      disabled: {
        false: "",
        true: "text-arch-txt-primary",
      },
    },
    compoundVariants: [
      { size: "sm", weight: "normal", class: "text-xs leading-normal" },
      { size: "sm", weight: "medium", class: "text-xs leading-normal" },
      { size: "sm", weight: "semibold", class: "text-xs leading-normal" },
      { size: "sm", weight: "bold", class: "text-xs leading-normal" },
      { size: "md", weight: "normal", class: "text-sm leading-normal" },
      { size: "md", weight: "medium", class: "text-sm leading-normal" },
      { size: "md", weight: "semibold", class: "text-sm leading-normal" },
      { size: "md", weight: "bold", class: "text-sm leading-normal" },
      { size: "lg", weight: "normal", class: "text-base leading-normal" },
      { size: "lg", weight: "medium", class: "text-base leading-normal" },
      { size: "lg", weight: "semibold", class: "text-base leading-normal" },
      { size: "lg", weight: "bold", class: "text-base leading-normal" },
    ],
    defaultVariants: {
      size: "sm",
      weight: "normal",
      disabled: false,
    },
  },
);

export const inputFieldVariants = cva(
  [
    "flex w-full items-center gap-arch-xs overflow-hidden rounded-arch-rd-sm border-solid",
    "bg-arch-surface-secondary px-arch-sm py-arch-xs",
    "shadow-regular transition-[color,box-shadow,border-color]",
    "border-[length:var(--stroke-light)]",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "min-h-[34px]",
        md: "min-h-[38px]",
        lg: "min-h-[42px]",
      },
      disabled: {
        false: "",
        true: "cursor-not-allowed opacity-80",
      },
      validation: {
        default: [
          "border-arch-contour-secondary",
          "focus-within:border-arch-contour-accent focus-within:ring-2 focus-within:ring-arch-surface-accent focus-within:ring-offset-1 focus-within:ring-offset-arch-surface-primary",
        ].join(" "),
        error: [
          "border-arch-danger-brd",
          "focus-within:border-arch-danger-brd focus-within:ring-2 focus-within:ring-arch-danger-brd/45 focus-within:ring-offset-1 focus-within:ring-offset-arch-surface-primary",
        ].join(" "),
        success: [
          "border-arch-success-brd",
          "focus-within:border-arch-success-brd focus-within:ring-2 focus-within:ring-arch-success-brd/45 focus-within:ring-offset-1 focus-within:ring-offset-arch-surface-primary",
        ].join(" "),
      },
    },
    defaultVariants: {
      size: "sm",
      disabled: false,
      validation: "default",
    },
  },
);

export const inputNativeVariants = cva(
  "min-w-0 flex-1 bg-transparent text-xs leading-normal text-arch-txt-primary outline-none placeholder:text-arch-txt-tertiary disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      revealedPassword: {
        false: "",
        true: "",
      },
    },
    defaultVariants: {
      size: "sm",
      revealedPassword: false,
    },
  },
);
/* eslint-enable react-refresh/only-export-components */

type InputInnerProps = InputBaseProps & {
  nativeType: HTMLInputTypeAttribute;
  isPassword: boolean;
};

const InputInner = forwardRef<HTMLInputElement, InputInnerProps>(
  (
    {
      className,
      label,
      description,
      error = false,
      errorMessage,
      success = false,
      successMessage,
      required,
      disabled,
      size = "sm",
      weight = "normal",
      placeholder = "Enter text...",
      id: idProp,
      autoComplete,
      nativeType,
      isPassword,
      "aria-describedby": ariaDescribedByProp,
      ...rest
    },
    ref,
  ) => {
    const uid = useId();
    const inputId = idProp ?? `arch-input-${uid}`;
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;
    const successId = `${inputId}-success`;
    const showDescription =
      description != null && String(description).trim() !== "";
    const showError = !!error && errorMessage != null && errorMessage !== "";
    const showSuccess =
      !error && !!success && successMessage != null && successMessage !== "";
    const fieldValidation = error ? "error" : success ? "success" : "default";
    const describedBy = [
      showDescription ? descriptionId : null,
      showError ? errorId : null,
      showSuccess ? successId : null,
      ariaDescribedByProp?.trim() ? ariaDescribedByProp.trim() : null,
    ]
      .filter((id): id is string => Boolean(id && id.length > 0))
      .join(" ");
    const [showPassword, setShowPassword] = useState(false);
    const effectiveType = isPassword && showPassword ? "text" : nativeType;

    return (
      <div
        className={twMerge(
          "archui-input",
          inputRootVariants({ size, disabled: !!disabled }),
          className,
        )}
      >
        <div className="flex w-full flex-col gap-arch-sp-3xs">
          <div className="flex flex-col gap-arch-sp-3xs">
            <label
              htmlFor={inputId}
              className={twMerge(
                "archui-input-label",
                labelRowVariants({
                  size,
                  weight,
                  disabled: !!disabled,
                }),
              )}
            >
              <span className="archui-input-label-text">{label}</span>
              {required ? (
                <span
                  className="archui-input-required text-sm font-medium leading-snug text-arch-danger-txt"
                  aria-hidden
                >
                  *
                </span>
              ) : null}
            </label>
            {showDescription ? (
              <p
                id={descriptionId}
                className="archui-input-description text-[11px] leading-normal text-arch-txt-secondary"
              >
                {description}
              </p>
            ) : null}
            {showError ? (
              <p
                id={errorId}
                className="archui-input-error text-[11px] leading-normal text-arch-danger-txt"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : null}
            {showSuccess ? (
              <p
                id={successId}
                className="archui-input-success text-[11px] leading-normal text-arch-success-txt"
                role="status"
              >
                {successMessage}
              </p>
            ) : null}
          </div>
          <div
            className={twMerge(
              "archui-input-field",
              inputFieldVariants({
                size,
                disabled: !!disabled,
                validation: fieldValidation,
              }),
            )}
          >
            <input
              {...rest}
              ref={ref}
              id={inputId}
              type={effectiveType}
              disabled={disabled}
              required={required}
              placeholder={placeholder}
              aria-required={required ? true : undefined}
              aria-invalid={error ? true : undefined}
              aria-describedby={describedBy || undefined}
              autoComplete={
                isPassword ? (autoComplete ?? "current-password") : autoComplete
              }
              className={twMerge(
                "archui-input-control",
                inputNativeVariants({
                  size,
                  revealedPassword: isPassword && showPassword,
                }),
              )}
            />
            {isPassword ? (
              <button
                type="button"
                disabled={disabled}
                className={twMerge(
                  "archui-input-password-toggle",
                  "inline-flex shrink-0 cursor-pointer text-arch-txt-secondary transition-colors hover:text-arch-txt-primary",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arch-surface-accent rounded-arch-rd-sm p-0.5",
                  disabled &&
                    "cursor-not-allowed opacity-50 hover:text-arch-txt-secondary",
                )}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? (
                  <MdOutlineVisibility className="h-4 w-4" aria-hidden />
                ) : (
                  <MdOutlineVisibilityOff className="h-4 w-4" aria-hidden />
                )}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  },
);
InputInner.displayName = "Input";

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ type = "text", ...props }, ref) => (
    <InputInner ref={ref} nativeType={type} isPassword={false} {...props} />
  ),
);
InputText.displayName = "Input.Text";

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => (
    <InputInner ref={ref} nativeType="password" isPassword {...props} />
  ),
);
InputPassword.displayName = "Input.Password";

export const Input = Object.assign(InputText, {
  Text: InputText,
  Password: InputPassword,
});
