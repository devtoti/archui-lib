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
  "px-4 py-2 rounded-[var(--rd-sm)] font-normal transition-colors hover:cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--bg-accent)] border-[var(--brd-accent)] text-[var(--txt-light)]",
        secondary:
          "bg-[var(--bg-accent-light)] border-[var(--brd-accent-dark)] border-[length:var(--stroke-regular)] text-[var(--txt-accent)]",
        tertiary:
          "bg-[var(--bg-primary)] border-transparent text-[var(--txt-accent)]",
        ghost:
          "bg-trasnparent rounded-none border-b-[length:var(--stroke-regular)] text-[var(--txt-accent)]",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
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
      className={twMerge(buttonVariants({ variant, size }), className)}
      style={mergedStyle}
      {...props}
    >
      {content}
    </Button>
  );
};
