"use client";

import React, { useState } from "react";
import { Mail, X } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Direct Quick Contact" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-2 rounded-2xl shadow-lg border border-[#E5E5DC] text-xs text-[#374151] animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#54D6C8] animate-pulse" />
          <span>Have an eBay question? Email Awais</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9CA3AF] hover:text-[#111827] ml-1 p-0.5"
            aria-label="Dismiss quick contact tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Email Button */}
      <a
        href={personalInfo.social.links.email}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#6558F5] hover:bg-[#5346E8] text-white flex items-center justify-center shadow-lg shadow-[#6558F5]/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#54D6C8] focus:ring-offset-2"
        aria-label="Email Awais Baig directly"
        title="Email awaisbaig138@gmail.com"
      >
        <Mail className="w-6 h-6" />
      </a>
    </aside>
  );
};
