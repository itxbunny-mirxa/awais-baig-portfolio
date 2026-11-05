import React from "react";
import {
  Clock,
  ShieldCheck,
  FolderKanban,
  Users2,
  Award,
  CheckCircle,
  XCircle,
  Sparkles,
} from "lucide-react";
import { whyWorkWithMeData } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      case "FolderKanban":
        return <FolderKanban className="w-5 h-5" />;
      case "Users2":
        return <Users2 className="w-5 h-5" />;
      case "Award":
        return <Award className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  const comparisonData = [
    {
      feature: "Working Hours & Response Time",
      freelancer: "Unpredictable hours, replies delayed by days",
      awais: "Active UK business hours overlap with prompt same-day communication",
    },
    {
      feature: "Account Security Protocol",
      freelancer: "Demands master password, OTPs, or risky logins",
      awais: "Strict eBay Multi-User Account Access (MUAA) delegate permissions only",
    },
    {
      feature: "Listing Optimization Standards",
      freelancer: "Generic buzzwords, keyword stuffing, incomplete attributes",
      awais: "Formulaic 80-char high-intent titles, 100% populated item specifics",
    },
    {
      feature: "Account Health & Defect Prevention",
      freelancer: "Ignores late tracking flags, risk of below-standard marks",
      awais: "Proactive defect prevention and on-time tracking upload monitoring",
    },
    {
      feature: "Task Transparency & Reporting",
      freelancer: "No documentation of what was done each day",
      awais: "SOP-driven task execution with daily Google Sheets / Drive activity logs",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Why Work With Me"
          title="Built on Reliability, Precision &"
          highlight="Long-Term Account Health"
          description="Hiring a virtual assistant is about peace of mind. Here is what you can depend on every single day we collaborate on your eBay store."
        />

        {/* 5 Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyWorkWithMeData.map((item, index) => (
            <div
              key={index}
              className={`p-7 rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between ${
                index === 0 ? "lg:col-span-2 bg-gradient-to-br from-blue-50/40 via-white to-white" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 border border-blue-100">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
                <CheckCircle className="w-4 h-4 shrink-0 text-blue-600" />
                <span>{item.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-Side Comparison Table: Freelancer vs Awais Baig */}
        <div className="mt-16 bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              The Professional Difference
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              General Remote Freelancer vs. Awais Baig
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Why serious UK eBay merchants choose dedicated virtual assistance over random ad-hoc gigs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 text-slate-700 font-bold text-[11px] uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Operational Standard</th>
                  <th className="py-3.5 px-4 sm:px-6 text-slate-500">Generic Freelancer</th>
                  <th className="py-3.5 px-4 sm:px-6 text-blue-700 bg-blue-50/60 font-bold">
                    Awais Baig (eBay Specialist)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-800">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.freelancer}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900 bg-blue-50/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-900">{row.awais}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
