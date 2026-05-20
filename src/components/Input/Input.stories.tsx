import { useId, useState } from "react";
import type { FormEvent } from "react";
import { MdCheckCircle, MdOutlineInfo } from "react-icons/md";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import "../../index.css";
import { Input } from "./Input";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { ThemeProvider } from "../ThemeProvider";
import { Button } from "../Button/Button";

const MOCK_EMAIL = "demo@archui.dev";
const MOCK_PASSWORD = "archui123";

type LoginStatus = "idle" | "success" | "error";

function MockCredentialsInfo() {
  const tooltipId = useId();

  return (
    <span className="group/info relative inline-flex">
      <button
        type="button"
        aria-describedby={tooltipId}
        className="inline-flex rounded-arch-rd-sm p-0.5 text-arch-txt-secondary transition-colors hover:text-arch-txt-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arch-surface-accent"
      >
        <MdOutlineInfo className="h-4 w-4" aria-hidden />
        <span className="sr-only">Demo sign-in credentials</span>
      </button>
      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute bottom-full right-0 z-10 mb-1.5 w-max max-w-[15rem] rounded-arch-rd-sm border border-arch-contour-tertiary bg-arch-surface-primary px-arch-xs py-arch-2xs text-[11px] leading-snug text-arch-txt-secondary opacity-0 shadow-regular transition-opacity group-hover/info:opacity-100 group-focus-within/info:opacity-100"
      >
        Mock sign-in — use{" "}
        <span className="font-medium text-arch-txt-primary">{MOCK_EMAIL}</span>
        {" / "}
        <span className="font-medium text-arch-txt-primary">
          {MOCK_PASSWORD}
        </span>
      </span>
    </span>
  );
}

function LoginCardMock() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<LoginStatus>("idle");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    const submittedEmail = email.trim();
    const submittedPassword = password;

    window.setTimeout(() => {
      const credentialsMatch =
        submittedEmail === MOCK_EMAIL && submittedPassword === MOCK_PASSWORD;

      if (!credentialsMatch) setPassword("");
      setStatus(credentialsMatch ? "success" : "error");
      setSubmitting(false);
    }, 600);
  };

  const resetStatus = () => {
    if (status !== "idle") setStatus("idle");
  };

  if (status === "success") {
    return (
      <div
        className="flex w-72 flex-col items-center gap-arch-sm py-arch-md text-center"
        role="status"
        aria-live="polite"
      >
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full bg-arch-success-bg"
          aria-hidden
        >
          <MdCheckCircle className="h-9 w-9 text-arch-success-icon" />
        </div>
        <p className="arch-body-1 font-medium text-sem-txt-success">
          Login successful
        </p>
        <p className="arch-body-2 text-arch-txt-secondary">
          You are now signed in as{" "}
          <span className="font-medium text-arch-txt-primary">{email}</span>.
        </p>
      </div>
    );
  }

  return (
    <form className="w-72 space-y-arch-sm" onSubmit={handleSubmit} noValidate>
      <div className="flex justify-end">
        <MockCredentialsInfo />
      </div>
      <Input.Text
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        required
        disabled={submitting}
        error={status === "error"}
        errorMessage="Invalid email or password."
        onChange={(event) => {
          setEmail(event.target.value);
          resetStatus();
        }}
      />
      <Input.Password
        label="Password"
        name="password"
        autoComplete="current-password"
        placeholder="Password"
        value={password}
        required
        disabled={submitting}
        error={status === "error"}
        errorMessage="Invalid email or password."
        onChange={(event) => {
          setPassword(event.target.value);
          resetStatus();
        }}
      />
      <Button
        type="submit"
        label={submitting ? "Signing in…" : "Login"}
        variant="primary"
        size="md"
        className="w-full"
        disabled={submitting}
      />
    </form>
  );
}

