import { useState } from "react";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import "../../index.css";
import { RadioGroup, RadioItem } from "./Radio";
import { Heading } from "../Heading/Heading";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { ThemeProvider } from "../ThemeProvider";

const CAR_TYPES = [
  { value: "suv", label: "SUV" },
  { value: "sedan", label: "Sedan" },
  { value: "hatchback", label: "Hatchback" },
  { value: "coupe", label: "Coupe" },
] as const;

const CAR_BRANDS = [
  { value: "toyota", label: "Toyota" },
  { value: "honda", label: "Honda" },
  { value: "bmw", label: "BMW" },
  { value: "ford", label: "Ford" },
] as const;

function CarPreferencesCard() {
  const [carType, setCarType] = useState("suv");
  const [carBrand, setCarBrand] = useState("toyota");

  return (
    <div className="flex min-w-[280px] flex-col gap-arch-md">
      <Heading
        variant="h5"
        text="Configure your vehicle"
        description="Choose one body style and one brand."
      />

      <section
        className="flex flex-col gap-arch-sm"
        aria-labelledby="car-type-label"
      >
        <p
          id="car-type-label"
          className="text-[11px] font-bold leading-normal text-arch-txt-primary"
        >
          Type of car
        </p>
        <RadioGroup value={carType} onValueChange={setCarType}>
          {CAR_TYPES.map((type) => (
            <RadioItem
              key={type.value}
              value={type.value}
              label={type.label}
              size="sm"
            />
          ))}
        </RadioGroup>
      </section>

      <hr
        className="w-full border-0 border-t border-solid border-arch-contour-tertiary"
        aria-hidden
      />

      <section
        className="flex flex-col gap-arch-sm"
        aria-labelledby="car-brand-label"
      >
        <p
          id="car-brand-label"
          className="text-[11px] font-bold leading-normal text-arch-txt-primary"
        >
          Car brand
        </p>
        <RadioGroup value={carBrand} onValueChange={setCarBrand}>
          {CAR_BRANDS.map((brand) => (
            <RadioItem
              key={brand.value}
              value={brand.value}
              label={brand.label}
              size="sm"
            />
          ))}
        </RadioGroup>
      </section>
    </div>
  );
}

type RadioStoryArgs = ComponentProps<typeof RadioGroup> & {
  /** Storybook control — maps to each `RadioItem` `size` prop */
  size?: "sm" | "lg";
};

const meta = {
  title: "01 COMPONENTS/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "A form element that allows the user to select a single option from a list of options. It is wrapped in a `RadioGroup` component and each option is wrapped in a `RadioItem` component.",
      description: {
        component:
          "Create a `RadioGroup` component and wrap it in a `ThemeProvider` component to apply the appropriate theme styling. Then, create a `RadioItem` component for each option and wrap it in the `RadioGroup` component. You can turn description on or off by passing a `description` prop to the `RadioItem` component.",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["small (sm)", "large (lg)"],
      description:
        "Size variant on each `RadioItem` — `small (sm)` is a compact circular control; `large (lg)` is a larger rounded-square control.",
      table: { category: "RadioItem" },
    },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "Layout of radio items",
    },
    defaultValue: {
      control: "text",
      description: "Initially selected item value (uncontrolled)",
    },
    disabled: {
      control: "boolean",
      description: "Disable the entire group",
    },
    loop: {
      control: "boolean",
      description: "Keyboard roving focus loops",
    },
  },
  args: {
    size: "sm",
    orientation: "vertical",
    defaultValue: "standard",
    disabled: false,
    loop: true,
    onValueChange: fn(),
  },
} satisfies Meta<RadioStoryArgs>;

export default meta;
type Story = StoryObj<RadioStoryArgs>;

export const Default: Story = {
  render: ({ size = "sm", ...args }: RadioStoryArgs) => (
    <ThemeSwitcher theme="ionic">
      <RadioGroup {...args} className="min-w-[280px]">
        <RadioItem value="standard" label="Standard plan" size={size} />
        <RadioItem
          value="pro"
          label="Pro plan"
          size={size}
          description="Best when several editors collaborate daily."
        />
      </RadioGroup>
    </ThemeSwitcher>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <ThemeSwitcher theme="ionic">
      <div className="flex flex-col gap-arch-lg">
        <RadioGroup defaultValue="sm" className="gap-arch-md">
          <RadioItem value="sm" label="Compact density (sm)" size="sm" />
          <RadioItem
            value="lg"
            label="Comfortable density (lg)"
            size="lg"
            description="Rounded-square indicator — matches DS lg preview."
          />
        </RadioGroup>
      </div>
    </ThemeSwitcher>
  ),
};

export const AllStates: Story = {
  render: () => (
    <ThemeSwitcher theme="doric">
      <div className="flex flex-col gap-arch-xl max-w-md">
        <RadioGroup defaultValue="active">
          <RadioItem value="idle" label="Unchecked (sm)" size="sm" />
          <RadioItem value="active" label="Checked (sm)" size="sm" />
          <RadioItem
            value="detailed"
            label="With helper (sm)"
            description="Helper stays tertiary while label stays primary."
            size="sm"
          />
          <RadioItem value="ghost" label="Disabled (sm)" disabled size="sm" />
        </RadioGroup>
      </div>
    </ThemeSwitcher>
  ),
};

export const AllThemes: Story = {
  render: () => (
    <div className="flex flex-col gap-arch-xl space-y-4">
      <ThemeProvider
        theme="doric"
        themeType="light"
        className="rounded-arch-rd-md border border-arch-contour-tertiary bg-arch-surface-primary p-arch-md"
      >
        <RadioGroup defaultValue="doric">
          <RadioItem value="doric" label="Doric themed radios" size="sm" />
          <RadioItem value="alt-doric" label="Alternate choice" size="sm" />
        </RadioGroup>
      </ThemeProvider>
      <ThemeProvider
        theme="ionic"
        themeType="light"
        className="rounded-arch-rd-md border border-arch-contour-tertiary bg-arch-surface-primary p-arch-md"
      >
        <RadioGroup defaultValue="ionic">
          <RadioItem value="ionic" label="Ionic themed radios" size="sm" />
          <RadioItem value="alt-ionic" label="Alternate choice" size="sm" />
        </RadioGroup>
      </ThemeProvider>
      <ThemeProvider
        theme="corinthian"
        themeType="light"
        className="rounded-arch-rd-md border border-arch-contour-tertiary bg-arch-surface-primary p-arch-md"
      >
        <RadioGroup defaultValue="corinthian">
          <RadioItem
            value="corinthian"
            label="Corinthian themed radios"
            size="sm"
          />
          <RadioItem
            value="alt-corinthian"
            label="Alternate choice"
            size="sm"
          />
        </RadioGroup>
      </ThemeProvider>
    </div>
  ),
};

export const CustomCard: Story = {
  render: () => (
    <ThemeSwitcher theme="ionic">
      <div className="rounded-arch-rd-md border border-arch-contour-tertiary bg-arch-surface-primary p-arch-md">
        <CarPreferencesCard />
      </div>
    </ThemeSwitcher>
  ),
};
