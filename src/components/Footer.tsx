"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUp,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { LinkedInIcon, FacebookIcon, WhatsAppIcon } from "./ui/SocialIcons";
import { personalInfo } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Tools & Platforms", href: "#tools" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Work Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white relative pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Title Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base tracking-tight shadow-sm">
                AB
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {personalInfo.name.toUpperCase()}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
              {personalInfo.role}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>
                  {personalInfo.location.city}, {personalInfo.location.country} • Serving UK & International Markets
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>
                  {personalInfo.location.timezone} • Flexible UK Business Hours Sync
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Direct Contact & Socials
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have an urgent eBay store listing backlog or inquiry? Reach out directly via verified email.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.social.links.email}
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                title="Send Email to awaisbaig138@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.social.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.social.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                title="Facebook Profile"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              Community: <span className="text-white font-medium">{personalInfo.social.organization}</span>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Designed for High-Converting UK Client Acquisition</span>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
