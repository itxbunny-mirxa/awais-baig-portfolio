import React from "react";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  Clock,
} from "lucide-react";
import { experienceMilestones } from "@/data/portfolioData";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen bg-[#F7F7F2] text-[#111827]">
      <PageHeader
        badge="Professional Track Record"
        title="2–3 Years of Dedicated"
        highlight="eBay Virtual Assistance Experience"
        description="A structured progression of marketplace administration, Cassini search engineering, and dependable end-to-end store management for UK and international eCommerce sellers."
        currentPage="Experience"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Editorial Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
            Progression from Store Administration to Strategic Management
          </h2>
          <p className="mt-3 text-base text-[#4B5563] leading-relaxed">
            Over the past 2–3 years, I have moved systematically through every operational layer of eBay. From handling daily dispatch cutoffs to mastering Cassini keyword weights and managing multi-account seller portfolios.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-[#E5E5DC] -translate-x-1/2" />

          <div className="space-y-12 relative">
            {experienceMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E5DC] shadow-xs hover:shadow-xl hover:border-[#6558F5]/40 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EEF0FE] text-[#6558F5] border border-[#6558F5]/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {milestone.period}
                        </span>

                        <span className="text-xs font-bold text-[#6B7280]">
                          Milestone 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#111827] mb-1">
                        {milestone.roleTitle}
                      </h3>
                      <p className="text-xs font-semibold text-[#6558F5] mb-4">
                        {milestone.subtitle}
                      </p>

                      <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                        {milestone.description}
                      </p>

                      {/* Focus Area Pill */}
                      <div className="mb-6 p-3 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] block mb-0.5">
                          Primary Focus Area
                        </span>
                        <span className="text-xs font-bold text-[#111827]">
                          {milestone.focusArea}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                          Key Achievements & Responsibilities
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#111827]">
                          {milestone.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Center Node Indicator */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#FFFFFF] border-4 border-[#F7F7F2] shadow-md items-center justify-center shrink-0 z-10 text-[#6558F5] ring-2 ring-[#6558F5]/40 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>

                  {/* Empty Spacer Column for Symmetry */}
                  <div className="w-full lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Operating Security & Timezone Alignment Box */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6FAF7] text-[#0D9488] text-xs font-bold mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span>Operational Discipline</span>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-3">
                Built Around UK Seller Workflows
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Operating from Multan, Pakistan with daily hours synchronized directly with the UK business day. You receive updates when you wake up, midday buyer inquiries are answered within hours, and dispatch cutoffs are met reliably.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-between text-xs">
                <span className="font-bold text-[#111827]">Account Security</span>
                <span className="font-semibold text-[#0D9488]">eBay MUAA Multi-User Access</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-between text-xs">
                <span className="font-bold text-[#111827]">Communication</span>
                <span className="font-semibold text-[#6558F5]">Email & Structured Daily Spreadsheets</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-between text-xs">
                <span className="font-bold text-[#111827]">Integrity Promise</span>
                <span className="font-semibold text-[#111827]">Strict Non-Fabrication of Numbers</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E5E5DC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#6B7280]">
              Ready to explore working together on a daily retainer or project basis?
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white text-xs font-bold transition-colors"
            >
              <span>Get in Touch with Awais</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#54D6C8]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
