"use client";

import React from "react";
import {
  Info,
  CheckCircle2,
  Wrench,
  Sparkles,
  ArrowRight,
  Layers,
  FileSpreadsheet,
} from "lucide-react";
import { DemonstrationProject } from "@/types/portfolio";
import { Modal } from "./ui/Modal";

interface DemoProjectModalProps {
  project: DemonstrationProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DemoProjectModal: React.FC<DemoProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={project.subtitle}
      maxWidth="2xl"
    >
      <div className="space-y-6 text-slate-700">
        {/* Compliance Warning Badge */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900 font-medium">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">{project.demonstrationLabel}</strong>
            <span>
              This project is designed as an educational, illustrative showcase of operational methodology and Cassini search principles. It is not represented as paid commercial client work.
            </span>
          </div>
        </div>

        {/* Overview */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            Methodology Overview
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Key Operational Takeaway */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50 border border-blue-200/80 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Key Operational Principle</span>
          </h4>
          <p className="text-xs sm:text-sm text-blue-950 font-medium leading-relaxed">
            {project.keyTakeaway}
          </p>
        </div>

        {/* Tools Used */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-slate-400" />
            <span>Tools & Systems Illustrated</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.toolsUsed.map((tool, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-2">
          <a
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <span>Discuss This Workflow For Your Store</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Modal>
  );
};
