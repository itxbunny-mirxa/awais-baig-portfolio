import React from "react";
import { Users, UserCheck, Building2, MapPin, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export const ProfileStats: React.FC = () => {
  const stats = [
    {
      value: personalInfo.social.followersCount,
      label: personalInfo.social.followersLabel,
      sublabel: "Active community network",
      icon: Users,
      badge: "Community",
    },
    {
      value: personalInfo.social.followingCount,
      label: personalInfo.social.followingLabel,
      sublabel: "Industry connections & peers",
      icon: UserCheck,
      badge: "Network",
    },
    {
      value: personalInfo.social.organization,
      label: "Ecommerce Community",
      sublabel: personalInfo.social.organizationRole,
      icon: Building2,
      badge: "Ecosystem",
    },
    {
      value: `${personalInfo.location.city}, PK`,
      label: "Operational Base",
      sublabel: "Dedicated UK & global time overlap",
      icon: MapPin,
      badge: "Global Reach",
    },
  ];

  return (
    <section className="py-10 bg-slate-50/60 border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100">
                    {stat.badge}
                  </span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Compliance Note */}
        <div className="mt-4 text-center">
          <p className="text-[11px] text-slate-600 flex items-center justify-center gap-1.5 font-medium">
            <Sparkles className="w-3 h-3 text-blue-500" />
            <span>
              Authentic profile data: Community & professional network metrics displayed transparently without misleading claims.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
