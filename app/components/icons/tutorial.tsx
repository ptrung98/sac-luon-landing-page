import { JSX, SVGProps } from "react";

export const TutorialIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="35" cy="35" r="35" fill="#FFDE15" fillOpacity="0.24" />
      <circle cx="34.9998" cy="35.0001" r="23.3333" fill="#FFDE15" />
      <circle
        cx="34.9998"
        cy="35.0001"
        r="23.8333"
        stroke="#FFDE15"
        strokeOpacity="0.24"
      />
      <path
        d="M42.3 32.8698C43.4556 33.5574 43.4556 35.2761 42.3 35.9637L30.6 42.9248C29.4444 43.6123 28 42.7529 28 41.3779L28 27.4556C28 26.0806 29.4444 25.2212 30.6 25.9087L42.3 32.8698Z"
        fill="#262138"
      />
    </svg>
  );
};
