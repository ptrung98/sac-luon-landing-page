import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export const ArrowRightCircleIcon = (
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
        d="M6.42308 10.7308L9.65385 7.5L6.42308 4.26923M0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5C3.63401 14.5 0.500001 11.366 0.5 7.5Z"
        stroke={props.stroke || "white"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
