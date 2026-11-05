"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Info,
  CheckCircle2,
  Lock,
  ShieldCheck,
} from "lucide-react";
import {
  demonstrationProjects,
  selectedClientWork,
} from "@/data/portfolioData";
import { ClientProjectPlaceholder } from "@/types/portfolio";
import { PageHeader } from "@/components/ui/PageHeader";
import { ClientWorkModal } from "@/components/ClientWorkModal";
import { ListingOptimizationVisual } from "@/components/demonstrations/ListingOptimizationVisual";
import { ProductResearchVisual } from "@/components/demonstrations/ProductResearchVisual";
import { StoreManagementVisual } from "@/components/demonstrations/StoreManagementVisual";
import { EbaySeoVisual } from "@/components/demonstrations/EbaySeoVisual";
import { DropshippingWorkflowVisual } from "@/components/demonstrations/DropshippingWorkflowVisual";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedDemoTab, setSelectedDemoTab] = useState<string>("demo-01-listing-optimization");
  const [selectedClientProject, setSelectedClientProject] = useState<ClientProjectPlaceholder | null>(null);

  const filterCategories = [
    { id: "all", label: "All Categories" },
    { id: "Store Management", label: "Store Management" },
    { id: "Product Research", label: "Product Research" },
    { id: "Listing Optimization", label: "Listing Optimization" },
    { id: "eBay SEO", label: "eBay SEO" },
    { id: "Dropshipping", label: "Dropshipping" },
  ];

  const getFilteredClientWork = () => {
    if (activeCategory === "all") return selectedClientWork;
    return selectedClientWork.filter((p) => p.category === activeCategory);
  };

  return (
    <div className="relative min-h-screen bg-[#F7F7F2] text-[#111827]">
      <PageHeader
        badge="Demonstrated Capabilities & Case Studies"
        title="Interactive Systems, SEO Engineering &"
        highlight="eCommerce Dashboards"
        description="Explore 5 custom, high-fidelity demonstration dashboards showcasing listing optimization, product research calculations, store operations, and dropshipping tracking workflows."
        currentPage="Portfolio"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* =========================================================================
            SECTION A: FIVE REALISTIC DEMONSTRATION VISUAL ASSETS
            ========================================================================= */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E5E5DC]">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6558F5]">
                Part A — Interactive Demonstration Dashboards
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mt-0.5">
                Live Interactive Workflows
              </h2>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FEF6EB] text-[#D97706] border border-[#FFB86B]/40 self-start sm:self-auto">
              <Info className="w-3.5 h-3.5" />
              <span>Illustrative Demonstration — Not Live Client Data</span>
            </div>
          </div>

          {/* Interactive Visual Asset Tab Switcher */}
          <div className="flex flex-wrap gap-2 mb-6">
            {demonstrationProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedDemoTab(p.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 ${
                  selectedDemoTab === p.id
                    ? "bg-[#111827] text-white shadow-md shadow-black/10 scale-102"
                    : "bg-[#FFFFFF] text-[#4B5563] border border-[#E5E5DC] hover:border-[#6558F5]/40"
                }`}
              >
                #{p.projectNumber} {p.title}
              </button>
            ))}
          </div>

          {/* macOS Safari Browser Frame for Demonstrations */}
          <div className="rounded-3xl border border-[#E5E5DC] shadow-xl shadow-black/5 overflow-hidden bg-[#FFFFFF]">
            {/* macOS Window Title Bar */}
            <div className="bg-[#F7F7F2] px-4 py-3 border-b border-[#E5E5DC] flex items-center justify-between gap-4">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#EF4444] border border-red-500/30 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B] border border-amber-500/30 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#10B981] border border-emerald-500/30 inline-block" />
              </div>

              {/* Dynamic URL / Omnibar */}
              <div className="bg-[#FFFFFF] px-3.5 py-1 rounded-lg border border-[#E5E5DC] flex items-center gap-2 text-xs font-mono text-[#4B5563] w-full max-w-md mx-auto truncate shadow-2xs">
                <Lock className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                <span className="truncate">
                  {selectedDemoTab === "demo-01-listing-optimization" && "sellerhub.ebay.co.uk/itm/618294029103/optimization-preview"}
                  {selectedDemoTab === "demo-02-product-research" && "zik-analytics.com/uk/sourcing-profit-scan"}
                  {selectedDemoTab === "demo-03-store-management" && "sellerhub.ebay.co.uk/sh/ord/dispatch-queue"}
                  {selectedDemoTab === "demo-04-ebay-seo" && "search.ebay.co.uk/cassini-indexing-blueprint"}
                  {selectedDemoTab === "demo-05-dropshipping" && "tracking.supplier-sync.io/pipeline-monitor"}
                </span>
              </div>

              {/* Tag */}
              <div className="shrink-0 text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6558F5] bg-[#EEF0FE] px-2.5 py-0.5 rounded border border-[#6558F5]/30">
                  Interactive Mode
                </span>
              </div>
            </div>

            {/* Active Visual Render */}
            <div className="p-0 transition-all duration-200">
              {selectedDemoTab === "demo-01-listing-optimization" && <ListingOptimizationVisual />}
              {selectedDemoTab === "demo-02-product-research" && <ProductResearchVisual />}
              {selectedDemoTab === "demo-03-store-management" && <StoreManagementVisual />}
              {selectedDemoTab === "demo-04-ebay-seo" && <EbaySeoVisual />}
              {selectedDemoTab === "demo-05-dropshipping" && <DropshippingWorkflowVisual />}
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION B: SELECTED REAL CLIENT WORK EXAMPLES (RESPECTFUL & SECURE)
            ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E5E5DC]">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6558F5]">
                Part B — Client Case Studies & Deliverables
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mt-0.5">
                Staged Client Work Profiles
              </h2>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E6FAF7] text-[#0D9488] border border-[#54D6C8]/40 self-start sm:self-auto">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Full Privacy & Non-Disclosure Preserved</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#111827] text-white shadow-xs"
                      : "bg-[#FFFFFF] text-[#4B5563] border border-[#E5E5DC] hover:border-[#6558F5]/40"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Client Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredClientWork().map((project) => (
              <div
                key={project.id}
                className="bg-[#FFFFFF] rounded-3xl p-7 border border-[#E5E5DC] shadow-xs hover:shadow-xl hover:border-[#6558F5]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold text-[#6558F5] bg-[#EEF0FE] px-2.5 py-0.5 rounded-md">
                      {project.marketplace}
                    </span>
                    <span className="text-[10px] font-bold text-[#0D9488] bg-[#E6FAF7] px-2.5 py-0.5 rounded-full border border-[#54D6C8]/40">
                      {project.statusBadge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#6558F5] transition-colors leading-snug">
                    {project.projectTitle}
                  </h3>

                  <p className="text-xs text-[#6B7280] font-medium mb-3">
                    Industry: {project.clientIndustry}
                  </p>

                  <p className="text-xs text-[#4B5563] leading-relaxed mb-5">
                    {project.projectDescription}
                  </p>

                  {/* Work Completed */}
                  <div className="space-y-1.5 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] block">
                      Scope Delivered
                    </span>
                    <ul className="space-y-1 text-xs text-[#111827]">
                      {project.workCompleted.slice(0, 3).map((w, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                          <span className="leading-tight">{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E5DC]">
                  <button
                    onClick={() => setSelectedClientProject(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#F7F7F2] hover:bg-[#111827] text-[#111827] hover:text-white text-xs font-bold transition-colors"
                  >
                    <span>View Case Study Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Client Work Details */}
        <ClientWorkModal
          project={selectedClientProject}
          isOpen={!!selectedClientProject}
          onClose={() => setSelectedClientProject(null)}
        />

        {/* Bottom Callout */}
        <div className="mt-20 p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-[#111827] mb-2">
            Have a Specific Listing or Store to Audit?
          </h3>
          <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
            Send me an item number or your store link. I will conduct a confidential title structure and item specifics assessment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white text-xs font-bold transition-colors"
          >
            <span>Request a Confidential Store Review</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#54D6C8]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
