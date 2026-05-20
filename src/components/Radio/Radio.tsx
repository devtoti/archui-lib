import { forwardRef, useId, type ElementRef } from "react";
import { cva } from "class-variance-authority";
import * as RadioPrimitives from "@radix-ui/react-radio-group";
import { twMerge } from "tailwind-merge";
import type {
  RadioGroupProps,
  RadioItemProps,
} from "../../types/components/Radio.types";

/**
 * @author: @devtoti
 * @description: Radio — RadioGroup + RadioItem (Radix primitives)
 * @version: 1.0.0
 * @license: MIT
 * @date: 2026-05-15
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */

const radioGroupVariants = cva("flex gap-arch-md", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row flex-wrap items-start",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const radioIndicatorVariants = cva(
  [
    "group/radio relative inline-flex shrink-0 cursor-pointer items-center justify-center border-[length:var(--stroke-regular)] border-arch-contour-primary bg-arch-surface-primary transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arch-surface-accent focus-visible:ring-offset-2 focus-visible:ring-offset-arch-surface-primary",
    "hover:border-arch-contour-accent",
    "disabled:cursor-not-allowed disabled:border-arch-contour-tertiary disabled:bg-arch-surface-tertiary disabled:hover:border-arch-contour-tertiary",
    "data-[state=checked]:border-arch-contour-accent",
    "active:not-disabled:bg-arch-surface-accent-light/35",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-4 w-4 rounded-full",
        lg: "h-6 w-6 rounded-arch-rd-sm",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

const radioDotVariants = cva("block h-2 w-2 rounded-full", {
  variants: {
    size: {
      sm: "h-2 w-2",
      lg: "h-2 w-2",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const radioLabelVariants = cva(
  "cursor-pointer select-none text-arch-txt-primary",
  {
    variants: {
      size: {
        sm: "text-[11px] leading-normal",
        lg: "text-xs leading-normal",
      },
      muted: {
        false: "",
        true: "cursor-not-allowed text-arch-txt-tertiary",
      },
    },
    defaultVariants: {
      size: "sm",
      muted: false,
    },
  },
);

const radioDescriptionVariants = cva(
  "text-[11px] leading-normal text-arch-txt-tertiary",
  {
    variants: {
      muted: {
        false: "",
        true: "text-arch-txt-tertiary",
      },
    },
    defaultVariants: {
      muted: false,
    },
  },
);

// eslint-disable-next-line react-refresh/only-export-components
export { radioGroupVariants, radioIndicatorVariants, radioDotVariants };

export const RadioGroup = forwardRef<
  ElementRef<typeof RadioPrimitives.Root>,
  RadioGroupProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <RadioPrimitives.Root
    ref={ref}
    orientation={orientation}
    className={twMerge(
      "archui-radio-group",
      radioGroupVariants({ orientation }),
      className,
    )}
    {...props}
  />
));
RadioGroup.displayName = "RadioGroup";

export const RadioItem = forwardRef<
  ElementRef<typeof RadioPrimitives.Item>,
  RadioItemProps
>(
  (
    {
      className,
      size = "sm",
      label,
      description,
      disabled,
      id: idProp,
      ...props
    },
    ref,
  ) => {
    const uid = useId();
    const itemId = idProp ?? `radio-item-${uid}`;

    const dotColorClass = disabled
      ? "bg-arch-contour-secondary"
      : "bg-arch-surface-accent";

    return (
      <div
        className={twMerge(
          "archui-radio-item flex items-center",
          size === "lg" ? "gap-2" : "gap-1",
        )}
      >
        <RadioPrimitives.Item
          ref={ref}
          id={itemId}
          disabled={disabled}
          className={twMerge(
            "archui-radio-item-indicator",
            radioIndicatorVariants({ size }),
            className,
          )}
          {...props}
        >
          <RadioPrimitives.Indicator
            className={twMerge(
              "archui-radio-item-dot",
              radioDotVariants({ size }),
              dotColorClass,
            )}
          />
        </RadioPrimitives.Item>
        <div className="archui-radio-item-copy flex min-h-[1rem] min-w-0 flex-col gap-arch-sp-3xs pt-0.5">
          <label
            htmlFor={itemId}
            className={twMerge(
              "archui-radio-item-label",
              radioLabelVariants({
                size,
                muted: !!disabled,
              }),
            )}
          >
            {label}
          </label>
          {description ? (
            <span
              className={twMerge(
                "archui-radio-item-description",
                radioDescriptionVariants({ muted: !!disabled }),
              )}
            >
              {description}
            </span>
          ) : null}
        </div>
      </div>
    );
  },
);
RadioItem.displayName = "RadioItem";
