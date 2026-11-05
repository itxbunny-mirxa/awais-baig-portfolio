"use client";

import React from "react";
import {
  TrendingUp,
  Info,
  DollarSign,
  BarChart2,
  PieChart,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const ProductResearchVisual: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-xs text-slate-700">
      {/* Mandatory Illustrative Demonstration Banner */}
      <div className="bg-amber-50 px-4 py-2 border-b border-amber-200/80 flex items-center justify-between text-[11px] font-semibold text-amber-900">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-amber-700" />
          Illustrative Demonstration — Not Live Client Data
        </span>
        <span className="text-amber-800 uppercase tracking-wider font-mono text-[10px]">
          Sample Research Asset #02
        </span>
      </div>

      <div className="p-6 sm:p-7 space-y-6">
        {/* Top: Product Metrics Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">
              Unit Sourcing Cost
            </span>
            <div className="text-base sm:text-lg font-bold font-mono text-slate-900 mt-0.5">
              £3.20
            </div>
            <span className="text-[10px] text-slate-500">Supplier Landed Price</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">
              Target Selling Price
            </span>
            <div className="text-base sm:text-lg font-bold font-mono text-slate-900 mt-0.5">
              £14.99
            </div>
            <span className="text-[10px] text-slate-500">Free Domestic Delivery</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">
              Total Fees & Postage
            </span>
            <div className="text-base sm:text-lg font-bold font-mono text-slate-900 mt-0.5">
              £4.17
            </div>
            <span className="text-[10px] text-slate-500">eBay Fees + RM48</span>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-[10px] text-emerald-800 font-bold uppercase block">
              Calculated Net Margin
            </span>
            <div className="text-base sm:text-lg font-bold font-mono text-emerald-700 mt-0.5">
              £7.62 (50.8%)
            </div>
            <span className="text-[10px] text-emerald-800 font-medium">Net Profit Buffer</span>
          </div>
        </div>

        {/* Detailed Profitability Table */}
        <div className="space-y-2">
          <span className="font-bold text-slate-800 text-xs block">
            Sample Financial Feasibility Breakdown (Single Unit)
          </span>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold text-[10px] uppercase border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Expense / Revenue Component</th>
                  <th className="py-2.5 px-3">Rate / Basis</th>
                  <th className="py-2.5 px-3 text-right">Amount (£)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-900">Gross Selling Price (eBay.co.uk)</td>
                  <td className="py-2 px-3 text-slate-500">Market median price</td>
                  <td className="py-2 px-3 text-right font-mono font-bold text-slate-900">£14.99</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-700">Landed Product Cost (COGS)</td>
                  <td className="py-2 px-3 text-slate-500">Supplier invoice + import freight</td>
                  <td className="py-2 px-3 text-right font-mono text-red-600">-£3.20</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-700">Royal Mail 48 Tracked (Large Letter)</td>
                  <td className="py-2 px-3 text-slate-500">&lt; 100g, &lt; 25mm thickness</td>
                  <td className="py-2 px-3 text-right font-mono text-red-600">-£1.65</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-700">eBay Final Value Fee (FVF)</td>
                  <td className="py-2 px-3 text-slate-500">12.8% category fee + £0.30 fixed</td>
                  <td className="py-2 px-3 text-right font-mono text-red-600">-£2.22</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-700">Promoted Listings Standard (Optional)</td>
                  <td className="py-2 px-3 text-slate-500">2.0% ad rate buffer</td>
                  <td className="py-2 px-3 text-right font-mono text-red-600">-£0.30</td>
                </tr>
                <tr className="bg-emerald-50/50 font-bold">
                  <td className="py-2.5 px-3 text-emerald-900">Net Estimated Profit Per Sale</td>
                  <td className="py-2.5 px-3 text-emerald-800">50.8% Net Margin</td>
                  <td className="py-2.5 px-3 text-right font-mono text-emerald-700 font-bold">£7.62</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Competition & Demand Analysis Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5 text-blue-600" />
              Demand Analysis (Terapeak / ZIK)
            </span>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span>90-Day Sold Volume:</span>
                <strong className="text-slate-900 font-mono">1,840 units</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span>Sell-Through Rate:</span>
                <strong className="text-emerald-700 font-mono">54.2% (Healthy)</strong>
              </div>
              <div className="flex justify-between py-1">
                <span>Demand Consistency:</span>
                <strong className="text-slate-900">Stable, non-seasonal</strong>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <PieChart className="w-3.5 h-3.5 text-blue-600" />
              Competition Overview
            </span>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span>Active Direct Competitors:</span>
                <strong className="text-slate-900 font-mono">18 listings</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span>Top Competitor Weakness:</span>
                <strong className="text-slate-900">Slow 3-day dispatch</strong>
              </div>
              <div className="flex justify-between py-1">
                <span>Competitive Angle:</span>
                <strong className="text-blue-700">Same-Day UK dispatch</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
