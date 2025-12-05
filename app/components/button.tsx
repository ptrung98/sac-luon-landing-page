"use client";

import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  type: "primary" | "secondary" | "transparent";
  outlinePadding?: "small" | "medium" | "large" | "none";
  children: ReactNode;
  icon?: ReactNode;
  openLink?: {
    href: string;
    target?: string;
  };
} & Omit<ComponentPropsWithoutRef<"button">, "type">;

export const Button = (props: ButtonProps) => {
  const { type, outlinePadding, className, children, icon, ...rest } = props;

  const handleOnClick = () => {
    if (props.openLink) {
      const { href, target } = props.openLink;
      window.open(href, target || "_self");
    }
  };

  return (
    <div
      className={`btn-container outline-padding-${outlinePadding || "small"}`}
    >
      <button
        className={`btn btn-${type}
        } ${className}`}

        onClick={handleOnClick}
        {...rest}
      >
        {children} {icon}
      </button>
    </div>
  );
};

export default Button;
