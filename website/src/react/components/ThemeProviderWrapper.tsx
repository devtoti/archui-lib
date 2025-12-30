import { useState, useEffect } from 'react';
import { ThemeProvider } from '@devtoti/archui-lib';
import type { Theme, ThemeType } from '@devtoti/archui-lib';
import Navbar from './Navbar';

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
  initialTheme?: Theme;
  initialThemeType?: ThemeType;
}

export default function ThemeProviderWrapper({
  children,
  initialTheme = 'doric',
  initialThemeType = 'dark',
}: ThemeProviderWrapperProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [themeType, setThemeType] = useState<ThemeType>(() => {
    // Try to get from localStorage on mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('archui-theme-type');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    }
    return initialThemeType;
  });

  // Persist themeType to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('archui-theme-type', themeType);
    }
  }, [themeType]);

  return (
    <ThemeProvider
      theme={theme}
      setTheme={setTheme}
      themeType={themeType}
      setThemeType={setThemeType}
      className="website-theme-wrapper"
    >
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
