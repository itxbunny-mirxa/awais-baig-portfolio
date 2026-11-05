"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  TrendingUp,
  Layers,
  ArrowRight,
  Info,
  CheckCircle,
  FileCheck,
  Search,
  Sparkles,
  SlidersHorizontal,
  XCircle,
  CheckCircle2,
  FolderKanban,
  FileSpreadsheet,
  Building,
  Image as ImageIcon,
  Maximize2,
  Lock,
} from "lucide-react";
import {
  demonstrationProjects,
  selectedClientWork,
  personalInfo,
} from "@/data/portfolioData";
import { DemonstrationProject, ClientProjectPlaceholder } from "@/types/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { DemoProjectModal } from "./DemoProjectModal";
import { ClientWorkModal } from "./ClientWorkModal";
import { ListingOptimizationVisual } from "./demonstrations/ListingOptimizationVisual";
import { ProductResearchVisual } from "./demonstrations/ProductResearchVisual";
import { StoreManagementVisual } from "./demonstrations/StoreManagementVisual";
import { EbaySeoVisual } from "./demonstrations/EbaySeoVisual";
import { DropshippingWorkflowVisual } from "./demonstrations/DropshippingWorkflowVisual";

export const Portfolio: React.FC = () => {
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
    <section id="portfolio" className="py-20 sm:py-28 bg-slate-50/50 relative border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Demonstration & Client Portfolio"
          title="Practical Execution, Custom Dashboards &"
          highlight="Selected Client Retainers"
          description="Explore five custom-built demonstration dashboard assets illustrating listing, research, SEO, and store management workflows, alongside structured client project frameworks."
        />

        {/* Global Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* =========================================================================
            SECTION A: FIVE REALISTIC DEMONSTRATION VISUAL ASSETS
           ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Part A — Custom Demonstration Dashboards
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Demonstration Visual Dashboards
              </h3>
            </div>
            <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80">
              Illustrative Demonstration — Not Live Client Data
            </span>
          </div>

          {/* Interactive Visual Asset Tab Switcher */}
          <div className="flex flex-wrap gap-2 mb-6">
            {demonstrationProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedDemoTab(p.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedDemoTab === p.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                #{p.projectNumber} {p.title}
              </button>
            ))}
          </div>

          {/* macOS Safari Browser Frame for Demonstrations */}
          <div className="rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden bg-white">
            {/* macOS Window Title Bar */}
            <div className="bg-slate-100/95 px-4 py-3 border-b border-slate-200/90 flex items-center justify-between gap-4">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-400 border border-red-500/30 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/30 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/30 inline-block" />
              </div>

              {/* Dynamic URL / Omnibar */}
              <div className="bg-white px-3.5 py-1 rounded-lg border border-slate-200/90 flex items-center gap-2 text-xs font-mono text-slate-600 w-full max-w-md mx-auto truncate shadow-2xs">
                <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Demo Mode
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
            SECTION B: SELECTED CLIENT WORK (With Image Upload Placeholders)
           ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Part B — Commercial Retainers
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Selected Client Work
              </h3>
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Commercial Client Operations & Retainer Frameworks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredClientWork().map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Upload Placeholder / Cover Frame */}
                  <div className="relative aspect-video rounded-2xl bg-slate-50 border border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-4 mb-5 overflow-hidden">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={project.projectTitle}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="space-y-1 text-slate-400">
                        <ImageIcon className="w-8 h-8 mx-auto text-slate-300" />
                        <span className="text-[11px] font-semibold text-slate-600 block">
                          Client Screenshot Placeholder
                        </span>
                        <span className="text-[9px] text-slate-400 block font-mono">
                          Drop in: public/images/client-work/
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 font-mono">
                      {project.marketplace}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {project.projectTitle}
                  </h4>

                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Industry: {project.clientIndustry}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.projectDescription}
                  </p>

                  {/* Work Completed Checklist Preview */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Operations Delivered:
                    </span>
                    {project.workCompleted.slice(0, 2).map((item, wIdx) => (
                      <div key={wIdx} className="flex items-start gap-1.5 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {project.statusBadge}
                  </span>

                  <button
                    onClick={() => setSelectedClientProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    <span>View Framework</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              <strong>Client Privacy & NDAs:</strong> To safeguard client commercial privacy and competitor advantages, actual account names and raw financial ledgers are withheld. Operational walkthroughs and proof of work can be presented during private discovery discussions.
            </p>
          </div>
        </div>
      </div>

      {/* Client Work Modal */}
      <ClientWorkModal
        project={selectedClientProject}
        isOpen={Boolean(selectedClientProject)}
        onClose={() => setSelectedClientProject(null)}
      />
    </section>
  );
};
