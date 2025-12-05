import { JSX, SVGProps } from "react";

export const MenuMobileIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="44" height="44" rx="8" fill="#FFDE15" />
      <rect x="11" y="14" width="23" height="3" rx="1.5" fill="#262138" />
      <rect x="11" y="21" width="23" height="3" rx="1.5" fill="#262138" />
      <rect x="11" y="28" width="23" height="3" rx="1.5" fill="#262138" />
    </svg>
  );
};
