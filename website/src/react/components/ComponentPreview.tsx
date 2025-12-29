import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Callout } from '@devtoti/archui-lib';

type TokenType =
  | 'color'
  | 'spacing'
  | 'border-radius'
  | 'stroke-width'
  | 'font-family';

interface Token {
  name: string;
  variable: string;
  value: string;
  type: TokenType;
}

const TokensGrid: React.FC = () => {
  // Hardcoded token values based on Doric theme (light mode)
  const tokens: Token[] = [
    // Colors
    {
      name: 'Background',
      variable: '--color-arch-surface-secondary',
      value: '#F9F9F8', // slate-2 from doric theme
      type: 'color',
    },
    {
      name: 'Text',
      variable: '--color-arch-primary',
      value: '#1C2024', // slate-12 from doric theme
      type: 'color',
    },
    {
      name: 'Border (Success)',
      variable: '--color-arch-sem-brd-success',
      value: '#62A379', // sem-brd-success from doric theme
      type: 'color',
    },
    {
      name: 'Icon (Success)',
      variable: '--color-arch-sem-i-success',
      value: '#30A46C', // sem-icons-success from doric theme
      type: 'color',
    },
    // Padding
    {
      name: 'Padding (Small)',
      variable: '--spacing-arch-sm',
      value: '0.5rem', // pd-sm from doric theme
      type: 'spacing',
    },
    // Border Radius
    {
      name: 'Border Radius (Small)',
      variable: '--radius-arch-rd-sm',
      value: '0', // rd-sm from doric theme
      type: 'border-radius',
    },
    // Stroke Width
    {
      name: 'Stroke (Extra Bold)',
      variable: '--stroke-extra-bold',
      value: '6px', // stroke-extra-bold from doric theme
      type: 'stroke-width',
    },
    // Font Family
    {
      name: 'Font Family',
      variable: 'font-family',
      value: "'Barlow', system-ui, -apple-system, sans-serif", // doric theme font
      type: 'font-family',
    },
  ];

  return (
    <div className="w-full h-48 md:h-64 bg-sys-surface-secondary p-2 md:p-3 overflow-auto">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 max-w-4xl mx-auto">
        {tokens.map((token) => (
          <div
            key={`${token.variable}-${token.name}`}
            className="flex flex-col items-center gap-1"
          >
            {token.type === 'color' ? (
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded border border-sys-brd-primary shadow-sm bg-gray-100"
                style={{
                  backgroundColor:
                    token.value && token.value !== 'transparent'
                      ? token.value
                      : undefined,
                }}
                title={token.value || 'Color not available'}
              />
            ) : (
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded border border-sys-brd-primary shadow-sm bg-white flex items-center justify-center"
                title={token.value}
              >
                {token.type === 'spacing' && (
                  <div
                    className="w-5 h-5 bg-sys-surface-secondary border border-sys-brd-primary"
                    style={{ padding: token.value }}
                  />
                )}
                {token.type === 'border-radius' && (
                  <div
                    className="w-5 h-5 bg-sys-primary"
                    style={{ borderRadius: token.value }}
                  />
                )}
                {token.type === 'stroke-width' && (
                  <div className="flex flex-col items-center gap-0.5">
                    <div
                      className="w-6 bg-sys-primary"
                      style={{ height: token.value }}
                    />
                    <span className="text-[7px] text-sys-secondary font-mono">
                      {token.value}
                    </span>
                  </div>
                )}
                {token.type === 'font-family' && (
                  <span
                    className="text-[10px] text-sys-primary font-bold"
                    style={{ fontFamily: token.value }}
                  >
                    Aa
                  </span>
                )}
              </div>
            )}
            <div className="flex flex-col items-center gap-0.5 w-full">
              <span className="text-[9px] md:text-[10px] text-sys-secondary text-center font-medium">
                {token.name}
              </span>
              <span className="text-[8px] md:text-[9px] text-sys-secondary text-center font-mono break-all px-0.5 leading-tight">
                {token.variable}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ComponentPreview: React.FC = () => {
  return (
    <div className="w-full z-10">
      <Tabs.Root className="TabsRoot" defaultValue="component">
        <Tabs.List className="TabsList" aria-label="Component preview tabs">
          <Tabs.Trigger className="TabsTrigger" value="component">
            Component
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="code">
            Code
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tokens">
            Tokens
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="component">
          <div className="w-full h-48 flex items-center justify-center md:h-64 bg-sys-surface-secondary">
            <Callout
              title="Tip"
              label="This is a callout message. Enter a fun fact here for your users."
              variant="success"
              size="md"
            />
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="code">
          <div className="bg-gray-800 w-full h-48 flex items-center justify-center md:h-64 bg-sys-surface-secondary">
            <pre className="px-8 text-xs rounded-md p-4 w-full overflow-x-auto font-mono whitespace-pre-wrap text-start">
              <code>
                <span style={{ color: '#7dd3fc' }}>{'import'}</span>
                <span style={{ color: '#fff' }}>{' { '}</span>
                <span style={{ color: '#a5b4fc' }}>{'Callout'}</span>
                <span style={{ color: '#fff' }}>{' } '}</span>
                <span style={{ color: '#7dd3fc' }}>{'from'}</span>
                <span style={{ color: '#fbbf24' }}>
                  {" '@devtoti/archui-lib'"}
                </span>
                <span style={{ color: '#fff' }}>{';\n\n'}</span>
                <span style={{ color: '#60a5fa' }}>{'<'}</span>
                <span style={{ color: '#a5b4fc' }}>{'Callout'}</span>
                <span style={{ color: '#60a5fa' }}>{'\n'}</span>
                <span style={{ color: '#22d3ee', paddingLeft: 2 }}>
                  {'  title='}
                </span>
                <span style={{ color: '#fbbf24' }}>{'"Tip"'}</span>
                <span>{'\n'}</span>
                <span style={{ color: '#22d3ee', paddingLeft: 2 }}>
                  {'  label='}
                </span>
                <span style={{ color: '#fbbf24' }}>
                  {
                    '"This is a callout message. Enter a fun fact here for your users."'
                  }
                </span>
                <span>{'\n'}</span>
                <span style={{ color: '#22d3ee', paddingLeft: 2 }}>
                  {'  variant='}
                </span>
                <span style={{ color: '#fbbf24' }}>{'"success"'}</span>
                <span>{'\n'}</span>
                <span style={{ color: '#22d3ee', paddingLeft: 2 }}>
                  {'  size='}
                </span>
                <span style={{ color: '#fbbf24' }}>{'"md"'}</span>
                <span>{'\n'}</span>
                <span style={{ color: '#60a5fa' }}>{'/>'}</span>
                <span>{'\n'}</span>
              </code>
            </pre>
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tokens">
          <TokensGrid />
        </Tabs.Content>
      </Tabs.Root>
      <style>{`
        .TabsRoot {
          width: 100%;
        }
        .TabsList {
          all: unset;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          width: 100%;
          background-color: white;
          border-bottom: 1px solid var(--sys-brd-primary);
        }
        .TabsTrigger {
          all: unset;
          font-family: inherit;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sys-secondary);
          user-select: none;
          cursor: pointer;
          transition: color 0.2s, border-bottom 0.2s, background 0.15s;
          flex: 1 1 0;
          height: 100%;
          border-bottom: 2px solid transparent;
          position: relative;
          min-width: 0;
          padding: 0 0;
        }
        .TabsTrigger:hover {
          color: var(--sys-primary);
          background: rgba(20,48,120,0.04);
        }
        .TabsTrigger[data-state='active'] {
          color: var(--sys-primary);
          font-weight: 600;
          border-bottom: 2.5px solid var(--sys-primary);
          background: rgba(40,85,173,0.08);
        }
        .TabsTrigger:focus-visible {
          position: relative;
          outline: 2px solid var(--sys-primary);
          outline-offset: 2px;
          border-radius: 2px;
        }
        .TabsContent {
          width: 100%;
          flex-grow: 1;
          outline: none;
        }
        .TabsContent[data-state='inactive'] {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ComponentPreview;
