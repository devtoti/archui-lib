// Export all components
export { Button, buttonVariants } from './components/Button/Button';
export { Callout, calloutVariants } from './components/Callout/Callout';
export { Alert, alertVariants } from './components/Alert/Alert';
export { LinkItem, linkItemVariants } from './components/LinkItem/LinkItem';
export { Heading, headingVariants, descriptionVariants } from './components/Heading/Heading';
export { Switch, switchVariants, switchThumbVariants } from './components/Switch/Switch';
export { Toast, ToastProvider, ToastViewport, toastVariants } from './components/Toast/Toast';
export { ThemeProvider } from './components/ThemeProvider';

// Export hooks
export { useTheme } from './hooks/useTheme';

// Export types
export type { ButtonProps, ButtonVariantProps } from './types/components/Button.types';
export type { CalloutProps, CalloutVariantProps } from './types/components/Callout.types';
export type { AlertProps, AlertVariantProps } from './types/components/Alert.types';
export type { LinkItemProps, LinkItemVariantProps } from './types/components/LinkItem.types';
export type { HeadingProps, HeadingVariantProps } from './types/components/Heading.types';
export type { SwitchProps, SwitchVariantProps } from './types/components/Switch.types';
export type { Theme, ThemeType, ThemeContextType } from './contexts/ThemeContext';
export type { ToastProps, ToastVariantProps } from './types/components/Toast.types';

// Import styles (this will be bundled by Vite)
import './index.css';
