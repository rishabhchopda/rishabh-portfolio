import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, education, experience, skills } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handleDownload = () => {
    window.print();
  };

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
          className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E2E8F0] z-10 space-y-6 max-h-[85vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#E2E8F0] pb-4">
            <div>
              <h3 className="font-headline-md text-xl font-bold text-[#0F172A]">
                {profile.name}
              </h3>
              <p className="text-xs text-[#0284C7] font-semibold">
                {profile.title} • {profile.positioning}
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                {profile.email} • {profile.location}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] rounded-lg text-xs font-semibold hover:bg-[#DBEAFE] shadow-xs transition-colors cursor-pointer"
                title="Open Official Resume PDF in New Tab"
              >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
                <span>View PDF</span>
              </a>
              <a
                href={profile.resumeUrl}
                download="Rishabh_Chopda_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB] text-white rounded-lg text-xs font-semibold hover:bg-[#1D4ED8] shadow-xs transition-colors cursor-pointer"
                title="Download Official Resume PDF"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Download PDF</span>
              </a>
              <button
                onClick={onClose}
                className="text-[#64748B] hover:text-[#0F172A] p-1.5 rounded-full cursor-pointer hover:bg-[#F1F5F9] transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              Education
            </h4>
            <div className="text-xs space-y-1 bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0]">
              <div className="flex justify-between font-bold text-[#0F172A]">
                <span>{education.degree}</span>
                <span className="font-code-sm">{education.period}</span>
              </div>
              <p className="text-[#0284C7] font-semibold">{education.institution} • {education.location}</p>
              <p className="text-[#64748B] font-medium">Cumulative CGPA: <strong className="text-[#2563EB]">{education.cgpa}</strong></p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              Internship Experience
            </h4>
            <div className="space-y-3">
              {experience.items.map((item) => (
                <div key={item.id} className="text-xs space-y-1.5 bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0]">
                  <div className="flex justify-between font-bold text-[#0F172A]">
                    <span>{item.role}</span>
                    <span className="text-[#64748B] font-medium">{item.period}</span>
                  </div>
                  <p className="text-[#0284C7] font-semibold">{item.company} {item.location ? `• ${item.location}` : ''}</p>
                  <ul className="list-disc list-inside text-[#475569] space-y-1 pt-1 leading-relaxed">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              Technical Core &amp; Technologies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skills.categories.map((cat) => (
                <div
                  key={cat.title}
                  className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
                >
                  <p className="font-bold text-[#0F172A]">{cat.title}</p>
                  <p className="text-[11px] text-[#64748B] mt-1 leading-normal">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer close */}
          <div className="pt-2 border-t border-[#E2E8F0] flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#F1F5F9] text-xs font-semibold text-[#0F172A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
