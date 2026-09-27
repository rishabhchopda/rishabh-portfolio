import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CurrentProjectSection } from './components/CurrentProjectSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { CertificatesSection } from './components/CertificatesSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { Project, Certificate } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // Smooth scroll handler with offset for floating navbar
  const handleNavigate = (sectionId: string) => {
    // If navigating to projects from nav, scroll to current-project as top of work portfolio
    const targetId = sectionId === 'projects' ? 'current-project' : sectionId;
    const target = document.getElementById(targetId) || document.getElementById(sectionId);

    if (target) {
      const navOffset = 84;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update active nav item
      let activeNav = sectionId;
      if (['current-project', 'projects', 'research'].includes(sectionId)) {
        activeNav = 'projects';
      }
      setActiveSection(activeNav);
    }
  };

  // Performant Scrollspy using IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'skills',
      'experience',
      'current-project',
      'projects',
      'research',
      'certificates',
      'education',
      'contact',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find all intersecting entries
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the top-most visible entry currently in the upper viewport threshold
        const topEntry = visibleEntries.reduce((prev, current) =>
          prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current
        );
        const id = topEntry.target.id;
        
        // Map current-project, projects, and research to the 'projects' nav tab
        if (id === 'current-project' || id === 'projects' || id === 'research') {
          setActiveSection('projects');
        } else {
          setActiveSection(id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: [0, 0.15, 0.5],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard shortcut listener: Ctrl+K or ~ opens dev terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === 'k') || e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F9FF] text-[#0F172A] antialiased selection:bg-[#DBEAFE] selection:text-[#1E3A8A] relative overflow-x-hidden font-body-md text-body-md">
      {/* Background Subtle Micro-Grid Ambient Mesh from Stitch Design */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Floating Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Single Page Scrollable Canvas */}
      <main className="relative z-10 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        {/* Section 1: Home / Hero */}
        <HeroSection
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section 2: About Me */}
        <AboutSection onNavigate={handleNavigate} />

        {/* Section 3: Skills & Technologies */}
        <SkillsSection />

        {/* Section 4: Experience */}
        <ExperienceSection />

        {/* Section 5: Current Project (CareerCompass Spotlight) */}
        <CurrentProjectSection />

        {/* Section 6: Completed Projects */}
        <ProjectsSection onSelectProject={setSelectedProject} />

        {/* Section 7: Research */}
        <ResearchSection />

        {/* Section 8: Certificates & Achievements */}
        <CertificatesSection onSelectCertificate={setSelectedCertificate} />

        {/* Section 9: Education */}
        <EducationSection />

        {/* Section 10: Contact */}
        <ContactSection />
      </main>

      {/* Section 11: Footer */}
      <Footer onScrollToTop={() => handleNavigate('hero')} />

      {/* Interactive Modals */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigate={handleNavigate}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
