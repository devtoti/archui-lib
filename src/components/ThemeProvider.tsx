import React, { type ReactNode } from "react";
import { ThemeContext, type Theme } from "../contexts/ThemeContext";

export const ThemeProvider: React.FC<{ children: ReactNode; theme: Theme; setTheme: (theme: Theme) => void }> = ({
  children,
  theme = "doric",
  setTheme
}) => {

  return (
    <ThemeContext
      value={{ theme, setTheme }}
    >
      <div className={`${theme} contents`}>{children}</div>
    </ThemeContext>
  );
};
