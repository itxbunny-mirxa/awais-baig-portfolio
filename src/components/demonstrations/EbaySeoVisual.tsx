"use client";

import React from "react";
import {
  Search,
  Tag,
  Sliders,
  CheckCircle2,
  Info,
  ExternalLink,
  Layers,
  ArrowRight,
} from "lucide-react";

export const EbaySeoVisual: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-xs text-slate-700">
      {/* Mandatory Illustrative Demonstration Banner */}
      <div className="bg-amber-50 px-4 py-2 border-b border-amber-200/80 flex items-center justify-between text-[11px] font-semibold text-amber-900">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-amber-700" />
          Illustrative Demonstration — Not Live Client Data
        </span>
        <span className="text-amber-800 uppercase tracking-wider font-mono text-[10px]">
          Sample SEO Asset #04
        </span>
      </div>

      <div className="p-6 sm:p-7 space-y-6">
        {/* Title Structure Breakdown Formula */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-blue-600" />
              Formulaic 80-Character Title Engineering
            </span>
            <span className="text-[10px] font-mono text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Cassini Weighting Standard
            </span>
          </div>

          {/* Color-Coded Formula Blueprint */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-center text-[10px] font-mono">
            <div className="bg-blue-100 text-blue-900 p-2 rounded-lg font-bold">
              [Brand / Origin]
              <span className="block text-[9px] font-normal text-blue-700 mt-0.5">e.g. Anker / Generic</span>
            </div>
            <div className="bg-indigo-100 text-indigo-900 p-2 rounded-lg font-bold">
              [Core Keyword]
              <span className="block text-[9px] font-normal text-indigo-700 mt-0.5">e.g. USB C Cable Fast</span>
            </div>
            <div className="bg-purple-100 text-purple-900 p-2 rounded-lg font-bold">
              [Material / Specs]
              <span className="block text-[9px] font-normal text-purple-700 mt-0.5">e.g. Braided Nylon 60W</span>
            </div>
            <div className="bg-emerald-100 text-emerald-900 p-2 rounded-lg font-bold">
              [Size / Variation]
              <span className="block text-[9px] font-normal text-emerald-700 mt-0.5">e.g. 1m 2m 3m Black</span>
            </div>
            <div className="bg-amber-100 text-amber-900 p-2 rounded-lg font-bold col-span-2 sm:col-span-1">
              [UK Stock Trigger]
              <span className="block text-[9px] font-normal text-amber-700 mt-0.5">e.g. UK Fast Dispatch</span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-200 font-mono text-xs text-slate-900">
            &quot;Anker Compatible USB C Cable Fast Charge Braided Nylon 60W 1m 2m 3m Black UK Stock&quot;
          </div>
        </div>

        {/* Primary vs Secondary Keywords Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-blue-600" />
              Primary Exact-Match Keywords
            </span>
            <p className="text-[11px] text-slate-500">
              Highest monthly search volume queries. Placed strictly in the first 40 characters for immediate mobile title visibility.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold text-[11px]">
                usb c cable
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold text-[11px]">
                fast charge type c
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold text-[11px]">
                braided phone charger
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-blue-600" />
              Secondary Modifier & Long-Tail Terms
            </span>
            <p className="text-[11px] text-slate-500">
              Intent-driven modifiers mapped into item specifics and description tags to catch specific filter searches.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 font-semibold text-[11px]">
                60w power delivery
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 font-semibold text-[11px]">
                heavy duty lead
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 font-semibold text-[11px]">
                uk plug compatible
              </span>
            </div>
          </div>
        </div>

        {/* Search Matching Simulation Callout */}
        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
          <span className="font-bold text-emerald-950 text-xs block">
            Facet Filter Matching Verification
          </span>
          <p className="text-[11px] text-emerald-800 leading-relaxed">
            By embedding these exact keywords into mandatory item specifics (Cable Length, Output, Material, Compatible Model), listings continue to appear when buyers check sidebar filters on eBay.co.uk.
          </p>
        </div>
      </div>
    </div>
  );
};
