import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('ATS Optimization');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-on-surface/40 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/80 z-10 space-y-5"
          >
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/40">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">
                  rocket_launch
                </span>
                <h3 className="font-headline-md text-lg font-bold text-on-surface">
                  CareerCompass Early Access
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-on-surface-variant hover:text-on-surface p-1 rounded-full cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="space-y-4 py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mx-auto text-primary">
                  <span className="material-symbols-outlined text-2xl">check</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-base font-bold text-on-surface">
                    You're on the priority list!
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                    We've registered <span className="font-semibold text-on-surface">{email}</span> for Beta v0.8 onboarding. You'll receive early access credentials soon.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 text-xs font-code-sm text-secondary">
                  Access Code: CC-BETA-2025-EARLY
                </div>
                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs font-semibold shadow-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Join the closed preview of CareerCompass. Experience real-time transformer embedding job matching and ATS resume audits before public launch.
                </p>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-on-surface">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-outline-variant/80 bg-surface-container-lowest text-on-surface text-xs focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-on-surface">
                    Primary Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-outline-variant/80 bg-surface-container-lowest text-on-surface text-xs focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  >
                    <option value="ATS Optimization">ATS Keyword &amp; Semantic Audit</option>
                    <option value="Job Matching">Transformer Embedding Job Matching</option>
                    <option value="Cover Letter">Contextual AI Cover Letter Synthesis</option>
                    <option value="Skill Roadmap">Skill Deficit &amp; Learning Roadmap</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs font-semibold shadow-md transition-all active:scale-95 disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined text-sm animate-spin">
                        progress_activity
                      </span>
                      <span>Submitting request...</span>
                    </>
                  ) : (
                    <>
                      <span>Join Early Access List</span>
                      <span className="material-symbols-outlined text-base">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
