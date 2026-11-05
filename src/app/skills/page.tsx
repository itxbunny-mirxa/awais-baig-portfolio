"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  Shield,
  Database,
  LayoutGrid,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { skillCategoriesData } from "@/data/portfolioData";
import { PageHeader } from "@/components/ui/PageHeader";

export default function SkillsPage() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="w-4 h-4" />;
      case 1:
        return <Database className="w-4 h-4" />;
      case 2:
        return <Wrench className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  const getLevelBadge = (level: "Advanced" | "Proficient" | "Specialized") => {
    switch (level) {
      case "Advanced":
        return "bg-[#EEF0FE] text-[#6558F5] border-[#6558F5]/30";
      case "Proficient":
        return "bg-[#E6FAF7] text-[#0D9488] border-[#54D6C8]/40";
      case "Specialized":
        return "bg-[#FEF6EB] text-[#D97706] border-[#FFB86B]/40";
      default:
        return "bg-[#F7F7F2] text-[#4B5563] border-[#E5E5DC]";
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F7F7F2] text-[#111827]">
      <PageHeader
        badge="Skills & Competencies"
        title="Battle-Tested Technical Capabilities &"
        highlight="Marketplace Standards"
        description="Strictly verified operational skills applied to protect account health, structure high-ranking listings, and manage order fulfillment. No fabricated percentages."
        currentPage="Skills"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategoriesData.map((category, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#111827] text-white shadow-md shadow-black/10 scale-102"
                    : "bg-[#FFFFFF] text-[#4B5563] hover:text-[#111827] border border-[#E5E5DC] hover:border-[#6558F5]/40"
                }`}
              >
                {getCategoryIcon(idx)}
                <span>{category.categoryName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Content */}
        <div className="space-y-8">
          <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#E5E5DC] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#6558F5] uppercase tracking-wider block mb-1">
                Domain 0{activeCategoryIndex + 1}
              </span>
              <h2 className="text-2xl font-bold text-[#111827]">
                {skillCategoriesData[activeCategoryIndex].categoryName}
              </h2>
              <p className="text-sm text-[#4B5563] mt-1">
                {skillCategoriesData[activeCategoryIndex].description}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D9488] bg-[#E6FAF7] px-3.5 py-1.5 rounded-full border border-[#54D6C8]/40 self-start sm:self-auto">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Operational Proficiency</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategoriesData[activeCategoryIndex].skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-3xl p-7 border border-[#E5E5DC] shadow-xs hover:shadow-xl hover:border-[#6558F5]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#6558F5] transition-colors">
                      {skill.name}
                    </h3>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${getLevelBadge(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-[#E5E5DC] flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#F7F7F2] text-[#4B5563] border border-[#E5E5DC]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Guarantee & Next Step */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-[#111827] mb-2">
              Want to see these skills in live action?
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Explore our interactive demonstration dashboards to inspect real title restructuring formulas, sell-through calculations, and order dispatch workflows.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white text-xs font-bold transition-colors"
            >
              <span>Explore Interactive Demos</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#54D6C8]" />
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F7F7F2] hover:bg-[#FFFFFF] text-[#111827] text-xs font-bold border border-[#E5E5DC] transition-colors"
            >
              <span>View Tools Ecosystem</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
