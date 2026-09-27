import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="bg-white border-t border-[#E2E8F0] relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Description */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-headline-sm text-lg font-bold text-[#0F172A]">
            {profile.name}
          </div>
          <p className="font-body-sm text-xs sm:text-sm text-[#64748B]">
            Computer Science &amp; Engineering · AI/ML · Data Science · Full-Stack Development
          </p>
        </div>

        {/* Verified Social & Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-body-sm text-xs sm:text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#64748B] hover:text-[#2563EB] transition-colors duration-150 hover:underline font-medium"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#64748B] hover:text-[#2563EB] transition-colors duration-150 hover:underline font-medium"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-[#64748B] hover:text-[#2563EB] transition-colors duration-150 hover:underline font-medium"
          >
            Email
          </a>
        </div>

        {/* Back to Top Button */}
        <div>
          <button
            onClick={onScrollToTop}
            className="p-2.5 rounded-full border border-[#E2E8F0] bg-white text-[#64748B] hover:text-[#2563EB] hover:border-[#BFDBFE] hover:bg-[#EFF6FF] transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-90"
            title="Back to top"
            aria-label="Back to top"
          >
            <span className="material-symbols-outlined text-lg">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
