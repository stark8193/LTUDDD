import React from 'react';
import { Svg, Path } from 'react-native-svg';

export function UserOutline({size, color }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
       <Path
        d="M18.14 21.62C17.26 21.88 16.22 22 15 22H8.99998C7.77998 22 6.73999 21.88 5.85999 21.62C6.07999 19.02 8.74998 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.58 10.58C15.58 12.56 13.98 14.17 12 14.17C10.02 14.17 8.42004 12.56 8.42004 10.58C8.42004 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}


