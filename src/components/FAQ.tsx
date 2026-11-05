"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About"
          highlight="Partnering With an eBay VA"
          description="Clear answers regarding multi-user security, communication workflows, UK business hours overlap, and getting started."
        />

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-700" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
