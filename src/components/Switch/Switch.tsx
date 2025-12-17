import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import type { SwitchProps } from "../../types/components/Switch.types";

/**
 * @author: @devtoti
 * @description: Switch
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */

const switchVariants = cva(
  "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-arch-rd-sm border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arch-surface-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-400",
  {
    variants: {
      variant: {
        default: "data-[state=checked]:bg-blue-500",
        accent: "data-[state=checked]:bg-arch-surface-accent",
        disabled:
          "bg-arch-sunken-3 cursor-not-allowed opacity-60 pointer-events-none",
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const switchThumbVariants = cva(
  "pointer-events-none block rounded-arch-rd-sm bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out data-[state=unchecked]:translate-x-0.5",
  {
    variants: {
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-[16px]",
        md: "h-5 w-5 data-[state=checked]:translate-x-[20px]",
        lg: "h-6 w-6 data-[state=checked]:translate-x-[28px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

// Export variants for library consumers
// eslint-disable-next-line react-refresh/only-export-components
export { switchVariants, switchThumbVariants };

export const Switch: React.FC<SwitchProps> = ({
  className,
  variant,
  size,
  disabled,
  ...props
}) => {
  const isDisabled = variant === "disabled" || disabled;

  return (
    <SwitchPrimitive.Root
      className={twMerge(switchVariants({ variant, size }), className)}
      disabled={isDisabled}
      {...props}
    >
      <SwitchPrimitive.Thumb className={switchThumbVariants({ size })} />
    </SwitchPrimitive.Root>
  );
};
