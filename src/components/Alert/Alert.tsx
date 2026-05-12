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
  "max-w-80 h-min flex items-start gap-arch-md shadow-sm rounded-tr-arch-rd-sm rounded-arch-rd-sm text-arch-txt-primary p-arch-sm bg-arch-surface-primary border-arch-contour-accent border-solid border-[length:var(--stroke-regular)] shadow-arch-dark",
  {
    variants: {
      variant: {
        success:
          "border-arch-success-brd bg-arch-success-bg text-arch-success-txt",
        info: "border-arch-info-brd bg-arch-info-bg text-arch-info-txt",
        warning:
          "border-arch-warning-brd bg-arch-warning-bg text-arch-warning-txt",
        danger:
          "border-arch-danger-brd bg-arch-danger-bg text-arch-danger-txt",
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

// Utility to return icon color class based on variant
const getIconColorClass = (variant?: string): string => {
  switch (variant) {
    case "success":
      return "text-arch-success-icon";
    case "info":
      return "text-arch-info-icon";
    case "warning":
      return "text-arch-warning-icon";
    case "danger":
      return "text-arch-danger-icon";
    default:
      return "";
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
          className={twMerge(
            "inline-flex align-middle mt-1",
            getIconColorClass(variant)
          )}
        >
          {icon}
        </span>
      )}
      <p className="inline">{content}</p>
    </AlertComponent>
  );
};
