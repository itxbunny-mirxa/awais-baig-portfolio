"use client";

import React from "react";

interface IllustrationProps {
  className?: string;
  width?: number;
  height?: number;
}

export const InventoryRackIllustration: React.FC<IllustrationProps> = ({
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
      aria-label="Synchronized eCommerce warehouse inventory and low-stock management illustration"
      role="img"
    >
      {/* Ground Base */}
      <ellipse cx="160" cy="215" rx="110" ry="12" fill="#E5E5DC" opacity="0.6" />

      {/* Warehouse Heavy Duty Upright Posts */}
      <rect x="50" y="45" width="8" height="165" rx="2" fill="#111827" />
      <rect x="156" y="45" width="8" height="165" rx="2" fill="#111827" />
      <rect x="262" y="45" width="8" height="165" rx="2" fill="#111827" />

      {/* Diagonal Bracing Bars */}
      <line x1="58" y1="55" x2="156" y2="105" stroke="#E5E5DC" strokeWidth="2" />
      <line x1="156" y1="55" x2="58" y2="105" stroke="#E5E5DC" strokeWidth="2" />
      <line x1="164" y1="55" x2="262" y2="105" stroke="#E5E5DC" strokeWidth="2" />
      <line x1="262" y1="55" x2="164" y2="105" stroke="#E5E5DC" strokeWidth="2" />

      {/* Shelving Beams */}
      {/* Shelf 1 (Top) */}
      <rect x="46" y="100" width="228" height="8" rx="2" fill="#6558F5" />
      {/* Shelf 2 (Middle) */}
      <rect x="46" y="150" width="228" height="8" rx="2" fill="#6558F5" />
      {/* Shelf 3 (Bottom) */}
      <rect x="46" y="200" width="228" height="8" rx="2" fill="#111827" />

      {/* Top Shelf Inventory Items */}
      <rect x="70" y="68" width="28" height="32" rx="4" fill="#FEF6EB" stroke="#111827" strokeWidth="1.2" />
      <rect x="105" y="62" width="34" height="38" rx="4" fill="#54D6C8" stroke="#111827" strokeWidth="1.2" />
      <rect x="175" y="70" width="30" height="30" rx="4" fill="#FFFFFF" stroke="#111827" strokeWidth="1.2" />
      <rect x="215" y="65" width="32" height="35" rx="4" fill="#EEF0FE" stroke="#111827" strokeWidth="1.2" />

      {/* Middle Shelf Inventory Items with Low-Stock Pulse */}
      <rect x="70" y="118" width="36" height="32" rx="4" fill="#FFFFFF" stroke="#111827" strokeWidth="1.2" />
      <rect x="115" y="122" width="26" height="28" rx="4" fill="#FEF6EB" stroke="#111827" strokeWidth="1.2" />
      
      {/* Low Stock Highlighted Box with Alert Dot */}
      <g transform="translate(175, 115)">
        <rect x="0" y="0" width="34" height="35" rx="4" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 2" />
        <circle cx="17" cy="17" r="7" fill="#EF4444" />
        <text x="17" y="20" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">!</text>
        {/* Floating Mini Alert Pill */}
        <rect x="-10" y="-14" width="54" height="12" rx="4" fill="#111827" />
        <text x="17" y="-5" fill="#FFB86B" fontSize="6.5" fontWeight="bold" textAnchor="middle">LOW STOCK: 2</text>
      </g>
      <rect x="220" y="120" width="28" height="30" rx="4" fill="#54D6C8" stroke="#111827" strokeWidth="1.2" />

      {/* Bottom Shelf Bulky Cartons */}
      <rect x="68" y="165" width="42" height="35" rx="4" fill="#F7F7F2" stroke="#111827" strokeWidth="1.2" />
      <rect x="116" y="165" width="32" height="35" rx="4" fill="#FEF6EB" stroke="#111827" strokeWidth="1.2" />
      <rect x="175" y="162" width="40" height="38" rx="4" fill="#6558F5" stroke="#111827" strokeWidth="1.2" />
      <rect x="222" y="168" width="30" height="32" rx="4" fill="#FFFFFF" stroke="#111827" strokeWidth="1.2" />

      {/* Status Overlay Badge */}
      <g transform="translate(100, 16)">
        <rect x="0" y="0" width="120" height="22" rx="11" fill="#111827" stroke="#54D6C8" strokeWidth="1.2" />
        <circle cx="14" cy="11" r="4" fill="#54D6C8" />
        <text x="64" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">
          AUTO-SYNC: 100% ACTIVE
        </text>
      </g>
    </svg>
  );
};
