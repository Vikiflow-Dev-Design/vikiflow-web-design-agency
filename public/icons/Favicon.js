import * as React from "react";
const SvgFavicon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <rect
      width={45.255}
      height={45.255}
      fill="url(#favicon_svg__a)"
      rx={8}
      transform="rotate(45 16 38.627)"
    />
    <rect
      width={33.941}
      height={33.941}
      fill="hsl(240 10% 3.9%)"
      rx={6}
      transform="rotate(45 6.343 42.627)"
    />
    <rect
      width={22.627}
      height={22.627}
      fill="url(#favicon_svg__a)"
      rx={4}
      transform="rotate(45 -3.314 46.627)"
    />
    <path fill="#fff" d="m28.8 24 4.8 16 4.8-16h3.2l-6.4 20H32l-6.4-20z" />
    <defs>
      <linearGradient
        id="favicon_svg__a"
        x1={0}
        x2={45.255}
        y1={0}
        y2={45.255}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="hsl(240 5.9% 10%)" />
        <stop offset={1} stopColor="hsl(271 91% 65%)" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgFavicon;
