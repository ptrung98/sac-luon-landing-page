import { JSX, SVGProps } from "react";

export const ArrowTopRightIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.03766 1.03768L13.4897 1.03766M13.4897 1.03766L13.4897 13.4897M13.4897 1.03766L1.03768 13.4897"
        stroke="#282725"
        strokeWidth="2.07534"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
