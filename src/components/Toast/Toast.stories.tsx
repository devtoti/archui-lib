import type { Meta, StoryObj } from "@storybook/react-vite";
import "../../index.css";
import { Toast, ToastProvider, ToastViewport } from "./Toast";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Button } from "../Button/Button";
import { useState } from "storybook/internal/preview-api";
import { RxCookie } from "react-icons/rx";

const meta = {
  title: "01 COMPONENTS/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "Toast notifications for quick feedback and action.",
      description: {
        component:
          "The `Toast` component provides accessible notification popups using Radix UI primitives. Supports multiple variants and sizes, and can include actions, icons, or custom content.",
      },
      artwork: "/icons/models/toast.svg",
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "minimal"],
      description: "Visual variant of the toast",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the toast",
    },
    title: {
      control: "text",
      description: "Title text of the toast",
    },
    description: {
      control: "text",
      description: "Description text of the toast",
    },
    ariaLabel: {
      control: "text",
      description: "Aria label for the action button",
    },
  },
  args: {
    variant: "default",
    size: "md",
    title: "This is a toast!",
    description: "You can style me directly, or change my theme.",
    ariaLabel: "Undo",
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <ThemeSwitcher theme="ionic" className="w-96 h-80 flex flex-col gap-6">
        <ToastProvider duration={5000} swipeDirection="left">
          <div className="flex w-full items-center justify-center">
            <Button
              variant="secondary"
              size="md"
              label={open ? "Close Toast" : "Open Toast"}
              onClick={() => setOpen(!open)}
            />
          </div>
          <Toast
            {...args}
            variant="default"
            title={args.title}
            description={args.description}
            open={open}
            onOpenChange={setOpen}
            hasDivider={args.hasDivider}
            icon={<RxCookie />}
            actionButton={
              <Button
                variant="tertiary"
                size="sm"
                label="Undo"
                onClick={() => setOpen(false)}
              />
            }
          />
          <ToastViewport />
        </ToastProvider>
      </ThemeSwitcher>
    );
  },
};
export const Minimal: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <ThemeSwitcher theme="ionic" className="w-96 h-80">
        <ToastProvider duration={5000} swipeDirection="left">
          <div className="flex w-full items-center justify-center">
            <Button
              variant="secondary"
              size="md"
              label={open ? "Close Toast" : "Open Toast"}
              onClick={() => setOpen(!open)}
            />
          </div>
          <Toast
            {...args}
            variant="minimal"
            title={args.title}
            description={args.description}
            open={open}
            onOpenChange={setOpen}
            hasDivider={args.hasDivider}
          />
          <ToastViewport />
        </ToastProvider>
      </ThemeSwitcher>
    );
  },
};
export const CustomToast: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <ThemeSwitcher theme="ionic" className="w-96 h-80">
        <ToastProvider duration={5000} swipeDirection="left">
          <div className="flex w-full items-center justify-center">
            <Button
              variant="tertiary"
              size="md"
              label={open ? "Close Toast" : "Open Toast"}
              onClick={() => setOpen(!open)}
            />
          </div>
          <Toast
            {...args}
            variant="minimal"
            title={args.title}
            description={args.description}
            open={open}
            onOpenChange={setOpen}
            hasDivider={args.hasDivider}
            className="bg-gray-100 border-2 border-gray-300"
          >
            <div className="flex flex-row items-center gap-4">
              <h4 className="text-arch-primary underline italic font-bold">
                Toast
              </h4>
              <p className="text-arch-secondary italic">
                This is a custom toast. You can use this to display any content
                you want.
              </p>
            </div>
          </Toast>
          <ToastViewport />
        </ToastProvider>
      </ThemeSwitcher>
    );
  },
};
