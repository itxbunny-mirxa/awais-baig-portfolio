"use client";

import React from "react";

interface IllustrationProps {
  className?: string;
  width?: number;
  height?: number;
}

export const ParcelDispatchIllustration: React.FC<IllustrationProps> = ({
  className = "w-full h-auto max-w-[320px]",
  width = 320,
  height = 240,
}) => {
  return (
    <svg
      viewBox="0 0 320 240"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="eCommerce parcel dispatch and courier fulfillment illustration"
      role="img"
    >
      <defs>
        <linearGradient id="boxGradPrimary" x1="60" y1="90" x2="190" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEF6EB" />
          <stop offset="1" stopColor="#FDE68A" />
        </linearGradient>
        <linearGradient id="boxTopGrad" x1="60" y1="70" x2="180" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFBEB" />
          <stop offset="1" stopColor="#FEF3C7" />
        </linearGradient>
        <linearGradient id="boxSideGrad" x1="170" y1="100" x2="220" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Shadow Base */}
      <ellipse cx="160" cy="210" rx="110" ry="14" fill="#E5E5DC" opacity="0.6" />

      {/* Speed / Dispatch Trails */}
      <path d="M40 180 L80 180" stroke="#54D6C8" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" />
      <path d="M25 155 L65 155" stroke="#6558F5" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 6" />
      <path d="M50 130 L75 130" stroke="#FFB86B" strokeWidth="2" strokeLinecap="round" />

      {/* Back Parcel (Stacked) */}
      <g transform="translate(145, 60)">
        <polygon points="40,25 90,5 125,22 75,42" fill="#E0E7FF" stroke="#111827" strokeWidth="1.5" />
        <polygon points="40,25 75,42 75,95 40,78" fill="#C7D2FE" stroke="#111827" strokeWidth="1.5" />
        <polygon points="75,42 125,22 125,75 75,95" fill="#6558F5" stroke="#111827" strokeWidth="1.5" />
        {/* Tape */}
        <polygon points="65,15 80,9 65,50 50,56" fill="#818CF8" />
      </g>

      {/* Primary Foreground Parcel (Isometric View) */}
      <g id="mainParcel">
        {/* Left Side */}
        <polygon points="70,120 150,155 150,210 70,175" fill="url(#boxGradPrimary)" stroke="#111827" strokeWidth="2" />
        {/* Right Side */}
        <polygon points="150,155 235,120 235,175 150,210" fill="url(#boxSideGrad)" stroke="#111827" strokeWidth="2" opacity="0.9" />
        {/* Top Face */}
        <polygon points="70,120 155,85 235,120 150,155" fill="url(#boxTopGrad)" stroke="#111827" strokeWidth="2" />

        {/* Packing Tape Band Across Top */}
        <polygon points="105,106 120,100 200,135 185,141" fill="#FFB86B" opacity="0.85" stroke="#111827" strokeWidth="1" />
        <polygon points="142,91 163,82 143,158 122,167" fill="#FFB86B" opacity="0.85" stroke="#111827" strokeWidth="1" />

        {/* Shipping Label on Left Side */}
        <g transform="translate(80, 140) skewY(23.5) scale(0.9, 0.9)">
          <rect x="0" y="0" width="40" height="28" rx="2" fill="#FFFFFF" stroke="#111827" strokeWidth="1" />
          {/* Barcode lines */}
          <line x1="4" y1="5" x2="4" y2="18" stroke="#111827" strokeWidth="1.5" />
          <line x1="8" y1="5" x2="8" y2="18" stroke="#111827" strokeWidth="1" />
          <line x1="11" y1="5" x2="11" y2="18" stroke="#111827" strokeWidth="2" />
          <line x1="15" y1="5" x2="15" y2="18" stroke="#111827" strokeWidth="0.8" />
          <line x1="18" y1="5" x2="18" y2="18" stroke="#111827" strokeWidth="1.2" />
          <line x1="22" y1="5" x2="22" y2="18" stroke="#111827" strokeWidth="1.8" />
          <line x1="27" y1="5" x2="27" y2="18" stroke="#111827" strokeWidth="1" />
          <line x1="31" y1="5" x2="31" y2="18" stroke="#111827" strokeWidth="2.2" />
          <line x1="36" y1="5" x2="36" y2="18" stroke="#111827" strokeWidth="1" />
          {/* Text lines */}
          <rect x="4" y="21" width="16" height="2" fill="#6558F5" />
          <rect x="22" y="21" width="14" height="2" fill="#54D6C8" />
        </g>

        {/* Fragile / Priority Badge */}
        <polygon points="175,160 215,142 215,160 175,178" fill="#111827" stroke="#111827" strokeWidth="1" />
        <text x="195" y="165" fill="#54D6C8" fontSize="6" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" transform="skewY(-23.5) translate(40, 20)">
          PRIORITY
        </text>
      </g>

      {/* Floating Checkmark Stamp Badge */}
      <g transform="translate(230, 40)">
        <circle cx="24" cy="24" r="22" fill="#54D6C8" stroke="#111827" strokeWidth="2" />
        <circle cx="24" cy="24" r="18" fill="#FFFFFF" stroke="#54D6C8" strokeWidth="1" />
        <path d="M16 24 L21 29 L32 18" stroke="#111827" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Mini Label */}
        <rect x="0" y="44" width="48" height="14" rx="4" fill="#111827" />
        <text x="24" y="53" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">
          DISPATCHED
        </text>
      </g>
    </svg>
  );
};
