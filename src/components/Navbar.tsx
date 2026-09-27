import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenTerminal,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 rounded-full z-50 w-[92vw] max-w-5xl mx-auto border border-[#E2E8F0] bg-white/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'shadow-lg border-[#CBD5E1]' : 'shadow-md hover:shadow-lg'
      }`}
    >
      <nav
        className="flex items-center justify-between px-3 sm:px-6 py-2 sm:py-2.5 w-full"
        aria-label="Main Navigation"
      >
        {/* Brand Logo - Rishabh */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick('hero', e)}
          className="flex items-center gap-2 font-headline-sm text-headline-sm font-bold text-[#2563EB] transition-transform active:scale-95 pl-1"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]"></span>
          </span>
          <span className="tracking-tight text-base sm:text-lg font-bold text-[#0F172A]">
            Rishabh<span className="text-[#2563EB]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links with Smooth Moving Indicator */}
        <div className="hidden lg:flex items-center gap-1 font-label-md text-label-md relative">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(item.id, e)}
                className={`relative px-3.5 py-1.5 rounded-full transition-colors duration-200 z-10 select-none text-xs font-semibold ${
                  isActive
                    ? 'text-[#2563EB] font-bold'
                    : 'text-[#64748B] hover:text-[#2563EB]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#DBEAFE]/80 rounded-full -z-10 shadow-xs border border-[#2563EB]/25"
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 34,
                    }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Trailing Action & Dev Tools */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="p-1.5 sm:p-2 rounded-full text-[#64748B] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-colors duration-150 active:scale-95 flex items-center justify-center cursor-pointer"
            title="Open Interactive Dev Terminal"
            aria-label="Open Interactive Dev Terminal"
          >
            <span className="material-symbols-outlined text-lg sm:text-xl">terminal</span>
          </button>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-label-md text-label-md px-3.5 sm:px-4 py-1.5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer text-xs font-semibold"
            title="View & Download Resume"
          >
            <span>Resume</span>
            <span className="material-symbols-outlined text-base">download</span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-1.5 rounded-full text-[#0F172A] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-colors active:scale-95 flex items-center justify-center cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden px-4 py-4 border-t border-[#E2E8F0] bg-white/95 backdrop-blur-md rounded-b-3xl shadow-xl flex flex-col gap-1.5"
          >
            <div className="grid grid-cols-2 gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(item.id, e)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#DBEAFE] text-[#2563EB]'
                        : 'text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#2563EB]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                    )}
                  </a>
                );
              })}
            </div>
            <div className="pt-2 mt-1 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#EFF6FF] text-xs font-semibold text-[#0F172A] hover:text-[#2563EB]"
              >
                <span className="material-symbols-outlined text-base">terminal</span>
                <span>Dev Terminal</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#2563EB] text-xs font-semibold text-white hover:bg-[#1D4ED8]"
              >
                <span>Resume</span>
                <span className="material-symbols-outlined text-base">download</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
