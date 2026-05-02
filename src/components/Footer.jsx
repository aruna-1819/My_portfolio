"use client";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold tracking-tighter cursor-pointer mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--elegant-from)] via-[var(--elegant-via)] to-[var(--elegant-to)] animate-gradient-x">
              Aruna Kumari Padala
            </span>
            <span className="text-blue-600 dark:text-blue-500">.</span>
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Aruna Kumari Padala. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/aruna-1819/" className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            <FiGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/aruna-kumari-padala" className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            <FiLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://x.com/arunapadala1819" className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            <FiTwitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
