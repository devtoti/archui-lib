import type { Meta, StoryObj } from "@storybook/react-vite";
import { Callout } from "./Callout";
import {
  BiBulb as IconInfo,
  BiErrorAlt as IconError,
  BiCheckCircle as IconSuccess,
  BiBell as IconNeutral,
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
      return <IconNeutral />;
  }
};

type CalloutStoryArgs = React.ComponentProps<typeof Callout> & {
  showIcon?: boolean;
};

const meta = {
  title: "01 COMPONENTS/Callout",
  component: Callout,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "A static, contextual message that displays important information without interrupting the user, unlike alerts that demand immediate attention.",
      description: {
        component:
          "Supports a customizable top-left icon, headings, and any text length. Make sure to leverage the `Callout` designs by wrapping your components inside a `ThemeProvider` and playing around with the `theme` style that better suits your needs.",
      },
      artwork: "/storybook-assets/callout.svg",
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "info", "warning", "error", "neutral"],
      description: "Variant type",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size variant",
    },
    title: {
      control: "text",
      description: "Callout title",
    },
    label: {
      control: "text",
      description: "Text content (alternative to children)",
    },
    children: {
      control: "text",
      description: "Callout content (preferred over label)",
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
    variant: "info",
    size: "md",
    title: "Tip",
    label: "This is a callout message. Enter a fun fact here for your users.",
    showIcon: true,
    className: "bg-arch-surface-secondary",
  },
} satisfies Meta<CalloutStoryArgs>;

export default meta;
type Story = StoryObj<CalloutStoryArgs>;

export const Default: Story = {
  render: ({ showIcon, ...args }) => {
    const icon = showIcon ? getIconByVariant(args.variant) : undefined;
    return (
      <ThemeSwitcher theme="ionic">
        <Callout {...args} icon={icon} />
      </ThemeSwitcher>
    );
  },
};

export const Info: Story = {
  render: ({ showIcon, ...args }) => {
    return (
      <ThemeSwitcher theme="doric">
        <Callout
          {...args}
          variant="info"
          title="Info"
          label="This is an info message"
          icon={showIcon ? <IconInfo /> : undefined}
        />
      </ThemeSwitcher>
    );
  },
};

export const AllVariants: Story = {
  render: ({ showIcon, ...args }) => {
    return (
      <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-4">
          <Callout
            {...args}
            variant="success"
            title="Success"
            label="This is a success message"
            icon={showIcon ? <IconSuccess /> : undefined}
          />
          <Callout
            {...args}
            variant="info"
            title="Info"
            label="This is an info message"
            icon={showIcon ? <IconInfo /> : undefined}
          />
          <Callout
            {...args}
            variant="warning"
            title="Warning"
            label="This is a warning message"
            icon={showIcon ? <IconWarning /> : undefined}
          />
          <Callout
            {...args}
            variant="error"
            title="Error"
            label="This is an error message"
            icon={showIcon ? <IconError /> : undefined}
          />
          <Callout
            {...args}
            variant="neutral"
            title="Neutral"
            label="This is a neutral message"
            icon={showIcon ? <IconNeutral /> : undefined}
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
          <Callout
            {...args}
            size="sm"
            title="Small"
            label="Small callout message"
            icon={icon}
          />
          <Callout
            {...args}
            size="md"
            title="Medium"
            label="Medium callout message"
            icon={icon}
          />
          <Callout
            {...args}
            size="lg"
            title="Large"
            label="Large callout message"
            icon={icon}
          />
        </div>
      </ThemeSwitcher>
    );
  },
};
