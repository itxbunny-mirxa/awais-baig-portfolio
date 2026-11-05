"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
  Sliders,
  Layers,
  Clock,
  ChevronRight,
  Lock,
  Boxes,
  HelpCircle,
} from "lucide-react";
import { personalInfo, servicesData, faqData } from "@/data/portfolioData";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { StorefrontIllustration } from "@/components/illustrations/StorefrontIllustration";
import { HeroMarketplacesRibbon } from "@/components/HeroMarketplacesRibbon";

export default function Home() {
  const featuredServices = servicesData.slice(0, 3);
  const featuredFaqs = faqData.slice(0, 4);

  return (
    <div className="relative min-h-screen bg-[#F7F7F2] text-[#111827]">
      {/* =========================================================================
          HERO SECTION — Editorial Light Minimalist Identity
          ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#E5E5DC]">
        {/* Ambient background decoration */}
        <div className="absolute inset-0 bg-warm-dots opacity-40 pointer-events-none" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-[#6558F5]/10 via-[#54D6C8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Credibility & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Availability & Location Pill */}
              <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-[#FFFFFF] border border-[#E5E5DC] text-xs font-semibold mb-6 shadow-xs">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6FAF7] text-[#0D9488] font-bold border border-[#54D6C8]/40">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#54D6C8] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]" />
                  </span>
                  <span>{personalInfo.availability.label}</span>
                </span>
                <span className="text-[#9CA3AF] hidden sm:inline">•</span>
                <span className="text-[#4B5563] hidden sm:inline">
                  UK Working Hours Synchronized
                </span>
              </div>

              {/* Bold Editorial Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111827] leading-[1.08]">
                Your eBay Store,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6558F5] via-[#5346E8] to-[#54D6C8]">
                  Managed with Precision.
                </span>
              </h1>

              {/* Polished British English Supporting Narrative */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#4B5563] leading-relaxed font-normal max-w-2xl">
                Helping UK and international eCommerce businesses eliminate daily operational friction, discover profitable inventory, and engineer high-ranking Cassini listings with complete account security.
              </p>

              {/* Signature CTAs (Inspired by World-Class Agency Direction) */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-between sm:justify-start gap-4 px-7 py-4 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white transition-all duration-200 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 border border-[#111827] active:scale-98"
                >
                  <div className="flex -space-x-2 items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6558F5] to-[#54D6C8] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#111827]">
                      AB
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#374151] text-slate-200 flex items-center justify-center font-semibold text-[10px] ring-2 ring-[#111827]">
                      +You
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold tracking-tight">
                      Discuss Your Store
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#54D6C8] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-semibold bg-[#FFFFFF] text-[#111827] hover:text-[#6558F5] hover:bg-[#F7F7F2] border border-[#E5E5DC] hover:border-[#6558F5]/40 transition-all duration-200 shadow-xs"
                >
                  <span>Explore Portfolio & Demos</span>
                  <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-[#E5E5DC] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#4B5563]">
                <div className="flex items-center gap-1.5 font-semibold text-[#111827]">
                  <CheckCircle2 className="w-4 h-4 text-[#6558F5] shrink-0" />
                  <span>2–3 Years Track Record</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-[#111827]">
                  <CheckCircle2 className="w-4 h-4 text-[#6558F5] shrink-0" />
                  <span>Cassini SEO Algorithm</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-[#111827]">
                  <CheckCircle2 className="w-4 h-4 text-[#6558F5] shrink-0" />
                  <span>eBay MUAA Multi-User Access</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-[#111827]">
                  <CheckCircle2 className="w-4 h-4 text-[#6558F5] shrink-0" />
                  <span>Royal Mail Cut-off Sync</span>
                </div>
              </div>
            </div>

            {/* Right Column: Original Boutique Storefront Illustration & Identity Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-[#FFFFFF] rounded-3xl border border-[#E5E5DC] shadow-xl shadow-black/5 overflow-hidden p-6 sm:p-7">
                {/* Storefront Hero Illustration */}
                <div className="rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] p-4 flex items-center justify-center">
                  <StorefrontIllustration className="w-full max-w-[340px] h-auto drop-shadow-sm" />
                </div>

                {/* Identity Snapshot Card */}
                <div className="mt-5 pt-5 border-t border-[#E5E5DC] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <ProfileAvatar size="md" />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm text-[#111827]">Awais Baig</span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#EEF0FE] text-[#6558F5]">
                          eBay VA
                        </span>
                      </div>
                      <p className="text-xs text-[#6B7280]">
                        Multan, Pakistan • BZU Multan Graduate
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#6558F5] hover:text-[#5346E8] bg-[#EEF0FE] hover:bg-[#6558F5]/10 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <span>About Me</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MARKETPLACE & ECOSYSTEM RIBBON
          ========================================================================= */}
      <HeroMarketplacesRibbon />

      {/* =========================================================================
          3 CORE VALUE PILLARS (Why Choose Awais Baig)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5DC] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F2] border border-[#E5E5DC] shadow-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6558F5]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#6558F5]">
                Why Work With Me
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111827] leading-tight">
              Three Pillars of Dependable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6558F5] to-[#54D6C8]">
                Store Growth
              </span>
            </h2>
            <p className="mt-4 text-base text-[#4B5563] leading-relaxed">
              No exaggerated revenue promises or arbitrary claims. Just methodical daily execution, verified tooling, and high-standard marketplace compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="rounded-3xl bg-[#F7F7F2] p-8 border border-[#E5E5DC] hover:border-[#6558F5]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EEF0FE] text-[#6558F5] flex items-center justify-center font-bold mb-6 group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  Operational Rigour & Cut-Off Discipline
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Rigorous adherence to agreed Royal Mail and carrier dispatch cut-offs. Every morning begins with order triage, tracking number synchronization, and rapid buyer inquiry handling.
                </p>
              </div>
              <ul className="mt-6 pt-6 border-t border-[#E5E5DC] space-y-2 text-xs font-semibold text-[#111827]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Prompt carrier tracking upload</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Proactive buyer messaging SLA</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-3xl bg-[#F7F7F2] p-8 border border-[#E5E5DC] hover:border-[#54D6C8]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E6FAF7] text-[#0D9488] flex items-center justify-center font-bold mb-6 group-hover:scale-105 transition-transform">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  Data-Backed Sourcing & Margin Protection
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Product hunting guided by Terapeak 90-day sell-through scans, ZIK Analytics trend lines, and strict fee deductions (eBay final value fees, VAT, shipping) before recommending inventory.
                </p>
              </div>
              <ul className="mt-6 pt-6 border-t border-[#E5E5DC] space-y-2 text-xs font-semibold text-[#111827]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Calculated net profit margins</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Competition & saturation vetting</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-3xl bg-[#F7F7F2] p-8 border border-[#E5E5DC] hover:border-[#FFB86B]/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FEF6EB] text-[#D97706] flex items-center justify-center font-bold mb-6 group-hover:scale-105 transition-transform">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  Cassini Search Engine Engineering
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Crafting 80-character titles structured with high-intent keywords buyers search for. Populating 100% of required and recommended item specifics so listings qualify for eBay buyer filters.
                </p>
              </div>
              <ul className="mt-6 pt-6 border-t border-[#E5E5DC] space-y-2 text-xs font-semibold text-[#111827]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Zero character waste in titles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Complete item specifics coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SELECTED FEATURED SERVICES (Curated Preview)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F7F2] border-b border-[#E5E5DC] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs mb-3">
                <Boxes className="w-3.5 h-3.5 text-[#6558F5]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#6558F5]">
                  Core Capabilities
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111827]">
                Featured Services for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6558F5] to-[#54D6C8]">
                  eBay Sellers
                </span>
              </h2>
              <p className="mt-2 text-base text-[#4B5563] max-w-xl">
                Comprehensive support across the full lifecycle of your eBay account, from initial product validation to daily fulfillment.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#111827] text-[#111827] hover:text-white border border-[#E5E5DC] font-bold text-sm transition-all duration-200 shadow-xs group shrink-0"
            >
              <span>View All 9 Services & Deliverables</span>
              <ArrowRight className="w-4 h-4 text-[#6558F5] group-hover:text-[#54D6C8] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-[#FFFFFF] rounded-3xl p-7 border border-[#E5E5DC] shadow-xs hover:shadow-xl hover:border-[#6558F5]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#6558F5] bg-[#EEF0FE] px-2.5 py-1 rounded-full">
                      Service 0{index + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#6B7280]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111827] mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#111827] font-medium">
                      {service.fullDeliverables.slice(0, 3).map((item: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E5DC]">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[#6558F5] hover:text-[#5346E8] group"
                  >
                    <span>Read full deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE DEMONSTRATION TEASER
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5DC] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F2] border border-[#E5E5DC] shadow-xs mb-4">
                <Layers className="w-3.5 h-3.5 text-[#6558F5]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#6558F5]">
                  Interactive Showcase
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111827] leading-tight">
                Inspect 5 Live{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6558F5] to-[#54D6C8]">
                  Demonstration Dashboards
                </span>
              </h2>
              <p className="mt-4 text-base text-[#4B5563] leading-relaxed">
                Experience how I organize listings, evaluate product demand, calculate margins, and protect eBay seller health metrics in real time.
              </p>

              <div className="mt-6 space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#111827]">
                    1. eBay Cassini Listing Optimization
                  </span>
                  <span className="text-[11px] font-mono text-[#6558F5] bg-[#EEF0FE] px-2 py-0.5 rounded">
                    80-char counter
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#111827]">
                    2. Product Research & Sourcing Table
                  </span>
                  <span className="text-[11px] font-mono text-[#0D9488] bg-[#E6FAF7] px-2 py-0.5 rounded">
                    Fee calculator
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#111827]">
                    3. Daily Store Operations & Health Console
                  </span>
                  <span className="text-[11px] font-mono text-[#D97706] bg-[#FEF6EB] px-2 py-0.5 rounded">
                    Cut-off tracker
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white font-bold text-sm shadow-md transition-all duration-200"
                >
                  <span>Launch Live Demonstrations</span>
                  <ArrowRight className="w-4 h-4 text-[#54D6C8]" />
                </Link>
                <span className="text-xs text-[#6B7280]">
                  Clearly labelled illustrative examples
                </span>
              </div>
            </div>

            {/* Illustration Card Preview */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#F7F7F2] border border-[#E5E5DC] p-6 shadow-xl relative overflow-hidden">
                <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5E5DC] p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5DC] mb-4 text-xs">
                    <span className="font-bold text-[#111827] flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-[#0D9488]" />
                      Listing Optimization Console
                    </span>
                    <span className="font-mono text-[10px] text-[#6558F5] bg-[#EEF0FE] px-2 py-0.5 rounded font-bold">
                      Interactive Preview
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#9CA3AF]">
                        Before Optimization (Generic & Unranked):
                      </span>
                      <div className="p-2.5 rounded-xl bg-red-50/70 border border-red-200/60 text-red-900 font-mono text-[11px] mt-1">
                        Men Casual Shoes Size 9 New Black Sneakers Running Sport
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#0D9488]">
                        After Optimization (Cassini High-Rank Structure):
                      </span>
                      <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-emerald-950 font-mono text-[11px] mt-1 font-semibold">
                        Mens Waterproof Running Shoes Breathable Gym Trainers Lightweight Walking Sneaker UK 9
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#4B5563]">
                      <span>Character Usage: <strong className="text-[#111827]">79 / 80</strong> (98.7% intent efficiency)</span>
                      <span className="text-[#0D9488] font-bold">✓ 100% Item Specifics</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Link
                    href="/portfolio"
                    className="text-xs font-bold text-[#6558F5] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Click to interact with full title comparison & research calculator</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ HIGHLIGHTS
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F7F2] border-b border-[#E5E5DC] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#6558F5]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#6558F5]">
                Common Questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111827]">
              Clear Answers for Prospective Clients
            </h2>
            <p className="mt-3 text-base text-[#4B5563]">
              Transparency on working hours, security, tools, and collaboration.
            </p>
          </div>

          <div className="space-y-4">
            {featuredFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#FFFFFF] border border-[#E5E5DC] p-6 shadow-xs hover:border-[#6558F5]/30 transition-all duration-200"
              >
                <h3 className="text-base font-bold text-[#111827] mb-2 flex items-start gap-2.5">
                  <span className="text-[#6558F5] font-mono text-sm">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6558F5] hover:text-[#5346E8]"
            >
              <span>Have a specific question about your store setup? Send an inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CONVERSION BANNER (World-Class Editorial Presentation)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#111827] text-white relative overflow-hidden">
        {/* Soft Violet/Aqua Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-br from-[#6558F5]/25 to-[#54D6C8]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F2937] border border-[#374151] shadow-xs mb-6">
            <span className="h-2 w-2 rounded-full bg-[#54D6C8] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#54D6C8]">
              Ready to Collaborate
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Ready to Run Your eBay Store with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6558F5] via-[#54D6C8] to-[#54D6C8]">
              Effortless Precision?
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Let&apos;s audit your listings, protect your Seller Standards, and establish an operational rhythm that frees you to focus on growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#6558F5] hover:bg-[#5346E8] text-white font-bold text-base shadow-lg shadow-[#6558F5]/25 transition-all duration-200 active:scale-98"
            >
              <span>Get in Touch for a Store Review</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-[#1F2937] text-slate-200 hover:text-white border border-[#374151] font-semibold text-base transition-colors"
            >
              <span>Explore All 9 Services</span>
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-[#1F2937] flex flex-wrap items-center justify-center gap-6 text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#54D6C8]" />
              Direct email: <strong className="text-white font-mono">awaisbaig138@gmail.com</strong>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#54D6C8]" />
              Response turnaround within 4 business hours
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
