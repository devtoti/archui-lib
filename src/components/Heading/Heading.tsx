import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as Slot from "@radix-ui/react-slot";
import type { HeadingProps } from "../../types/components/Heading.types";

/**
 * @author: @devtoti
 * @description: Heading
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */

const containerVariants = cva("flex flex-col", {
  variants: {
    variant: {
      h6: "gap-[var(--sp-3xs)]",
      h5: "gap-[var(--sp-2xs)]",
      h4: "gap-[var(--sp-xs]",
      h3: "gap-[var(--sp-md)]",
      h2: "gap-[var(--sp-md)]",
      h1: "gap-[var(--sp-md)]",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

const headingVariants = cva("text-arch-primary font-semibold", {
  variants: {
    variant: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold",
      h5: "text-lg font-semibold",
      h6: "text-base font-semibold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "h1",
    align: "left",
  },
});

const descriptionVariants = cva("text-arch-secondary mt-arch-sm pt-0 !mt-0", {
  variants: {
    variant: {
      h1: "text-lg",
      h2: "text-base",
      h3: "text-sm",
      h4: "text-sm",
      h5: "text-xs",
      h6: "text-xs",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "h1",
    align: "left",
  },
});

// Export variants for library consumers
// eslint-disable-next-line react-refresh/only-export-components
export { headingVariants, descriptionVariants, containerVariants };

export const Heading: React.FC<HeadingProps> = ({
  className,
  variant = "h1",
  align = "left",
  text,
  description,
  asChild = false,
  children,
  ...props
}) => {
  const HeadingComponent = asChild ? Slot.Root : variant;
  const headingClasses = twMerge(
    headingVariants({ variant, align }),
    className
  );
  const content = children || text;

  return (
    <div className={containerVariants({ variant })}>
      <HeadingComponent className={headingClasses} {...props}>
        {content}
      </HeadingComponent>
      {description && (
        <p className={descriptionVariants({ variant, align })}>{description}</p>
      )}
    </div>
  );
};
