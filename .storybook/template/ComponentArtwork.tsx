import * as React from "react";
import { useOf } from "@storybook/addon-docs/blocks";

/**
 * Get asset path for Storybook
 * Since staticDirs: ["../public"] is configured, assets in public/ are accessible
 * at paths like "/icons/models/button.svg"
 *
 * For GitHub Pages with base path "/archui-lib/", we prepend the base path.
 * We detect this by checking if the current URL includes the base path.
 */
const getAssetPath = (path: string): string => {
  // Normalize: ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // If already has base path, return as-is
  if (normalizedPath.startsWith("/archui-lib/")) {
    return normalizedPath;
  }

  // Try to detect if we need base path
  // Check both window.location and parent window (for iframe context)
  if (typeof window !== "undefined") {
    try {
      const currentPath = window.location.pathname;
      const parentPath = window.parent?.location?.pathname || "";

      // If either current or parent path includes base path, we're on GitHub Pages
      if (
        currentPath.startsWith("/archui-lib/") ||
        parentPath.startsWith("/archui-lib/")
      ) {
        return `/archui-lib${normalizedPath}`;
      }
    } catch {
      // Cross-origin iframe access might fail, ignore and use default
    }
  }

  // Default: return normalized path (works for local dev with staticDirs)
  return normalizedPath;
};

export function ComponentArtwork() {
  try {
    const resolved = useOf("meta", ["meta"]);
    const meta = resolved.preparedMeta;

    // Get artwork path from meta parameters
    const artworkPath = meta.parameters?.docs?.artwork;

    if (!artworkPath) {
      return null;
    }

    // Apply base path to artwork
    const resolvedPath = getAssetPath(artworkPath);

    return (
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "transparent",
        }}
      >
        <img
          src={resolvedPath}
          alt={`${meta.title || "Component"} artwork`}
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
    );
  } catch {
    return null;
  }
}
