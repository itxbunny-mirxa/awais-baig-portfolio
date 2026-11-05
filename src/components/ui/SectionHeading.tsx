import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  description,
  centered = true,
  className = "",
}) => {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      } mb-12 sm:mb-16 ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-200/60 mb-4 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.18]">
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
