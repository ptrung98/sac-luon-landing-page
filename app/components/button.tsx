type ButtonProps = {
  type: "primary" | "secondary" | "transparent";
  outline?: boolean;
  outlinePadding?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  return (
    <div
      className={`btn-container outline-padding-${
        props.outlinePadding || "small"
      }`}
    >
      <button
        className={`btn btn-${props.type} ${props.outline ? "btn-outline" : ""} ${props.className}`}
      >
        {props.children}
      </button>
    </div>
  );
};
