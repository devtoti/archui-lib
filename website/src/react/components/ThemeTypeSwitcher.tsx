import { useTheme } from '@devtoti/archui-lib';
import { RxSun } from 'react-icons/rx';
import { IoMoonOutline } from 'react-icons/io5';
export default function ThemeTypeSwitcher() {
  const { themeType, setThemeType } = useTheme();

  const toggleThemeType = () => {
    if (setThemeType) {
      setThemeType(themeType === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleThemeType}
      aria-label={`Switch to ${themeType === 'light' ? 'dark' : 'light'} mode`}
      className="absolute top-2 right-4 md:left-24 md:top-2 flex  items-center justify-center w-8 h-8 rounded-md text-sys-secondary hover:text-sys-primary hover:bg-sys-surface-primary transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sys-brd-accent"
      title={`Current: ${themeType} mode. Click to switch to ${themeType === 'light' ? 'dark' : 'light'} mode.`}
    >
      {themeType === 'light' ? (
        <IoMoonOutline className="w-5 h-5" />
      ) : (
        <RxSun className="w-5 h-5" />
      )}
    </button>
  );
}
