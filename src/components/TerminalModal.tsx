import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const { profile } = PORTFOLIO_DATA;
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'whoami',
      output: (
        <span className="text-[#F8FAFC]">
          Rishabh — Computer Science &amp; Engineering Student, Indus University.
        </span>
      ),
    },
    {
      command: 'cat current_status.json',
      output: (
        <span className="text-[#93C5FD]">
          {'{ "project": "CareerCompass", "focus": "AI/ML, NLP, Data Science & Full-Stack", "status": "Active" }'}
        </span>
      ),
    },
    {
      command: 'help',
      output: (
        <span className="text-[#94A3B8]">
          Available commands: whoami, status, skills, projects, research, contact, clear, exit
        </span>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Handle escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'exit') {
      onClose();
      setInputVal('');
      return;
    }

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'whoami':
        output = (
          <span className="text-[#F8FAFC]">
            Rishabh — B.Tech Computer Science &amp; Engineering @ Indus University (2023–2027, CGPA 9.2+).
          </span>
        );
        break;
      case 'status':
      case 'cat current_status.json':
        output = (
          <span className="text-[#93C5FD]">
            {'{ "project": "CareerCompass", "focus": "Resume Intelligence & Hybrid Job Matching", "tests": "287 passed, 0 failures" }'}
          </span>
        );
        break;
      case 'skills':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-[#BAE6FD]">
              Languages: Python, Java, C++, C, SQL, JavaScript, HTML, CSS
            </p>
            <p className="text-[#BAE6FD]">
              AI/ML/Data Science: Scikit-learn, Pandas, NumPy, TF-IDF, NLP, EDA, Sentence Transformers
            </p>
            <p className="text-[#BAE6FD]">
              Backend &amp; DB: Flask, FastAPI, Django, REST APIs, PostgreSQL, Supabase, MySQL, SQLite
            </p>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-[#F8FAFC]">1. CareerCompass (Currently Building) — Resume-Intelligent Job Matching</p>
            <p className="text-[#F8FAFC]">2. Research Assistant — AI-Powered Academic Research Platform</p>
            <p className="text-[#F8FAFC]">3. AI Text Detector — Human vs AI-Generated Text Classification</p>
            <p className="text-[#F8FAFC]">4. Inventory Management System — Odoo × Indus University Hackathon</p>
            <button
              onClick={() => {
                onClose();
                onNavigate('projects');
              }}
              className="text-xs text-[#93C5FD] underline hover:text-white mt-1 cursor-pointer block"
            >
              &gt; Jump to Projects section
            </button>
          </div>
        );
        break;
      case 'research':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-[#F8FAFC]">1. Research Assistant: An Integrated NLP and Generative AI Platform for Academic Research Support</p>
            <p className="text-[#F8FAFC]">2. CareerCompass: An Integrated Resume-Intelligent Job Matching and Placement Management Platform</p>
            <button
              onClick={() => {
                onClose();
                onNavigate('research');
              }}
              className="text-xs text-[#93C5FD] underline hover:text-white mt-1 cursor-pointer block"
            >
              &gt; Jump to Research section
            </button>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-[#F8FAFC]">Email: {profile.email}</p>
            <p className="text-[#F8FAFC]">Location: {profile.location}</p>
            <button
              onClick={() => {
                onClose();
                onNavigate('contact');
              }}
              className="text-xs text-[#93C5FD] underline hover:text-white mt-1 cursor-pointer block"
            >
              &gt; Open Contact section
            </button>
          </div>
        );
        break;
      case 'help':
        output = (
          <span className="text-[#94A3B8]">
            Available commands: whoami, status, skills, projects, research, contact, clear, exit
          </span>
        );
        break;
      default:
        output = (
          <span className="text-[#EF4444] font-medium">
            bash: {trimmed}: command not found. Type 'help' for available commands.
          </span>
        );
    }

    setLogs((prev) => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F172A]/50 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-[#0F172A] text-[#F8FAFC] rounded-2xl shadow-2xl overflow-hidden border border-[#334155] font-code-sm text-code-sm z-10"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1E293B] border-b border-[#334155]">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#EF4444] cursor-pointer hover:opacity-80 transition-opacity"
                  title="Close Terminal"
                  aria-label="Close Terminal"
                />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block" />
                <span className="ml-2 text-xs text-[#94A3B8]">
                  rishabh@devbox:~ (bash)
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-[#94A3B8] hover:text-white text-sm cursor-pointer p-1"
                aria-label="Close Terminal"
              >
                ✕
              </button>
            </div>

            {/* Quick Command Chips */}
            <div className="px-4 py-2 bg-[#1E293B]/60 border-b border-[#334155] flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-[#94A3B8] mr-1 text-[11px]">Quick:</span>
              {['whoami', 'status', 'skills', 'projects', 'research', 'contact', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2 py-0.5 rounded bg-[#334155] text-[#93C5FD] hover:text-white hover:bg-[#475569] transition-colors text-[11px] cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Log Output Body */}
            <div
              ref={logContainerRef}
              className="p-5 space-y-3 max-h-80 overflow-y-auto"
            >
              {logs.map((log, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-[#93C5FD]">
                    <span className="text-[#38BDF8]">$</span>
                    <span>{log.command}</span>
                  </div>
                  <div className="pl-4">{log.output}</div>
                </div>
              ))}

              {/* Active Prompt Form */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
                <span className="text-[#38BDF8] font-bold">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type a command... (try 'help')"
                  className="w-full bg-transparent text-[#F8FAFC] outline-none border-none placeholder:text-[#64748B] text-xs font-code-sm"
                />
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
