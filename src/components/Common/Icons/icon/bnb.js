import React from 'react';

const SvgBnb = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="bnb_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bnb_svg__b" cx={16} cy={15} r={15} />
      <filter id="bnb_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="bnb_svg__e"
        d="M12.116 13.404L16 9.52l3.886 3.886 2.26-2.26L16 5l-6.144 6.144 2.26 2.26zM6 15l2.26-2.26L10.52 15l-2.26 2.26L6 15zm6.116 1.596L16 20.48l3.886-3.886 2.26 2.259L16 25l-6.144-6.144-.003-.003 2.263-2.257zM21.48 15l2.26-2.26L26 15l-2.26 2.26L21.48 15zm-3.188-.002h.002V15L16 17.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 12.706l2.293 2.293z"
      />
      <filter id="bnb_svg__d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#bnb_svg__a)" xlinkHref="#bnb_svg__b" />
      <use fill="#F3BA2F" fillRule="evenodd" xlinkHref="#bnb_svg__b" />
      <use
        fill="url(#bnb_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#bnb_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#bnb_svg__d)" xlinkHref="#bnb_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#bnb_svg__e" />
    </g>
  </svg>
);

export default SvgBnb;
