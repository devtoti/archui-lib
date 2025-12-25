import React, { useState, useRef, useEffect } from "react";

interface FigmaEmbedProps {
  src: string;
  width?: string | number;
  height?: string | number;
}

export const FigmaEmbed: React.FC<FigmaEmbedProps> = ({
  src,
  width = "800",
  height = "450",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <>
      <style>
        {`
          .figma-embed-container {
            position: relative;
            width: 100%;
            max-width: ${typeof width === "number" ? `${width}px` : width};
            margin: 2rem auto;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            background: var(--sys-bg-secondary, #f6f8fa);
          }
          .figma-embed-skeleton {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: ${typeof height === "number" ? `${height}px` : height};
            background: linear-gradient(
              90deg,
              var(--sys-bg-tertiary, #e8ecf0) 0%,
              var(--sys-bg-secondary, #f0f2f5) 50%,
              var(--sys-bg-tertiary, #e8ecf0) 100%
            );
            background-size: 200% 100%;
            animation: skeleton-loading 1.5s ease-in-out infinite;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
          }
          .figma-embed-skeleton::before {
            content: "";
            width: 60px;
            height: 60px;
            border: 4px solid var(--sys-brd-tertiary, #d0d5db);
            border-top-color: var(--sys-icon-accent, #3b82f6);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          .figma-embed-skeleton::after {
            content: "Loading ArchUI Figma Component Kit...";
            position: absolute;
            bottom: 2rem;
            color: var(--sys-txt-secondary, #6b7280);
            font-size: 0.875rem;
            font-weight: 500;
          }
          @keyframes skeleton-loading {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          .figma-embed-iframe {
            width: 100%;
            height: ${typeof height === "number" ? `${height}px` : height};
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            opacity: ${isLoading ? 0 : 1};
            transition: opacity 0.3s ease-in-out;
            display: block;
          }
          .figma-embed-error {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: ${typeof height === "number" ? `${height}px` : height};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: var(--sys-bg-secondary, #f6f8fa);
            color: var(--sys-txt-secondary, #6b7280);
            padding: 2rem;
            text-align: center;
            z-index: 2;
          }
          .figma-embed-error-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            opacity: 0.5;
          }
          .figma-embed-error-text {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }
          .figma-embed-error-subtext {
            font-size: 0.875rem;
            opacity: 0.7;
          }
        `}
      </style>
      <div className="figma-embed-container">
        {isLoading && (
          <div
            className="h-full w-full flex items-center justify-center figma-embed-skeleton"
            aria-label="Loading ArchUI Figma Component Kit"
          />
        )}
        {hasError ? (
          <div className="figma-embed-error">
            <div className="figma-embed-error-icon">⚠️</div>
            <div className="figma-embed-error-text">
              Failed to load Figma embed
            </div>
            <div className="figma-embed-error-subtext">
              Please check your connection or try refreshing the page
            </div>
          </div>
        ) : (
          <iframe
            ref={iframeRef}
            className="figma-embed-iframe"
            src={src}
            width={width}
            height={height}
            allowFullScreen
            title="Figma Design System Embed"
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
          />
        )}
      </div>
    </>
  );
};
