import { ReactNode } from "react";

type ButtonProps = {
  type: "primary" | "secondary" | "transparent";
  outline?: boolean;
  outlinePadding?: "small" | "medium" | "large" | "none";
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
};

export const Button = (props: ButtonProps) => {
  return (
    <div
      className={`btn-container outline-padding-${
        props.outlinePadding || "small"
      }`}
    >
      <button
        className={`btn btn-${props.type} ${
          props.outline ? "btn-outline" : ""
        } ${props.className}`}
      >
        {props.children} {props.icon}
      </button>
    </div>
  );
};
