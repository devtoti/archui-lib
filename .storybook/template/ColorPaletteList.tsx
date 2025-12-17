import * as React from "react";
import { useOf } from "@storybook/addon-docs/blocks";
import { ColorPalette, ColorItem } from "@storybook/addon-docs/blocks";

export function ColorPaletteList() {
  try {
    const resolved = useOf("meta", ["meta"]);
    const meta = resolved.preparedMeta;
    const colorPalette = meta.parameters?.docs?.colorPalette;

    if (
      !colorPalette ||
      !colorPalette.colors ||
      colorPalette.colors.length === 0
    ) {
      return null;
    }

    return (
      <ColorPalette>
        {colorPalette.colors.map(
          (
            group: {
              title: string;
              colors: Array<{ name: string; value: string }>;
            },
            groupIndex: number
          ) => (
            <React.Fragment key={groupIndex}>
              {group.colors.map(
                (
                  color: { name: string; value: string },
                  colorIndex: number
                ) => (
                  <ColorItem
                    key={`${groupIndex}-${colorIndex}`}
                    title={
                      group.title
                        ? `${group.title} - ${color.name}`
                        : color.name
                    }
                    subtitle={color.value}
                    colors={[color.value]}
                  />
                )
              )}
            </React.Fragment>
          )
        )}
      </ColorPalette>
    );
  } catch {
    return null;
  }
}
