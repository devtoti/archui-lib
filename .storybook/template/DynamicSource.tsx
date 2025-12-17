import * as React from "react";
import { useOf } from "@storybook/addon-docs/blocks";
import { Source } from "@storybook/addon-docs/blocks";

export function DynamicSource() {
  try {
    const resolved = useOf("meta", ["meta"]);
    const meta = resolved.preparedMeta;
    const component = meta.component;
    const argTypes = meta.argTypes || {};

    // Get default args - try to get from meta, or use argTypes defaults
    const defaultArgs: Record<string, string> = {};

    // Get defaults from argTypes table.defaultValue
    Object.keys(argTypes).forEach((key) => {
      const argType = argTypes[key];
      if (argType?.table?.defaultValue?.summary) {
        defaultArgs[key] = argType.table.defaultValue.summary.replace(
          /['"]/g,
          ""
        );
      } else if (argType?.options && argType.options.length > 0) {
        // Use first option as default for select controls
        defaultArgs[key] = String(argType.options[0]);
      }
    });

    // Get component name
    const componentName =
      component?.displayName || component?.name || "Component";

    // Build props string from default args
    const props: string[] = [];

    // Add variant if it exists
    if (defaultArgs.variant || argTypes.variant) {
      props.push(`variant="${defaultArgs.variant || "primary"}"`);
    }

    // Add size if it exists
    if (defaultArgs.size || argTypes.size) {
      props.push(`size="${defaultArgs.size || "md"}"`);
    }

    // Add icon if it exists in argTypes
    if (argTypes.icon) {
      props.push('icon="column-icon"');
    }

    // Add onClick if it exists
    if (argTypes.onClick) {
      props.push("onClick={handleClick}");
    }

    const propsString = props.length > 0 ? ` ${props.join(" ")}` : "";
    const children =
      defaultArgs.label || defaultArgs.children || "Download archUI";

    const code = `import { ${componentName} } from '@devtoti/archui-lib';

<${componentName}${propsString}>
  ${children}
</${componentName}>`;

    return <Source language="jsx" code={code} />;
  } catch {
    return null;
  }
}
