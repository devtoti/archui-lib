// Button.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RadixButton } from "./Button";
import { TailwindButton } from "./TailwindButton";

describe("Button Components", () => {
  test("RadixButton renders with correct text and responds to click", async () => {
    const handleClick = vi.fn();
    render(<RadixButton onClick={handleClick}>Radix Click Me</RadixButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Radix Click Me");

    const user = userEvent.setup();
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('TailwindButton renders with correct text and responds to click', async () => {
    const handleClick = vi.fn();
    render(
      <TailwindButton onClick={handleClick} intent="primary" size="md">
        Tailwind Click Me
      </TailwindButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Tailwind Click Me');

    const user = userEvent.setup();
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
