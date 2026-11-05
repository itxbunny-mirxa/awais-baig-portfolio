"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Boxes,
  Store,
  TrendingUp,
  FileSpreadsheet,
  Sparkles,
  Search,
  PackageCheck,
  BarChart3,
  Truck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sliders,
  Clock,
  Layers,
  ChevronRight,
  Zap,
} from "lucide-react";
import { servicesData, personalInfo } from "@/data/portfolioData";
import { ServiceItem } from "@/types/portfolio";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All 9 Services" },
    { id: "operations", label: "Store & Order Operations" },
    { id: "listing", label: "Listing Creation & SEO" },
    { id: "advanced", label: "Dropshipping & Growth" },
  ];

  const getFilteredServices = () => {
    if (selectedCategory === "all") return servicesData;
    if (selectedCategory === "operations") {
      return servicesData.filter((s) =>
        ["store-management", "order-management", "inventory-management", "customer-service"].includes(s.id)
      );
    }
    if (selectedCategory === "listing") {
      return servicesData.filter((s) =>
        ["listing-creation", "listing-optimization", "ebay-seo"].includes(s.id)
      );
    }
    if (selectedCategory === "advanced") {
      return servicesData.filter((s) =>
        ["product-research", "dropshipping-management", "competitor-analysis"].includes(s.id)
      );
    }
    return servicesData;
  };

  const filteredServices = getFilteredServices();

  return (
    <div className="relative min-h-screen bg-[#F7F7F2] text-[#111827]">
      <PageHeader
        badge="Service Catalogue"
        title="9 Specialised Services to Protect & Scale Your"
        highlight="eBay Store"
        description="From morning dispatch triage and Cassini SEO to profit margin analysis and customer messaging, discover end-to-end operational support for your eCommerce store."
        currentPage="Services"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#111827] text-white shadow-md shadow-black/10 scale-102"
                    : "bg-[#FFFFFF] text-[#4B5563] hover:text-[#111827] border border-[#E5E5DC] hover:border-[#6558F5]/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-[#FFFFFF] rounded-3xl p-7 border border-[#E5E5DC] shadow-xs hover:shadow-xl hover:border-[#6558F5]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag & ID */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#6558F5] bg-[#EEF0FE] px-3 py-1 rounded-full">
                    Service 0{index + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#6B7280]">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#6558F5] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Deliverables Checklist */}
                <div className="mb-6 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                    Documented Deliverables
                  </span>
                  <ul className="space-y-2 text-xs text-[#111827]">
                    {service.fullDeliverables.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Value */}
                <div className="p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6558F5] block mb-1">
                    Commercial Value
                  </span>
                  <p className="text-xs text-[#374151] font-medium leading-relaxed">
                    {service.clientBenefit}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-[#E5E5DC]">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#F7F7F2] hover:bg-[#111827] text-[#111827] hover:text-white font-bold text-xs border border-[#E5E5DC] transition-all duration-200 group-hover:border-[#6558F5]/30"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6558F5] group-hover:text-[#54D6C8] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Models Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FE] text-[#6558F5] text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flexible Collaboration</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              How We Can Structure Our Partnership
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
              Every seller has different requirements. Whether you require a full-time store manager handling orders 5 days a week, or a focused sprint to optimize 50 stagnant listings, we adapt to your workflow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC]">
                <span className="font-bold text-[#111827] block text-sm mb-1">
                  1. Dedicated Daily VA
                </span>
                <p className="text-[#6B7280]">
                  Ongoing daily store management: order dispatch triage, customer inquiries, and stock synchronization during UK hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC]">
                <span className="font-bold text-[#111827] block text-sm mb-1">
                  2. Listing Optimization Sprint
                </span>
                <p className="text-[#6B7280]">
                  One-off batch restructuring of existing listings: 80-char Cassini titles, item specifics completion, and competitive pricing analysis.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC]">
                <span className="font-bold text-[#111827] block text-sm mb-1">
                  3. Sourcing & Research Project
                </span>
                <p className="text-[#6B7280]">
                  Deep-dive product hunting using Terapeak and ZIK Analytics with delivered spreadsheets and calculated margins.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white font-bold text-xs transition-colors"
              >
                <span>Discuss Your Store Requirements</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#54D6C8]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
