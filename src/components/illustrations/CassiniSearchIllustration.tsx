"use client";

import React from "react";

interface IllustrationProps {
  className?: string;
  width?: number;
  height?: number;
}

export const CassiniSearchIllustration: React.FC<IllustrationProps> = ({
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
      aria-label="eBay Cassini search optimization and keyword ranking illustration"
      role="img"
    >
      <defs>
        <linearGradient id="lensGrad" x1="120" y1="60" x2="220" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6558F5" stopOpacity="0.25" />
          <stop offset="0.6" stopColor="#54D6C8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="chartBar1" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#6558F5" />
          <stop offset="1" stopColor="#5346E8" />
        </linearGradient>
        <linearGradient id="chartBar2" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#54D6C8" />
          <stop offset="1" stopColor="#0D9488" />
        </linearGradient>
        <linearGradient id="chartBar3" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#FFB86B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Background Analytics Panel */}
      <rect x="40" y="30" width="240" height="170" rx="16" fill="#FFFFFF" stroke="#E5E5DC" strokeWidth="2" />
      {/* Panel Top Header Bar */}
      <rect x="40" y="30" width="240" height="32" rx="16" fill="#F7F7F2" />
      <circle cx="58" cy="46" r="4" fill="#FFB86B" />
      <circle cx="70" cy="46" r="4" fill="#54D6C8" />
      <circle cx="82" cy="46" r="4" fill="#6558F5" />
      {/* Mock Search Bar inside Header */}
      <rect x="100" y="38" width="165" height="16" rx="6" fill="#FFFFFF" stroke="#E5E5DC" strokeWidth="1" />
      <text x="110" y="49" fill="#6B7280" fontSize="8" fontFamily="monospace">
        ebay.co.uk: &quot;high-intent keyword&quot;
      </text>

      {/* Grid Lines inside Panel */}
      <line x1="55" y1="90" x2="265" y2="90" stroke="#EFEFE8" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="55" y1="125" x2="265" y2="125" stroke="#EFEFE8" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="55" y1="160" x2="265" y2="160" stroke="#E5E5DC" strokeWidth="1" />

      {/* Keyword Search Rank Growth Bars */}
      <rect x="70" y="125" width="20" height="35" rx="4" fill="url(#chartBar1)" />
      <rect x="105" y="105" width="20" height="55" rx="4" fill="url(#chartBar2)" />
      <rect x="140" y="85" width="20" height="75" rx="4" fill="url(#chartBar3)" />
      <rect x="175" y="70" width="20" height="90" rx="4" fill="url(#chartBar1)" />
      <rect x="210" y="60" width="20" height="100" rx="4" fill="#111827" />

      {/* Sparkline Curve */}
      <path
        d="M80 120 Q115 95 150 80 T220 50"
        stroke="#6558F5"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="220" cy="50" r="5" fill="#6558F5" stroke="#FFFFFF" strokeWidth="2" />

      {/* Large Focus Magnifying Glass with Gradient Reflection */}
      <g transform="translate(130, 70)">
        {/* Shadow */}
        <circle cx="48" cy="50" r="42" fill="#111827" opacity="0.06" />

        {/* Handle */}
        <path d="M78 80 L115 118" stroke="#111827" strokeWidth="12" strokeLinecap="round" />
        <path d="M78 80 L115 118" stroke="#FFB86B" strokeWidth="6" strokeLinecap="round" />

        {/* Glass Outer Rim */}
        <circle cx="45" cy="45" r="42" fill="#FFFFFF" stroke="#111827" strokeWidth="4" />
        {/* Glass Lens Surface */}
        <circle cx="45" cy="45" r="38" fill="url(#lensGrad)" />

        {/* 100% Cassini Match Badge inside Lens */}
        <rect x="22" y="28" width="46" height="14" rx="4" fill="#111827" />
        <text x="45" y="38" fill="#54D6C8" fontSize="7" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">
          TOP RANK
        </text>

        {/* Key Cassini Tags */}
        <text x="45" y="52" fill="#111827" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
          79/80 Chars
        </text>
        <text x="45" y="64" fill="#6558F5" fontSize="7" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
          100% Specifics
        </text>

        {/* Glass Glare */}
        <path d="M22 28 C30 18, 48 16, 62 24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      </g>
    </svg>
  );
};
