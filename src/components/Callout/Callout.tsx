import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as Slot from "@radix-ui/react-slot";
import type { CalloutProps } from "../../types/components/Callout.types";

/**
 * @author: @devtoti
 * @description: Callout
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */

const calloutVariants = cva(
  "flex items-center gap-2 min-h-1 shadow-sm rounded-tr-[var(--rd-sm)] rounded-br-[var(--rd-sm)] color-[var(--txt-primary)] py-2 pl-[var(--pd-sm)] pr-[var(--pd-sm)] bg-[var(--bg-secondary)] border-[color:var(--brd-accent)] border-l-[length:var(--stroke-extra-bold)] border-solid max-w-96",
  {
    variants: {
      variant: {
        success: "[border-left-color:var(--sem-icons-success)]",
        info: "[border-left-color:var(--sem-icons-info)]",
        warning: "[border-left-color:var(--sem-icons-warning)]",
        error: "[border-left-color:var(--sem-icons-danger)]",
        neutral: "[border-left-color:var(--brd-primary)]",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "neutral",
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
      return { color: "var(--sem-icons-danger)" };
    default:
      return {};
  }
};

// Export variants for library consumers
// eslint-disable-next-line react-refresh/only-export-components
export { calloutVariants };

export const Callout: React.FC<CalloutProps> = ({
  className,
  variant,
  size,
  label = "default label",
  title,
  asChild = false,
  icon,
  children,
  ...props
}) => {
  const CalloutComponent = asChild ? Slot.Root : "div";
  const content = children || label;

  return (
    <CalloutComponent
      className={twMerge(calloutVariants({ variant, size }), className)}
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
      <h4 className="font-medium inline">{title}:</h4>
      <p className="inline"> {content}</p>
    </CalloutComponent>
  );
};
