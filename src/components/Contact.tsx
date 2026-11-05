"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  MessageCircle,
  Send,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Globe2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { LinkedInIcon, FacebookIcon, WhatsAppIcon } from "./ui/SocialIcons";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ukTime, setUkTime] = useState<string>("");
  const [pkTime, setPkTime] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "eBay Store Management",
    message: "",
  });

  // Dual UK & Pakistan Clock
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
    const interval = setInterval(updateClocks, 10000);
    return () => clearInterval(interval);
  }, []);

  const rawEmail = personalInfo.social.links.email.replace("mailto:", "");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(rawEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getBriefText = () => {
    return `To: ${rawEmail}\nSubject: eBay Store Inquiry — ${formData.serviceType} (${formData.name || "Client"})\n\nHello Awais,\n\nMy name is ${formData.name}.\nMy business email is: ${formData.email}\nService required: ${formData.serviceType}\n\nProject details:\n${formData.message}\n\nLooking forward to discussing my eBay store.`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getBriefText());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = getMailtoUrl();
    window.location.href = mailto;
    setFormSubmitted(true);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `eBay Store Inquiry — ${formData.serviceType} (${formData.name || "Client"})`
    );
    const body = encodeURIComponent(
      `Hello Awais,\n\nMy name is ${formData.name}.\nMy business email is: ${formData.email}\nService required: ${formData.serviceType}\n\nProject details:\n${formData.message}\n\nLooking forward to discussing my eBay store.`
    );
    return `mailto:${rawEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50/50 relative border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Contact & Consultations"
          title="Ready to Elevate Your eBay Store?"
          highlight="Let's Start the Conversation"
          description="Whether you have an immediate listing backlog, want an operational audit, or need dedicated ongoing store management, connect directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & UK Sync Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Confirmed Direct Email
                    </h3>
                    <p className="text-xs text-slate-500">Official Communication Channel</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Primary
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Send your store link, project requirements, or listing questions directly to Awais&apos;s verified email inbox.
              </p>

              {/* Email Address & Quick Copy */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800">
                <span className="font-semibold">{rawEmail}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg bg-white border border-slate-200 shadow-2xs transition-colors"
                    title="Copy email address"
                    type="button"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <a
                    href={`mailto:${rawEmail}`}
                    className="p-1.5 text-blue-600 hover:text-blue-800 rounded-lg bg-white border border-slate-200 shadow-2xs transition-colors"
                    title="Open mail application"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Mailto Button */}
              <a
                href={`mailto:${rawEmail}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{personalInfo.primaryCtaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Live Dual Timezone Indicator Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-blue-600" />
                  Timezone Synchronization
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Active UK Overlap
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">
                    United Kingdom (London)
                  </div>
                  <div className="text-xl font-bold font-mono text-slate-900 mt-1">
                    {ukTime || "UK GMT"}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Your Business Hours</div>
                </div>

                <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <div className="text-[10px] text-blue-700 font-bold uppercase">
                    Pakistan (Multan)
                  </div>
                  <div className="text-xl font-bold font-mono text-blue-900 mt-1">
                    {pkTime || "PKT GMT+5"}
                  </div>
                  <div className="text-[10px] text-blue-600 mt-0.5">Operational Hub</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                Convenient 4–5 hour time difference allows morning preparation before your working day begins and real-time communication during your UK afternoon.
              </p>
            </div>

            {/* Social Channels & WhatsApp Placeholder */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Verified Social Channels & Direct Messaging
              </h4>

              <div className="space-y-2.5 text-xs">
                {/* Facebook Profile Link */}
                <a
                  href={personalInfo.social.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors font-semibold text-slate-700 hover:text-blue-700"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="block">Facebook Profile</span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      facebook.com/mirzaawais.baig.3194
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-slate-400" />
                </a>

                {/* LinkedIn Link */}
                <a
                  href={personalInfo.social.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors font-semibold text-slate-700 hover:text-blue-700"
                >
                  <LinkedInIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="block">LinkedIn Profile</span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      linkedin.com/in/awaisbaig01
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-slate-400" />
                </a>

                {/* Honest WhatsApp Placeholder */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-600">
                  <div className="flex items-center gap-2 font-semibold text-slate-800">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Direct Messaging</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {personalInfo.social.links.whatsappPlaceholderNote} Available directly upon initial email discussion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Store Inquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Send a Project Brief
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Please share your business details below to prepare your store consultation.
                </p>
              </div>

              {formSubmitted ? (
                /* Honest Form Submission / Preparation State */
                <div className="p-7 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-4 animate-in fade-in duration-200 text-xs sm:text-sm text-slate-800">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-slate-900">
                      Inquiry Prepared, {formData.name || "Seller"}!
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                      Your store brief for &quot;{formData.serviceType}&quot; has been formatted. Click below to launch your email client with this exact message populated directly to Awais Baig.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={getMailtoUrl()}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Launch Mail Client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-bold text-sm bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors shadow-2xs"
                    >
                      {copiedBrief ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Brief Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-500" />
                          <span>Copy Brief Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
                    >
                      Edit details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. David Miller"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. david@retailbrand.co.uk"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white text-slate-800"
                    >
                      <option value="eBay Store Management">
                        eBay Store Management (Ongoing Retainer)
                      </option>
                      <option value="Product Research">
                        Product Research & Profitability Sourcing
                      </option>
                      <option value="eBay Listing Optimization">
                        eBay Listing Optimization (Cassini SEO & Titles)
                      </option>
                      <option value="Product Listing Creation">
                        Product Listing Creation (Single & Multi-Variation)
                      </option>
                      <option value="Order & Inventory Management">
                        Order & Inventory Management Coverage
                      </option>
                      <option value="eBay SEO">
                        eBay SEO & Keyword Architecture
                      </option>
                      <option value="Dropshipping Support">
                        Dropshipping Support & Fulfillment Sync
                      </option>
                      <option value="Private Label Support">
                        Private Label Storefront & Brand Setup
                      </option>
                      <option value="Other Consultation">
                        Other Custom eCommerce Project
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Details / Current Store Needs *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please mention your product niche, current listing count, or specific pain points (e.g. listing backlog, dispatch times, Cassini rank)..."
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Prepare & Submit Brief</span>
                  </button>
                </form>
              )}

              {/* Data & Privacy Assurance */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>
                  Direct email communication securely addressed to <strong className="text-slate-600">{rawEmail}</strong>. No automated marketing spam.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
