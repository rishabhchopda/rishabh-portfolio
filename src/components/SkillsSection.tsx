import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section className="scroll-mt-32" id="skills">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto space-y-3 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-1.5 text-[#2563EB] font-label-lg text-xs font-semibold tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">code</span>
          <span>{skills.badge}</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-[#0F172A]">
          {skills.title}
        </h2>
        <p className="font-body-md text-body-md text-[#64748B]">
          {skills.subtitle}
        </p>
      </motion.div>

      {/* Categories Grid with Staggered Sequence */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {skills.categories.map((category) => (
          <motion.div
            key={category.title}
            variants={{
              hidden: { opacity: 0, y: 28, scale: 0.97 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#BFDBFE] transition-all space-y-4"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-xl ${
                  category.iconColor === 'primary'
                    ? 'bg-[#EFF6FF] text-[#2563EB]'
                    : category.iconColor === 'secondary'
                    ? 'bg-[#E0F2FE] text-[#0284C7]'
                    : 'bg-[#F1F5F9] text-[#475569]'
                }`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {category.icon}
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-base font-bold text-[#0F172A]">
                  {category.title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed">
              {category.description}
            </p>

            {/* Badges without arbitrary percentages */}
            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all hover:scale-105 ${
                    skill.highlight
                      ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] font-bold shadow-xs'
                      : 'bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] hover:border-[#CBD5E1]'
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
