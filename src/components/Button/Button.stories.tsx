import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";

import { Button } from "./Button";
import { ThemeProvider } from "../ThemeProvider";
import { ThemeSwitcher } from "../ThemeSwitcher";
import type { Theme } from "../../contexts/ThemeContext";
import "../../index.css";

const meta = {
  title: "Button",
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
    backgroundColor: {
      control: { type: "color" },
      description: "Custom background color for the button",
    },
    labelColor: {
      control: { type: "color" },
      description: "Custom text color for the button label",
    },
  },
  args: {
    onClick: fn(),
    variant: "primary",
    size: "md",
    label: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllThemes: Story = {
  render: (args) => {
    return (
      <div className="flex flex-row gap-4 space-x-4 space-y-4">
        <ThemeProvider theme="doric" setTheme={() => {}}>
          <Button {...args} label="Doric Button" />
        </ThemeProvider>
        <ThemeProvider theme="ionic" setTheme={() => {}}>
          <Button {...args} label="Ionic Button" />
        </ThemeProvider>
        <ThemeProvider theme="corinthian" setTheme={() => {}}>
          <Button {...args} label="Corinthian Button" />
        </ThemeProvider>
      </div>
    );
  },
};
export const DoricTheme: Story = {
  parameters: {
    docs: {
      disable: true,
    },
  },
  render: (args) => {
    return (
      <ThemeProvider theme="doric" setTheme={() => {}}>
        <Button {...args} />
      </ThemeProvider>
    );
  },
};

export const IonicTheme: Story = {
  parameters: {
    docs: {
      disable: true,
    },
  },
  render: (args) => <Button {...args} />,
};

export const CorinthianTheme: Story = {
  parameters: {
    docs: {
      disable: true,
    },
  },
  render: (args) => {
    return (
      <ThemeProvider theme="corinthian" setTheme={() => {}}>
        <Button {...args} />
      </ThemeProvider>
    );
  },
};
export const DocsPreview: Story = {
  render: (args) => {
    return (
      <ThemeSwitcher theme="doric">
        <Button {...args} size="sm" variant="primary" label="Primary" />
        <Button {...args} size="sm" variant="secondary" label="Secondary" />
        <Button {...args} size="sm" variant="tertiary" label="Tertiary" />
        <Button {...args} size="sm" variant="ghost" label="Ghost" />
      </ThemeSwitcher>
    );
  },
};
