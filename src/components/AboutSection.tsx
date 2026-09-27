import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const { about } = PORTFOLIO_DATA;

  return (
    <section className="scroll-mt-32" id="about">
      {/* Section Header */}
      <motion.div
        className="space-y-3 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-1.5 text-[#2563EB] font-label-lg text-xs font-semibold tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">person</span>
          <span>{about.badge}</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-[#0F172A] tracking-tight">
          {about.title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Story Narrative */}
        <motion.div
          className="lg:col-span-7 space-y-5 text-[#64748B] font-body-md text-body-md leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {about.paragraphs.map((p, idx) => (
            <p key={idx} className="text-[#0F172A]/80 leading-relaxed font-normal text-base sm:text-lg">
              {p}
            </p>
          ))}

          {/* Highlights checklist */}
          <div className="pt-3 flex flex-wrap gap-2.5">
            {about.features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl bg-white text-[#0F172A] border border-[#E2E8F0] shadow-xs"
              >
                <span className="material-symbols-outlined text-base text-[#2563EB]">
                  check_circle
                </span>
                {feature}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 4 Focus Area Cards (Verified, no fabricated numbers) */}
        <motion.div
          className="lg:col-span-5 grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.15,
              },
            },
          }}
        >
          {about.highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => {
                if (idx === 0) onNavigate('skills');
                else if (idx === 1) onNavigate('skills');
                else if (idx === 2) onNavigate('skills');
                else if (idx === 3) onNavigate('current-project');
              }}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#BFDBFE] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    item.color === 'primary'
                      ? 'bg-[#EFF6FF] text-[#2563EB]'
                      : 'bg-[#E0F2FE] text-[#0284C7]'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <h3 className="font-headline-sm text-sm font-bold text-[#0F172A]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#64748B] mt-2 leading-relaxed font-medium">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
