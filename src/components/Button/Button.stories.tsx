import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Button } from "./Button";
import { ThemeProvider } from "../ThemeProvider";
import "../../index.css";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Intent variant",
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
  },
  args: {
    onClick: fn(),
    intent: "primary",
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
          <Button {...args} label="Doric Button"/>
        </ThemeProvider>
        <ThemeProvider theme="ionic" setTheme={() => {}}>
          <Button {...args} label="Ionic Button"/>
        </ThemeProvider>
        <ThemeProvider theme="corinthian" setTheme={() => {}}>
          <Button {...args} label="Corinthian Button"/>
        </ThemeProvider>
      </div>
    );
  },
};
export const DoricTheme: Story = {
  render: (args) => {
    return (
      <ThemeProvider theme="doric" setTheme={() => {}}>
        <Button {...args} />
      </ThemeProvider>
    );
  },
};

export const IonicTheme: Story = {
  render: (args) => {
    return (
      <ThemeProvider theme="ionic" setTheme={() => {}}>
        <Button {...args} />
      </ThemeProvider>
    );
  },
};

export const CorinthianTheme: Story = {
  render: (args) => {
    return (
      <ThemeProvider theme="corinthian" setTheme={() => {}}>
        <Button {...args} />
      </ThemeProvider>
    );
  },
};
