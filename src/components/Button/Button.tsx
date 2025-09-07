import React from "react";
import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as Slot from "@radix-ui/react-slot";

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
          "bg-primary text-white hover:cursor-pointer hover:bg-primary-hover",
        secondary:
          "bg-secondary text-gray-800 hover:cursor-pointer hover:bg-secondary-hover",
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

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: React.ReactNode;
  children?: React.ReactNode;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  label,
  children,
  asChild = false,
  ...props
}) => {
  const Button = asChild ? Slot.Root : "button";
  const content = children || label;

  return (
    <Button
      className={twMerge(buttonVariants({ intent, size }), className)}
      {...props}
    >
      {content}
    </Button>
  );
};
