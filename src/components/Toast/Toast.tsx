import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../hooks/useTheme";
import { RxCross1 } from "react-icons/rx";
import type {
  ToastProps,
  ToastVariantProps,
} from "../../types/components/Toast.types";
/**
 * @author: @devtoti
 * @description: Toast using Radix UI Primitive
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */
/**
 * Returns appropriate shadow class based on current theme
 * @returns shadow-sm for doric, shadow-md for ionic, shadow-lg for corinthian
 */
const useThemeShadow = (): string => {
  const { theme } = useTheme();
  const shadowMap: Record<"doric" | "ionic" | "corinthian", string> = {
    doric: "shadow-sm",
    ionic: "shadow-lg",
    corinthian: "shadow-md",
  };
  return shadowMap[theme] || "shadow-md";
};

// eslint-disable-next-line react-refresh/only-export-components
export const toastVariants = cva(
  "flex flex-row items-center justify-between gap-2 bg-arch-surface-primary py-arch-sm pl-arch-lg pr-arch-md rounded-arch-rd-sm text-arch-primary",
  {
    variants: {
      variant: {
        default: "text-arch-primary",
        minimal: "text-arch-secondary",
      },
      size: {
        sm: "arc-body-1 text-sm",
        md: "arc-body-1 text-base",
        lg: "arc-body-1 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// Use types from toast.types
export type { ToastProps, ToastVariantProps };

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(
  (
    {
      className = "",
      variant = "default",
      size = "md",
      hasDivider = variant === "minimal",
      ariaLabel = "Action Label",
      icon,
      title,
      description,
      children,
      actionButton,
      open = false,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    const shadow = useThemeShadow();
    return (
      <ToastPrimitive.Root
        ref={ref}
        open={open}
        onOpenChange={onOpenChange}
        className={twMerge(
          "archui-toast-root",
          toastVariants({ variant, size }),
          className,
          shadow
        )}
        {...props}
      >
        {icon && (
          <span className="inline-block align-middle mt-1 mb-auto text-arch-accent-dark">
            {icon}
          </span>
        )}
        <div className="flex flex-col items-start justify-between">
          {title && !children && (
            <ToastPrimitive.Title className="text-arch-primary font-medium">
              {title}
            </ToastPrimitive.Title>
          )}
          {description && !children && (
            <ToastPrimitive.Description className="text-arch-secondary">
              {description}
            </ToastPrimitive.Description>
          )}
          {children}
        </div>
        {hasDivider && (
          <div className="w-[1px] min-h-20 h-full bg-arch-contour-tertiary" />
        )}
        {variant === "minimal" && (
          <ToastPrimitive.Close
            aria-label="Close"
            className="h-full mb-auto cursor-pointer"
          >
            <span aria-hidden className="text-arch-tertiary">
              <RxCross1 className="text-arch-tertiary" />
            </span>
          </ToastPrimitive.Close>
        )}
        {actionButton && (
          <ToastPrimitive.Action
            altText={ariaLabel}
            asChild
            className="mb-auto"
          >
            {actionButton}
          </ToastPrimitive.Action>
        )}
      </ToastPrimitive.Root>
    );
  }
);
Toast.displayName = "Toast";

export const ToastViewport: React.FC<
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
> = ({ className = "", ...props }) => {
  return (
    <ToastPrimitive.Viewport
      className={twMerge(
        "fixed bottom-0 right-0 z-[2147483647] m-0 flex w-full max-w-[420px] flex-col gap-2 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]",
        className
      )}
      {...props}
    />
  );
};
export const ToastProvider: React.FC<
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Provider>
> = ToastPrimitive.Provider;
