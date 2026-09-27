import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CurrentProjectSection: React.FC = () => {
  const { currentProject } = PORTFOLIO_DATA;
  const { mockup } = currentProject;

  return (
    <section className="scroll-mt-32" id="current-project">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl bg-gradient-to-br from-white via-[#F8FAFC] to-[#EFF6FF] border-2 border-[#BFDBFE] p-6 sm:p-10 md:p-12 shadow-xl relative overflow-hidden"
      >
        {/* Ambient decorative blur */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Text and Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#93C5FD] text-[#2563EB] font-label-md text-xs font-semibold shadow-xs">
                <span className="h-2 w-2 rounded-full bg-[#2563EB] animate-ping" />
                <span>{currentProject.status}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#0284C7] font-code-sm text-xs font-semibold shadow-xs">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>{currentProject.testStatistic}</span>
              </div>
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <h2 className="font-display-hero text-headline-lg md:text-display-hero font-extrabold text-[#0F172A] tracking-tight">
                {currentProject.title}
              </h2>
              <p className="font-headline-sm text-base sm:text-lg text-[#0284C7] font-semibold mt-1">
                {currentProject.subtitle}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="font-body-md text-body-md text-[#475569] leading-relaxed"
            >
              {currentProject.description}
            </motion.p>

            {/* AI/ML Highlight Callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.42, duration: 0.5 }}
              className="p-4 rounded-xl bg-white border border-[#BFDBFE] shadow-xs space-y-1.5"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-wide">
                <span className="material-symbols-outlined text-base text-[#2563EB]">
                  psychology
                </span>
                <span>{currentProject.aiHighlightTitle}</span>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {currentProject.aiHighlightExplanation}
              </p>
            </motion.div>

            {/* Verified Capabilities Checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-2 pt-1"
            >
              <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                Core Modules &amp; Verified Features
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {currentProject.capabilities.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 text-xs text-[#334155] font-medium bg-white/80 px-2.5 py-1.5 rounded-lg border border-[#E2E8F0]"
                  >
                    <span className="material-symbols-outlined text-[#2563EB] text-sm shrink-0">
                      check_circle
                    </span>
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-2 flex flex-wrap gap-1.5"
            >
              {currentProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white border border-[#E2E8F0] text-[#0F172A] shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Application Engine Interactive Mockup Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-2xl border border-[#BFDBFE] shadow-lg p-5 space-y-4 hover:shadow-xl transition-all">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2563EB] text-xl">
                    psychology
                  </span>
                  <span className="font-headline-sm text-sm font-bold text-[#0F172A]">
                    {mockup.title}
                  </span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] font-code-sm text-[#2563EB] font-semibold">
                  {mockup.status}
                </span>
              </div>

              {/* Match Gauge Preview */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#64748B]">Profile Compatibility</p>
                  <p className="font-display-hero text-headline-lg font-extrabold text-[#2563EB]">
                    {mockup.matchScore}
                  </p>
                  <p className="text-xs text-[#0284C7] font-semibold mt-0.5">
                    {mockup.matchLabel}
                  </p>
                </div>
                <div className="h-16 w-16 rounded-full border-4 border-[#2563EB] border-t-[#38BDF8] flex flex-col items-center justify-center font-bold text-xs text-[#2563EB] shadow-xs text-center p-1">
                  <span>ATS</span>
                  <span className="text-[9px] text-[#64748B]">Ready</span>
                </div>
              </div>

              {/* Skill breakdown simulation */}
              <div className="space-y-2.5 text-xs">
                {mockup.breakdown.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[#475569] font-medium">
                      <span>{item.label}</span>
                      <span className="font-semibold text-[#2563EB]">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-[#EFF6FF] rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="bg-[#2563EB] h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.4 + idx * 0.15, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Testing Status Badge */}
              <div className="p-3 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-xs text-[#2563EB] flex items-center justify-between font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">task_alt</span>
                  <span>Test Suite Reliability:</span>
                </span>
                <span className="font-code-sm bg-white px-2 py-0.5 rounded border border-[#BFDBFE]">
                  287 Passed · 0 Failed
                </span>
              </div>

              {/* AI Note Banner */}
              <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0284C7] text-base shrink-0">
                  insights
                </span>
                <span>{mockup.aiNote}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
