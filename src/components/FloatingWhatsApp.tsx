"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, X } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200 text-xs text-slate-700 animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Have an eBay question? Email Awais</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Email Button */}
      <a
        href={personalInfo.social.links.email}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
        aria-label="Email Awais Baig directly"
        title="Email awaisbaig138@gmail.com"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};
