import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Certificate } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
}) => {
  if (!certificate) return null;

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
          className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E2E8F0] z-10 space-y-5"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#E2E8F0] pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                  {certificate.issuer}
                </span>
                <span className="text-xs font-code-sm text-[#64748B]">
                  {certificate.issueYear}
                </span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-[#0F172A]">
                {certificate.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-[#64748B] hover:text-[#0F172A] p-1 rounded-full cursor-pointer hover:bg-[#F1F5F9] transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-[#475569] leading-relaxed">
            {certificate.description}
          </p>

          {/* Skills / Topics Verified */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
              Topics &amp; Skills Covered
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg text-xs bg-[#F8FAFC] text-[#334155] font-medium border border-[#E2E8F0]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-between text-xs">
            <span className="text-[#64748B]">Program Status:</span>
            <span className="font-semibold text-[#2563EB] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>Verified Credential / Simulation</span>
            </span>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
            >
              Close
            </button>
            <div className="flex items-center gap-2">
              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-colors"
              >
                <span>View Certificate</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] text-xs font-semibold px-3 py-2 rounded-lg shadow-xs transition-colors"
                >
                  <span>Credly</span>
                  <span className="material-symbols-outlined text-sm">launch</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
