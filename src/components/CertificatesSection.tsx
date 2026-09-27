import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, Certificate } from '../data/portfolioData';

interface CertificatesSectionProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  onSelectCertificate,
}) => {
  const { certificates } = PORTFOLIO_DATA;

  return (
    <section className="scroll-mt-32" id="certificates">
      {/* Section Header */}
      <motion.div
        className="space-y-3 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-1.5 text-[#2563EB] font-label-lg text-xs font-semibold tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">workspace_premium</span>
          <span>{certificates.badge}</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-[#0F172A]">
          {certificates.title}
        </h2>
        <p className="font-body-md text-body-md text-[#64748B] max-w-2xl">
          {certificates.subtitle}
        </p>
      </motion.div>

      {/* Grid of 6 Verified Certificates with Staggered Reveal */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {certificates.items.map((cert: Certificate) => (
          <motion.div
            key={cert.id}
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
            className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#BFDBFE] transition-all flex flex-col justify-between cursor-pointer group"
            onClick={() => onSelectCertificate(cert)}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    cert.color === 'primary'
                      ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]'
                      : 'bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]'
                  }`}
                >
                  {cert.issuer}
                </span>
                <span className="text-xs text-[#64748B] font-code-sm">
                  {cert.issueYear}
                </span>
              </div>

              <h3 className="font-headline-sm text-base font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                {cert.title}
              </h3>

              <p className="text-[#64748B] text-xs leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
              {/* View Certificate (Opens Original Document) */}
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-xs transition-colors"
                title={`View Original Certificate: ${cert.title}`}
              >
                <span>View Certificate</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>

              {/* Credly Verification Link (if available) */}
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0284C7] hover:underline"
                  title="Verify on Credly"
                >
                  <span>Credly</span>
                  <span className="material-symbols-outlined text-xs">launch</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
