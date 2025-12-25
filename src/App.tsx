import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ThemeProvider } from "./components/ThemeProvider";
import { useTheme } from "./hooks/useTheme";
import { Button } from "./components/Button/Button";
import { Callout } from "./components/Callout/Callout";
import type { Theme } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState<Theme>("doric");
  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <AppContent theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

function AppContent({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}) {
  const [count, setCount] = useState(0);
  const { theme: archuiTheme } = useTheme();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Current theme: {theme}/{archuiTheme}
      </h1>
      <h2>ArchUI Theme: {archuiTheme}</h2>
      <div className="flex flex-row gap-4 justify-center items-center w-full">
        <Button
          variant="primary"
          size="lg"
          label="Ionic Theme"
          onClick={() => setTheme("ionic")}
        />
        <Button
          variant="primary"
          size="lg"
          label="Doric Theme"
          onClick={() => setTheme("doric")}
        />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Callout
        variant="success"
        title="Success"
        label="This is a success message"
      />
    </>
  );
}

export default App;
