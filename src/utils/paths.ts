/**
 * Get the base path for assets in Storybook
 * This ensures paths work correctly in both development and GitHub Pages deployment
 */
export const getBasePath = (): string => {
  // In Storybook, check if we're in production build with base path
  if (typeof window !== 'undefined') {
    // Check if we're on GitHub Pages (has /archui-lib/ in path)
    if (window.location.pathname.startsWith('/archui-lib/')) {
      return '/archui-lib';
    }
  }
  // Default to empty string for local development
  return '';
};

/**
 * Get asset path with base path prefix
 * @param path - Asset path (e.g., "/icons/doric.svg" or "icons/doric.svg")
 * @returns Resolved path with base path if needed
 */
export const getAssetPath = (path: string): string => {
  const base = getBasePath();
  // If path already includes base path, return as is
  if (path.startsWith('/archui-lib/')) {
    return path;
  }
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base ? `${base}/${cleanPath}` : `/${cleanPath}`;
};

/**
 * React hook to get asset path (for use in components)
 */
export const useAssetPath = (path: string): string => {
  return getAssetPath(path);
};

