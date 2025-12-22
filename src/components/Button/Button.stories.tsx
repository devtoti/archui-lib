import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Button } from "./Button";
import { ThemeProvider } from "../ThemeProvider";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useTheme } from "../../hooks/useTheme";
import "../../index.css";

const meta = {
  title: "01 COMPONENTS/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "The main element made for custom user interaction. The Button component supports multiple Component states, animations, icons, and styles.",
      description: {
        component:
          "The `Button` component can be thought of as a stylized wrapper to be used with custom methods and third-party libraries. It does not easily interfere with external logic, since all its content remains within its own scope.\n\nIdeally, the `Button` component can be used along with the `LinkItem` component for internal and external navigation. For additional examples, please refer to our practical usage section.",
      },
      artwork: "/icons/models/button.svg",
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "ghost"],
      description: "Button variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size variant",
    },
    label: {
      control: "text",
      description: "Text content",
    },
    className: {
      control: "text",
      description: "Custom className for the Button (for Storybook usage)",
    },
  },
  args: {
    onClick: fn(),
    variant: "primary",
    size: "md",
    label: "Button",
    className: "",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <ThemeSwitcher theme="doric">
        <Button {...args} label={args.label ? args.label : "ArchUI Button"} />
      </ThemeSwitcher>
    );
  },
};

export const Variants: Story = {
  render: (args) => {
    const ButtonWithName = () => {
      const { theme } = useTheme();
      const capitalizedTheme =
        theme.substring(0, 1).toUpperCase() + theme.slice(1);
      return (
        <Button
          {...args}
          variant="tertiary"
          label={
            args.label
              ? `${capitalizedTheme} ${args.label}`
              : `${capitalizedTheme} Button`
          }
        />
      );
    };
    return (
      <ThemeProvider theme="doric" themeType="light" hasToggler={true}>
        <ButtonWithName />
      </ThemeProvider>
    );
  },
};

export const DocsPreview: Story = {
  render: (args) => {
    return (
      <ThemeSwitcher theme="doric">
        <DocsPreviewContent {...args} />
      </ThemeSwitcher>
    );
  },
};

const DocsPreviewContent = (args: StoryObj<typeof meta>["args"]) => {
  const { theme: themeName } = useTheme();
  const capitalized = themeName[0].toUpperCase() + themeName.slice(1);
  const variants = ["primary", "secondary", "tertiary", "ghost"] as const;
  return (
    <div className="flex flex-col gap-4">
      {variants.map((variant) => (
        <Button
          key={variant}
          {...args}
          size="sm"
          variant={variant}
          label={`${capitalized} ${
            variant.charAt(0).toUpperCase() + variant.slice(1)
          }`}
        />
      ))}
    </div>
  );
};
