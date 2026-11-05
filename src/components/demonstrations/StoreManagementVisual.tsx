"use client";

import React from "react";
import {
  PackageCheck,
  Boxes,
  Truck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Info,
  RefreshCw,
} from "lucide-react";

export const StoreManagementVisual: React.FC = () => {
  const sampleInventory = [
    { sku: "HOM-ORG-01", name: "Drawer Storage Divider 6-Pack", stock: 48, status: "Healthy", reorder: "40" },
    { sku: "KIT-GAR-SS01", name: "Stainless Steel Garlic Press", stock: 12, status: "Normal", reorder: "10" },
    { sku: "TECH-CAB-2M", name: "Braided USB-C Cable 2-Metre", stock: 2, status: "Low Stock Alert", reorder: "25" },
    { sku: "FIT-BAND-BLK", name: "Resistance Workout Loop Band", stock: 35, status: "Healthy", reorder: "30" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-xs text-slate-700">
      {/* Mandatory Illustrative Demonstration Banner */}
      <div className="bg-amber-50 px-4 py-2 border-b border-amber-200/80 flex items-center justify-between text-[11px] font-semibold text-amber-900">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-amber-700" />
          Illustrative Demonstration — Not Live Client Data
        </span>
        <span className="text-amber-800 uppercase tracking-wider font-mono text-[10px]">
          Sample Operations Asset #03
        </span>
      </div>

      <div className="p-6 sm:p-7 space-y-6">
        {/* Top: Daily Order Queue Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-blue-800 font-bold uppercase block">
                Awaiting Dispatch
              </span>
              <div className="text-xl font-bold font-mono text-blue-900 mt-0.5">
                14 Orders
              </div>
              <span className="text-[10px] text-blue-700">Cutoff: 14:00 GMT Today</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-emerald-800 font-bold uppercase block">
                Dispatched Today
              </span>
              <div className="text-xl font-bold font-mono text-emerald-900 mt-0.5">
                38 Orders
              </div>
              <span className="text-[10px] text-emerald-700">100% Tracking Uploaded</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <PackageCheck className="w-4 h-4" />
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase block">
                In Transit (UK Couriers)
              </span>
              <div className="text-xl font-bold font-mono text-slate-900 mt-0.5">
                92 Shipments
              </div>
              <span className="text-[10px] text-slate-500">Royal Mail & Evri Tracked</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center">
              <Truck className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* 4-Step Order Processing Workflow Visual */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
          <span className="font-bold text-slate-800 text-xs block">
            Standard Daily Order Processing Workflow (SOP)
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs">
            <div className="bg-white p-2.5 rounded-xl border border-slate-200">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] inline-flex items-center justify-center mb-1">
                1
              </span>
              <p className="font-bold text-slate-900 text-[11px]">Paid Order Queue</p>
              <span className="text-[10px] text-slate-400">Seller Hub Triage</span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-slate-200">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] inline-flex items-center justify-center mb-1">
                2
              </span>
              <p className="font-bold text-slate-900 text-[11px]">Pick & Pack Verification</p>
              <span className="text-[10px] text-slate-400">SKU quantity check</span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-slate-200">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] inline-flex items-center justify-center mb-1">
                3
              </span>
              <p className="font-bold text-slate-900 text-[11px]">Postage Label Created</p>
              <span className="text-[10px] text-slate-400">Royal Mail / Evri</span>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/30">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] inline-flex items-center justify-center mb-1">
                4
              </span>
              <p className="font-bold text-emerald-950 text-[11px]">Tracking Uploaded</p>
              <span className="text-[10px] text-emerald-700">Zero defect SLA</span>
            </div>
          </div>
        </div>

        {/* Inventory Status Table */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-800 flex items-center gap-1.5">
              <Boxes className="w-3.5 h-3.5 text-blue-600" />
              Active Inventory & Low-Stock Trigger Monitoring
            </span>
            <span className="text-[10px] text-slate-400">Total Active Listings: 142 SKUs</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold text-[10px] uppercase border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Custom SKU</th>
                  <th className="py-2.5 px-3">Product Name</th>
                  <th className="py-2.5 px-3 text-center">Stock On Hand</th>
                  <th className="py-2.5 px-3 text-center">Threshold Alert</th>
                  <th className="py-2.5 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {sampleInventory.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60">
                    <td className="py-2 px-3 font-mono font-semibold text-slate-800">{item.sku}</td>
                    <td className="py-2 px-3 text-slate-700">{item.name}</td>
                    <td className="py-2 px-3 text-center font-mono font-bold text-slate-900">{item.stock}</td>
                    <td className="py-2 px-3 text-center text-[11px] text-slate-500 font-mono">&lt; {item.reorder} units</td>
                    <td className="py-2 px-3 text-right">
                      {item.status.includes("Alert") ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                          <AlertTriangle className="w-3 h-3" />
                          {item.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          {item.status}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
