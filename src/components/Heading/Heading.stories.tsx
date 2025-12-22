import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";
import { ThemeSwitcher } from "../ThemeSwitcher";
import "../../index.css";

const meta = {
  title: "01 COMPONENTS/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "Display hierarchical headings with optional descriptions. The Heading component provides semantic heading levels with consistent styling and alignment options.",
      description: {
        component:
          "The `Heading` component is used to create semantic headings (h1-h6) with consistent typography and spacing. It supports optional description text and text alignment. Make sure to leverage the Heading designs by wrapping your components inside a `ThemeProvider` to apply the appropriate theme styling.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Heading level variant",
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    text: {
      control: "text",
      description: "Heading text content (alternative to children)",
    },
    children: {
      control: "text",
      description: "Heading text content (preferred over text)",
    },
    description: {
      control: "text",
      description: "Optional description text displayed below the heading",
    },
  },
  args: {
    variant: "h1",
    align: "left",
    children: "ArchUI Heading",
    description:
      "This is an optional description that appears below the heading",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <ThemeSwitcher theme="ionic">
        <Heading {...args} />
      </ThemeSwitcher>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    return (
      <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-arch-lg">
          <Heading
            variant="h1"
            description="This is an h1 heading with description"
          >
            Heading Level 1
          </Heading>
          <Heading
            variant="h2"
            description="This is an h2 heading with description"
          >
            Heading Level 2
          </Heading>
          <Heading
            variant="h3"
            description="This is an h3 heading with description"
          >
            Heading Level 3
          </Heading>
          <Heading
            variant="h4"
            description="This is an h4 heading with description"
          >
            Heading Level 4
          </Heading>
          <Heading
            variant="h5"
            description="This is an h5 heading with description"
          >
            Heading Level 5
          </Heading>
          <Heading
            variant="h6"
            description="This is an h6 heading with description"
          >
            Heading Level 6
          </Heading>
        </div>
      </ThemeSwitcher>
    );
  },
};

export const AllAlignments: Story = {
  render: () => {
    return (
      <ThemeSwitcher theme="corinthian">
        <div className="flex flex-col gap-arch-xl w-full max-w-2xl">
          <Heading
            variant="h2"
            align="left"
            description="Left-aligned heading with description text"
          >
            Left Aligned Heading
          </Heading>
          <Heading
            variant="h2"
            align="center"
            description="Center-aligned heading with description text"
          >
            Center Aligned Heading
          </Heading>
          <Heading
            variant="h2"
            align="right"
            description="Right-aligned heading with description text"
          >
            Right Aligned Heading
          </Heading>
        </div>
      </ThemeSwitcher>
    );
  },
};

export const WithoutDescription: Story = {
  render: () => {
    return (
      <ThemeSwitcher theme="ionic">
        <div className="flex flex-col gap-arch-md">
          <Heading variant="h1">Heading 1 without description</Heading>
          <Heading variant="h2">Heading 2 without description</Heading>
          <Heading variant="h3">Heading 3 without description</Heading>
          <Heading variant="h4">Heading 4 without description</Heading>
          <Heading variant="h5">Heading 5 without description</Heading>
          <Heading variant="h6">Heading 6 without description</Heading>
        </div>
      </ThemeSwitcher>
    );
  },
};

export const WithTextProperty: Story = {
  render: () => {
    return (
      <ThemeSwitcher theme="doric">
        <div className="flex flex-col gap-arch-lg">
          <Heading
            variant="h1"
            text="Heading using text property"
            description="This heading uses the text prop instead of children"
          />
          <Heading
            variant="h2"
            text="Another heading with text prop"
            description="The text prop is an alternative to children"
          />
        </div>
      </ThemeSwitcher>
    );
  },
};
