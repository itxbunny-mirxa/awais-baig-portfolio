"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Briefcase,
  Layers,
  Wrench,
  GraduationCap,
  Sparkles,
  FileText,
  Mail,
  Home,
  User,
} from "lucide-react";
import { personalInfo, navigationRoutes } from "@/data/portfolioData";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const getRouteIcon = (path: string) => {
    switch (path) {
      case "/":
        return <Home className="w-4 h-4" />;
      case "/about":
        return <User className="w-4 h-4" />;
      case "/services":
        return <Layers className="w-4 h-4" />;
      case "/skills":
        return <Sparkles className="w-4 h-4" />;
      case "/tools":
        return <Wrench className="w-4 h-4" />;
      case "/experience":
        return <Briefcase className="w-4 h-4" />;
      case "/portfolio":
        return <FileText className="w-4 h-4" />;
      case "/process":
        return <GraduationCap className="w-4 h-4" />;
      case "/contact":
        return <Mail className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  // Primary desktop navigation links
  const desktopLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/skills", label: "Skills" },
    { path: "/tools", label: "Tools" },
    { path: "/experience", label: "Experience" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/process", label: "Process" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? "glass-nav-pill shadow-md shadow-[#111827]/5 border-[#E5E5DC]"
              : "bg-[#F7F7F2]/90 backdrop-blur-md border border-[#E5E5DC]"
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo & Brand Emblem */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          >
            <div className="w-8 h-8 rounded-xl bg-[#111827] text-white flex items-center justify-center font-extrabold text-xs tracking-tight group-hover:bg-[#6558F5] transition-colors shadow-xs">
              AB
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#111827] group-hover:text-[#6558F5] transition-colors leading-none">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="text-[9px] text-[#6B7280] font-semibold tracking-wider uppercase mt-0.5">
                eBay Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {desktopLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-[#6558F5] text-white shadow-xs font-bold"
                      : "text-[#4B5563] hover:text-[#111827] hover:bg-[#EFEFE8]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action: Let's Talk Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 active:scale-98 ${
                pathname === "/contact"
                  ? "bg-[#111827] text-[#54D6C8] ring-2 ring-[#54D6C8]"
                  : "bg-[#111827] text-white hover:bg-[#6558F5] shadow-xs hover:shadow-md hover:shadow-[#6558F5]/20"
              }`}
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#111827] hover:bg-[#EFEFE8] rounded-xl transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 sm:p-5 bg-[#F7F7F2]/98 backdrop-blur-xl rounded-3xl border border-[#E5E5DC] shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {navigationRoutes.map((route) => {
                const isActive = pathname === route.path;
                return (
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-2xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#6558F5] text-white shadow-xs font-bold"
                        : "bg-[#FFFFFF] text-[#374151] hover:bg-[#EFEFE8] border border-[#E5E5DC]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={isActive ? "text-white" : "text-[#6558F5]"}>
                        {getRouteIcon(route.path)}
                      </span>
                      <div>
                        <span className="block text-sm font-bold leading-tight">{route.label}</span>
                        <span className={`text-[10px] block mt-0.5 ${isActive ? "text-white/80" : "text-[#6B7280]"}`}>
                          {route.description}
                        </span>
                      </div>
                    </div>
                    {route.badge && (
                      <span
                        className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-[#EEF0FE] text-[#6558F5]"
                        }`}
                      >
                        {route.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Quick Contact Strip in Mobile Menu */}
            <div className="mt-4 pt-3 border-t border-[#E5E5DC] flex items-center justify-between text-xs text-[#6B7280]">
              <span className="font-mono text-[11px] truncate">{personalInfo.social.links.email.replace("mailto:", "")}</span>
              <span className="text-[10px] font-semibold text-[#0D9488] bg-[#E6FAF7] px-2 py-0.5 rounded-full border border-[#54D6C8]/40">
                UK Sync Ready
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
