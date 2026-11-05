"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Wrench,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { ServiceItem } from "@/types/portfolio";
import { Modal } from "./ui/Modal";

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  if (!service) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={service.title}
      subtitle="Detailed Service Specifications & Deliverables"
      maxWidth="xl"
    >
      <div className="space-y-6 text-slate-700">
        {/* Short Description */}
        <p className="text-base text-slate-600 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Client Benefit Callout */}
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
              The Real Business Impact
            </h4>
            <p className="text-sm text-blue-950 font-medium mt-0.5">
              {service.clientBenefit}
            </p>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Comprehensive Deliverables</span>
          </h4>
          <ul className="space-y-2.5">
            {service.fullDeliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Turnaround & Tools Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mb-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Standard Turnaround</span>
            </div>
            <div className="text-sm font-bold text-slate-900">
              {service.turnaroundTime}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mb-1">
              <Wrench className="w-3.5 h-3.5 text-slate-400" />
              <span>Tools & Applications</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {service.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-2">
          <Link
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Modal>
  );
};
