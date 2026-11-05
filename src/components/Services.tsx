"use client";

import React, { useState } from "react";
import {
  Store,
  TrendingUp,
  FileSpreadsheet,
  Sparkles,
  Search,
  PackageCheck,
  Boxes,
  BarChart3,
  Truck,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Clock,
  Layers,
  Zap,
} from "lucide-react";
import { servicesData, personalInfo } from "@/data/portfolioData";
import { ServiceItem } from "@/types/portfolio";
import { SectionHeading } from "./ui/SectionHeading";
import { ServiceModal } from "./ServiceModal";

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTier, setSelectedTier] = useState<"starter" | "pro" | "project">("starter");

  const categories = [
    { id: "all", label: "All 9 Services" },
    { id: "operations", label: "Store & Orders" },
    { id: "listing", label: "Listing & Optimisation" },
    { id: "seo", label: "eBay SEO" },
    { id: "advanced", label: "Dropshipping & Private Label" },
  ];

  const getFilteredServices = () => {
    if (selectedCategory === "all") return servicesData;
    if (selectedCategory === "operations") {
      return servicesData.filter((s) =>
        ["store-management", "order-management", "inventory-management"].includes(s.id)
      );
    }
    if (selectedCategory === "listing") {
      return servicesData.filter((s) =>
        ["listing-creation", "listing-optimization"].includes(s.id)
      );
    }
    if (selectedCategory === "seo") {
      return servicesData.filter((s) =>
        ["ebay-seo", "product-research"].includes(s.id)
      );
    }
    if (selectedCategory === "advanced") {
      return servicesData.filter((s) =>
        ["dropshipping-support", "private-label-support"].includes(s.id)
      );
    }
    return servicesData;
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Store":
        return <Store className="w-5 h-5" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Search":
        return <Search className="w-5 h-5" />;
      case "PackageCheck":
        return <PackageCheck className="w-5 h-5" />;
      case "Boxes":
        return <Boxes className="w-5 h-5" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5" />;
      case "Truck":
        return <Truck className="w-5 h-5" />;
      case "BadgeCheck":
        return <BadgeCheck className="w-5 h-5" />;
      default:
        return <Store className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50/50 relative border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Complete Service Catalogue"
          title="Nine Specialized Solutions for"
          highlight="High-Performing eBay Stores"
          description="Tailored virtual assistant services covering daily storefront operations, Cassini search engine optimisation, deep product research, dropshipping fulfillment, and private label support."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 9 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredServices().map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Turnaround badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 border border-blue-100">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-mono">
                    {service.turnaroundTime.includes("Daily") ? "Daily Retainer" : service.turnaroundTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Features Bullets */}
                <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="text-xs text-slate-600 flex items-start gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More & Contact CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 group/btn"
                >
                  <span>Learn More & Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`#contact`}
                  className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-colors"
                >
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Store Retainer Estimator Widget */}
        <div className="mt-16 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/70 mb-2">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                Tailored Virtual Assistance Packages
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                How Much Support Does Your Store Need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Choose your current store scale below to see recommended operational coverage and turnaround protocols.
              </p>
            </div>

            {/* Tier Selector */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl text-xs font-bold shrink-0">
              <button
                onClick={() => setSelectedTier("starter")}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  selectedTier === "starter"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Growing Store
              </button>
              <button
                onClick={() => setSelectedTier("pro")}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  selectedTier === "pro"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Scaling Store
              </button>
              <button
                onClick={() => setSelectedTier("project")}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  selectedTier === "project"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Catalog Revamp
              </button>
            </div>
          </div>

          {/* Tier Details Display */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Typical Store Scope
              </span>
              <p className="font-bold text-slate-900 text-sm">
                {selectedTier === "starter" && "30–150 Active Listings"}
                {selectedTier === "pro" && "150–800+ Active Listings"}
                {selectedTier === "project" && "Complete Storefront Overhaul"}
              </p>
              <p className="text-slate-500 mt-1">
                {selectedTier === "starter" && "5–20 daily dispatches, regular inquiry volume"}
                {selectedTier === "pro" && "Multi-variation apparel, dropshipping, or home goods"}
                {selectedTier === "project" && "Fixing stagnant listings, Cassini SEO & titles"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Recommended VA Schedule
              </span>
              <p className="font-bold text-blue-700 text-sm">
                {selectedTier === "starter" && "Part-Time Retainer (15–20 hrs / wk)"}
                {selectedTier === "pro" && "Dedicated Retainer (30–40 hrs / wk)"}
                {selectedTier === "project" && "Milestone-Based Batch Work"}
              </p>
              <p className="text-slate-500 mt-1">
                {selectedTier === "starter" && "Morning dispatch + midday messages"}
                {selectedTier === "pro" && "Full daily coverage across UK working hours"}
                {selectedTier === "project" && "1–2 week intensive optimization sprint"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/70 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 block mb-1">
                  Ready to Discuss Terms?
                </span>
                <p className="text-xs text-blue-950 font-medium">
                  Connect via email to review custom retainers tailored to your exact listing count and store requirements.
                </p>
              </div>
              <a
                href={personalInfo.social.links.email}
                className="mt-3 inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl font-bold text-xs bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <span>Discuss Retainer via Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
