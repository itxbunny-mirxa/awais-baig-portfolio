import React from "react";
import {
  MessageSquare,
  Search,
  Cog,
  Headphones,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { workProcessData } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

export const WorkProcess: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5" />;
      case 1:
        return <Search className="w-5 h-5" />;
      case 2:
        return <Cog className="w-5 h-5" />;
      case 3:
        return <Headphones className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-slate-50/50 relative border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="How We Work"
          title="A Structured 4-Step Journey to"
          highlight="Effortless Store Operations"
          description="From first conversation to daily operational rhythm, every phase is transparent, documented, and aligned with your store's commercial goals."
        />

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workProcessData.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors font-mono">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-blue-700 font-semibold mt-0.5">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Key Activities */}
                <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  {step.keyActivities.map((act, aIdx) => (
                    <li
                      key={aIdx}
                      className="text-xs text-slate-600 flex items-start gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tangible Deliverable Pill */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Phase Deliverable:
                </div>
                <div className="text-xs font-semibold text-slate-800 bg-slate-50 p-2 rounded-xl border border-slate-200/70">
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Start Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
          >
            <span>Start with Step 01: Initial Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
