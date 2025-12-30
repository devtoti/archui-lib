import React, { useState, useEffect, useRef } from "react";
import { getAssetPath } from "../utils/paths";

interface ScreenshotImage {
  src: string;
  alt: string;
  style: React.CSSProperties;
}

const images: ScreenshotImage[] = [
  {
    src: getAssetPath("/storybook-assets/thumb5.png"),
    alt: "Screenshot 5",
    style: {
      height: "180px",
      flex: "1 1 120px",
      minWidth: "80px",
      maxWidth: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      width: "100%",
    },
  },
  {
    src: getAssetPath("/storybook-assets/thumb4.png"),
    alt: "Screenshot 4",
    style: {
      height: "140px",
      flex: "1 1 120px",
      minWidth: "80px",
      maxWidth: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      width: "100%",
    },
  },
  {
    src: getAssetPath("/storybook-assets/thumb3.png"),
    alt: "Screenshot 3",
    style: {
      height: "180px",
      flex: "1 1 120px",
      minWidth: "80px",
      maxWidth: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      width: "100%",
    },
  },
  {
    src: getAssetPath("/storybook-assets/thumb2.png"),
    alt: "Screenshot 2",
    style: {
      height: "140px",
      flex: "1 1 120px",
      minWidth: "80px",
      maxWidth: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      width: "100%",
    },
  },
  {
    src: getAssetPath("/storybook-assets/thumb1.png"),
    alt: "Screenshot 1",
    style: {
      height: "240px",
      flex: "1 1 140px",
      minWidth: "100px",
      maxWidth: "250px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      width: "100%",
    },
  },
];

