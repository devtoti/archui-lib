import { useState } from "react";
import { ThemeProvider } from "@devtoti/archui-lib";

interface ThemeProviderIslandProps {
  children: React.ReactNode;
  className?: string;
}

export default function ThemeProviderIsland({
  children,
  className,
}: ThemeProviderIslandProps & React.HTMLAttributes<HTMLDivElement>) {
  const [theme, setTheme] = useState<"doric" | "ionic" | "corinthian">("doric");
  const [themeType, setThemeType] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider
      theme={theme}
      setTheme={setTheme}
      themeType={themeType}
      setThemeType={setThemeType}
      hasToggler={true}
      className={className}
    >
      {children}
    </ThemeProvider>
  );
}
