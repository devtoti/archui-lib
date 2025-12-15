import type { Meta, StoryObj } from "@storybook/react-vite";
import { Callout } from "./Callout";
import { ThemeProvider } from "../ThemeProvider";
import {
  BiBulb as IconInfo,
  BiErrorAlt as IconError,
  BiCheckCircle as IconSuccess,
  BiBell as IconNeutral,
  BiCommentError as IconWarning,
  BiBuildingHouse as IconArch,
} from "react-icons/bi";
import "../../index.css";

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
  title: "Example/Callout",
  component: Callout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
    variant: "neutral",
    size: "md",
    title: "Callout Title",
    label: "This is a callout message",
    showIcon: true,
  },
} satisfies Meta<CalloutStoryArgs>;

export default meta;
type Story = StoryObj<CalloutStoryArgs>;

export const Default: Story = {
  render: ({ showIcon, ...args }) => {
    const icon = showIcon ? getIconByVariant(args.variant) : undefined;
    return (
      <ThemeProvider theme="ionic" setTheme={() => {}}>
        <Callout {...args} icon={icon} />
      </ThemeProvider>
    );
  },
};

export const AllThemes: Story = {
  render: ({ showIcon, ...args }) => {
    const icon = showIcon ? <IconArch /> : undefined;
    return (
      <div className="flex flex-col gap-4">
        <ThemeProvider theme="doric" setTheme={() => {}}>
          <Callout {...args} title="Doric Callout" icon={icon} />
        </ThemeProvider>
        <ThemeProvider theme="corinthian" setTheme={() => {}}>
          <Callout {...args} title="Corinthian Callout" icon={icon} />
        </ThemeProvider>
        <ThemeProvider theme="ionic" setTheme={() => {}}>
          <Callout {...args} title="Ionic Callout" icon={icon} />
        </ThemeProvider>
      </div>
    );
  },
};

export const DoricTheme: Story = {
  render: ({ showIcon, ...args }) => {
    const icon = showIcon ? <IconArch /> : undefined;
    return (
      <ThemeProvider theme="doric" setTheme={() => {}}>
        <Callout {...args} icon={icon} />
      </ThemeProvider>
    );
  },
};

export const IonicTheme: Story = {
  render: ({ showIcon, ...args }) => {
    const icon = showIcon ? <IconArch /> : undefined;
    return (
      <ThemeProvider theme="ionic" setTheme={() => {}}>
        <Callout {...args} icon={icon} />
      </ThemeProvider>
    );
  },
};

export const CorinthianTheme: Story = {
  render: ({ showIcon, ...args }) => {
    const icon = showIcon ? <IconArch /> : undefined;
    return (
      <ThemeProvider theme="corinthian" setTheme={() => {}}>
        <Callout {...args} icon={icon} />
      </ThemeProvider>
    );
  },
};

export const AllVariants: Story = {
  render: ({ showIcon, ...args }) => {
    return (
      <ThemeProvider theme="ionic" setTheme={() => {}}>
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
      </ThemeProvider>
    );
  },
};

export const AllSizes: Story = {
  render: ({ showIcon, ...args }) => {
    const icon = showIcon ? getIconByVariant(args.variant) : undefined;
    return (
      <ThemeProvider theme="ionic" setTheme={() => {}}>
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
      </ThemeProvider>
    );
  },
};
