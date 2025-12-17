import React, { useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "../contexts/ThemeContext";

const themes: Theme[] = ["doric", "ionic", "corinthian"];

export const ThemeSwitcher: React.FC<{
  children: ReactNode;
  theme: Theme;
}> = ({ children, theme = "doric" }) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(theme);

  const handleThemeChange = (th: Theme) => {
    setSelectedTheme(th);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: selectedTheme, setTheme: handleThemeChange }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-row rounded-md border-[1px] border-gray-400 items-center w-min ml-auto overflow-hidden justify-end">
          {themes.map((th) => (
            <button
              key={th}
              onClick={() => handleThemeChange(th)}
              className={`w-8 h-8 text-sm font-medium transition-colors cursor-pointer ${
                selectedTheme === th
                  ? "bg-white text-white"
                  : "bg-gray-300 opacity-40 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {th === "doric" && (
                <img
                  src="/icons/doric.svg"
                  alt="Doric Theme"
                  aria-label="Doric Theme"
                  className="inline-block w-5 h-5 align-middle"
                />
              )}
              {th === "ionic" && (
                <img
                  src="/icons/ionic.svg"
                  alt="Ionic Theme"
                  aria-label="Ionic Theme"
                  className="inline-block w-5 h-5 align-middle"
                />
              )}
              {th === "corinthian" && (
                <img
                  src="/icons/corinthian.svg"
                  alt="Corinthian Theme"
                  aria-label="Corinthian Theme"
                  className="inline-block w-5 h-5 align-middle"
                />
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-row gap-4">
          <div className={`${selectedTheme} contents`}>{children}</div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
