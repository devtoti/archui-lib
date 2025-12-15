import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as Slot from "@radix-ui/react-slot";
import type { ButtonProps } from "../../types/components/Button.types";

/**
 * @author: @devtoti
 * @description: Button
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */

const buttonVariants = cva(
  "px-4 py-2 rounded font-semibold transition-colors",
  {
    variants: {
      intent: {
        primary:
          "bg-[var(--bg-primary)] text-gray-500 hover:cursor-pointer hover:bg-primary-hover",
        secondary:
          "bg-[var(--bg-secondary)] text-gray-800 hover:cursor-pointer hover:bg-secondary-hover",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

// Export the buttonVariants for use in types
export { buttonVariants };

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  label,
  children,
  asChild = false,
  backgroundColor,
  labelColor,
  style,
  ...props
}) => {
  const Button = asChild ? Slot.Root : "button";
  const content = children || label;

  // Merge custom colors with existing style prop
  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
    ...(labelColor && { color: labelColor }),
  };

  return (
    <Button
      className={twMerge(buttonVariants({ intent, size }), className)}
      style={mergedStyle}
      {...props}
    >
      {content}
    </Button>
  );
};
