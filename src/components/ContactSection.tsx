import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact, profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="scroll-mt-32" id="contact">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto space-y-3 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-1.5 text-[#2563EB] font-label-lg text-xs font-semibold tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">alternate_email</span>
          <span>{contact.badge}</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-[#0F172A]">
          {contact.title}
        </h2>
        <p className="font-body-md text-body-md text-[#64748B]">
          {contact.subtitle}
        </p>
      </motion.div>

      {/* Clean Professional Contact Methods (No Form, No Phone) */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8F0] shadow-xl space-y-8">
          {/* Main Direct Email Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#EFF6FF] to-[#F8FAFC] border border-[#BFDBFE] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-white text-[#2563EB] shadow-xs shrink-0">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <div>
                <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                  Direct Email Contact
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-headline-md text-xl sm:text-2xl font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                >
                  {profile.email}
                </a>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Best way to reach out for career discussions and engineering collaborations.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl border border-[#BFDBFE] bg-white text-xs font-semibold text-[#0F172A] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-base text-[#2563EB]">
                  {copied ? 'check' : 'content_copy'}
                </span>
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
              >
                <span>Send Email</span>
                <span className="material-symbols-outlined text-base">send</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* GitHub Card */}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#BFDBFE] hover:bg-[#EFF6FF]/50 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] group-hover:text-[#2563EB] transition-colors shadow-xs">
                  <span className="material-symbols-outlined text-2xl">code</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    GitHub
                  </h3>
                  <p className="text-xs text-[#64748B]">Explore code repositories &amp; open source</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-lg text-[#64748B] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#BFDBFE] hover:bg-[#EFF6FF]/50 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] group-hover:text-[#2563EB] transition-colors shadow-xs">
                  <span className="material-symbols-outlined text-2xl">person_pin</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-xs text-[#64748B]">Connect for career networking &amp; updates</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-lg text-[#64748B] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </a>
          </div>

          {/* Location & Timezone Footer Note */}
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#64748B]">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-[#2563EB] text-sm">location_on</span>
              <span>{profile.location}</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-[#0284C7] text-sm">schedule</span>
              <span>{profile.timeZone}</span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
