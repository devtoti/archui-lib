import { createContext } from "react";

type Theme = "doric" | "ionic" | "corinthian";
type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme?: (theme: Theme) => void;
  themeType: ThemeType;
  setThemeType?: (themeType: ThemeType) => void;
  hasToggler?: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export type { Theme, ThemeType, ThemeContextType };
