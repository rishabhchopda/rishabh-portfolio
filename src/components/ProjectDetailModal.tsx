import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F172A]/50 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E2E8F0] z-10 space-y-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#E2E8F0] pb-4">
            <div className="flex items-center gap-3">
              <span
                className={`p-3 rounded-2xl ${
                  project.color === 'primary' ? 'bg-[#EFF6FF] text-[#2563EB]' : 'bg-[#E0F2FE] text-[#0284C7]'
                }`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {project.icon}
                </span>
              </span>
              <div>
                <h3 className="font-headline-md text-xl font-bold text-[#0F172A]">
                  {project.title}
                </h3>
                <p className="text-xs text-[#0284C7] font-semibold">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-[#64748B] hover:text-[#0F172A] p-1.5 rounded-full cursor-pointer hover:bg-[#F1F5F9] transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
              System Overview
            </h4>
            <p className="text-sm text-[#475569] leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Architecture Breakdown */}
          {project.architectureDetails && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                Architecture &amp; Implementation Details
              </h4>
              <ul className="space-y-2 text-xs text-[#334155] bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]">
                {project.architectureDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#2563EB] text-sm mt-0.5 shrink-0">
                      arrow_right
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 text-xs text-[#334155] bg-[#F8FAFC] px-3 py-2 rounded-lg border border-[#E2E8F0]"
                >
                  <span className="material-symbols-outlined text-[#2563EB] text-sm shrink-0">
                    check_circle
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-code-sm bg-[#EFF6FF] text-[#2563EB] font-medium border border-[#BFDBFE]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-label-md text-xs px-4 py-2 rounded-lg shadow-xs transition-all active:scale-95"
                >
                  <span>View Repository</span>
                  <span className="material-symbols-outlined text-sm">code</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-label-md text-xs px-4 py-2 rounded-lg shadow-xs transition-all active:scale-95"
                >
                  <span>Live Demo</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#E2E8F0] text-xs font-semibold text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
