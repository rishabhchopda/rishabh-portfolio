import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, ResearchPaper } from '../data/portfolioData';

export const ResearchSection: React.FC = () => {
  const { research } = PORTFOLIO_DATA;

  return (
    <section className="scroll-mt-32" id="research">
      {/* Section Header */}
      <motion.div
        className="space-y-3 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-1.5 text-[#2563EB] font-label-lg text-xs font-semibold tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">menu_book</span>
          <span>{research.badge}</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-[#0F172A]">
          {research.title}
        </h2>
        <p className="font-body-md text-body-md text-[#64748B] max-w-2xl">
          {research.subtitle}
        </p>
      </motion.div>

      {/* Research Papers Grid with Staggered Reveal */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {research.papers.map((paper: ResearchPaper) => (
          <motion.div
            key={paper.id}
            variants={{
              hidden: { opacity: 0, y: 25, scale: 0.97 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#BFDBFE] transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Document Icon & Area Badge */}
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                  <span className="material-symbols-outlined text-2xl">
                    {paper.icon}
                  </span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                  {paper.area}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-headline-md text-base sm:text-lg font-bold text-[#0F172A] leading-snug">
                  {paper.title}
                </h3>
                <p className="text-xs text-[#0284C7] font-semibold mt-1">
                  {paper.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-[#64748B] text-sm leading-relaxed">
                {paper.description}
              </p>
            </div>

            {/* Action Bar & Tags */}
            <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-code-sm bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-0.5 rounded text-[#334155]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Original Paper Button */}
              <a
                href={paper.paperUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-xs transition-all active:scale-95 shrink-0"
                title={`Open ${paper.title} in new tab`}
              >
                <span>View Original Paper</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
