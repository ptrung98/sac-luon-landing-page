import { JSX, SVGProps } from "react";

export const ArrowRightIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.62212 0.50002L10.7442 5.62214M10.7442 5.62214L5.62212 10.7443M10.7442 5.62214L0.5 5.62214"
        stroke="#262138"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
