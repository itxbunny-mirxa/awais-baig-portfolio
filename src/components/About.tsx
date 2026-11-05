"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Building,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  CalendarDays,
  FileCheck2,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { ProfileAvatar } from "./ui/ProfileAvatar";
import { SectionHeading } from "./ui/SectionHeading";

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"routine" | "security">("routine");

  const dailySchedule = [
    {
      time: "08:30 GMT",
      task: "Morning Dispatch Triage & Courier Sync",
      details: "Verify paid orders, cross-check stock quantities, and upload Royal Mail/Evri tracking numbers before courier cutoffs.",
    },
    {
      time: "11:00 GMT",
      task: "Customer Service & Inquiries SLA",
      details: "Answer buyer sizing/delivery questions, handle return authorization requests, and review any INR cases to prevent defect flags.",
    },
    {
      time: "14:00 GMT",
      task: "Terapeak Research & Sourcing Analysis",
      details: "Run 90-day sell-through scans, assess competitor price elasticity, and model gross/net profit margins.",
    },
    {
      time: "16:30 GMT",
      task: "Cassini SEO & Listing Optimization",
      details: "Restructure 80-char titles with top-converting UK keywords and populate 100% of missing item specifics.",
    },
    {
      time: "18:00 GMT",
      task: "Daily Activity Log & Client Sync",
      details: "Deliver clean end-of-day summary spreadsheet so you know exactly what was achieved.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="About Me"
          title="Bridging the Gap Between Operational Chaos &"
          highlight="Predictable Store Growth"
          description="A dedicated partner for UK and international eBay sellers who want structured store management, pristine listing optimization, and dependable daily execution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Professional Ethos */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base">
            <div className="p-6 rounded-3xl bg-blue-50/50 border border-blue-100/90 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                What Does an eBay Virtual Assistant Actually Do?
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Running a profitable eBay business in 2026 requires continuous attention: buyer messages require answers within hours, shipping labels must be uploaded on time, inventory levels need tight balancing, and listings require constant Cassini SEO updates.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2.5">
                My role as your dedicated Virtual Assistant is to assume complete ownership of these repetitive, time-intensive operations. You focus on brand strategy, capital allocation, and supplier relationships; I handle the operational engine that keeps your store in Top Rated standing.
              </p>
            </div>

            <div className="space-y-4 text-slate-600 text-base">
              {personalInfo.bioFull.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Interactive Routine & Security Switcher */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-4 p-1 bg-slate-100 rounded-2xl w-fit text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("routine")}
                  className={`px-4 py-2 rounded-xl transition-all ${
                    activeTab === "routine"
                      ? "bg-white text-slate-900 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Daily Operating Routine (UK Hours)
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`px-4 py-2 rounded-xl transition-all ${
                    activeTab === "security"
                      ? "bg-white text-slate-900 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  MUAA Access Security Protocol
                </button>
              </div>

              {activeTab === "routine" ? (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4 text-blue-600" />
                      Standard Daily Schedule (Synchronized with UK Business Hours)
                    </span>
                    <span>5-Stage Routine</span>
                  </div>
                  {dailySchedule.map((slot, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                          {slot.time}
                        </span>
                        <span className="font-bold text-slate-800">{slot.task}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 sm:text-right max-w-sm">
                        {slot.details}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3 animate-in fade-in duration-150 text-xs">
                  <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                    <Lock className="w-4 h-4 text-emerald-700" />
                    <span>How eBay Multi-User Account Access (MUAA) Protects You</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    You never share your eBay primary password, linked bank account, or PayPal. Through official eBay Seller Hub Multi-User Access, you grant employee delegate rights only:
                  </p>
                  <ul className="space-y-1.5 pt-1 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Permission to create and edit listing drafts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Permission to print postage labels & manage orders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero access to payouts, banking information, or password changes</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 text-sm group"
              >
                <span>Book a quick consultation call to discuss your store</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Credentials, Education & Profile Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Profile Snapshot Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-4">
              <ProfileAvatar size="md" />
              <div>
                <h3 className="text-base font-bold text-slate-900">{personalInfo.name}</h3>
                <p className="text-xs text-blue-700 font-semibold">{personalInfo.role}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {personalInfo.location.city}, {personalInfo.location.country} • {personalInfo.experienceYears} Dedicated Experience
                </p>
              </div>
            </div>

            {/* Academic & Organizational Background Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span>Education & Affiliations</span>
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  Verified Identity
                </span>
              </div>

              <div className="space-y-4">
                {personalInfo.social.education.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 text-slate-700 font-semibold text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{edu.institution}</h4>
                      <p className="text-xs text-slate-600">{edu.degree}</p>
                      <p className="text-[11px] text-slate-400">{edu.highlight}</p>
                    </div>
                  </div>
                ))}

                {/* Organization */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {personalInfo.social.organization}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {personalInfo.social.organizationRole}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Ecommerce training, SOP execution & marketplace standards
                    </p>
                  </div>
                </div>
              </div>

              {/* Geographic & Target Market Specs */}
              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Location:</span>
                  <span className="font-semibold text-slate-800">
                    {personalInfo.location.city}, {personalInfo.location.country}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Primary Market:</span>
                  <span className="font-semibold text-blue-700">United Kingdom (eBay.co.uk)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Timezone:</span>
                  <span className="font-semibold text-slate-800">{personalInfo.location.timezone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Working Hours:</span>
                  <span className="font-semibold text-slate-800">Direct UK BST/GMT Overlap</span>
                </div>
              </div>
            </div>

            {/* Editable Profile Notice */}
            <div className="p-5 rounded-2xl bg-white border border-dashed border-slate-300 text-xs text-slate-500 flex items-start gap-3 shadow-2xs">
              <Sparkles className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-800 block">
                  Centralized Profile Configuration
                </span>
                <p className="mt-0.5">
                  All personal details, upcoming certifications, or custom bios are managed via{" "}
                  <code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded font-mono">
                    src/data/portfolioData.ts
                  </code>
                  , allowing instantaneous updates at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