const meta = {
  title: "01 COMPONENTS/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "Labeled text control with optional helper copy, validation emphasis, and password visibility toggle.",
      description: {
        component:
          "Use **`Input`** or **`Input.Text`** for text-like fields and **`Input.Password`** for masked values with a visibility toggle. Helper copy appears when **`description`** is set.\n\nShip apps inside **`ThemeProvider`** so tokens resolve. In Storybook, wrapping canvases with **`ThemeSwitcher`** previews Doric / Ionic / Corinthian quickly; **`AllThemes`** below uses isolated **`ThemeProvider`** instances instead.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Primary label text above the field",
    },
    description: {
      control: "text",
      description: "Helper string beneath label — omit to hide the helper row",
    },
    error: {
      control: "boolean",
      description: "Error styling, `aria-invalid`, and `errorMessage` row",
    },
    errorMessage: {
      control: "text",
      description: "Shown below description when `error` is true",
    },
    success: {
      control: "boolean",
      description:
        "Success styling when valid (ignored when `error`); pair with `successMessage`",
    },
    successMessage: {
      control: "text",
      description:
        "Shown below description when `success` is true and not in error",
    },
    required: {
      control: "boolean",
      description: "Shows required marker and sets native `required`",
    },
    disabled: { control: "boolean" },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Label + control density",
    },
    weight: {
      control: "inline-radio",
      options: ["normal", "medium", "semibold", "bold"],
      description: "Label weight",
    },
    type: {
      control: "select",
      options: ["text", "email", "search"],
      description: "Native input type for `Input.Text` only",
    },
    placeholder: { control: "text" },
  },
  args: {
    label: "ArchUI Label",
    description: "Write up to ten characters",
    error: false,
    errorMessage: "Please enter a valid value.",
    success: false,
    successMessage: "This value meets the requirements.",
    required: false,
    disabled: false,
    size: "sm",
    placeholder: "Enter text...",
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ThemeSwitcher theme="ionic">
      <div className="w-72">
        <Input {...args} />
      </div>
    </ThemeSwitcher>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <ThemeSwitcher theme="ionic">
      <div className="flex w-80 flex-col gap-arch-lg">
        <Input size="sm" label="Small density" placeholder="Enter text..." />
        <Input size="md" label="Medium density" placeholder="Enter text..." />
        <Input size="lg" label="Large density" placeholder="Enter text..." />
      </div>
    </ThemeSwitcher>
  ),
};

export const AllStates: Story = {
  render: () => (
    <ThemeSwitcher theme="doric">
      <div className="flex w-80 flex-col gap-arch-xl">
        <Input label="Default field" placeholder="Enter text..." />
        <Input label="Required field" required placeholder="Required…" />
        <Input
          label="With helper"
          description="Helper stays above the error message."
          placeholder="With helper row"
        />
        <Input label="Disabled field" disabled placeholder="Locked value" />
        <Input.Password
          label="Password field"
          defaultValue="thisIsAPswrd812!"
          placeholder="Password"
          description="Toggle reveals characters using theme accent."
        />
        <Input
          label="Validation error"
          error
          errorMessage="Use letters only, no numbers."
          defaultValue="123"
          placeholder="Enter text…"
        />
        <Input
          label="Valid / compliant"
          success
          successMessage="Username is available."
          defaultValue="blueprint_dev"
          placeholder="Choose a username"
        />
      </div>
    </ThemeSwitcher>
  ),
};

export const AllThemes: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <ThemeProvider
        theme="doric"
        themeType="light"
        className="rounded-arch-rd-md  bg-arch-surface-primary border border-arch-contour-tertiary p-arch-md"
      >
        <LoginCardMock />
      </ThemeProvider>
      <ThemeProvider
        theme="ionic"
        themeType="light"
        className="rounded-arch-rd-md  bg-arch-surface-primary border border-arch-contour-tertiary p-arch-md"
      >
        <LoginCardMock />
      </ThemeProvider>
      <ThemeProvider
        theme="corinthian"
        themeType="light"
        className="rounded-arch-rd-md  bg-arch-surface-primary border border-arch-contour-tertiary p-arch-md"
      >
        <LoginCardMock />
      </ThemeProvider>
    </div>
  ),
};
