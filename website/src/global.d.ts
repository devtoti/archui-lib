export {};

declare global {
  interface Window {
    LogRocket?: {
      init: (appId: string) => void;
      identify: (userId: string, traits?: Record<string, unkown>) => void;
      track: (eventName: string, properties?: Record<string, unknown>) => void;
    };
  }
}