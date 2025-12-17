import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as Slot from "@radix-ui/react-slot";
import type { AlertProps } from "../../types/components/Alert.types";

/**
 * @author: @devtoti
 * @description: Alert
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */

const alertVariants = cva(
  "max-w-80 flex items-start gap-[var(--sp-md)] shadow-sm rounded-tr-[var(--rd-sm)] rounded-[var(--rd-sm)] color-[var(--txt-primary)] py-[var(--pd-sm)] px-[var(--pd-lg)] bg-[var(--bg-primary)] border-[color:var(--brd-accent)] border-solid border-[length:var(--stroke-regular)] shadow-2",
  {
    variants: {
      variant: {
        success:
          "border-[color:var(--sem-icons-success)] bg-[var(--sem-bg-success)] text-[color:var(--sem-txt-success)]",
        info: "border-[color:var(--sem-icons-info)] bg-[var(--sem-bg-info)] text-[color:var(--sem-txt-info)]",
        warning:
          "border-[color:var(--sem-icons-warning)] bg-[var(--sem-bg-warning)] text-[color:var(--sem-txt-warning)]",
        error:
          "border-[color:var(--sem-icons-error)] bg-[var(--sem-bg-error)] text-[color:var(--sem-txt-error)]",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "success",
      size: "md",
    },
  }
);

// Utility to return icon color style based on variant
const getIconColorStyle = (variant?: string): React.CSSProperties => {
  switch (variant) {
    case "success":
      return { color: "var(--sem-icons-success)" };
    case "info":
      return { color: "var(--sem-icons-info)" };
    case "warning":
      return { color: "var(--sem-icons-warning)" };
    case "error":
      return { color: "var(--sem-icons-error)" };
    default:
      return {};
  }
};

// Export variants for library consumers
// eslint-disable-next-line react-refresh/only-export-components
export { alertVariants };

export const Alert: React.FC<AlertProps> = ({
  className,
  variant,
  size,
  label = "default label",
  asChild = false,
  icon,
  children,
  ...props
}) => {
  const AlertComponent = asChild ? Slot.Root : "div";
  const content = children || label;

  return (
    <AlertComponent
      className={twMerge(alertVariants({ variant, size }), className)}
      {...props}
    >
      {icon && (
        <span
          className="inline-flex align-middle"
          style={getIconColorStyle(variant)}
        >
          {icon}
        </span>
      )}
      <p className="inline">{content}</p>
    </AlertComponent>
  );
};
