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
  title: "01 COMPONENTS/LinkItem",
  component: LinkItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "A flexible link component for app navigation. Works with React Router, Nextjs Link, or plain anchors. Supports multiple styles for different navigation states.",
      description: {
        component:
          "The `LinkItem` component is designed for navigation and linking purposes. It supports multiple variants (default, hover, active, minimal, visited) to indicate different states and contexts. Icons can be placed on either side of the link text using the `leftIcon` and `rightIcon` props. Make sure to leverage the LinkItem designs by wrapping your components inside a `ThemeProvider` to apply the appropriate theme styling.",
      },
      artwork: "/storybook-assets/linkitem.svg",
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
    blank: {
      control: "boolean",
      description: "Open link in a new tab/window",
    },
    noopenreferrer: {
      control: "boolean",
      description: "Add noopener and noreferrer for security",
    },
    download: {
      control: "boolean",
      description: "Download the linked file instead of navigating",
    },
    prefetch: {
      control: "boolean",
      description: "Prefetch the linked resource",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for screen readers",
    },
  },
  args: {
    variant: "default",
    label: "Home",
    href: "#",
    showLeftIcon: false,
    showRightIcon: false,
    blank: false,
    noopenreferrer: true,
  },
} satisfies Meta<LinkItemStoryArgs>;

export default meta;
type Story = StoryObj<LinkItemStoryArgs>;

export const Showcase: Story = {
  render: ({ showLeftIcon, showRightIcon, ...args }) => {
    const leftIcon = showLeftIcon ? <IconHome /> : undefined;
    const rightIcon = showRightIcon ? <IconExternal /> : undefined;
    return (
      <ThemeSwitcher theme="ionic">
        <LinkItem
          {...args}
          href="https://www.devtoti.com/"
          label="Portfolio"
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />
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
            blank
            noopenreferrer
            href="https://storybook.js.org"
          />
        </nav>
      </ThemeSwitcher>
    );
  },
};

export const ExternalLinks: Story = {
  render: ({ ...args }) => {
    return (
      <ThemeSwitcher theme="doric">
        <div className="flex flex-col items-center gap-4">
          <LinkItem
            {...args}
            label="External Link (Secure)"
            href="https://www.devtoti.com"
            blank
            noopenreferrer
            rightIcon={<IconExternal />}
            ariaLabel="Visit Devtoti's portfolio website"
          />
          <LinkItem
            {...args}
            label="External Link (No Referrer)"
            href="https://github.com"
            blank
            noopenreferrer={false}
            rightIcon={<IconExternal />}
          />
          <LinkItem
            {...args}
            label="Download File"
            href="/example.pdf"
            download
            rightIcon={<IconExternal />}
          />
        </div>
      </ThemeSwitcher>
    );
  },
};
