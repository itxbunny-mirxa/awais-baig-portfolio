"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  currentPage: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlight,
  description,
  currentPage,
}) => {
  return (
    <div className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#F7F7F2] border-b border-[#E5E5DC] overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 bg-warm-dots opacity-40 pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[500px] h-[250px] bg-gradient-to-br from-[#6558F5]/10 via-[#54D6C8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#6B7280] mb-5">
          <Link href="/" className="hover:text-[#6558F5] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
          <span className="text-[#111827]">{currentPage}</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#6558F5]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#6558F5]">
            {badge}
          </span>
        </div>

        {/* Editorial Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111827] leading-[1.12] max-w-4xl">
          {title}{" "}
          {highlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6558F5] via-[#5346E8] to-[#54D6C8]">
              {highlight}
            </span>
          )}
        </h1>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};
