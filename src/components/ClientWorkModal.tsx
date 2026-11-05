"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ShieldCheck,
  Building2,
  Quote,
  ArrowRight,
  ExternalLink,
  Info,
  Layers,
  Sparkles,
  Lock,
  Image as ImageIcon,
  SlidersHorizontal,
} from "lucide-react";
import { ClientProjectPlaceholder } from "@/types/portfolio";
import { Modal } from "./ui/Modal";

interface ClientWorkModalProps {
  project: ClientProjectPlaceholder | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ClientWorkModal: React.FC<ClientWorkModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [activeView, setActiveView] = useState<"overview" | "framework">("overview");

  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.projectTitle}
      subtitle={`${project.clientIndustry} • ${project.marketplace}`}
      maxWidth="2xl"
    >
      <div className="space-y-6 text-slate-700">
        {/* Marketplace & Status Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {project.category}
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            {project.statusBadge}
          </span>
          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            {project.marketplace}
          </span>
          <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1">
            <Lock className="w-3 h-3 text-slate-400" />
            Redacted NDA Case
          </span>
        </div>

        {/* Screenshot / Visual Representation Slot */}
        <div className="relative aspect-video rounded-2xl bg-slate-50 border border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-4 overflow-hidden shadow-2xs">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.projectTitle}
              fill
              className="object-cover"
            />
          ) : (
            <div className="space-y-1.5 text-slate-400 max-w-sm">
              <ImageIcon className="w-8 h-8 mx-auto text-slate-300" />
              <span className="text-xs font-bold text-slate-700 block">
                Verified Client Screenshot Slot
              </span>
              <p className="text-[11px] text-slate-500 leading-normal">
                Account identifiers and buyer addresses redacted. To attach live authorized screenshots, place files in{" "}
                <code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded font-mono text-[10px]">
                  public/images/client-work/
                </code>
              </p>
            </div>
          )}
        </div>

        {/* Project Description */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            Engagement & Operational Scope
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.projectDescription}
          </p>
        </div>

        {/* Work Completed */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Delivered Operations & Systems</span>
          </h4>
          <ul className="space-y-2">
            {project.workCompleted.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Outcomes */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 border border-blue-200/70 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Verified Operational Outcomes</span>
          </h4>
          <ul className="space-y-2">
            {project.verifiedOutcomes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-800">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Client Reference Status */}
        {project.clientTestimonialPlaceholder && (
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs relative">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Client Reference Verification
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
                {project.clientTestimonialPlaceholder.status}
              </span>
            </div>
            <p className="text-xs text-slate-600 italic">
              &ldquo;{project.clientTestimonialPlaceholder.note}&rdquo;
            </p>
          </div>
        )}

        {/* Client Confidentiality Assurance */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2 text-xs text-slate-500">
          <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <span>
            Commercial client account names, order numbers, and buyer addresses are redacted to protect store privacy and competitor positioning. Live operational walkthroughs can be demonstrated during private discovery discussions.
          </span>
        </div>

        {/* Bottom CTA */}
        <div className="pt-2">
          <a
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <span>Inquire About Similar Retainers</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Modal>
  );
};
