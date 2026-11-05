"use client";

import React from "react";
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  Tag,
  ShieldCheck,
  FileCheck,
  Info,
  Maximize2,
} from "lucide-react";

export const ListingOptimizationVisual: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-xs text-slate-700">
      {/* Mandatory Illustrative Demonstration Banner */}
      <div className="bg-amber-50 px-4 py-2 border-b border-amber-200/80 flex items-center justify-between text-[11px] font-semibold text-amber-900">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-amber-700" />
          Illustrative Demonstration — Not Live Client Data
        </span>
        <span className="text-amber-800 uppercase tracking-wider font-mono text-[10px]">
          Sample Listing Asset #01
        </span>
      </div>

      <div className="p-6 sm:p-7 space-y-6">
        {/* Top: Product Image Placeholder & Title Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Image Placeholder */}
          <div className="md:col-span-4 bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center aspect-square relative group">
            <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-2xs mb-2">
              <Maximize2 className="w-6 h-6" />
            </div>
            <span className="font-bold text-slate-800 text-xs">
              1600 &times; 1600 px Standard
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5">
              Pure White Background Compliant
            </span>
            <div className="mt-2 text-[9px] font-mono bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200">
              100% Policy Compliant
            </div>
          </div>

          {/* Title Comparison */}
          <div className="md:col-span-8 space-y-3">
            {/* Original */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-red-600">
                <span className="flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" />
                  Original Listing Title (Non-Optimised)
                </span>
                <span className="font-mono text-slate-500">44 / 80 Chars</span>
              </div>
              <p className="font-mono text-slate-700 text-xs line-through bg-white p-2 rounded border border-slate-200/70">
                Stainless Steel Garlic Press Kitchen Tool L@@K
              </p>
              <p className="text-[10px] text-slate-500">
                Flaws: Wastes 36 characters, uses non-searchable buzzword (&apos;L@@K&apos;), lacks high-intent buyer terms.
              </p>
            </div>

            {/* Optimised */}
            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-blue-900">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  Cassini-Optimised Title (By Awais Baig)
                </span>
                <span className="font-mono text-blue-800 font-bold">79 / 80 Chars</span>
              </div>
              <p className="font-mono text-slate-900 text-xs font-bold bg-white p-2 rounded border border-blue-200">
                Stainless Steel Garlic Press Crusher Heavy Duty Easy Clean Manual Mincer UK Stock
              </p>
              <p className="text-[10px] text-blue-950 font-medium">
                Benefits: High keyword density, front-loaded exact match keywords, includes &apos;UK Stock&apos; conversion trigger.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Keyword Structure */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-800 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-blue-600" />
              SEO Keyword Structure & Indexing Blueprint
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Cassini Weighting</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="bg-white p-2.5 rounded-xl border border-slate-200">
              <span className="text-[10px] text-blue-700 font-bold uppercase block mb-1">
                Primary Terms (Exact Match)
              </span>
              <p className="font-semibold text-slate-900">Garlic press stainless steel</p>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Position: Start of Title</span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-slate-200">
              <span className="text-[10px] text-blue-700 font-bold uppercase block mb-1">
                Secondary Modifiers
              </span>
              <p className="font-semibold text-slate-900">Heavy duty, easy clean</p>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Position: Mid-title & Features</span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-slate-200">
              <span className="text-[10px] text-blue-700 font-bold uppercase block mb-1">
                Long-Tail Attributes
              </span>
              <p className="font-semibold text-slate-900">Manual mincer, UK stock</p>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Position: Tail & Item Specifics</span>
            </div>
          </div>
        </div>

        {/* Item Specifics & Listing Quality Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Item Specifics */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">Item Specifics Completion</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                100% Populated
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="text-slate-400 block text-[9px]">Material:</span>
                <span className="font-semibold text-slate-800">304 Stainless Steel</span>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="text-slate-400 block text-[9px]">Type:</span>
                <span className="font-semibold text-slate-800">Manual Garlic Crusher</span>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="text-slate-400 block text-[9px]">Features:</span>
                <span className="font-semibold text-slate-800">Dishwasher Safe, Rust Proof</span>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="text-slate-400 block text-[9px]">Custom SKU:</span>
                <span className="font-semibold text-slate-800">KIT-GAR-SS01</span>
              </div>
            </div>
          </div>

          {/* Quality Checklist */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="font-bold text-slate-800 block text-xs">
              Listing Quality Checklist
            </span>
            <ul className="space-y-1.5 text-[11px] text-slate-700">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Title length maximized (79/80 chars)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Facet filters unlocked via 100% attributes</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Clean 1600x1600 px white-background images</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>30-Day domestic returns & same-day dispatch tag</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
