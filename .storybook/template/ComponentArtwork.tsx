import * as React from "react";
import { useOf } from "@storybook/addon-docs/blocks";

/**
 * Get the base path for assets in Storybook
 * This ensures paths work correctly in both development and GitHub Pages deployment
 */
const getBasePath = (): string => {
  if (typeof window !== "undefined") {
    // Check if we're on GitHub Pages (has /archui-lib/ in path)
    if (window.location.pathname.startsWith("/archui-lib/")) {
      return "/archui-lib";
    }
  }
  // Default to empty string for local development
  return "";
};

/**
 * Get asset path with base path prefix
 */
const getAssetPath = (path: string): string => {
  const base = getBasePath();
  // If path already starts with base path, return as is
  if (path.startsWith("/archui-lib/")) {
    return path;
  }
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return base ? `${base}/${cleanPath}` : `/${cleanPath}`;
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
