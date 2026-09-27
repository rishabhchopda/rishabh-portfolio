import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section className="scroll-mt-32" id="education">
      {/* Section Header */}
      <motion.div
        className="space-y-3 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-1.5 text-[#2563EB] font-label-lg text-xs font-semibold tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">school</span>
          <span>{education.badge}</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-[#0F172A]">
          {education.title}
        </h2>
      </motion.div>

      {/* Main Academic Card */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-md hover:shadow-lg transition-all"
      >
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-[#E2E8F0] pb-6">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
              {education.degreeBadge}
            </div>
            <h3 className="font-headline-lg text-xl sm:text-2xl font-bold text-[#0F172A]">
              {education.degree}
            </h3>
            <p className="font-headline-sm text-base text-[#0284C7] font-semibold">
              {education.institution} • {education.location}
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2 shrink-0">
            <span className="inline-block px-4 py-1.5 rounded-full font-code-sm text-xs bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] font-bold">
              {education.period}
            </span>
            <div className="p-3 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-center md:text-right">
              <span className="text-xs text-[#64748B] block font-medium">Cumulative CGPA</span>
              <span className="font-display-hero text-2xl font-extrabold text-[#2563EB]">
                {education.cgpa}
              </span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="pt-6 space-y-3">
          <h4 className="font-headline-sm text-sm font-bold text-[#0F172A] uppercase tracking-wider">
            Academic Focus &amp; Foundations
          </h4>
          <ul className="text-sm text-[#475569] space-y-2.5">
            {education.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#2563EB] text-base mt-0.5 shrink-0">
                  verified
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
