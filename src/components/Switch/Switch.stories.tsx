import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Switch } from "./Switch";
import "../../index.css";
import { ThemeSwitcher } from "../ThemeSwitcher";

const meta = {
  title: "01 COMPONENTS/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "Toggle control with accessible design, keyboard support, and multiple size options.",
      description: {
        component:
          "The `Switch` component is built on Radix UI primitives and provides a fully accessible toggle control. It supports multiple sizes and variants, and can be used with or without a label. The component automatically handles focus states and keyboard interactions.",
      },
      artwork: "/storybook-assets/switch.svg",
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "accent", "disabled"],
      description: "Visual variant of the switch",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size variant",
    },
    checked: {
      control: "boolean",
      description: "Controlled checked state",
    },
    defaultChecked: {
      control: "boolean",
      description: "Default checked state (uncontrolled)",
    },
    disabled: {
      control: "boolean",
      description: "Disable the switch",
    },
  },
  args: {
    onCheckedChange: fn(),
    variant: "default",
    size: "md",
    defaultChecked: true,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <ThemeSwitcher theme="ionic">
        <Switch {...args} />
      </ThemeSwitcher>
    );
  },
};

export const DocsPreview: Story = {
  render: (args) => {
    return (
      <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-4">
          <Switch {...args} variant="default" size="sm" />
          <Switch {...args} variant="accent" size="md" />
          <Switch {...args} variant="disabled" size="lg" />
        </div>
      </ThemeSwitcher>
    );
  },
};
