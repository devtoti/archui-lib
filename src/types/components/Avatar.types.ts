import type React from "react";

/**
 * Avatar component variant props — aligned with DS/Avatar blueprint (Figma v1.1.0).
 */
export interface AvatarVariantProps {
  /** Diameter scale: sm (32px) | md (48px) | lg (64px) */
  size?: "sm" | "md" | "lg";
  /** When true, show initials when the image is missing or fails to load */
  fallback?: boolean;
  /** Corner anchor for the presence bead */
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  /** Presence state for the nested bead */
  status?: "online" | "idle" | "busy" | "offline";
  /** Visual scale of the presence bead; defaults to `size` (sm → sm, md → md, lg → lg) */
  badgeSize?: "sm" | "md" | "lg";
}

/**
 * Avatar component props
 */
export interface AvatarProps
  extends AvatarVariantProps,
    React.HTMLAttributes<HTMLDivElement> {
  /** Image URL for the avatar artwork */
  src?: string;
  /** Alt text when `src` is used */
  alt?: string;
  /** Initials shown when `fallback` is true and the image is unavailable */
  initials?: string;
  /** Inner content (overrides image and initials when provided) */
  children?: React.ReactNode;
}
