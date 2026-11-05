"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "experience", "services", "tools", "skills", "portfolio", "process", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services", id: "services" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "Tools", href: "#tools", id: "tools" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Process", href: "#process", id: "process" },
    { label: "About", href: "#about", id: "about" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <nav
          className={`flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm shadow-slate-900/5"
              : "bg-white/75 backdrop-blur-sm border border-slate-200/60"
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-tight group-hover:bg-blue-600 transition-colors">
              AB
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
                eBay Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? "text-blue-700 bg-blue-50/80 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-blue-600 transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-blue-500/20 active:scale-98"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-blue-700 bg-blue-50 font-semibold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Let&apos;s Work Together</span>
              </Link>
              <a
                href={personalInfo.social.links.email}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/50 border border-slate-200 transition-colors"
              >
                <span>Direct Email: awaisbaig138@gmail.com</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
