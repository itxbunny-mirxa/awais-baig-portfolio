"use client";

import React from "react";

interface IllustrationProps {
  className?: string;
  width?: number;
  height?: number;
}

export const SourcingScaleIllustration: React.FC<IllustrationProps> = ({
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
      aria-label="Product sourcing profitability calculation and margin balance illustration"
      role="img"
    >
      <defs>
        <linearGradient id="scaleGrad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#6558F5" />
          <stop offset="1" stopColor="#54D6C8" />
        </linearGradient>
      </defs>

      {/* Ground Base */}
      <ellipse cx="160" cy="215" rx="80" ry="10" fill="#E5E5DC" opacity="0.6" />

      {/* Scale Stand / Base */}
      <path d="M135 210 L185 210 L168 120 L152 120 Z" fill="#111827" />
      <rect x="156" y="70" width="8" height="60" fill="#111827" />
      <circle cx="160" cy="70" r="12" fill="#6558F5" stroke="#111827" strokeWidth="2" />
      <circle cx="160" cy="70" r="4" fill="#FFFFFF" />

      {/* Scale Beam (Slight tilt to show profitable weight on revenue) */}
      <line x1="70" y1="92" x2="250" y2="60" stroke="#111827" strokeWidth="4" strokeLinecap="round" />

      {/* Left Pan: Product Landed Cost (£3.20) */}
      <g transform="translate(45, 92)">
        <line x1="25" y1="0" x2="10" y2="40" stroke="#6B7280" strokeWidth="1.5" />
        <line x1="25" y1="0" x2="40" y2="40" stroke="#6B7280" strokeWidth="1.5" />
        <path d="M5 40 Q25 50 45 40 Z" fill="#111827" />
        {/* Cost Weights */}
        <rect x="15" y="24" width="20" height="16" rx="3" fill="#FEF6EB" stroke="#111827" strokeWidth="1.2" />
        <text x="25" y="35" fill="#D97706" fontSize="7" fontWeight="bold" textAnchor="middle">£3.20</text>
        <rect x="2" y="55" width="46" height="14" rx="4" fill="#F7F7F2" stroke="#E5E5DC" strokeWidth="1" />
        <text x="25" y="65" fill="#4B5563" fontSize="7" fontWeight="bold" textAnchor="middle">UNIT COST</text>
      </g>

      {/* Right Pan: Revenue & Net Profit (£14.99 & £7.62 Profit) */}
      <g transform="translate(225, 60)">
        <line x1="25" y1="0" x2="10" y2="40" stroke="#6B7280" strokeWidth="1.5" />
        <line x1="25" y1="0" x2="40" y2="40" stroke="#6B7280" strokeWidth="1.5" />
        <path d="M5 40 Q25 50 45 40 Z" fill="#111827" />
        {/* Profit Gold Stacks */}
        <ellipse cx="25" cy="34" rx="14" ry="4" fill="#FFB86B" stroke="#111827" strokeWidth="1" />
        <ellipse cx="25" cy="28" rx="14" ry="4" fill="#FFB86B" stroke="#111827" strokeWidth="1" />
        <ellipse cx="25" cy="22" rx="14" ry="4" fill="#54D6C8" stroke="#111827" strokeWidth="1" />
        <text x="25" y="16" fill="#111827" fontSize="8" fontWeight="900" textAnchor="middle">50.8%</text>
        <rect x="2" y="55" width="46" height="14" rx="4" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
        <text x="25" y="65" fill="#047857" fontSize="7" fontWeight="bold" textAnchor="middle">NET PROFIT</text>
      </g>

      {/* Top Terapeak / ZIK Certified Badge */}
      <g transform="translate(115, 20)">
        <rect x="0" y="0" width="90" height="22" rx="6" fill="#111827" stroke="#54D6C8" strokeWidth="1.2" />
        <text x="45" y="14" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">
          TERAPEAK VALIDATED
        </text>
      </g>
    </svg>
  );
};
