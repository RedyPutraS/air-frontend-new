import React from "react";

interface Props {
  size?: string;
}
function Logo({ size = "32" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1634 20.5815L16.1634 4.52686"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0508 16.6777L16.1628 20.5817L12.2748 16.6777"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3401 10.8374H23.5841C26.2974 10.8374 28.4961 13.0361 28.4961 15.7507L28.4961 22.2627C28.4961 24.9694 26.3028 27.1627 23.5961 27.1627L8.74276 27.1627C6.02943 27.1627 3.82943 24.9627 3.82943 22.2494L3.82943 15.7361C3.82943 13.0307 6.02409 10.8374 8.72943 10.8374H9.98543"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Logo;
