import React from 'react';

const SvgAbt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      fillRule="evenodd"
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6.5 10.487v11.026L16 27l9.5-5.487V10.487L16 5l-9.5 5.487zm.912 9.97v-8.913l5.743 3.323-1.933 3.385-3.81 2.205zm.457.791l3.664-2.12 4.038 2.313v4.256l-7.702-4.449zm16.719-9.673v8.85l-3.76-2.175-1.932-3.382 5.692-3.293zm-.43-.808l-5.715 3.307-1.96-3.431V6.334l7.675 4.433zm-6.047 4.555l1.153 2.023L16.939 16l1.172-.678zm-.453-.794l-1.175.68v-2.74l1.175 2.06zm-4.864 2.815l1.151-2.02 1.17.677-2.32 1.343zm-.346 1.256l3.123-1.807v3.595L12.448 18.6zm-4.58-7.847l7.703-4.449v4.334l-1.962 3.436-5.74-3.321zm16.29 10.481l-7.675 4.433V21.47l4.04-2.34 3.635 2.103zm-4.548-2.632l-3.127 1.813v-3.622l3.127 1.81zm-5.212-4.071l1.173-2.057v2.735l-1.173-.678z"
    />
  </svg>
);

export default SvgAbt;
