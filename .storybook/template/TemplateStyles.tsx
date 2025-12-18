import * as React from "react";

export function TemplateStyles() {
  return (
    <style>
      {`
        /* Apply blue token-based text colors to Storybook documentation template */

        /* Primary text for headings - bleu-8 */
        .sbdocs-wrapper,
        .sbdocs-content {
          color: #173E88 !important;
        }
        
        .sbdocs-title,
        .sbdocs h1,
        .sbdocs h1.sbdocs-title {
          color: #173E88 !important;
        }

        /* h2 - bleu-8 */
        .sbdocs h2 {
          color: #173E88 !important;
        }
        
        /* Other heading/subtitle styles - bleu-7 */
        .sbdocs-subtitle,
        .sbdocs h3,
        .sbdocs h4,
        .sbdocs h5,
        .sbdocs h6 {
          color: #2855AD !important;
        }

        /* Secondary text for body content - bleu-7 */
        .sbdocs li,
        .sbdocs-body,
        .sbdocs-body p {
          color: #2855AD !important;
        }
        
        .sbdocs-description,
        .sbdocs-description p {
          color: #2855AD !important;
        }
        
        
        /* Tables - bleu-7 */
        .sbdocs-table th,
        .sbdocs-table td {
          color: #2855AD !important;
        }
        
        /* Argstable (API table) styles using same colors */
        .sbdocs-argstable,
        .sbdocs-argstable th,
        .sbdocs-argstable td,
        .sbdocs-argstable-body,
        .sbdocs-argstable-head {
          color: #2855AD !important;
          background: none !important;
          border-color: #2855AD1A !important; /* subtle blue border */
        }

        .sbdocs-argstable th {
          font-weight: 600 !important;
          color: #173E88 !important; /* headings a little darker */
        }

        .sbdocs-argstable td {
          color: #2855AD !important;
        }

        .sbdocs-argstable tr {
          background: transparent !important;
        }

        .sbdocs-argstable-description,
        .sbdocs-argstable-description p {
          color: #57637F !important; /* tertiary text - lighter blue */
        }
        
        /* Tertiary text for less prominent content */
        .sbdocs small,
        .sbdocs .sbdocs-preview-note {
          color: #57637F !important;
        }
        
        /* Links - bleu-9 */
        .sbdocs a {
          color: #102F6A !important;
        }
        
        .sbdocs a:hover {
          color: #173E88 !important;
        }
      `}
    </style>
  );
}
