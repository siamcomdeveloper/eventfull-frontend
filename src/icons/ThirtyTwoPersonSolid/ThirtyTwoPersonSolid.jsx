/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ThirtyTwoPersonSolid = ({ className }) => {
  return (
    <svg
      className={`thirty-two-person-solid ${className}`}
      fill="none"
      height="35"
      viewBox="0 0 35 35"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_38_2709)">
        <circle className="circle" cx="17.5" cy="12.0312" fill="white" r="4.375" />
        <path
          className="path"
          d="M10.9375 26.25C9.72938 26.25 8.72194 25.2554 9.02 24.0846C9.98362 20.2995 13.4149 17.5 17.5 17.5C21.5851 17.5 25.0164 20.2995 25.98 24.0846C26.2781 25.2554 25.2706 26.25 24.0625 26.25H10.9375Z"
          fill="white"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="43"
          id="filter0_d_38_2709"
          width="43"
          x="-4"
          y="0"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="4" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="2" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_38_2709" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_38_2709"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
