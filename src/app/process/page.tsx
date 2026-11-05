import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  Search,
  Cog,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { workProcessData } from "@/data/portfolioData";
import { PageHeader } from "@/components/ui/PageHeader";
import { ParcelDispatchIllustration } from "@/components/illustrations/ParcelDispatchIllustration";
import { InventoryRackIllustration } from "@/components/illustrations/InventoryRackIllustration";

export default function ProcessPage() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-[#6558F5]" />;
      case 1:
        return <Search className="w-5 h-5 text-[#0D9488]" />;
      case 2:
        return <Cog className="w-5 h-5 text-[#D97706]" />;
      case 3:
        return <Headphones className="w-5 h-5 text-[#6558F5]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#6558F5]" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F7F7F2] text-[#111827]">
      <PageHeader
        badge="Operating Methodology & SOPs"
        title="A Structured 4-Step Journey to"
        highlight="Effortless Store Operations"
        description="From initial discovery and secure access setup to daily operational execution and weekly performance reporting, every phase is documented and transparent."
        currentPage="Process"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Visual Workflow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {workProcessData.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-3xl p-7 border border-[#E5E5DC] shadow-xs hover:shadow-xl hover:border-[#6558F5]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-[#E5E5DC] group-hover:text-[#6558F5]/30 transition-colors font-mono">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6558F5] block mb-1">
                  Phase {step.stepNumber}
                </span>

                <h3 className="text-lg font-bold text-[#111827] mb-1 group-hover:text-[#6558F5] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#6B7280] mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Key Activities */}
              <div className="pt-4 border-t border-[#E5E5DC]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] block mb-2">
                  Key Milestones
                </span>
                <ul className="space-y-1.5 text-xs text-[#111827]">
                  {step.keyActivities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                      <span className="leading-tight text-[11px]">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            FEATURED ILLUSTRATIONS & DEEP-DIVE SOPs
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-20">
          {/* Dispatch Discipline Illustration Card */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#E5E5DC] shadow-xs flex flex-col justify-between">
            <div>
              <div className="rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] p-6 mb-6 flex items-center justify-center">
                <ParcelDispatchIllustration className="w-full max-w-[280px] h-auto drop-shadow-sm" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EEF0FE] text-[#6558F5] mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span>Logistics Discipline</span>
              </div>

              <h3 className="text-xl font-bold text-[#111827] mb-2">
                Royal Mail & Evri Dispatch Cut-Off Execution
              </h3>

              <p className="text-sm text-[#4B5563] leading-relaxed">
                Late shipment defects severely harm eBay search ranking and seller status. Every morning shift starts with order queue triage, verification of cleared payments, and strict upload of tracking barcodes before scheduled postal collections.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E5E5DC] flex items-center justify-between text-xs font-semibold text-[#111827]">
              <span>Status: Synchronized with UK Cutoffs</span>
              <span className="text-[#0D9488]">Zero Tracking Delays</span>
            </div>
          </div>

          {/* Inventory Synchronization Illustration Card */}
          <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#E5E5DC] shadow-xs flex flex-col justify-between">
            <div>
              <div className="rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] p-6 mb-6 flex items-center justify-center">
                <InventoryRackIllustration className="w-full max-w-[280px] h-auto drop-shadow-sm" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E6FAF7] text-[#0D9488] mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Inventory Control</span>
              </div>

              <h3 className="text-xl font-bold text-[#111827] mb-2">
                Multi-Channel Stock Reconciliation
              </h3>

              <p className="text-sm text-[#4B5563] leading-relaxed">
                Stockouts lead to transaction cancellation defects. We establish threshold safety buffers and structured daily inventory reconciliation sheets to catch low-stock SKUs before a customer makes an unfillable order.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E5E5DC] flex items-center justify-between text-xs font-semibold text-[#111827]">
              <span>Tracking: Shared Daily Spreadsheets</span>
              <span className="text-[#0D9488]">Proactive Buffer Alerts</span>
            </div>
          </div>
        </div>

        {/* Communication & Reporting SLA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-[#111827] mb-3">
              Transparent Communication & Daily Activity Logs
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
              You will never wonder what your Virtual Assistant worked on today. At the close of every shift, an end-of-day summary spreadsheet is delivered with exact counts of dispatched orders, buyer messages resolved, new listings created, and inventory alerts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-[#111827] mb-8">
              <div className="p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC]">
                <strong className="block text-[#6558F5] mb-1">Morning Handover</strong>
                <span>Urgent buyer inquiries and dispatch queue status.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC]">
                <strong className="block text-[#0D9488] mb-1">Midday Sync</strong>
                <span>Tracking numbers loaded and inventory reconciliations.</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC]">
                <strong className="block text-[#D97706] mb-1">Evening EOD Sheet</strong>
                <span>Full summary spreadsheet of daily actions and notes.</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white text-xs font-bold transition-colors"
            >
              <span>Initiate Step 01: Initial Discussion</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#54D6C8]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
