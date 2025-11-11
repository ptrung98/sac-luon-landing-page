type MaskBorderProps = {
  width?: string;
  height?: string;
  size?: "small" | "medium" | "large";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export const MaskBorder = (props: MaskBorderProps) => {
  return <div className={`mask-border-box ${props.size || "medium"} ${props.position || "bottom-right"}`}></div>;
};
