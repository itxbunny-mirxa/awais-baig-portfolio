"use client";

import React from "react";
import {
  Calendar,
  Award,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { experienceMilestones, personalInfo } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white relative border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Professional Track Record"
          title="2–3 Years of Dedicated"
          highlight="eBay Virtual Assistance Experience"
          description="A structured progression of marketplace administration, Cassini search engineering, and dependable end-to-end store management for UK and international eCommerce sellers."
        />

        {/* Experience Timeline Grid */}
        <div className="relative mt-12">
          {/* Central connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-slate-200 -translate-x-1/2" />

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
                    <div className="bg-slate-50/70 p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
                          <Calendar className="w-3.5 h-3.5" />
                          {milestone.period}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                          {milestone.focusArea}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {milestone.roleTitle}
                      </h3>
                      <p className="text-xs font-semibold text-blue-700 mt-1">
                        {milestone.subtitle}
                      </p>

                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Highlights checklist */}
                      <ul className="mt-5 pt-4 border-t border-slate-200/80 space-y-2">
                        {milestone.highlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="text-xs text-slate-700 flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node Center Badge */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border-4 border-blue-100 text-blue-600 items-center justify-center font-bold text-sm shadow-md shrink-0 z-10">
                    0{idx + 1}
                  </div>

                  {/* Empty side for alternating balance */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Summary Strip */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Proven UK Marketplace Competence</span>
            </div>
            <h4 className="text-xl font-bold text-white">
              Ready to delegate your daily store operations?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              From day-to-day order triage to high-converting listing revamps, bring 2–3 years of specialized eBay expertise to your store.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
