"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Recognition", id: "recognition" },
  { name: "Projects", id: "projects" },
  { name: "Hackathons", id: "hackathons" },
  { name: "Contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const activeSection = useScrollSpy(navItems.map((item) => item.id), 250);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 sm:px-12",
          isScrolled ? "pt-4" : "pt-8"
        )}
      >
        <div 
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-[2.5rem] relative",
            isScrolled 
              ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-3xl border border-white/5 dark:border-slate-800/20 px-10 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]" 
              : "bg-transparent px-4 py-2"
          )}
        >
          {/* Logo */}
          <div
            className="text-xl md:text-2xl font-black tracking-tighter cursor-pointer group whitespace-nowrap z-10"
            onClick={() => scrollToSection("home")}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--elegant-from)] via-[var(--elegant-via)] to-[var(--elegant-to)] transition-all duration-500 group-hover:brightness-125">
              Aruna Kumari Padala
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 relative p-1 bg-slate-100/30 dark:bg-white/5 rounded-full backdrop-blur-sm ml-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => scrollToSection(item.id)}
                suppressHydrationWarning
                className={cn(
                  "px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 rounded-full relative z-10 outline-none",
                  activeSection === item.id
                    ? "text-white"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                <span className="relative z-20 pointer-events-none">{item.name}</span>
                
                {/* Active Section Pill */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-[var(--elegant-from)] to-[var(--elegant-to)] rounded-full z-0 shadow-lg shadow-indigo-500/40"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Hover Pill */}
                {hoveredItem === item.id && activeSection !== item.id && (
                  <motion.div
                    layoutId="hoverPill"
                    className="absolute inset-0 bg-slate-200/50 dark:bg-white/10 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              suppressHydrationWarning
              className="p-3 rounded-2xl bg-white/10 dark:bg-slate-800/50 text-slate-900 dark:text-white backdrop-blur-xl border border-white/10 transition-all active:scale-90"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-slate-950 pt-32 px-10 lg:hidden flex flex-col"
          >
            {/* Close button inside overlay for better accessibility */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-10 p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl"
            >
              <FiX size={24} />
            </button>

            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  suppressHydrationWarning
                  className={cn(
                    "text-5xl font-black text-left transition-all tracking-tighter leading-none py-2",
                    activeSection === item.id
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[var(--elegant-from)] to-[var(--elegant-to)]"
                      : "text-slate-200 dark:text-slate-800 hover:text-slate-400 dark:hover:text-slate-600"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