export const FigmaScreenshots: React.FC = () => {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (zoomedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomedIndex]);

  // Keyboard navigation for modal: ESC, ArrowLeft, ArrowRight
  useEffect(() => {
    if (zoomedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomedIndex(null);
      } else if (e.key === "ArrowLeft") {
        setZoomedIndex((idx) => {
          if (idx === null || idx === 0) return images.length - 1;
          return idx - 1;
        });
      } else if (e.key === "ArrowRight") {
        setZoomedIndex((idx) => {
          if (idx === null) return null;
          if (idx === images.length - 1) return 0;
          return idx + 1;
        });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [zoomedIndex]);

  const showPrev = () => {
    setZoomedIndex((idx) => {
      if (idx === null || idx === 0) return images.length - 1;
      return idx - 1;
    });
  };

  const showNext = () => {
    setZoomedIndex((idx) => {
      if (idx === null) return null;
      if (idx === images.length - 1) return 0;
      return idx + 1;
    });
  };

  // For accessibility, focus arrow button after change (if opened via arrow)
  useEffect(() => {
    if (zoomedIndex === null) return;
    // no-op: let the default focus stay on the modal for now
  }, [zoomedIndex]);

  return (
    <>
      <style>
        {`
          .figma-screenshots {
            display: flex;
            gap: 0.5rem;
            align-items: flex-end;
            margin-top: 1rem;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-between;
          }
          .figma-screenshot-thumb {
            cursor: zoom-in;
            transition: box-shadow 0.2s, filter 0.2s;
            filter: brightness(0.98);
          }
          .figma-screenshot-thumb:hover {
            box-shadow: 0 4px 24px rgba(0,0,0,0.18);
            filter: brightness(1.04);
          }
          .figma-img-zoom-modal {
            z-index: 2000;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: zoom-out;
            animation: fade-in 0.18s;
          }
          .figma-img-zoom-modal img {
            max-width: 95vw;
            max-height: 90vh;
            border-radius: 12px;
            border: 2px solid #fff;
            background: #fff;
            box-shadow: 0 8px 64px rgba(0,0,0,0.28);
            cursor: zoom-out;
            transition: box-shadow 0.2s;
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .figma-img-zoom-modal__close {
            position: absolute;
            top: 2.5rem;
            right: 2.5rem;
            font-size: 2.2rem;
            color: #fff;
            background: #0007;
            border: none;
            border-radius: 50%;
            width: 2.8rem; height: 2.8rem;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            z-index: 3000;
            transition: background 0.2s;
          }
          .figma-img-zoom-modal__close:hover {
            background: #222b;
          }
          .figma-img-zoom-modal__arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: #0007;
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 2.8rem;
            height: 2.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            cursor: pointer;
            z-index: 2100;
            user-select: none;
            transition: background 0.2s;
          }
          .figma-img-zoom-modal__arrow:active,
          .figma-img-zoom-modal__arrow:focus {
            outline: 2px solid #fff9;
            background: #222b;
          }
          .figma-img-zoom-modal__arrow:hover {
            background: #222b;
          }
          .figma-img-zoom-modal__arrow--prev {
            left: 2vw;
          }
          .figma-img-zoom-modal__arrow--next {
            right: 2vw;
          }
          @media (max-width: 500px) {
            .figma-img-zoom-modal__arrow,
            .figma-img-zoom-modal__close {
              width: 2.2rem;
              height: 2.2rem;
              font-size: 1.5rem;
            }
            .figma-img-zoom-modal__arrow--prev {
              left: 0.5vw;
            }
            .figma-img-zoom-modal__arrow--next {
              right: 0.5vw;
            }
            .figma-img-zoom-modal__close {
              top: 1rem;
              right: 1rem;
            }
          }
        `}
      </style>
      <div className="figma-screenshots">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            style={img.style}
            className="figma-screenshot-thumb"
            tabIndex={0}
            onClick={() => setZoomedIndex(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setZoomedIndex(i);
              }
            }}
            aria-label={`Zoom ${img.alt}`}
          />
        ))}
        <style>{`
          .figma-screenshots {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            grid-auto-rows: minmax(120px, auto);
            grid-auto-flow: dense;
            gap: 1.2rem;
            justify-content: center;
            align-items: start;
            width: 100%;
            max-width: 900px;
            margin: 1.5rem auto 1.5rem auto;
            padding: 0 1vw;
          }
          .figma-screenshot-thumb {
            cursor: zoom-in;
            transition: box-shadow 0.2s, transform 0.2s;
            background: var(--sys-bg-tertiary, #f6f8fa);
            box-shadow: 0 2px 8px rgba(0,0,0,0.03);
            border-radius: 8px;
            outline: none;
            width: 100%;
            display: block;
          }
          .figma-screenshot-thumb:focus-visible {
            box-shadow: 0 0 0 3px #2261bb80, 0 2px 8px rgba(0,0,0,0.08);
            outline: none;
            transform: scale(1.03);
            z-index: 1;
          }

          @media (max-width: 700px) {
            .figma-screenshots {
              grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
              gap: 0.7rem;
            }
          }
          @media (max-width: 500px) {
            .figma-screenshots {
              grid-template-columns: repeat(2, 1fr);
              grid-auto-rows: minmax(90px, auto);
              gap: 0.45rem;
              margin: 1rem auto;
              padding: 0;
            }
          }
          /* Ensure max 2 rows of thumbnails and allow grid to grow horizontally */
          .figma-screenshots {
            max-height: 520px;
            overflow-x: auto;
            overflow-y: visible;
          }
        `}</style>
      </div>
      {zoomedIndex !== null && (
        <div
          className="figma-img-zoom-modal"
          onClick={() => setZoomedIndex(null)}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <button
            className="figma-img-zoom-modal__close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setZoomedIndex(null);
            }}
            tabIndex={0}
            type="button"
          >
            &times;
          </button>
          <button
            className="figma-img-zoom-modal__arrow figma-img-zoom-modal__arrow--prev"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            tabIndex={0}
            type="button"
            ref={prevBtnRef}
          >
            <span aria-hidden="true">&#8592;</span>
          </button>
          <img
            src={images[zoomedIndex].src}
            alt={images[zoomedIndex].alt}
            draggable={false}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "95vw", maxHeight: "90vh" }}
          />
          <button
            className="figma-img-zoom-modal__arrow figma-img-zoom-modal__arrow--next"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            tabIndex={0}
            type="button"
            ref={nextBtnRef}
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      )}
    </>
  );
};
