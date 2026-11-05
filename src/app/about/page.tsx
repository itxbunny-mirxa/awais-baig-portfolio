import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Building,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  CalendarDays,
  FileCheck2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { LinkedInIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "About Awais Baig | eBay Virtual Assistant & Store Specialist",
  description:
    "Learn about Awais Baig's 2–3 years journey as an eBay Virtual Assistant, BZU Multan education, F.G. Boys High School Cantt, Empowerers eCommerce training, 5-stage UK routine, and MUAA account security.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const dailySchedule = [
    {
      time: "08:30 GMT",
      task: "Morning Dispatch Triage & Courier Sync",
      details:
        "Verify paid orders, cross-check stock quantities, and upload Royal Mail/Evri tracking numbers before courier cutoffs.",
    },
    {
      time: "11:00 GMT",
      task: "Customer Service & Inquiries SLA",
      details:
        "Answer buyer sizing/delivery questions, handle return authorization requests, and review any INR cases to prevent defect flags.",
    },
    {
      time: "14:00 GMT",
      task: "Terapeak Research & Sourcing Analysis",
      details:
        "Run 90-day sell-through scans, assess competitor price elasticity, and model gross/net profit margins.",
    },
    {
      time: "16:30 GMT",
      task: "Cassini SEO & Listing Optimization",
      details:
        "Restructure 80-char titles with top-converting UK keywords and populate 100% of missing item specifics.",
    },
    {
      time: "18:00 GMT",
      task: "Daily Activity Log & Client Sync",
      details:
        "Deliver clean end-of-day summary spreadsheet so you know exactly what was achieved.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F7F7F2] text-[#111827]">
      <PageHeader
        badge="About Awais Baig"
        title="Bridging the Gap Between Operational Chaos &"
        highlight="Predictable Store Growth"
        description="A dedicated partner for UK and international eBay sellers who want structured store management, pristine listing optimization, and dependable daily execution."
        currentPage="About"
      />

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative, Schedule, Security */}
          <div className="lg:col-span-8 space-y-10">
            {/* Context Card: What does an eBay VA actually do? */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs">
              <h2 className="text-2xl font-bold text-[#111827] mb-3">
                What Does an eBay Virtual Assistant Actually Do?
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Running a profitable eBay business in 2026 requires continuous attention: buyer messages require answers within hours, shipping labels must be uploaded on time, inventory levels need tight balancing, and listings require constant Cassini SEO updates.
              </p>
              <p className="text-base text-[#4B5563] leading-relaxed mt-3">
                My role as your dedicated Virtual Assistant is to assume complete ownership of these repetitive, time-intensive operations. You focus on brand strategy, capital allocation, and supplier relationships; I handle the operational engine that keeps your store in Top Rated standing.
              </p>
            </div>

            {/* Detailed Bio Narrative */}
            <div className="space-y-4 text-base text-[#4B5563] leading-relaxed bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E5DC] shadow-xs">
              <h3 className="text-xl font-bold text-[#111827] mb-4">
                Professional Journey & Operational Ethos
              </h3>
              {personalInfo.bioFull.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Daily Operating Routine (UK Hours Synchronized) */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EEF0FE] text-[#6558F5] mb-2">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>Synchronized Operating Rhythm</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827]">
                    Standard Daily Operating Schedule (UK Hours)
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold text-[#0D9488] bg-[#E6FAF7] px-3 py-1 rounded-full border border-[#54D6C8]/40 self-start sm:self-auto">
                  5-Stage Routine
                </span>
              </div>

              <div className="space-y-3">
                {dailySchedule.map((slot, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-xs text-[#6558F5] bg-[#EEF0FE] px-2.5 py-1 rounded-lg">
                        {slot.time}
                      </span>
                      <span className="font-bold text-sm text-[#111827]">
                        {slot.task}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] sm:text-right max-w-sm">
                      {slot.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* eBay Multi-User Account Access (MUAA) Security */}
            <div className="p-8 rounded-3xl bg-[#E6FAF7]/50 border border-[#54D6C8]/40 shadow-xs">
              <div className="flex items-center gap-2.5 text-[#0D9488] font-bold text-lg mb-3">
                <Lock className="w-5 h-5 text-[#0D9488]" />
                <h3>eBay Multi-User Account Access (MUAA) Security Protocol</h3>
              </div>
              <p className="text-sm text-[#374151] leading-relaxed">
                You never share your master account credentials, password, or financial access. Through eBay&apos;s native Multi-User Account Access (MUAA), you grant my dedicated email specific permissions — strictly limited to listing creation, order fulfillment, and messaging. You retain 100% control and can revoke access anytime with one click.
              </p>
              <div className="mt-4 pt-4 border-t border-[#54D6C8]/30 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-[#065F46]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>No password sharing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Role-based permissions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Revocable instantly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Identity, Education, Socials, Quick Actions */}
          <div className="lg:col-span-4 space-y-8">
            {/* Identity Card */}
            <div className="bg-[#FFFFFF] p-7 rounded-3xl border border-[#E5E5DC] shadow-xs text-center">
              <div className="flex justify-center mb-4">
                <ProfileAvatar size="lg" />
              </div>
              <h3 className="text-xl font-bold text-[#111827]">Awais Baig</h3>
              <p className="text-xs font-semibold text-[#6558F5] mt-0.5">
                eBay Virtual Assistant & Store Specialist
              </p>
              <p className="text-xs text-[#6B7280] mt-2">
                Based in Multan, Pakistan • Serving UK & International Sellers
              </p>

              <div className="mt-6 pt-6 border-t border-[#E5E5DC] flex items-center justify-center gap-3">
                <a
                  href={personalInfo.social.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-center text-[#111827] hover:text-[#6558F5] hover:border-[#6558F5]/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.social.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-center text-[#111827] hover:text-[#6558F5] hover:border-[#6558F5]/40 transition-colors"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="block w-full py-3.5 px-4 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white text-xs font-bold transition-colors"
                >
                  Contact Awais Directly
                </Link>
              </div>
            </div>

            {/* Education & Training Card */}
            <div className="bg-[#FFFFFF] p-7 rounded-3xl border border-[#E5E5DC] shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-[#6558F5]" />
                <h4 className="text-base font-bold text-[#111827]">
                  Education & Formative Training
                </h4>
              </div>

              <div className="space-y-4 text-xs">
                {personalInfo.social.education.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC]">
                    <span className="font-bold text-[#111827] block">
                      {edu.institution}
                    </span>
                    <span className="text-[#6558F5] font-semibold block mt-0.5">
                      {edu.degree}
                    </span>
                    <span className="text-[#9CA3AF] block mt-1">
                      {edu.highlight}
                    </span>
                  </div>
                ))}

                {/* Empowerers Professional Training */}
                <div className="p-3.5 rounded-2xl bg-[#EEF0FE]/60 border border-[#6558F5]/30">
                  <span className="font-bold text-[#111827] block">
                    {personalInfo.social.organization}
                  </span>
                  <span className="text-[#6558F5] font-semibold block mt-0.5">
                    {personalInfo.social.organizationRole}
                  </span>
                  <p className="text-[11px] text-[#4B5563] mt-1 leading-relaxed">
                    Practical marketplace store management, product research, and eBay Virtual Assistance training.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Link to Skills */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#E5E5DC] shadow-xs">
              <h4 className="text-sm font-bold text-[#111827] mb-2">
                Explore Skills & Software
              </h4>
              <p className="text-xs text-[#4B5563] mb-4">
                Review verified tool proficiency across ZIK Analytics, Terapeak, and Seller Hub.
              </p>
              <Link
                href="/skills"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6558F5] hover:text-[#5346E8]"
              >
                <span>View Skills & Stack</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
