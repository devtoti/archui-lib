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
  title: "01 COMPONENTS/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "Communicate important messages or alerts that require user attention. Unlike callouts, Alerts are more prominent and are used for urgent or high-priority information.",
      description: {
        component:
          "The `Alert` component provides a visually distinct way to display important messages. It supports multiple variants (success, info, warning, error), customizable icons, and content. Each alert includes semantic color coding to help users quickly understand the message type. Make sure to leverage the Alert designs by wrapping your components inside a `ThemeProvider` to apply the appropriate theme styling.",
      },
      artwork: "/storybook-assets/alert.svg",
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
      "ArchUI Alert: Use these alerts to communicate information or feedback to users when something requires their attention or action.",
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
        <div className="flex flex-col lg:flex-row gap-4">
          <Alert
            {...args}
            variant="success"
            label="Operation successful. Your changes have been saved and systems are functioning."
            icon={showIcon ? <IconSuccess /> : undefined}
          />
          <Alert
            {...args}
            variant="info"
            label="Your session will expire soon. Save your work or refresh to keep working."
            icon={showIcon ? <IconInfo /> : undefined}
          />
          <Alert
            {...args}
            variant="warning"
            label="Weak password. Use a stronger password for better security."
            icon={showIcon ? <IconWarning /> : undefined}
          />
          <Alert
            {...args}
            variant="error"
            label="An error occurred processing your request. Please try again or contact support."
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
        <div className="flex flex-col lg:flex-row gap-4">
          <Alert
            {...args}
            size="sm"
            label="This small alert notifies users of minor changes or updates."
            icon={icon}
          />
          <Alert
            {...args}
            size="md"
            label="This medium alert highlights information requiring user attention."
            icon={icon}
          />
          <Alert
            {...args}
            size="lg"
            label="This large alert emphasizes urgent actions or important updates."
            icon={icon}
          />
        </div>
      </ThemeSwitcher>
    );
  },
};
