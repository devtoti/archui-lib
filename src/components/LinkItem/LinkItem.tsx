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
  "bg-arch-surface-primary rounded-arch-rd-md px-arch-sm py-arch-xs inline-flex items-center gap-arch-sm text-arch-secondary transition-colors duration-200 cursor-pointer hover:bg-arch-surface-tertiary hover:text-arch-accent hover:rounded-arch-rd-sm hover:underline hover:underline-offset-4",
  {
    variants: {
      variant: {
        default:
          "text-arch-primary underline underline-offset-4 [&_svg]:text-arch-accent",
        hover:
          "bg-arch-surface-tertiary text-arch-accent px-arch-sm py-arch-xs rounded-arch-rd-sm underline underline-offset-4",
        active:
          "text-arch-accent bg-arch-surface-secondary px-arch-sm py-arch-xs rounded-arch-rd-sm font-medium border-arch-accent border-[length:var(--stroke-regular)]",
        minimal:
          "text-arch-secondary bg-transparent hover:text-arch-accent underline underline-offset-4",
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
  blank = false,
  noopenreferrer,
  download,
  prefetch,
  ariaLabel,
  href,
  rel: relProp,
  target: targetProp,
  ...props
}) => {
  const LinkComponent = asChild ? Slot.Root : "a";
  const content = children || label;

  // Determine target attribute
  const targetValue = blank ? "_blank" : targetProp;

  // Determine rel attribute for security and accessibility
  let relValue = relProp;
  if (blank || noopenreferrer) {
    const relParts = relValue ? relValue.split(" ").filter(Boolean) : [];

    // Security: Always add noopener when opening in new tab (prevents window.opener access)
    if (blank && !relParts.includes("noopener")) {
      relParts.push("noopener");
    }

    // Add noreferrer based on noopenreferrer prop or default behavior with blank
    if (noopenreferrer === true) {
      // Explicitly requested
      if (!relParts.includes("noreferrer")) {
        relParts.push("noreferrer");
      }
    } else if (blank && noopenreferrer !== false) {
      // Default: add noreferrer when blank=true unless explicitly disabled
      if (!relParts.includes("noreferrer")) {
        relParts.push("noreferrer");
      }
    }

    relValue = relParts.length > 0 ? relParts.join(" ") : undefined;
  }

  // Determine download attribute
  const downloadValue = download === true ? "" : download || undefined;

  // Use ariaLabel if provided, otherwise use existing aria-label from props
  const ariaLabelValue = ariaLabel || props["aria-label"];

  // Build final props, excluding custom props and adding data attributes
  const finalProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    ...props,
    href,
    target: targetValue,
    rel: relValue,
    download: downloadValue,
    "aria-label": ariaLabelValue,
    ...(prefetch && { "data-prefetch": "true" }),
  };

  return (
    <LinkComponent
      className={twMerge(linkItemVariants({ variant }), className)}
      {...finalProps}
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
