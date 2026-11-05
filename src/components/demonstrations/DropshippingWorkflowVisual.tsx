"use client";

import React from "react";
import {
  Truck,
  RefreshCw,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Info,
  DollarSign,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export const DropshippingWorkflowVisual: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-xs text-slate-700">
      {/* Mandatory Illustrative Demonstration Banner */}
      <div className="bg-amber-50 px-4 py-2 border-b border-amber-200/80 flex items-center justify-between text-[11px] font-semibold text-amber-900">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-amber-700" />
          Illustrative Demonstration — Not Live Client Data
        </span>
        <span className="text-amber-800 uppercase tracking-wider font-mono text-[10px]">
          Sample Dropshipping Asset #05
        </span>
      </div>

      <div className="p-6 sm:p-7 space-y-6">
        {/* Dropshipping 4-Step Architecture Pipeline */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
          <span className="font-bold text-slate-900 text-xs block">
            End-to-End Dropshipping Operational Pipeline
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] inline-flex items-center justify-center mb-1">
                1
              </span>
              <p className="font-bold text-slate-900 text-[11px]">Buyer Places Order</p>
              <span className="text-[10px] text-slate-500">eBay.co.uk Storefront</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] inline-flex items-center justify-center mb-1">
                2
              </span>
              <p className="font-bold text-slate-900 text-[11px]">VA Routes Order</p>
              <span className="text-[10px] text-slate-500">Verified UK Supplier</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] inline-flex items-center justify-center mb-1">
                3
              </span>
              <p className="font-bold text-slate-900 text-[11px]">Supplier Dispatches</p>
              <span className="text-[10px] text-slate-500">Carrier Assigned (Evri/RM)</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-emerald-200 bg-emerald-50/30">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] inline-flex items-center justify-center mb-1">
                4
              </span>
              <p className="font-bold text-emerald-950 text-[11px]">Tracking Auto-Synced</p>
              <span className="text-[10px] text-emerald-700">eBay SLA Protected</span>
            </div>
          </div>
        </div>

        {/* Supplier Product Information & Price Sync Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-blue-600" />
              Supplier Product & Price Reconciliation
            </span>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span>Wholesale Supplier Source:</span>
                <strong className="text-slate-900">Verified UK Distributor</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span>Supplier Unit Price:</span>
                <strong className="text-slate-900 font-mono">£6.40</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span>eBay Retail Price:</span>
                <strong className="text-slate-900 font-mono">£16.99</strong>
              </div>
              <div className="flex justify-between py-1">
                <span>Calculated Net Margin:</span>
                <strong className="text-emerald-700 font-bold font-mono">£5.12 (30.1% Net)</strong>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
              Stock & Tracking Synchronization
            </span>
            <div className="space-y-2 text-[11px] text-slate-600">
              <div className="p-2 bg-white rounded border border-slate-200">
                <span className="font-semibold text-slate-800 block">Automated Stock Checks:</span>
                <span className="text-slate-500">Every 4 hours to verify supplier inventory availability and zero-out discontinued items.</span>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200">
                <span className="font-semibold text-slate-800 block">Tracking Number Upload SLA:</span>
                <span className="text-slate-500">Evri / Royal Mail tracking uploaded directly to eBay within stated dispatch timeframe.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
