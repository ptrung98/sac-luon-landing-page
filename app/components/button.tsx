import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  type: "primary" | "secondary" | "transparent";
  outlinePadding?: "small" | "medium" | "large" | "none";
  children: ReactNode;
  icon?: ReactNode;
} & Omit<ComponentPropsWithoutRef<'button'>, 'type'>;


export const Button = (props: ButtonProps) => {
  const { 
        type, 
        outlinePadding,
        className, 
        children, 
        icon, 
        ...rest
    } = props;

  return (
    <div
      className={`btn-container outline-padding-${
        outlinePadding || "small"
      }`}
    >
      <button
        className={`btn btn-${type}
        } ${className}`}
        {...rest}
      >
        {children} {icon}
      </button>
    </div>
  );
};

