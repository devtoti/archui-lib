// RadixButton.tsx
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import type { ButtonHTMLAttributes } from "react";

export type RadixButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const RadixButton: React.FC<RadixButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Slot {...props}>
      <button>{children}</button>
    </Slot>
  );
};
