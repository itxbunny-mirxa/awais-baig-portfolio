"use client";

import React from "react";

interface IllustrationProps {
  className?: string;
  width?: number;
  height?: number;
}

export const StorefrontIllustration: React.FC<IllustrationProps> = ({
  className = "w-full h-auto max-w-[380px]",
  width = 380,
  height = 300,
}) => {
  return (
    <svg
      viewBox="0 0 380 300"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustrated modern eCommerce store managed by Awais Baig"
      role="img"
    >
      <defs>
        <linearGradient id="storeRoofGrad" x1="50" y1="50" x2="330" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6558F5" />
          <stop offset="1" stopColor="#5346E8" />
        </linearGradient>
        <linearGradient id="storeWallGrad" x1="70" y1="100" x2="310" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F7F7F2" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="90" y1="120" x2="210" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E6FAF7" stopOpacity="0.85" />
          <stop offset="1" stopColor="#54D6C8" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="amberGlow" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FFB86B" />
          <stop offset="1" stopColor="#FFA043" />
        </linearGradient>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#111827" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Ground Platform */}
      <ellipse cx="190" cy="265" rx="160" ry="18" fill="#E5E5DC" opacity="0.6" />
      <ellipse cx="190" cy="264" rx="130" ry="12" fill="#EFEFE8" />

      {/* Main Building Body */}
      <rect x="70" y="95" width="240" height="160" rx="16" fill="url(#storeWallGrad)" stroke="#E5E5DC" strokeWidth="2" filter="url(#softShadow)" />

      {/* Striped Awning / Roof Canopy */}
      <path
        d="M50 85 C50 80, 55 75, 65 75 L315 75 C325 75, 330 80, 330 85 L320 115 C318 122, 312 125, 305 125 C298 125, 292 120, 290 115 L285 115 C283 122, 277 125, 270 125 C263 125, 257 120, 255 115 L250 115 C248 122, 242 125, 235 125 C228 125, 222 120, 220 115 L215 115 C213 122, 207 125, 200 125 C193 125, 187 120, 185 115 L180 115 C178 122, 172 125, 165 125 C158 125, 152 120, 150 115 L145 115 C143 122, 137 125, 130 125 C123 125, 117 120, 115 115 L110 115 C108 122, 102 125, 95 125 C88 125, 82 120, 80 115 L75 115 C73 122, 67 125, 60 125 C53 125, 48 120, 46 113 Z"
        fill="url(#storeRoofGrad)"
        stroke="#111827"
        strokeWidth="1.5"
      />

      {/* Awning White Stripes */}
      <path d="M95 75 L108 115 C106 122, 98 125, 95 125 C92 125, 86 122, 85 115 L75 75 Z" fill="#FFFFFF" opacity="0.9" />
      <path d="M145 75 L148 115 C146 122, 138 125, 135 125 C132 125, 126 122, 125 115 L125 75 Z" fill="#FFFFFF" opacity="0.9" />
      <path d="M195 75 L188 115 C186 122, 178 125, 175 125 C172 125, 166 122, 165 115 L175 75 Z" fill="#FFFFFF" opacity="0.9" />
      <path d="M245 75 L228 115 C226 122, 218 125, 215 125 C212 125, 206 122, 205 115 L225 75 Z" fill="#FFFFFF" opacity="0.9" />
      <path d="M295 75 L268 115 C266 122, 258 125, 255 125 C252 125, 246 122, 245 115 L275 75 Z" fill="#FFFFFF" opacity="0.9" />

      {/* Store Sign Board: AWAIS BAIG / eBAY STORE */}
      <rect x="120" y="42" width="140" height="26" rx="6" fill="#111827" stroke="#6558F5" strokeWidth="1.5" />
      <text x="190" y="59" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" fontWeight="800" textAnchor="middle" letterSpacing="1.2">
        AWAIS BAIG • STORE
      </text>

      {/* Store Window Pane */}
      <rect x="90" y="140" width="115" height="100" rx="10" fill="url(#glassGrad)" stroke="#111827" strokeWidth="1.5" />
      {/* Window Glare */}
      <path d="M96 148 L170 148 L125 232 L96 232 Z" fill="#FFFFFF" opacity="0.25" />

      {/* Product Display Inside Window */}
      <rect x="108" y="195" width="78" height="8" rx="2" fill="#E5E5DC" stroke="#111827" strokeWidth="1" />
      {/* Featured Star Item on Stand */}
      <rect x="135" y="165" width="26" height="30" rx="4" fill="#6558F5" stroke="#111827" strokeWidth="1" />
      <circle cx="148" cy="180" r="5" fill="#54D6C8" />
      <path d="M148 170 L152 178 L144 178 Z" fill="#FFB86B" />

      {/* Top Rated Badge on Glass */}
      <circle cx="185" cy="155" r="12" fill="url(#amberGlow)" stroke="#111827" strokeWidth="1.2" />
      <text x="185" y="159" fill="#111827" fontSize="9" fontWeight="900" textAnchor="middle">★</text>

      {/* Store Doorway */}
      <rect x="225" y="140" width="70" height="115" rx="8" fill="#111827" stroke="#111827" strokeWidth="1.5" />
      <rect x="233" y="148" width="54" height="50" rx="4" fill="#1F2937" stroke="#374151" strokeWidth="1" />
      {/* Door Handle */}
      <circle cx="240" cy="200" r="3" fill="#54D6C8" />
      <rect x="238" y="200" width="4" height="12" rx="2" fill="#54D6C8" />

      {/* Floating Shipping Box / Parcel on Right */}
      <g transform="translate(290, 195)">
        <rect x="0" y="15" width="54" height="42" rx="6" fill="#FEF6EB" stroke="#111827" strokeWidth="1.5" />
        <rect x="0" y="25" width="54" height="6" fill="#FFB86B" opacity="0.7" />
        <line x1="27" y1="15" x2="27" y2="57" stroke="#111827" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* Shipping Label Badge */}
        <rect x="8" y="36" width="16" height="10" rx="2" fill="#FFFFFF" stroke="#111827" strokeWidth="0.8" />
        <line x1="11" y1="39" x2="21" y2="39" stroke="#111827" strokeWidth="0.8" />
        <line x1="11" y1="42" x2="18" y2="42" stroke="#6558F5" strokeWidth="0.8" />
        {/* Checkmark Tag */}
        <circle cx="44" cy="15" r="9" fill="#54D6C8" stroke="#111827" strokeWidth="1.2" />
        <path d="M41 15 L43.5 17.5 L48 13" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Floating Mini Elements / Sparkles */}
      <g fill="#6558F5">
        <circle cx="55" cy="140" r="2.5" />
        <circle cx="340" cy="145" r="2" />
        <circle cx="45" cy="190" r="3.5" fill="#54D6C8" />
        <path d="M335 110 L337 115 L342 117 L337 119 L335 124 L333 119 L328 117 L333 115 Z" fill="#FFB86B" />
        <path d="M42 60 L44 64 L48 66 L44 68 L42 72 L40 68 L36 66 L40 64 Z" fill="#6558F5" />
      </g>
    </svg>
  );
};
