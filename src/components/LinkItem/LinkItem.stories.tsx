import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkItem } from "./LinkItem";
import {
  BiLinkExternal as IconExternal,
  BiArrowToRight as IconArrowRight,
  BiHome as IconHome,
  BiUser as IconUser,
  BiCog as IconSettings,
  BiChevronRight as IconChevronRight,
} from "react-icons/bi";
import "../../index.css";
import { ThemeSwitcher } from "../ThemeSwitcher";

type LinkItemStoryArgs = React.ComponentProps<typeof LinkItem> & {
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
};

const meta = {
  title: "LinkItem",
  component: LinkItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "Navigate between pages and sections with styled link components. The LinkItem component provides multiple visual variants to suit different navigation contexts and user interaction states.",
      description: {
        component:
          "The `LinkItem` component is designed for navigation and linking purposes. It supports multiple variants (default, hover, active, minimal, visited) to indicate different states and contexts. Icons can be placed on either side of the link text using the `leftIcon` and `rightIcon` props. Make sure to leverage the LinkItem designs by wrapping your components inside a `ThemeProvider` to apply the appropriate theme styling.",
      },
      artwork: "/icons/models/linkitem.svg",
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "hover", "active", "minimal", "visited"],
      description: "Link variant type",
    },
    label: {
      control: "text",
      description: "Link text content (alternative to children)",
    },
    children: {
      control: "text",
      description: "Link content (preferred over label)",
    },
    leftIcon: {
      control: false,
      description: "Icon displayed on the left side",
      table: {
        category: "Icons",
      },
    },
    rightIcon: {
      control: false,
      description: "Icon displayed on the right side",
      table: {
        category: "Icons",
      },
    },
    showLeftIcon: {
      control: "boolean",
      description:
        "Show left icon (Storybook-only control, not a component prop)",
      table: {
        category: "Icons",
      },
    },
    showRightIcon: {
      control: "boolean",
      description:
        "Show right icon (Storybook-only control, not a component prop)",
      table: {
        category: "Icons",
      },
    },
    href: {
      control: "text",
      description: "Link destination URL",
    },
  },
  args: {
    variant: "default",
    label: "Home",
    href: "#",
    showLeftIcon: false,
    showRightIcon: false,
  },
} satisfies Meta<LinkItemStoryArgs>;

export default meta;
type Story = StoryObj<LinkItemStoryArgs>;

export const Default: Story = {
  render: ({ showLeftIcon, showRightIcon, ...args }) => {
    const leftIcon = showLeftIcon ? <IconHome /> : undefined;
    const rightIcon = showRightIcon ? <IconExternal /> : undefined;
    return (
      <ThemeSwitcher theme="ionic">
        <LinkItem {...args} leftIcon={leftIcon} rightIcon={rightIcon} />
      </ThemeSwitcher>
    );
  },
};

export const AllVariants: Story = {
  render: ({ showLeftIcon, showRightIcon, ...args }) => {
    const leftIcon = showLeftIcon ? <IconHome /> : undefined;
    const rightIcon = showRightIcon ? <IconChevronRight /> : undefined;
    return (
      <ThemeSwitcher theme="doric">
        <div className="flex items-center flex-col gap-4">
          <LinkItem
            {...args}
            variant="default"
            label="Default"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
          />
          <LinkItem
            {...args}
            variant="hover"
            label="Hover"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
          />
          <LinkItem
            {...args}
            variant="active"
            label="Active"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
          />
          <LinkItem
            {...args}
            variant="minimal"
            label="Minimal"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
          />
          <LinkItem
            {...args}
            variant="visited"
            label="Visited"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
          />
        </div>
      </ThemeSwitcher>
    );
  },
};

export const WithIcons: Story = {
  render: ({ ...args }) => {
    return (
      <ThemeSwitcher theme="doric">
        <div className="flex items-center flex-col gap-4">
          <LinkItem {...args} label="Left icon" leftIcon={<IconHome />} />
          <LinkItem {...args} label="Right icon" rightIcon={<IconExternal />} />
          <LinkItem
            {...args}
            label="Both icons"
            leftIcon={<IconUser />}
            rightIcon={<IconArrowRight />}
          />
          <LinkItem
            {...args}
            variant="active"
            label="Active with icons"
            leftIcon={<IconSettings />}
            rightIcon={<IconChevronRight />}
          />
        </div>
      </ThemeSwitcher>
    );
  },
};

export const NavigationExample: Story = {
  parameters: {
    docs: {
      disable: true,
    },
  },
  render: ({ ...args }) => {
    return (
      <ThemeSwitcher theme="ionic">
        <nav className="flex flex-col items-center gap-2">
          <LinkItem
            {...args}
            variant="active"
            label="Dashboard"
            leftIcon={<IconHome />}
            rightIcon={<IconChevronRight />}
          />
          <LinkItem
            {...args}
            variant="default"
            label="Profile"
            leftIcon={<IconUser />}
            rightIcon={<IconChevronRight />}
          />
          <LinkItem
            {...args}
            variant="default"
            label="Settings"
            leftIcon={<IconSettings />}
            rightIcon={<IconChevronRight />}
          />
          <LinkItem
            {...args}
            variant="minimal"
            label="External Documentation"
            rightIcon={<IconExternal />}
          />
        </nav>
      </ThemeSwitcher>
    );
  },
};
