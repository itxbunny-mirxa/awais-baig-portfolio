"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUp,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { LinkedInIcon, FacebookIcon } from "./ui/SocialIcons";
import { personalInfo, navigationRoutes } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111827] text-white relative pt-16 pb-12 border-t border-[#1F2937]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1F2937]">
          {/* Brand & Title Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#6558F5] text-white flex items-center justify-center font-extrabold text-base tracking-tight shadow-sm">
                AB
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {personalInfo.name.toUpperCase()}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed font-normal max-w-sm">
              {personalInfo.role}
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#9CA3AF]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#54D6C8] shrink-0" />
                <span>
                  {personalInfo.location.city}, {personalInfo.location.country} • Serving UK & International Markets
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FFB86B] shrink-0" />
                <span>
                  {personalInfo.location.timezone} • Direct UK Business Hours Sync (GMT/BST)
                </span>
              </div>
            </div>
          </div>

          {/* Dedicated Page Sitemap */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
              Website Sitemap
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 text-xs">
              {navigationRoutes.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-[#D1D5DB] hover:text-[#54D6C8] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
              Direct Contact & Socials
            </h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Have an urgent eBay store listing backlog or inquiry? Connect directly via verified email.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.social.links.email}
                className="w-10 h-10 rounded-xl bg-[#1F2937] hover:bg-[#6558F5] text-white flex items-center justify-center transition-colors shadow-xs"
                title="Send Email to awaisbaig138@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.social.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1F2937] hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors shadow-xs"
                title="Awais Baig on Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.social.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1F2937] hover:bg-[#0A66C2] text-white flex items-center justify-center transition-colors shadow-xs"
                title="Awais Baig on LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#54D6C8] hover:text-white transition-colors"
              >
                <span>Launch Interactive Project Brief</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#9CA3AF] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#54D6C8]" />
              eBay Store Operations & Cassini SEO Specialist
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs text-[#9CA3AF] hover:text-white p-2 rounded-lg bg-[#1F2937] transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
