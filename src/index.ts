// Export all components
export { Button, buttonVariants } from './components/Button/Button';
export { Callout, calloutVariants } from './components/Callout/Callout';
export { Heading, headingVariants, descriptionVariants } from './components/Heading/Heading';
export { ThemeProvider } from './components/ThemeProvider';

// Export hooks
export { useTheme } from './hooks/useTheme';

// Export types
export type { ButtonProps, ButtonVariantProps } from './types/components/Button.types';
export type { CalloutProps, CalloutVariantProps } from './types/components/Callout.types';
export type { HeadingProps, HeadingVariantProps } from './types/components/Heading.types';
export type { Theme, ThemeContextType } from './contexts/ThemeContext';

// Export styles
import './index.css';
