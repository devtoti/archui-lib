import * as React from "react";
import { useOf } from "@storybook/addon-docs/blocks";

export function VariantsList() {
  try {
    const resolved = useOf("meta", ["meta"]);
    const argTypes = resolved.preparedMeta.argTypes || {};

    // Find the variant prop (could be 'variant', 'intent', etc.)
    const variantKey = Object.keys(argTypes).find((key) => {
      const argType = argTypes[key];
      if (key === "variant" || key === "intent") return true;
      if (
        argType?.control &&
        typeof argType.control === "object" &&
        "type" in argType.control
      ) {
        return (
          argType.control.type === "select" &&
          (argType.description?.toLowerCase().includes("variant") ||
            argType.description?.toLowerCase().includes("intent"))
        );
      }
      return false;
    });

    if (!variantKey || !argTypes[variantKey]?.options) {
      return null;
    }

    const variants = argTypes[variantKey].options || [];

    return (
      <ul>
        {variants.map((variant: string) => (
          <li key={variant}>{variant}</li>
        ))}
      </ul>
    );
  } catch {
    return null;
  }
}
