"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Search,
  Sparkles,
  MousePointerClick,
  Sliders,
  BarChart3,
  Calendar,
  ExternalLink,
  Tag,
  Percent,
  User,
  Camera,
  Globe,
  Lock,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { ProfileAvatar } from "./ui/ProfileAvatar";
import { HeroMarketplacesRibbon } from "./HeroMarketplacesRibbon";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"health" | "seo" | "research">("health");

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-white"
    >
      {/* Subtle ambient lighting & dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-b from-blue-100/50 via-sky-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Micro-Header: Availability & Identity Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-slate-50 border border-slate-200/90 text-xs sm:text-sm font-medium mb-6 shadow-xs">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/80">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personalInfo.availability.label}</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-slate-700 font-medium hidden sm:inline">
                {personalInfo.experienceYears} Proven Track Record
              </span>
            </div>

            {/* Confirmed Stage 2 & 3 Headline with Bold Editorial Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Your eBay Store,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600">
                Managed with Precision.
              </span>
            </h1>

            {/* Confirmed Supporting Text */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              {personalInfo.subheadline}
            </p>

            {/* Signature Floating CTA Pill (Inspired by world-class agency design) */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={personalInfo.social.links.email}
                className="group inline-flex items-center justify-between sm:justify-start gap-4 px-6 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-all duration-200 shadow-lg shadow-slate-900/15 hover:shadow-xl hover:shadow-slate-900/20 border border-slate-800 active:scale-98"
              >
                {/* Avatar pair */}
                <div className="flex -space-x-2 items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold text-xs ring-2 ring-slate-900">
                    AB
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center font-semibold text-[10px] ring-2 ring-slate-900">
                    +You
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold tracking-tight">
                    {personalInfo.primaryCtaText}
                  </span>
                  <MousePointerClick className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-semibold bg-white text-slate-800 hover:text-blue-700 hover:bg-slate-50 border border-slate-200/90 transition-all duration-200 shadow-xs hover:border-blue-300"
              >
                <span>View Demonstrated Work</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Availability Indicator Tag */}
            <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                UK Hours Synchronized
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">
                Direct response via <strong className="text-slate-900 font-mono">awaisbaig138@gmail.com</strong>
              </span>
            </div>

            {/* Trust Points */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>2–3 Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>eBay Cassini SEO</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Seller Standards Focus</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>UK Cut-off Adherence</span>
              </div>
            </div>
          </div>

          {/* Right Column: macOS Safari Window Console (High-End Agency Presentation) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-900/10 overflow-hidden">
              {/* macOS Window Title Bar */}
              <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200/80 flex items-center justify-between">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 border border-red-500/30 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/30 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/30 inline-block" />
                </div>

                {/* Safari Omnibar / URL bar */}
                <div className="bg-white px-3 py-1 rounded-lg border border-slate-200/90 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 max-w-[240px] truncate shadow-2xs">
                  <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="truncate">sellerhub.ebay.co.uk/console</span>
                </div>

                <div className="w-12 text-right">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                    Live
                  </span>
                </div>
              </div>

              {/* Profile Header Inside Window */}
              <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 bg-gradient-to-b from-slate-50/50 to-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    {/* Portrait Container */}
                    <ProfileAvatar size="md" />

                    <div>
                      <h2 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                        {personalInfo.name}
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                          {personalInfo.experienceYears}
                        </span>
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        {personalInfo.professionalIdentity}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {personalInfo.location.city}, {personalInfo.location.country} • UK Sellers Focus
                      </p>
                    </div>
                  </div>

                  <div className="text-right hidden sm:block">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 block">
                      Top Rated
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Tabs Header */}
              <div className="px-5 sm:px-6 pt-4 pb-2">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Live Operations Simulator
                  </span>
                  <span className="text-[10px] text-blue-600 font-medium">
                    Select mode to inspect
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("health")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "health"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Store Health
                  </button>
                  <button
                    onClick={() => setActiveTab("seo")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "seo"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Cassini SEO
                  </button>
                  <button
                    onClick={() => setActiveTab("research")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "research"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Sourcing
                  </button>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="p-5 sm:p-6 pt-2">
                {/* Tab 1: Store Health Content */}
                {activeTab === "health" && (
                  <div className="space-y-3 animate-in fade-in duration-150">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">Account Standing</div>
                          <div className="text-[11px] text-slate-500">eBay Performance Standards</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                          Top Rated Seller Target
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">&lt;0.5% Defect Threshold</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                          On-Time Dispatch Target
                        </span>
                        <span className="text-base font-bold text-slate-900 mt-0.5 block">
                          &gt;99%
                        </span>
                        <span className="text-[10px] text-emerald-600 font-medium">
                          Royal Mail Overlap
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                          Tracking Upload Benchmark
                        </span>
                        <span className="text-base font-bold text-slate-900 mt-0.5 block">
                          &gt;95%
                        </span>
                        <span className="text-[10px] text-blue-600 font-medium">
                          Within 24h Window
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-[11px] text-blue-900">
                      <strong>Standard Operating Procedure:</strong> Daily triage of awaiting dispatch orders, tracking validation, and resolution center inquiries.
                    </div>
                  </div>
                )}

                {/* Tab 2: Cassini SEO Content */}
                {activeTab === "seo" && (
                  <div className="space-y-3 animate-in fade-in duration-150 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase mb-1">
                        <span>Cassini Title Structure</span>
                        <span className="text-blue-600">79 / 80 Characters</span>
                      </div>
                      <p className="font-mono text-slate-800 text-[11px] bg-white p-2 rounded border border-slate-200">
                        Stainless Steel Garlic Press Crusher Heavy Duty Easy Clean Manual Mincer UK Stock
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                          Item Specifics
                        </span>
                        <span className="text-sm font-bold text-emerald-600 mt-0.5 block">
                          100% Populated
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Mandatory + Required
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                          Keywords Target
                        </span>
                        <span className="text-sm font-bold text-blue-600 mt-0.5 block">
                          High Intent
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Search-tested terms
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
                      Clean plain-text descriptions with bullet points formatted for eBay mobile app conversions.
                    </div>
                  </div>
                )}

                {/* Tab 3: Sourcing Content */}
                {activeTab === "research" && (
                  <div className="space-y-3 animate-in fade-in duration-150 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800 text-xs">
                          Sample Sourcing Dossier
                        </span>
                        <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">
                          ZIK & Terapeak
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5 text-center pt-1">
                        <div className="bg-white p-2 rounded-lg border border-slate-200">
                          <span className="text-[9px] text-slate-400 uppercase block">Cost</span>
                          <span className="font-bold text-slate-800 text-xs">£3.20</span>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-slate-200">
                          <span className="text-[9px] text-slate-400 uppercase block">Sell Price</span>
                          <span className="font-bold text-slate-800 text-xs">£14.99</span>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-slate-200">
                          <span className="text-[9px] text-emerald-600 uppercase font-bold block">Net Margin</span>
                          <span className="font-bold text-emerald-600 text-xs">£7.62 (50.8%)</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
                      Calculations factor in eBay 12.8% FVF, regulatory operating fee, courier packaging, and Royal Mail Large Letter postage brackets.
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Browser Bar Note */}
              <div className="bg-slate-50/80 px-5 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Illustrative Demonstration Console</span>
                <span className="font-mono text-[10px] text-slate-400">Awais Baig v2.4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Platform & Marketplace Trust Bar (Grayscale Agency Strip) */}
        <HeroMarketplacesRibbon />
      </div>
    </section>
  );
};
