import { JSX, SVGProps } from "react";

export const FacebookIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_287_46)">
        <path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="url(#paint0_linear_287_46)"
        />
        <path
          d="M22.2157 32.7403V21.5946H25.9337L26.6387 16.987H22.2157V13.9908C22.2157 12.7319 22.8368 11.4981 24.8175 11.4981H26.8317V7.5703C26.8317 7.5703 25.0021 7.25977 23.2648 7.25977C19.6223 7.25977 17.2388 9.46707 17.2388 13.462V16.9786H13.1851V21.5862H17.2388V32.7319H22.2241L22.2157 32.7403Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_287_46"
          x1="5.85816"
          y1="5.85816"
          x2="34.1418"
          y2="34.1418"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1677F1" />
          <stop offset="0.18" stopColor="#176EE9" />
          <stop offset="0.46" stopColor="#1D55D3" />
          <stop offset="0.82" stopColor="#252EB0" />
          <stop offset="1" stopColor="#2B189C" />
        </linearGradient>
        <clipPath id="clip0_287_46">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
