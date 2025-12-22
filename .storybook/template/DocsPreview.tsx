import * as React from "react";
import { useOf, Story } from "@storybook/addon-docs/blocks";

export function DocsPreview() {
  try {
    // Get the meta to access component context
    const metaResolved = useOf("meta", ["meta"]);

    // Access module exports - in Storybook, they're available on the resolved object
    // The resolved object should have access to the CSF module
    const resolved = metaResolved as unknown as {
      moduleExports?: Record<string, unknown>;
      [key: string]: unknown;
    };

    // Try accessing moduleExports directly from resolved
    const moduleExports = resolved.moduleExports;

    if (
      moduleExports &&
      typeof moduleExports === "object" &&
      "DocsPreview" in moduleExports
    ) {
      const docsPreviewStory = moduleExports.DocsPreview;
      if (docsPreviewStory) {
        return <Story of={docsPreviewStory} />;
      }
    }

    // If we can't find it, return null (component will be hidden)
    return null;
  } catch {
    return null;
  }
}
