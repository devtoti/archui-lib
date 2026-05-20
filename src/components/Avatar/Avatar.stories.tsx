import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar as AvatarComponent } from "./Avatar";
import "../../index.css";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { ThemeProvider } from "../ThemeProvider";
import type { Theme } from "../../contexts/ThemeContext";
import { useTheme } from "../../hooks/useTheme";

/** Stable portrait URLs for Storybook — one per ArchUI theme order */
const SAMPLE_AVATAR_SRC = {
  doric: "https://picsum.photos/id/1027/128/128",
  ionic: "https://picsum.photos/id/64/128/128",
  corinthian: "https://picsum.photos/id/338/128/128",
} satisfies Record<Theme, string>;

function resolveStoryAvatarSrc(
  argsSrc: string | undefined,
  theme: Theme,
): string | undefined {
  if (argsSrc === "") return "";
  const trimmed = argsSrc?.trim();
  if (trimmed) return trimmed;
  return SAMPLE_AVATAR_SRC[theme];
}

/** Follows `ThemeSwitcher` — sample photo swaps with theme unless `src` is set in controls */
function Avatar(props: ComponentProps<typeof AvatarComponent>) {
  const { theme } = useTheme();
  const { src: rawSrc, ...rest } = props;
  return (
    <AvatarComponent {...rest} src={resolveStoryAvatarSrc(rawSrc, theme)} />
  );
}

const meta = {
  title: "01 COMPONENTS/Avatar",
  component: AvatarComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "Shows who is behind an action—a face or initials—while a tiny anchored bead conveys presence in lists, timelines, and account surfaces.",
      description: {
        component:
          "The `Avatar` component renders profile imagery or initials and supports ArchUI theme-driven silhouettes (Doric square, Ionic circle, Corinthian rounded square). Wrap previews in `ThemeSwitcher`; when the **src** control is blank, the sample portrait updates whenever you switch themes.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Diameter scale for canvas placement",
    },
    fallback: {
      control: "boolean",
      description: "Show initials when imagery is missing or fails to load",
    },
    position: {
      control: "select",
      options: ["bottom-right", "bottom-left", "top-right", "top-left"],
      description: "Corner anchor for the presence bead",
    },
    status: {
      control: "select",
      options: ["online", "idle", "busy", "offline"],
      description: "Presence state for the nested bead",
    },
    badgeSize: {
      control: "select",
      options: ["sm", "md", "lg"],
      description:
        "Scale token for the presence bead (omit to match `size`: sm/md/lg)",
    },
    src: {
      control: "text",
      description:
        "Image URL. Leave blank to use the sample photo for the active ThemeSwitcher theme; use empty string with fallback for initials.",
    },
    alt: { control: "text", description: "Alternative text for the image" },
    initials: {
      control: "text",
      description: "Fallback initials (up to two characters)",
    },
    children: {
      control: false,
      description: "Optional inner content overriding image and initials",
    },
  },
  args: {
    size: "sm",
    fallback: false,
    position: "bottom-right",
    status: "online",
    alt: "Sample profile photo",
    initials: "FB",
  },
} satisfies Meta<typeof AvatarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ThemeSwitcher theme="ionic">
      <Avatar {...args} />
    </ThemeSwitcher>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <ThemeSwitcher theme="doric">
      <div className="flex flex-row flex-wrap items-center gap-arch-sp-lg">
        <Avatar {...args} size="sm" />
        <Avatar {...args} size="md" />
        <Avatar {...args} size="lg" />
      </div>
    </ThemeSwitcher>
  ),
};

export const AllStates: Story = {
  render: (args) => (
    <ThemeSwitcher theme="corinthian">
      <div className="flex flex-row flex-wrap items-center gap-arch-sp-lg">
        <Avatar {...args} status="online" alt="Online sample" />
        <Avatar {...args} status="idle" alt="Idle sample" />
        <Avatar {...args} status="busy" alt="Busy sample" />
        <Avatar {...args} status="offline" alt="Offline sample" />
      </div>
    </ThemeSwitcher>
  ),
};

export const AllThemes: Story = {
  render: (args) => (
    <div className="flex flex-row gap-8">
      <ThemeProvider theme="doric" themeType="light">
        <Avatar
          {...args}
          src={SAMPLE_AVATAR_SRC.doric}
          alt="Doric theme preview"
        />
      </ThemeProvider>
      <ThemeProvider theme="ionic" themeType="light">
        <Avatar
          {...args}
          size="md"
          src={SAMPLE_AVATAR_SRC.ionic}
          alt="Ionic theme preview"
          status="offline"
        />
      </ThemeProvider>
      <ThemeProvider theme="corinthian" themeType="light">
        <Avatar
          {...args}
          size="lg"
          src={SAMPLE_AVATAR_SRC.corinthian}
          alt="Corinthian theme preview"
          status="busy"
        />
      </ThemeProvider>
    </div>
  ),
};

export const FallbackInitials: Story = {
  args: {
    fallback: true,
    src: "",
    initials: "AU",
  },
  render: (args) => (
    <ThemeSwitcher theme="ionic">
      <div className="flex flex-row flex-wrap items-center gap-arch-sp-lg">
        <Avatar {...args} size="sm" />
        <Avatar {...args} size="md" />
        <Avatar {...args} size="lg" />
      </div>
    </ThemeSwitcher>
  ),
};
