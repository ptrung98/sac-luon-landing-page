import { JSX, SVGProps } from "react";

export const LearnMoretIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 18L24 18M24 18L24 25M24 18L17 25"
        stroke="#262138"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="21" r="20.5" stroke="#262138" />
    </svg>
  );
};
