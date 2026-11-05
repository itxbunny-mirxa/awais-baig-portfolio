"use client";

import React, { useState } from "react";
import {
  Wrench,
  CheckCircle2,
  Clock,
  Sparkles,
  BarChart3,
  Layers,
  Search,
  Database,
  FileSpreadsheet,
  Palette,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { toolsEcosystemData } from "@/data/portfolioData";
import { ToolItem, ToolStatus } from "@/types/portfolio";
import { SectionHeading } from "./ui/SectionHeading";

export const ToolsEcosystem: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "confirmed" | "review">("all");

  const visibleTools = toolsEcosystemData.filter((tool) => tool.status !== "Hidden");

  const filteredTools = visibleTools.filter((tool) => {
    if (filter === "confirmed") return tool.status === "Confirmed";
    if (filter === "review") return tool.status === "Familiarity to confirm";
    return true;
  });

  const getToolIcon = (name: string) => {
    switch (name) {
      case "ZIK Analytics":
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case "Terapeak":
        return <Search className="w-5 h-5 text-indigo-600" />;
      case "eBay Seller Hub":
        return <ShieldCheck className="w-5 h-5 text-slate-800" />;
      case "AutoDS":
      case "DSM Tool":
        return <Truck className="w-5 h-5 text-blue-600" />;
      case "Google Sheets":
      case "Microsoft Excel":
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case "Canva":
      case "Photopea":
        return <Palette className="w-5 h-5 text-purple-600" />;
      default:
        return <Wrench className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="tools" className="py-20 sm:py-28 bg-white relative border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Marketplace Software Stack"
          title="Tools & Platforms"
          highlight="Ecosystem"
          description="A transparent inventory of specialized research software, listing tools, and operations platforms used to manage eBay stores with accuracy and speed."
        />

        {/* Filter Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              filter === "all"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:text-slate-900"
            }`}
          >
            All Configured Tools ({visibleTools.length})
          </button>
          <button
            onClick={() => setFilter("confirmed")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              filter === "confirmed"
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:text-emerald-800"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Confirmed Active (ZIK & Terapeak)</span>
          </button>
          <button
            onClick={() => setFilter("review")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              filter === "review"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:text-blue-800"
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Familiarity to Confirm</span>
          </button>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, idx) => {
            const isConfirmed = tool.status === "Confirmed";
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon + Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {getToolIcon(tool.name)}
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                        isConfirmed
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-slate-100 text-slate-600 border-slate-200"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  {/* Tool Name & Category */}
                  <h3 className="text-lg font-bold text-slate-900">
                    {tool.name}
                  </h3>
                  <span className="text-xs text-blue-700 font-semibold mt-0.5 block">
                    {tool.category}
                  </span>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                {/* Operational Role Callout */}
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                    Store Application:
                  </span>
                  <p className="text-slate-800 font-medium">
                    {tool.operationalRole}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Governance & Configuration Note */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Configurable Statuses:</strong> Confirmed tools represent verified active tool stack. Additional software entries are maintained in <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-blue-700 font-mono">portfolioData.ts</code>.
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium shrink-0">
            Zero unlicensed third-party asset downloads
          </span>
        </div>
      </div>
    </section>
  );
};
