"use client";

import React, { useState } from "react";
import { Check, Sparkles, Wrench, Shield, Database, LayoutGrid } from "lucide-react";
import { skillCategoriesData } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

export const Skills: React.FC = () => {
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
        return "bg-blue-50 text-blue-700 border-blue-200/80";
      case "Proficient":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/80";
      case "Specialized":
        return "bg-purple-50 text-purple-700 border-purple-200/80";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Skills & Software Stack"
          title="Battle-Tested Tools & Specialized"
          highlight="Marketplace Capabilities"
          description="Strictly verified tools and methodologies applied to maintain high account performance, compliant listings, and efficient order fulfillment."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {skillCategoriesData.map((category, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
                }`}
              >
                {getCategoryIcon(idx)}
                <span>{category.categoryName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-sm text-slate-500">
            {skillCategoriesData[activeCategoryIndex].description}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategoriesData[activeCategoryIndex].skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="text-base font-bold text-slate-900">
                    {skill.name}
                  </h4>
                  <span
                    className={`shrink-0 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getLevelBadge(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Summary Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-slate-800">
              Direct Tool Mastery:
            </span>
            <span>eBay Seller Hub • Terapeak • Excel / Sheets • Canva • Royal Mail Click & Drop</span>
          </div>
          <span className="text-slate-400 font-medium">
            No unverified claims or third-party hype
          </span>
        </div>
      </div>
    </section>
  );
};
