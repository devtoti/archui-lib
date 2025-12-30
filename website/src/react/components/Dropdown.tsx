import React, { useState, useRef } from 'react';
import { RxCaretRight, RxCheck } from 'react-icons/rx';
import { ThemeProvider } from '@devtoti/archui-lib';
import DoricColumn from './DoricColumn';
import IonicColumn from './IonicColumn';
import CorinthianColumn from './CorinthianColumn';
import { Button } from '@devtoti/archui-lib';
type DropdownType = 'colors' | 'themes' | null;

const Dropdown: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [theme, setTheme] = useState<'doric' | 'ionic' | 'corinthian'>('ionic');
  const [color, setColor] = useState<'light' | 'dark'>('light');
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const themeAtStartRef = useRef<'doric' | 'ionic' | 'corinthian' | null>(null);

  const handleThemeChange = (th: 'doric' | 'ionic' | 'corinthian') => {
    setTheme(th);
  };
  const handleColorChange = (c: 'light' | 'dark') => {
    setColor(c);
  };

  const handleDropdownHideWithDelay = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 500);
  };

  const handleDropdownShow = (type: DropdownType) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setActiveDropdown(type);

    if (type === 'themes' && themeAtStartRef.current === null) {
      themeAtStartRef.current = theme;
    }
    if (type !== 'themes') {
      themeAtStartRef.current = null;
    }
  };

  React.useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (activeDropdown !== 'themes') {
      themeAtStartRef.current = null;
    }
  }, [activeDropdown]);

  return (
    <div
      className={`${theme} ${color}`}
      style={{
        isolation: 'isolate',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <ThemeProvider
        theme={theme}
        setTheme={handleThemeChange}
        themeType={color}
        setThemeType={handleColorChange}
        className="theme-isolated"
      >
        <div className="relative w-full flex justify-center items-end">
          <ul className="flex flex-row items-end justify-center gap-2 md:gap-16 w-full max-w-2xl mx-auto z-8">
            <li className="flex-1 flex justify-center z-9">
              <DoricColumn
                theme={theme}
                themeType={color}
                className="h-20 md:h-40 w-20 md:w-32"
              />
            </li>
            <li className="flex-1 flex justify-center z-9">
              <IonicColumn
                theme={theme}
                themeType={color}
                className="h-20 md:h-40 w-20 md:w-32"
              />
            </li>
            <li className="flex-1 flex justify-center z-9">
              <CorinthianColumn
                theme={theme}
                themeType={color}
                className="h-20 md:h-40 w-20 md:w-32"
              />
            </li>
          </ul>
        </div>
        <div className="rounded-lg shadow-lg dropdown-container grainy relative w-full h-80 bg-sys-surface-primary relative z-10 flex flex-col items-center gap-2 justify-start pt-4">
          <Button
            variant="tertiary"
            size="lg"
            label={`${theme.charAt(0).toUpperCase() + theme.slice(1)} Button`}
            className="md:absolute top-4 right-1/2 transform md:translate-x-1/2 md:translate-y-1/2"
          />
          <div
            className="navigation-menu relative md:absolute md:top-1/2 md:right-4 md:transform md:-translate-y-1/2 bg-sys-surface-white flex flex-col gap-sys-sp-sm items-start px-4 w-56 md:px-sys-pd-lg py-sys-pd-sm md:py-sys-pd-md rounded-lg shadow-md"
            onMouseLeave={handleDropdownHideWithDelay}
          >
            <p className="arc-body-2 underline decoration-solid font-sans not-italic text-sys-gray-dark-2 text-left w-full">
              ArchUI Design System v1.0.0
            </p>
            <div
              className="flex items-center justify-between pl-sys-pd-xs pr-0 py-sys-pd-xs rounded-md w-full cursor-pointer hover:bg-sys-surface-secondary transition-colors"
              onMouseEnter={() => handleDropdownShow('colors')}
            >
              <p className="arc-body-1 font-sans not-italic text-sys-blueprint whitespace-nowrap">
                Colors
              </p>
              <RxCaretRight className="text-sys-blueprint size-4 shrink-0" />
            </div>
            <div
              className="bg-sys-blue-2 flex items-center justify-between pl-sys-pd-xs pr-0 py-sys-pd-xs rounded-md w-full cursor-pointer hover:bg-sys-surface-secondary transition-colors"
              onMouseEnter={() => handleDropdownShow('themes')}
            >
              <p className="orders arc-body-1 font-sans not-italic text-sys-blueprint whitespace-nowrap">
                Themes (Orders)
              </p>
              <RxCaretRight className="text-sys-blueprint size-4 shrink-0" />
            </div>
          </div>
          {activeDropdown === 'themes' && (
            <div
              className="dropdown-menu-orders z-20 relative md:absolute md:top-1/2 md:right-4 md:transform md:-translate-y-1/2 bg-sys-surface-white flex flex-col gap-sys-sp-sm h-auto md:h-[140px] items-start px-sys-pd-sm md:px-sys-pd-lg py-2 rounded-lg shadow-md md:top-1/2 md:right-62 md:transform md:-translate-y-1/5 w-[160px] md:w-[196.2px] text-xs md:text-sm z-20 transition-opacity duration-200"
              onMouseEnter={() => handleDropdownShow('themes')}
              onMouseLeave={handleDropdownHideWithDelay}
            >
              <div
                className={`h-6 flex  text-sys-blueprint items-center gap-1 pr-1 w-full rounded-md cursor-pointer ${
                  theme === 'doric'
                    ? 'bg-sys-surface-secondary'
                    : 'hover:bg-sys-surface-primary'
                }`}
                onClick={() => setTheme('doric')}
              >
                <p
                  className={`arc-body-1 w-full text-start pl-1 rounded-sm font-sans not-italic whitespace-nowrap`}
                >
                  Doric
                </p>
                {theme === 'doric' && (
                  <RxCheck className="size-4 shrink-0 mt-[2px]" />
                )}
              </div>
              <div
                className={`h-6 flex  text-sys-blueprint items-center gap-1 pr-1 w-full rounded-md cursor-pointer ${
                  theme === 'ionic'
                    ? 'bg-sys-surface-secondary'
                    : 'hover:bg-sys-surface-primary'
                }`}
                onClick={() => setTheme('ionic')}
              >
                <p
                  className={`arc-body-1 w-full text-start pl-1 rounded-sm font-sans not-italic whitespace-nowrap`}
                >
                  Ionic
                </p>
                {theme === 'ionic' && (
                  <RxCheck className="size-4 shrink-0 mt-[2px]" />
                )}
              </div>
              <div
                className={`h-6 flex  text-sys-blueprint items-center gap-1 pr-1 w-full rounded-md cursor-pointer ${
                  theme === 'corinthian'
                    ? 'bg-sys-surface-secondary'
                    : 'hover:bg-sys-surface-primary'
                }`}
                onClick={() => setTheme('corinthian')}
              >
                <p
                  className={`arc-body-1 w-full text-start pl-1 rounded-sm font-sans not-italic whitespace-nowrap`}
                >
                  Corinthian
                </p>
                {theme === 'corinthian' && (
                  <RxCheck className="size-4 shrink-0 mt-[2px]" />
                )}
              </div>
            </div>
          )}

          {activeDropdown === 'colors' && (
            <div
              className="dropdown-menu-colors z-20 relative md:absolute md:top-1/2 md:right-4 md:transform md:-translate-y-1/2 bg-sys-surface-white flex flex-col gap-sys-sp-sm h-24 items-start px-sys-pd-sm md:px-sys-pd-lg py-sys-pd-sm md:py-sys-pd-md rounded-lg shadow-md md:top-1/2 md:right-62 md:transform md:-translate-y-1/2 w-[160px] md:w-[196.2px] text-xs md:text-sm z-20 transition-opacity duration-200"
              onMouseEnter={() => handleDropdownShow('colors')}
              onMouseLeave={handleDropdownHideWithDelay}
            >
              <div
                className={`h-6 flex  text-sys-blueprint items-center gap-1 pr-1 w-full rounded-md cursor-pointer ${
                  color === 'light'
                    ? 'bg-sys-surface-secondary'
                    : 'hover:bg-sys-surface-primary'
                }`}
                onClick={() => setColor('light')}
              >
                <p
                  className={`arc-body-1 w-full text-start pl-1 rounded-sm font-sans not-italic whitespace-nowrap`}
                >
                  Light
                </p>
                {color === 'light' && (
                  <RxCheck className="size-4 shrink-0 mt-[2px]" />
                )}
              </div>
              <div
                className={`h-6 flex  text-sys-blueprint items-center gap-1 pr-1 w-full rounded-md cursor-pointer ${
                  color === 'dark'
                    ? 'bg-sys-surface-secondary'
                    : 'hover:bg-sys-surface-primary'
                }`}
                onClick={() => setColor('dark')}
              >
                <p
                  className={`arc-body-1 w-full text-start pl-1 rounded-sm font-sans not-italic whitespace-nowrap`}
                >
                  Dark
                </p>
                {color === 'dark' && (
                  <RxCheck className="size-4 shrink-0 mt-[2px]" />
                )}
              </div>
            </div>
          )}
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Dropdown;
