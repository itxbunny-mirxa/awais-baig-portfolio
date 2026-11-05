"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Send,
  Copy,
  Check,
  Globe2,
  Lock,
  ArrowRight,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { PageHeader } from "@/components/ui/PageHeader";
import { LinkedInIcon, FacebookIcon } from "@/components/ui/SocialIcons";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get("service");

  const emailAddress = "awaisbaig138@gmail.com";
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [ukTime, setUkTime] = useState<string>("");
  const [pkTime, setPkTime] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "eBay Store Management",
    message: "",
  });

  // Pre-populate serviceType if provided via query param
  useEffect(() => {
    if (serviceQuery) {
      setFormData((prev) => ({ ...prev, serviceType: serviceQuery }));
    }
  }, [serviceQuery]);

  // Live Dual Timezone Clock (London & Multan)
  useEffect(() => {
    const updateClocks = () => {
      try {
        const now = new Date();
        setUkTime(
          now.toLocaleTimeString("en-GB", {
            timeZone: "Europe/London",
            hour: "2-digit",
            minute: "2-digit",
          })
        );
        setPkTime(
          now.toLocaleTimeString("en-US", {
            timeZone: "Asia/Karachi",
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      } catch {
        setUkTime("15:30 GMT");
        setPkTime("20:30 PKT");
      }
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const generateBriefText = () => {
    return `Client Inquiry for Awais Baig (eBay Virtual Assistant)
--------------------------------------------------
Sender Name: ${formData.name || "[Not Specified]"}
Contact Email: ${formData.email || "[Not Specified]"}
Service Requested: ${formData.serviceType}
Details / Store Link:
${formData.message || "[No additional details provided]"}
--------------------------------------------------
Sent via Portfolio Brief Generator`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generateBriefText());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 3000);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Store Inquiry: ${formData.serviceType} (${formData.name || "Prospective Client"})`
    );
    const body = encodeURIComponent(
      `Hello Awais,\n\nI am contacting you regarding your eBay Virtual Assistant services.\n\nMy Name: ${
        formData.name
      }\nMy Email: ${formData.email}\nService Interested In: ${
        formData.serviceType
      }\n\nProject Scope / Store Details:\n${
        formData.message || "Please contact me to discuss my store."
      }\n\nBest regards,\n${formData.name || "Prospective Client"}`
    );
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen bg-[#F7F7F2] text-[#111827]">
      <PageHeader
        badge="Start a Conversation"
        title="Let's Discuss Your Store Operations &"
        highlight="Growth Opportunities"
        description="Direct, transparent communication for UK and international eBay sellers. Email consultation, structured project briefs, and dual-timezone synchronization."
        currentPage="Contact"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Timezones */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Verified Email Card */}
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E5DC] shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6558F5] block mb-2">
                Primary Contact Channel
              </span>
              <h2 className="text-xl font-bold text-[#111827] mb-2">
                Direct Email Consultation
              </h2>
              <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                Direct inquiries go straight to my primary inbox. I respond promptly during UK business hours with constructive feedback on your store.
              </p>

              <div className="p-4 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-[#6558F5] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#111827] truncate">
                    {emailAddress}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E5E5DC] text-[11px] font-bold text-[#111827] hover:text-[#6558F5] hover:border-[#6558F5]/40 transition-colors flex items-center gap-1 shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span className="text-[#0D9488]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white text-xs font-bold transition-colors"
              >
                <Mail className="w-4 h-4 text-[#54D6C8]" />
                <span>Open in Email App</span>
              </a>
            </div>

            {/* Dual Timezone Synchronizer */}
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E5DC] shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Globe2 className="w-5 h-5 text-[#6558F5]" />
                <h3 className="text-base font-bold text-[#111827]">
                  Timezone Synchronization
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] block mb-1">
                    London, UK
                  </span>
                  <div className="text-xl font-black font-mono text-[#111827]">
                    {ukTime || "Loading..."}
                  </div>
                  <span className="text-[10px] font-semibold text-[#0D9488] block mt-1">
                    Client Timezone
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] block mb-1">
                    Multan, PK
                  </span>
                  <div className="text-xl font-black font-mono text-[#111827]">
                    {pkTime || "Loading..."}
                  </div>
                  <span className="text-[10px] font-semibold text-[#6558F5] block mt-1">
                    Awais&apos;s Base
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs text-[#6B7280] leading-relaxed">
                Working shifts are scheduled directly to overlap with UK business hours, ensuring smooth communication and timely courier cut-off handling.
              </p>
            </div>

            {/* Verified Social Channels */}
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E5DC] shadow-xs">
              <h3 className="text-base font-bold text-[#111827] mb-3">
                Verified Social Profiles
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                Connect directly through verified professional platforms. Additional social channels can be configured in the central config.
              </p>

              <div className="space-y-3">
                <a
                  href={personalInfo.social.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#F7F7F2] hover:bg-[#EEF0FE] border border-[#E5E5DC] hover:border-[#6558F5]/40 flex items-center justify-between text-xs transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedInIcon className="w-5 h-5 text-[#0077B5]" />
                    <div>
                      <span className="font-bold text-[#111827] block">LinkedIn</span>
                      <span className="text-[11px] text-[#6B7280]">/in/awaisbaig01</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6558F5] group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.social.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#F7F7F2] hover:bg-[#EEF0FE] border border-[#E5E5DC] hover:border-[#6558F5]/40 flex items-center justify-between text-xs transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
                    <div>
                      <span className="font-bold text-[#111827] block">Facebook</span>
                      <span className="text-[11px] text-[#6B7280]">mirzaawais.baig.3194</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#6558F5] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Generator Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#E5E5DC] shadow-xs">
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6558F5] block mb-1">
                  Structured Inquiry
                </span>
                <h2 className="text-2xl font-bold text-[#111827]">
                  Send a Store Brief
                </h2>
                <p className="text-xs text-[#4B5563] mt-1">
                  Fill in your store details below to send an email or copy a pre-formatted project brief.
                </p>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5">
                    Your Name or Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Mitchell (UK Home Goods)"
                    className="w-full px-4 py-3 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#6558F5] focus:bg-[#FFFFFF] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. david@ukhomegoods.co.uk"
                    className="w-full px-4 py-3 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#6558F5] focus:bg-[#FFFFFF] transition-colors"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] text-xs text-[#111827] focus:outline-none focus:border-[#6558F5] focus:bg-[#FFFFFF] transition-colors"
                  >
                    <option value="eBay Store Management">eBay Store Management (Ongoing Retainer)</option>
                    <option value="Product Research">Product Research (Terapeak & ZIK Analysis)</option>
                    <option value="eBay Listing Optimization">eBay Listing Optimization (Cassini SEO)</option>
                    <option value="Product Listing Creation">Product Listing Creation (New SKUs)</option>
                    <option value="Order Management">Order Management & Dispatch Cut-offs</option>
                    <option value="Inventory Management">Inventory Management & Stock Sync</option>
                    <option value="Customer Service">Customer Service & Dispute Resolution</option>
                    <option value="eBay Dropshipping Management">eBay Dropshipping Management</option>
                    <option value="Full Account Audit">Full Account & Listing Audit</option>
                  </select>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5">
                    Store Details & Project Scope
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your store category, current active listing count, primary courier (e.g. Royal Mail), and current operational challenges..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#F7F7F2] border border-[#E5E5DC] text-xs text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#6558F5] focus:bg-[#FFFFFF] transition-colors resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={getMailtoUrl()}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#111827] hover:bg-[#1F2937] text-white text-xs font-bold transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#54D6C8]" />
                    <span>Send via Default Email Client</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#F7F7F2] hover:bg-[#EEF0FE] border border-[#E5E5DC] hover:border-[#6558F5]/40 text-[#111827] text-xs font-bold transition-colors"
                  >
                    {copiedBrief ? (
                      <>
                        <Check className="w-4 h-4 text-[#0D9488]" />
                        <span className="text-[#0D9488]">Brief Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#6558F5]" />
                        <span>Copy Formatted Brief</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Assurance */}
                <div className="pt-4 border-t border-[#E5E5DC] flex items-center gap-2 text-[11px] text-[#6B7280]">
                  <Lock className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                  <span>
                    Your store details and contact information are held strictly confidential.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F7F2]" />}>
      <ContactFormContent />
    </Suspense>
  );
}
