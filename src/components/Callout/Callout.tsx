import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as Slot from "@radix-ui/react-slot";
import type { CalloutProps } from "../../types/components/Callout.types";
import { BiBuildingHouse as IconArch } from "react-icons/bi";

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
  "flex items-start gap-2 min-h-1 shadow-sm rounded-tr-arch-rd-sm rounded-br-arch-rd-sm text-arch-primary py-2 pl-arch-sm pr-arch-sm bg-arch-surface-secondary border-l-[length:var(--stroke-extra-bold)] border-solid max-w-96",
  {
    variants: {
      variant: {
        success: "border-arch-sem-brd-success",
        info: "border-arch-sem-brd-info",
        warning: "border-arch-sem-brd-warning",
        error: "border-arch-sem-brd-error",
        neutral: "border-arch-contour-primary",
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

const getIconColorClass = (variant?: string): string => {
  switch (variant) {
    case "success":
      return "text-arch-sem-i-success";
    case "info":
      return "text-arch-sem-i-info";
    case "warning":
      return "text-arch-sem-i-warning";
    case "error":
      return "text-arch-sem-i-error";
    default:
      return "";
  }
};

// Export variants for library consumers
// eslint-disable-next-line react-refresh/only-export-components
export { calloutVariants };

export const Callout: React.FC<CalloutProps> = ({
  className,
  variant = "neutral",
  size = "md",
  label = "This is the default callout component",
  title = "Callout",
  asChild = false,
  icon,
  children,
  ...props
}) => {
  /**
   * Proper usage of Slot.Root:
   * Slot.Root is ONLY for slotting ALL props/DOM into a child component, expecting the consumer to provide an appropriate root element with all styling/classes.
   * It is not a "div", but a special component from Radix UI.
   * You must forward `ref` explicitly if you want `asChild`-based slots to get refs as well.
   *
   * Passing className directly to Slot.Root is correct and will merge with consumer-provided className on their element.
   */
  const content = children || label;
  const Component = asChild ? Slot.Root : "div";
  const IconElement = icon !== undefined ? icon : <IconArch />;
  return (
    <Component
      className={twMerge(calloutVariants({ variant, size }), className)}
      {...props}
    >
      <span
        className={twMerge(
          "mt-1 inline-flex align-middle",
          getIconColorClass(variant)
        )}
      >
        {IconElement}
      </span>
      {title && <h4 className="font-medium inline">{title}:</h4>}
      <p className="inline"> {content}</p>
    </Component>
  );
};
