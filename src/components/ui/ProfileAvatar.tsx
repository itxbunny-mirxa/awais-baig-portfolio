"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";

interface ProfileAvatarProps {
  size?: "sm" | "md" | "lg";
  showStatusIndicator?: boolean;
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  size = "md",
  showStatusIndicator = true,
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const photo = personalInfo.profilePhoto;

  const sizeClasses = {
    sm: "w-10 h-10 rounded-xl text-xs",
    md: "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-base",
    lg: "w-24 h-24 sm:w-28 sm:h-28 rounded-3xl text-2xl",
  };

  const indicatorSizes = {
    sm: "w-3 h-3 -bottom-0.5 -right-0.5",
    md: "w-3.5 h-3.5 -bottom-1 -right-1",
    lg: "w-5 h-5 -bottom-1.5 -right-1.5",
  };

  const hasRealImage = photo.isSupplied && photo.imagePath && !imageError;

  return (
    <div className={`relative inline-block ${className}`}>
      {hasRealImage ? (
        <div
          className={`${sizeClasses[size]} overflow-hidden border-2 border-blue-600 shadow-md relative bg-slate-100`}
        >
          <Image
            src={photo.imagePath!}
            alt={photo.altText}
            fill
            sizes="(max-width: 640px) 64px, 112px"
            className="object-cover object-top"
            priority
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div
          className={`${sizeClasses[size]} bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white flex flex-col items-center justify-center shadow-md relative border border-slate-700/80 select-none`}
        >
          <span className="font-extrabold tracking-tight text-white leading-none">
            {photo.placeholderInitials}
          </span>
          {size !== "sm" && (
            <span className="text-[7px] font-semibold tracking-wider uppercase text-blue-300 mt-0.5">
              Awais Baig
            </span>
          )}
        </div>
      )}

      {showStatusIndicator && (
        <span
          className={`absolute ${indicatorSizes[size]} rounded-full bg-emerald-500 border-2 border-white shadow-xs`}
          title={personalInfo.availability.label}
        />
      )}
    </div>
  );
};
