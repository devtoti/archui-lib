// TailwindButton.tsx
import React from "react";
import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "px-4 py-2 rounded font-semibold transition-colors",
  {
    variants: {
      intent: {
        primary:
          "bg-red-600 text-white hover:bg-blue-700 dark:bg-blue-900 dark:hover:bg-blue-600",
        secondary:
          "bg-yellow-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-600",
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

export interface TailwindButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: React.ReactNode;
}

export const TailwindButton: React.FC<TailwindButtonProps> = ({
  className,
  intent,
  size,
  label,
  ...props
}) => {

  return (
    <button className={twMerge(buttonVariants({ intent, size }), className)} {...props}>
      {label}
    </button>
  );
};
