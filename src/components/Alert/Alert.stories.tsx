import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";
import {
  BiBulb as IconInfo,
  BiErrorAlt as IconError,
  BiCheckCircle as IconSuccess,
  BiCommentError as IconWarning,
} from "react-icons/bi";
import "../../index.css";
import { ThemeSwitcher } from "../ThemeSwitcher";

// Helper function to get icon based on variant
const getIconByVariant = (variant?: string) => {
  switch (variant) {
    case "success":
      return <IconSuccess />;
    case "info":
      return <IconInfo />;
    case "warning":
      return <IconWarning />;
    case "error":
      return <IconError />;
    default:
      return <IconInfo />;
  }
};

type AlertStoryArgs = React.ComponentProps<typeof Alert> & {
  showIcon?: boolean;
};

const meta = {
  title: "Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "Display important messages and notifications to users. The Alert component is used to communicate critical information, warnings, errors, or success states that require immediate user attention.",
      description: {
        component:
          "The `Alert` component provides a visually distinct way to display important messages. It supports multiple variants (success, info, warning, error), customizable icons, and content. Each alert includes semantic color coding to help users quickly understand the message type. Make sure to leverage the Alert designs by wrapping your components inside a `ThemeProvider` to apply the appropriate theme styling.",
      },
      artwork: "/icons/models/alert.svg",
      colorPalette: {
        colors: [
          {
            title: "Success Variant",
            colors: [
              { name: "Icon Color", value: "#30A46C" },
              { name: "Background", value: "#E9FFF0" },
              { name: "Text", value: "#0D854B" },
              { name: "Border", value: "#62A379" },
            ],
          },
          {
            title: "Info Variant",
            colors: [
              { name: "Icon Color", value: "#0090FF" },
              { name: "Background", value: "#EAF7FF" },
              { name: "Text", value: "#09558F" },
              { name: "Border", value: "#8ABADD" },
            ],
          },
          {
            title: "Warning Variant",
            colors: [
              { name: "Icon Color", value: "#B78001" },
              { name: "Background", value: "#FFFEF2" },
              { name: "Text", value: "#997012" },
              { name: "Border", value: "#BEAA44" },
            ],
          },
          {
            title: "Error Variant",
            colors: [
              { name: "Icon Color", value: "#E5484D" },
              { name: "Background", value: "#FFEDED" },
              { name: "Text", value: "#BF3539" },
              { name: "Border", value: "#B26466" },
            ],
          },
        ],
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "info", "warning", "error"],
      description: "Alert variant type",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size variant",
    },
    label: {
      control: "text",
      description: "Alert text content (alternative to children)",
    },
    children: {
      control: "text",
      description: "Alert content (preferred over label)",
    },
    icon: {
      control: false,
      description: "Icon element (controlled by showIcon toggle in Storybook)",
      table: {
        category: "Icon",
      },
    },
    showIcon: {
      control: "boolean",
      description:
        "Show icon based on variant (Storybook-only control, not a component prop)",
      table: {
        category: "Icon",
      },
    },
  },
  args: {
    variant: "success",
    size: "md",
    label:
      "This is an ArchUI alert component. Use alerts to communicate important information to your users. Alerts are designed to capture attention and provide clear, actionable feedback about system status, user actions, or important notifications that require immediate awareness.",
    showIcon: true,
  },
} satisfies Meta<AlertStoryArgs>;

export default meta;
type Story = StoryObj<AlertStoryArgs>;

export const Default: Story = {
  render: ({ showIcon, ...args }) => {
    const icon = showIcon ? getIconByVariant(args.variant) : undefined;
    return (
      <ThemeSwitcher theme="ionic">
        <Alert {...args} icon={icon} />
      </ThemeSwitcher>
    );
  },
};

export const AllVariants: Story = {
  render: ({ showIcon, ...args }) => {
    return (
      <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-4">
          <Alert
            {...args}
            variant="success"
            label="Operation completed successfully. Your changes have been saved and all systems are functioning normally. You can continue working without any interruptions."
            icon={showIcon ? <IconSuccess /> : undefined}
          />
          <Alert
            {...args}
            variant="info"
            label="Keep in mind, your session will expire in 10 minutes due to inactivity. Please save your work to avoid losing any unsaved changes. You can extend your session by clicking the refresh button."
            icon={showIcon ? <IconInfo /> : undefined}
          />
          <Alert
            {...args}
            variant="warning"
            label="Password is weak and may be vulnerable to security threats. Consider using a stronger password with a combination of uppercase and lowercase letters, numbers, and special characters to better secure your account."
            icon={showIcon ? <IconWarning /> : undefined}
          />
          <Alert
            {...args}
            variant="error"
            label="Something went wrong while processing your request. Please check your network connection and try again. If the problem persists, contact our support team for assistance with error code ERR-2024."
            icon={showIcon ? <IconError /> : undefined}
          />
        </div>
      </ThemeSwitcher>
    );
  },
};

export const AllSizes: Story = {
  render: ({ showIcon, ...args }) => {
    const icon = showIcon ? getIconByVariant(args.variant) : undefined;
    return (
      <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-4">
          <Alert
            {...args}
            size="sm"
            label="This small alert notifies users of minor updates or changes that don't require immediate action but are worth being aware of. Perfect for subtle notifications and status updates."
            icon={icon}
          />
          <Alert
            {...args}
            size="md"
            label="This medium alert highlights information requiring attention and should be reviewed by users. It's ideal for important updates, policy changes, or system notifications that need user awareness."
            icon={icon}
          />
          <Alert
            {...args}
            size="lg"
            label="This large alert emphasizes critical actions or important updates that demand immediate user attention. Use this size for urgent notifications, security warnings, or time-sensitive information that cannot be ignored."
            icon={icon}
          />
        </div>
      </ThemeSwitcher>
    );
  },
};
