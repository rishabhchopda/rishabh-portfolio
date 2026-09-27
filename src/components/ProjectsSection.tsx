import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section className="scroll-mt-32" id="projects">
      {/* Section Header */}
      <motion.div
        className="space-y-3 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-1.5 text-[#2563EB] font-label-lg text-xs font-semibold tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">folder_open</span>
          <span>{projects.badge}</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-[#0F172A]">
          {projects.title}
        </h2>
        <p className="font-body-md text-body-md text-[#64748B] max-w-2xl">
          {projects.subtitle}
        </p>
      </motion.div>

      {/* Projects Grid with Staggered Reveal */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
        {projects.items.map((project: Project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.97 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#BFDBFE] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
            onClick={() => onSelectProject(project)}
          >
            <div className="p-6 space-y-4">
              {/* Top Icons Bar */}
              <div className="flex items-center justify-between">
                <span
                  className={`p-2.5 rounded-xl transition-transform group-hover:scale-105 duration-200 ${
                    project.color === 'primary'
                      ? 'bg-[#EFF6FF] text-[#2563EB]'
                      : 'bg-[#E0F2FE] text-[#0284C7]'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {project.icon}
                  </span>
                </span>

                <div
                  className="flex items-center gap-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-1.5 rounded-lg text-[#64748B] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-colors cursor-pointer"
                    title="View System Details"
                  >
                    <span className="material-symbols-outlined text-lg">info</span>
                  </button>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-[#64748B] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-colors"
                      title="GitHub Repository"
                    >
                      <span className="material-symbols-outlined text-lg">code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-[#64748B] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-colors"
                      title="Live Demo"
                    >
                      <span className="material-symbols-outlined text-lg">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Category */}
              <div>
                <h3 className="font-headline-md text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#0284C7] font-semibold mt-0.5">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-[#64748B] text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="text-xs text-[#475569] space-y-1.5 list-disc list-inside">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Tags Bottom Bar */}
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2E8F0]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs font-code-sm font-medium bg-[#F8FAFC] border border-[#E2E8F0] text-[#334155]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
