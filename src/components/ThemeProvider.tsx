import React, { type ReactNode, useState } from "react";
import {
  ThemeContext,
  type Theme,
  type ThemeType,
} from "../contexts/ThemeContext";
import { getAssetPath } from "../utils/paths";

const themeOptions: Theme[] = ["doric", "ionic", "corinthian"];
const themeTypeOptions: ThemeType[] = ["light", "dark"];

const themeTypeIcons = {
  light: (
    <svg
      width="18"
      height="18"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 18 18"
      style={{ display: "block" }}
    >
      <circle cx="9" cy="9" r="5" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.5">
        <line x1="9" y1="1.5" x2="9" y2="3" />
        <line x1="9" y1="15" x2="9" y2="16.5" />
        <line x1="3" y1="9" x2="1.5" y2="9" />
        <line x1="15" y1="9" x2="16.5" y2="9" />
        <line x1="4.6" y1="4.6" x2="3.5" y2="3.5" />
        <line x1="13.4" y1="13.4" x2="14.5" y2="14.5" />
        <line x1="4.6" y1="13.4" x2="3.5" y2="14.5" />
        <line x1="13.4" y1="4.6" x2="14.5" y2="3.5" />
      </g>
    </svg>
  ),
  dark: (
    <svg
      width="18"
      height="18"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 18 18"
      style={{ display: "block" }}
    >
      <path
        d="M13.22 12.037A6 6 0 0 1 5.964 4.78c.16-.066.22-.269.124-.406A.3.3 0 0 0 5.49 4.32C3.41 5.88 2.557 8.62 3.825 11.03c1.268 2.41 4.141 3.31 6.55 2.04 1.276-.67 2.09-1.98 2.39-3.383a.3.3 0 0 0-.2-.343c-.142-.037-.293.045-.345.18z"
        fill="currentColor"
      />
    </svg>
  ),
} as const;

interface ThemeTogglerProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeType: ThemeType;
  setThemeType: (themeType: ThemeType) => void;
}
const ThemeToggler: React.FC<ThemeTogglerProps> = ({
  theme,
  setTheme,
  themeType,
  setThemeType,
}) => (
  <div className="archui-theme-toggle flex gap-0 !rounded-lg border-[1px] border-gray-400">
    {themeOptions.map((th) => (
      <button
        key={th}
        aria-label={`Switch theme to ${th}`}
        onClick={() => setTheme(th)}
        className={`archui-theme-btn${
          theme === th ? " selected" : ""
        } p-0 w-8 h-8 inline-flex items-center justify-center !rounded-md`}
      >
        {th === "doric" && (
          <img
            src={getAssetPath("/icons/doric.svg")}
            alt="Doric Theme"
            aria-label="Doric Theme"
            className="inline-block w-5 h-5 align-middle"
          />
        )}
        {th === "ionic" && (
          <img
            src={getAssetPath("/icons/ionic.svg")}
            alt="Ionic Theme"
            aria-label="Ionic Theme"
            className="inline-block w-5 h-5 align-middle"
          />
        )}
        {th === "corinthian" && (
          <img
            src={getAssetPath("/icons/corinthian.svg")}
            alt="Corinthian Theme"
            aria-label="Corinthian Theme"
            className="inline-block w-5 h-5 align-middle"
          />
        )}
      </button>
    ))}
    <span
      aria-hidden="true"
      className="mx-2 w-px h-6 bg-gray-300 self-center"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        minWidth: "1px",
      }}
    />
    {themeTypeOptions.map((opt) => (
      <button
        key={opt}
        aria-label={`Switch theme type to ${opt}`}
        onClick={() => setThemeType(opt)}
        className={`archui-theme-btn${
          themeType === opt ? " selected" : ""
        } p-0 w-8 h-8 inline-flex items-center justify-center !rounded-md`}
      >
        {themeTypeIcons[opt]}
      </button>
    ))}
  </div>
);

export const ThemeProvider: React.FC<{
  children: ReactNode;
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
  themeType?: ThemeType;
  setThemeType?: (themeType: ThemeType) => void;
  hasToggler?: boolean;
}> = ({
  children,
  theme: initialTheme = "doric",
  setTheme: externalSetTheme,
  themeType: initialThemeType = "light",
  setThemeType: externalSetThemeType,
  hasToggler = false,
}) => {
  const [internalTheme, setInternalTheme] = useState<Theme>(initialTheme);
  const [internalThemeType, setInternalThemeType] =
    useState<ThemeType>(initialThemeType);

  const theme = externalSetTheme ? initialTheme : internalTheme;
  const themeType = externalSetThemeType ? initialThemeType : internalThemeType;

  const handleSetTheme = (newTheme: Theme) => {
    if (externalSetTheme) {
      externalSetTheme(newTheme);
    } else {
      setInternalTheme(newTheme);
    }
  };

  const handleSetThemeType = (newThemeType: ThemeType) => {
    if (externalSetThemeType) {
      externalSetThemeType(newThemeType);
    } else {
      setInternalThemeType(newThemeType);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
        themeType,
        setThemeType: handleSetThemeType,
        hasToggler,
      }}
    >
      <div className={`${theme} ${themeType} contents`}>
        {hasToggler && (
          <ThemeToggler
            theme={theme}
            setTheme={handleSetTheme}
            themeType={themeType}
            setThemeType={handleSetThemeType}
          />
        )}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
