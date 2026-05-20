import { useEffect, useMemo, useState, type FC } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../hooks/useTheme";
import type { AvatarProps } from "../../types/components/Avatar.types";

/**
 * @author: @devtoti
 * @description: Avatar — profile image or initials with optional presence bead
 * @version: 1.0.0
 * @license: MIT
 * @date: 2026-05-15
 * @website: https://devtoti.com
 * @github: https://github.com/devtoti/archui-lib
 */

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center border-solid border-[length:var(--stroke-regular)] hover:shadow-arch-regular active:bg-arch-surface-tertiary transition-all duration-200 cursor-pointer duration-200 group",
  {
    variants: {
      size: {
        sm: "size-[2rem] rounded-arch-rd-md",
        md: "size-[3rem] rounded-arch-rd-lg",
        lg: "size-[4rem] rounded-arch-rd-xl",
      },
      fallback: {
        true: "border-arch-contour-accent bg-arch-surface-primary shadow-none",
        false: "border-transparent shadow-arch-regular",
      },
    },
    defaultVariants: {
      size: "sm",
      fallback: false,
    },
  },
);

const initialsVariants = cva(
  "select-none font-bold uppercase tracking-[0.1em] text-arch-txt-accent group-hover:text-arch-txt-accent-dark",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-base font-extrabold",
        lg: "text-2xl font-extrabold",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

const badgeSizeVariants = cva(
  "rounded-arch-rd-full ring-2 ring-arch-surface-primary",
  {
    variants: {
      badgeSize: {
        sm: "size-2",
        md: "size-3",
        lg: "size-4",
      },
    },
  },
);

const statusSurface: Record<NonNullable<AvatarProps["status"]>, string> = {
  online: "bg-arch-success-icon",
  idle: "bg-arch-warning-icon",
  busy: "bg-arch-danger-icon",
  offline: "bg-arch-icon-tertiary",
};

function useAvatarShapeClass(): string {
  const { theme } = useTheme();
  const map: Record<typeof theme, string> = {
    doric: "rounded-arch-rd-sm",
    ionic: "rounded-arch-rd-full",
    corinthian: "rounded-arch-rd-xl",
  };
  return map[theme];
}

function badgeAlignClass(
  position: NonNullable<AvatarProps["position"]>,
): string {
  switch (position) {
    case "bottom-left":
      return "justify-self-start self-end";
    case "top-right":
      return "justify-self-end self-start";
    case "top-left":
      return "justify-self-start self-start";
    case "bottom-right":
    default:
      return "justify-self-end self-end";
  }
}

/** Explicit single cell (lines 1→2) so the bead never lands on an implicit second row. */
const avatarGridPlacement = "col-start-1 row-start-1 col-end-2 row-end-2";

// eslint-disable-next-line react-refresh/only-export-components
export { avatarVariants };

export const Avatar: FC<AvatarProps> = ({
  className,
  size = "sm",
  fallback = false,
  position = "bottom-right",
  status = "online",
  badgeSize: badgeSizeProp,
  src,
  alt = "",
  initials = "",
  children,
  ...props
}) => {
  const badgeSize = badgeSizeProp ?? size;
  const shape = useAvatarShapeClass();
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [src]);

  const safeInitials = useMemo(() => {
    const t = initials.trim().toUpperCase();
    if (!t) return "";
    return t.slice(0, 2);
  }, [initials]);

  const hasCustomContent = children != null;

  const showInitials =
    !hasCustomContent &&
    fallback &&
    Boolean(safeInitials) &&
    (!src || imgFailed);

  const showImg =
    !hasCustomContent && !showInitials && Boolean(src) && !imgFailed;

  const faceClass = twMerge(
    "archui-avatar-face",
    avatarVariants({ size, fallback: showInitials }),
    shape,
    "overflow-hidden",
  );

  return (
    <div
      className={twMerge(
        "archui-avatar",
        /* `grid-rows-1`/`grid-cols-1` often resolve to `1fr` tracks; with auto block-size,
           some engines inflate the row (e.g. 32×64). `max-content` + explicit cell lines keeps a single face-sized cell. */
        "relative inline-grid shrink-0 place-items-start overflow-visible grid-cols-[max-content] grid-rows-[max-content]",
        className,
      )}
      {...props}
    >
      <div
        className={twMerge(
          faceClass,
          avatarGridPlacement,
          "justify-self-stretch self-stretch",
        )}
      >
        {children ? (
          <span className="archui-avatar-content flex size-full items-center justify-center">
            {children}
          </span>
        ) : showImg ? (
          <img
            src={src}
            alt={alt}
            className={twMerge(
              "archui-avatar-img",
              "size-full rounded-[inherit] object-cover",
            )}
            onError={() => setImgFailed(true)}
          />
        ) : showInitials ? (
          <span
            className={twMerge(
              "archui-avatar-fallback",
              initialsVariants({ size }),
              "leading-none",
            )}
          >
            {safeInitials}
          </span>
        ) : (
          <span
            className="archui-avatar-placeholder block size-full rounded-[inherit] bg-arch-surface-tertiary"
            aria-hidden
          />
        )}
      </div>

      <span
        className={twMerge(
          "archui-avatar-status",
          "pointer-events-none z-[1] block shrink-0 leading-none",
          avatarGridPlacement,
          badgeAlignClass(position),
          badgeSizeVariants({ badgeSize }),
          statusSurface[status],
        )}
        aria-hidden
      />
    </div>
  );
};
