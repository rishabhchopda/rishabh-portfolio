import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, ExperienceItem } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section className="scroll-mt-32" id="experience">
      {/* Section Header */}
      <motion.div
        className="space-y-3 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-1.5 text-[#2563EB] font-label-lg text-xs font-semibold tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">work_history</span>
          <span>{experience.badge}</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-[#0F172A]">
          {experience.title}
        </h2>
        <p className="font-body-md text-body-md text-[#64748B] max-w-2xl">
          {experience.subtitle}
        </p>
      </motion.div>

      {/* Vertical Continuous Timeline with Progressive Reveal */}
      <div className="relative pl-6 sm:pl-10 space-y-10">
        {/* Animated Timeline Spine */}
        <motion.div
          className="absolute left-2 sm:left-3 top-3 bottom-3 w-0.5 bg-[#E2E8F0] origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Timeline Items */}
        {experience.items.map((item: ExperienceItem, idx: number) => {
          return (
            <div key={item.id} className="relative group">
              {/* Timeline Marker with Reveal */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.18 + 0.1 }}
                className="absolute -left-[23px] sm:-left-[35px] top-1.5 h-4 w-4 rounded-full bg-[#2563EB] ring-4 ring-[#DBEAFE] shadow-xs z-10"
              />

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: 24, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#BFDBFE] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-headline-md text-lg sm:text-xl font-bold text-[#0F172A]">
                    {item.role}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold w-fit bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#0284C7] mb-3">
                  <span>{item.company}</span>
                  {item.location && (
                    <>
                      <span>•</span>
                      <span className="text-[#64748B] font-normal">{item.location}</span>
                    </>
                  )}
                </div>

                <ul className="space-y-2 text-[#475569] text-sm mb-4 list-disc list-inside leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#E2E8F0]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-code-sm bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-1 rounded text-[#334155] hover:text-[#2563EB] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
