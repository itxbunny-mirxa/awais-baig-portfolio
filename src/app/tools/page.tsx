"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  CheckCircle2,
  Clock,
  BarChart3,
  Search,
  FileSpreadsheet,
  Palette,
  Truck,
  ShieldCheck,
  ArrowRight,
  Info,
} from "lucide-react";
import { toolsEcosystemData } from "@/data/portfolioData";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ToolsPage() {
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
        return <BarChart3 className="w-5 h-5 text-[#6558F5]" />;
      case "Terapeak":
        return <Search className="w-5 h-5 text-[#6558F5]" />;
      case "eBay Seller Hub":
        return <ShieldCheck className="w-5 h-5 text-[#111827]" />;
      case "AutoDS":
      case "DSM Tool":
        return <Truck className="w-5 h-5 text-[#0D9488]" />;
      case "Google Sheets":
      case "Microsoft Excel":
        return <FileSpreadsheet className="w-5 h-5 text-[#0D9488]" />;
      case "Canva":
      case "Photopea":
        return <Palette className="w-5 h-5 text-[#D97706]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#6B7280]" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F7F7F2] text-[#111827]">
      <PageHeader
        badge="Software & Platform Ecosystem"
        title="Marketplace Platforms, Research Suites &"
        highlight="Operational Tooling"
        description="A transparent breakdown of confirmed tool expertise vs tools currently under active review. No artificial claims of proficiency."
        currentPage="Tools"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
              filter === "all"
                ? "bg-[#111827] text-white shadow-md shadow-black/10 scale-102"
                : "bg-[#FFFFFF] text-[#4B5563] hover:text-[#111827] border border-[#E5E5DC] hover:border-[#6558F5]/40"
            }`}
          >
            All Software ({visibleTools.length})
          </button>
          <button
            onClick={() => setFilter("confirmed")}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
              filter === "confirmed"
                ? "bg-[#6558F5] text-white shadow-md shadow-[#6558F5]/25 scale-102"
                : "bg-[#FFFFFF] text-[#4B5563] hover:text-[#111827] border border-[#E5E5DC] hover:border-[#6558F5]/40"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Confirmed Primary Stack</span>
          </button>
          <button
            onClick={() => setFilter("review")}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
              filter === "review"
                ? "bg-[#111827] text-white shadow-md shadow-black/10 scale-102"
                : "bg-[#FFFFFF] text-[#4B5563] hover:text-[#111827] border border-[#E5E5DC] hover:border-[#6558F5]/40"
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Familiarity to Confirm</span>
          </button>
        </div>

        {/* Informative Callout */}
        <div className="mb-10 p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs flex items-start gap-3 text-xs text-[#4B5563]">
          <Info className="w-4 h-4 text-[#6558F5] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#111827]">Strict Integrity Policy:</strong> Only tools with confirmed hands-on project workflows are tagged as <span className="font-semibold text-[#6558F5]">Confirmed</span>. Other tools in our workflow are honestly tagged as <span className="font-semibold text-[#D97706]">Familiarity to confirm</span> until full operational review.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => {
            const isConfirmed = tool.status === "Confirmed";

            return (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-3xl p-7 border border-[#E5E5DC] shadow-xs hover:shadow-xl hover:border-[#6558F5]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getToolIcon(tool.name)}
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                        isConfirmed
                          ? "bg-[#EEF0FE] text-[#6558F5] border-[#6558F5]/30 font-bold"
                          : "bg-[#FEF6EB] text-[#D97706] border-[#FFB86B]/40 font-semibold"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  {/* Tool Name & Category */}
                  <h3 className="text-xl font-bold text-[#111827] mb-1 group-hover:text-[#6558F5] transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#6B7280] block mb-3">
                    {tool.category}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                    {tool.description}
                  </p>
                </div>

                {/* Operational Role */}
                <div className="pt-4 border-t border-[#E5E5DC]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#9CA3AF] block mb-1">
                    Operational Application
                  </span>
                  <p className="text-xs font-medium text-[#111827] leading-tight">
                    {tool.operationalRole}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-[#111827]">
              Need integration with a custom ERP, WMS, or specific dropshipping software?
            </h4>
            <p className="text-xs text-[#4B5563] mt-1">
              I adapt rapidly to custom spreadsheets, inventory software, and client-specific order management systems.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white text-xs font-bold transition-colors shrink-0"
          >
            <span>Ask About Your Tool</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#54D6C8]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
