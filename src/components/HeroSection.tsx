import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenResume }) => {
  const { profile, ideSnippet } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(ideSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="scroll-mt-32 pt-6 sm:pt-12" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-7 space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.05,
              },
            },
          }}
        >
          {/* Status Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-label-md text-xs shadow-xs font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
            </span>
            <span>{profile.statusBadge}</span>
          </motion.div>

          {/* Positioning Tag */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B]"
          >
            <span>{profile.title}</span>
            <span>•</span>
            <span className="text-[#2563EB]">{profile.positioning}</span>
          </motion.div>

          {/* Headline: Hi, I'm Rishabh Chopda */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="font-display-hero text-display-hero-mobile md:text-display-hero font-extrabold text-[#0F172A] tracking-tight leading-tight"
          >
            Hi, I'm{' '}
            <span className="text-[#2563EB] underline decoration-[#93C5FD] underline-offset-8">
              Rishabh Chopda
            </span>
            <span className="block mt-2 font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-[#0F172A]">
              {profile.headline}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-body-lg text-body-lg text-[#64748B] max-w-2xl leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          {/* CTA Buttons & Socials */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            {/* View My Work */}
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-label-lg text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer font-semibold"
            >
              <span>View My Work</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>

            {/* View Resume (Original PDF) */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#EFF6FF] text-[#0F172A] hover:text-[#2563EB] font-label-lg text-sm px-5 py-3 rounded-xl border border-[#E2E8F0] hover:border-[#BFDBFE] shadow-xs transition-all duration-200 active:scale-95 cursor-pointer font-semibold"
              title="View Original Resume in New Tab"
            >
              <span>View Resume</span>
              <span className="material-symbols-outlined text-lg text-[#2563EB]">visibility</span>
            </a>

            {/* Download Resume (Original PDF) */}
            <a
              href={profile.resumeUrl}
              download="Rishabh_Chopda_Resume.pdf"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#EFF6FF] text-[#0F172A] hover:text-[#2563EB] font-label-lg text-sm px-5 py-3 rounded-xl border border-[#E2E8F0] hover:border-[#BFDBFE] shadow-xs transition-all duration-200 active:scale-95 cursor-pointer font-semibold"
              title="Download Original Resume PDF"
            >
              <span>Download Resume</span>
              <span className="material-symbols-outlined text-lg text-[#2563EB]">download</span>
            </a>

            {/* Verified Social Links */}
            <div className="flex items-center gap-2 pl-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-[#E2E8F0] bg-white text-[#64748B] hover:text-[#2563EB] hover:border-[#93C5FD] hover:bg-[#EFF6FF] transition-all shadow-xs active:scale-95"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <span className="material-symbols-outlined text-xl">code</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-[#E2E8F0] bg-white text-[#64748B] hover:text-[#2563EB] hover:border-[#93C5FD] hover:bg-[#EFF6FF] transition-all shadow-xs active:scale-95"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <span className="material-symbols-outlined text-xl">person_pin</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Developer Visual Card */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl bg-white border border-[#E2E8F0] shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[#93C5FD]">
            {/* Ambient decorative floating glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#38BDF8]/15 rounded-full blur-2xl pointer-events-none" />

            {/* IDE Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block"></span>
                <span className="ml-2 font-code-sm text-xs text-[#64748B]">
                  {ideSnippet.fileName}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyCode}
                  className="text-xs font-code-sm text-[#64748B] hover:text-[#2563EB] transition-colors flex items-center gap-1 cursor-pointer"
                  title="Copy Python snippet"
                >
                  <span className="material-symbols-outlined text-sm">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <div className="flex items-center gap-1 text-[#64748B] font-code-sm text-xs border-l border-[#E2E8F0] pl-2">
                  <span className="material-symbols-outlined text-sm">memory</span>
                  <span>{ideSnippet.pythonVersion}</span>
                </div>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 font-code-sm text-xs bg-white text-[#0F172A] space-y-2 select-text">
              <p className="text-[#64748B]"># Systems &amp; AI/ML Engineering</p>
              <p>
                <span className="text-[#2563EB] font-bold">class</span>{' '}
                <span className="text-[#0284C7] font-bold">SoftwareEngineer</span>:
              </p>
              <div className="pl-4 space-y-1">
                <p>
                  <span className="text-[#2563EB]">def</span>{' '}
                  <span className="text-[#475569]">__init__</span>(self):
                </p>
                <p className="pl-4 text-[#64748B]">
                  self.name = <span className="text-[#2563EB]">"Rishabh Chopda"</span>
                </p>
                <p className="pl-4 text-[#64748B]">
                  self.title ={' '}
                  <span className="text-[#2563EB]">"Computer Science &amp; Engineering Student"</span>
                </p>
                <p className="pl-4 text-[#64748B]">
                  self.focus = [
                  <span className="text-[#0284C7]">"AI/ML"</span>,{' '}
                  <span className="text-[#0284C7]">"Data Science"</span>,{' '}
                  <span className="text-[#0284C7]">"NLP"</span>,{' '}
                  <span className="text-[#0284C7]">"Full-Stack"</span>]
                </p>
                <p className="pl-4 text-[#64748B]">
                  self.status ={' '}
                  <span className="text-[#2563EB]">"Currently Building CareerCompass"</span>
                </p>
              </div>
              <div className="pl-4 pt-2">
                <p>
                  <span className="text-[#2563EB]">def</span>{' '}
                  <span className="text-[#475569]">build_solution</span>(self, problem):
                </p>
                <p className="pl-4 text-[#0284C7] bg-[#EFF6FF] p-2 rounded-lg border border-[#DBEAFE] mt-1 font-semibold">
                  return intelligent_pipeline(problem, semantic_eval=True)
                </p>
              </div>
            </div>

            {/* Status Node Bar */}
            <div className="p-3 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#2563EB] animate-pulse"></span>
                <span className="font-code-sm text-xs text-[#0F172A] font-semibold">
                  {ideSnippet.status}
                </span>
              </div>
              <span className="font-code-sm text-xs text-[#64748B]">{ideSnippet.latency}</span>
            </div>

            {/* Floating Tech Badges */}
            <div className="p-4 bg-white flex flex-wrap gap-2 border-t border-[#E2E8F0]">
              {ideSnippet.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] transition-all hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="flex justify-center pt-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <button
          onClick={() => onNavigate('about')}
          className="flex flex-col items-center gap-2 text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer group"
          aria-label="Scroll to explore about section"
        >
          <span className="font-label-md text-xs font-semibold group-hover:text-[#2563EB]">
            Scroll to explore
          </span>
          <span className="material-symbols-outlined text-2xl animate-bounce text-[#2563EB]">
            expand_more
          </span>
        </button>
      </motion.div>
    </section>
  );
};
