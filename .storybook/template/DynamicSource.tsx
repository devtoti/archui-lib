import * as React from "react";
import { useOf, Source } from "@storybook/addon-docs/blocks";

export function DynamicSource() {
  const metaResolved = useOf("meta", ["meta"]);
  const meta = metaResolved.preparedMeta;

  try {
    const componentName = meta.title?.split("/").pop() || "Component";

    const multiExportComponents: Record<string, string[]> = {
      Toast: ["Toast", "ToastProvider", "ToastViewport"],
    };

    const exports = multiExportComponents[componentName] || [componentName];
    const importNames = exports.join(", ");

    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          columnGap: "0",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 12,
            top: 10,
            zIndex: 2,
            display: "flex",
            gap: "6px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ff5f56",
              border: "1px solid #e0443e",
            }}
            aria-label="close"
          />
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ffbd2e",
              border: "1px solid #dea123",
            }}
            aria-label="minimize"
          />
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#27c93f",
              border: "1px solid #13a10e",
            }}
            aria-label="zoom"
          />
        </div>

        <div
          style={{
            backgroundColor: "#1e1e1e",
            padding: "12px 16px",
            paddingLeft: "42px",
            paddingTop: "2rem",
            borderTopLeftRadius: "6px",
            borderTopRightRadius: "6px",
            borderBottom: "1px solid #333",
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
            fontSize: "13px",
            color: "#d4d4d4",
            position: "relative",
          }}
          className="import-module"
        >
          <code style={{ color: "#569cd6" }}>import</code>{" "}
          <code style={{ color: "#9cdcfe" }}>{`{ ${importNames} }`}</code>{" "}
          <code style={{ color: "#569cd6" }}>from</code>{" "}
          <code
            style={{ color: "#ce9178" }}
          >{`'@devtoti/archui-lib/${componentName}'`}</code>
          <code style={{ color: "#d4d4d4" }}>;</code>
        </div>

        <div
          style={{
            marginTop: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          <style>
            {`
              .docblock-source {
                margin-top: 0 !important;
                border-top-left-radius: 0 !important;
                border-top-right-radius: 0 !important;
              }
            `}
          </style>
          <Source language="tsx" dark />
        </div>
      </div>
    );
  } catch {
    return null;
  }
}
