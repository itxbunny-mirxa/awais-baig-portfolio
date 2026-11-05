"use client";

import React from "react";
import {
  ShoppingBag,
  BarChart2,
  Truck,
  ShieldCheck,
  Search,
  Package,
  Layers,
} from "lucide-react";

export const HeroMarketplacesRibbon: React.FC = () => {
  const ecosystemItems = [
    { name: "eBay.co.uk", role: "Primary Marketplace", icon: ShoppingBag },
    { name: "eBay Seller Hub", role: "Store Administration", icon: BarChart2 },
    { name: "Terapeak Research", role: "Market Demand", icon: Search },
    { name: "ZIK Analytics", role: "Competitor Intelligence", icon: BarChart2 },
    { name: "Royal Mail Click & Drop", role: "UK Courier Dispatch", icon: Truck },
    { name: "AutoDS & DSM", role: "Inventory Automation", icon: Package },
    { name: "eBay Multi-User (MUAA)", role: "Safe Delegated Access", icon: ShieldCheck },
  ];

  return (
    <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200/80">
      <div className="text-center sm:text-left mb-5">
        <span className="text-[11px] uppercase tracking-widest font-bold text-slate-400">
          Platforms & Operational Ecosystem
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-4">
        {ecosystemItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/70 hover:border-blue-300 transition-all duration-200 shadow-2xs hover:shadow-xs"
            >
              <Icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {item.role}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
