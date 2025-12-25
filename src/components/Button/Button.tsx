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

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva(
  "px-4 py-2 rounded-arch-rd-sm font-normal transition-colors hover:cursor-pointer \
hover:brightness-95 hover:scale-[1.01] active:brightness-90 active:scale-[0.99] duration-150 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "bg-arch-surface-accent border-arch-contour-accent text-arch-light",
        secondary:
          "bg-arch-surface-accent-light border-arch-contour-accent-dark border-[length:var(--stroke-regular)] text-arch-accent-dark",
        tertiary:
          "bg-arch-surface-primary border-transparent text-arch-accent-dark",
        ghost:
          "bg-transparent rounded-none border-b-[length:var(--stroke-regular)] text-arch-accent",
      },
      size: {
        sm: "arc-body-1 text-sm",
        md: "arc-body-1 text-base",
        lg: "arc-body-1 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "primary",
  size = "md",
  label = "Button",
  children = null,
  asChild = false,
  ...props
}) => {
  const Button = asChild ? Slot.Root : "button";
  const content = children || label;

  return (
    <Button
      className={twMerge(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {content}
    </Button>
  );
};
