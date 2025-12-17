import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as Slot from "@radix-ui/react-slot";
import type { LinkItemProps } from "../../types/components/LinkItem.types";

/**
 * @author: @devtoti
 * @description: LinkItem
 * @version: 1.0.0
 * @license: MIT
 * @date: 2025-09-07
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */

const linkItemVariants = cva(
  "bg-[var(--bg-primary)] rounded-[var(--rd-md)] px-[var(--pd-sm)] py-[var(--pd-xs)] inline-flex items-center gap-[var(--sp-sm)] text-[var(--txt-secondary)] transition-colors duration-200 cursor-pointer hover:bg-[var(--bg-tertiary)] hover:text-[var(--txt-accent)] hover:rounded-[var(--rd-sm)] hover:underline hover:underline-offset-4",
  {
    variants: {
      variant: {
        default:
          "text-[var(--txt-primary)] underline underline-offset-4 [&_svg]:text-[var(--txt-accent)]",
        hover:
          "bg-[var(--bg-tertiary)] text-[var(--txt-accent)] px-[var(--pd-sm)] py-[var(--pd-xs)] rounded-[var(--rd-sm)] underline underline-offset-4",
        active:
          "text-[var(--txt-accent)] bg-[var(--bg-secondary)] px-[var(--pd-sm)] py-[var(--pd-xs)] rounded-[var(--rd-sm)] underline underline-offset-4 font-medium border-[color:var(--txt-accent)] border-[length:var(--stroke-regular)]",
        minimal:
          "text-[var(--txt-secondary)] bg-transparent hover:text-[var(--txt-accent)] underline underline-offset-4",
        visited:
          "text-violet-800 hover:text-violet-600 underline underline-offset-4 visited:text-violet-800 [&_svg]:text-violet-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Export variants for library consumers
// eslint-disable-next-line react-refresh/only-export-components
export { linkItemVariants };

export const LinkItem: React.FC<LinkItemProps> = ({
  className,
  variant,
  label,
  asChild = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  const LinkComponent = asChild ? Slot.Root : "a";
  const content = children || label;

  return (
    <LinkComponent
      className={twMerge(linkItemVariants({ variant }), className)}
      {...props}
    >
      {leftIcon && (
        <span className="inline-flex items-center" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      {content && <span>{content}</span>}
      {rightIcon && (
        <span className="inline-flex items-center" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </LinkComponent>
  );
};
