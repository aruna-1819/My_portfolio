"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/bits/Button";

import { FiDownload, FiX } from "react-icons/fi";

const roles = ["Frontend Developer", "UI/UX Designer", "Software Engineer", "React Specialist"];

export function Hero() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020617]"
    >
      {/* Background elements with safe visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 opacity-100">
        <div>
          <h2 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-6">
            Software Engineer & Creative Designer
          </h2>
        </div>

        <div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[1.2] flex flex-col items-center">
            <span className="opacity-70">Hello, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 py-2">
              Aruna Kumari Padala
            </span>
          </h1>
        </div>

        <div className="h-12 mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeRoleIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xl md:text-2xl font-medium text-slate-400 italic"
            >
              {roles[activeRoleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
          "Driven by innovation, defined by excellence. <span className="font-bold text-white not-italic underline decoration-indigo-500 decoration-2 underline-offset-4 cursor-pointer hover:text-indigo-400 transition-colors" onClick={scrollToContact}>Let's connect</span> and build your next extraordinary digital chapter together."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            onClick={() => setShowResume(true)}
            className="w-full sm:w-auto px-10 h-14 rounded-2xl text-lg shadow-xl shadow-blue-500/10"
          >
            Resume
          </Button>
          <Button variant="outline" onClick={scrollToContact} className="w-full sm:w-auto px-10 h-14 rounded-2xl text-lg border-slate-700 text-white hover:bg-slate-800">
            Let's Talk
          </Button>
        </div>
      </div>

      {/* Resume Modal Overlay */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResume(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header with Buttons */}
              <div className="absolute top-6 right-6 z-10 flex gap-3">
                <a
                  href="https://plain-apac-prod-public.komododecks.com/202605/03/4Dj9MTM5CLXkY0KVMH65/image.jpg"
                  download="Aruna_Kumari_Padala_Resume.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all active:scale-95 flex items-center gap-2 px-5 font-bold text-sm"
                >
                  <FiDownload size={18} />
                  Download
                </a>
                <button
                  onClick={() => setShowResume(false)}
                  className="p-3 bg-black/20 hover:bg-black/40 backdrop-blur-xl rounded-full text-white transition-all active:scale-95"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Scrollable Image Area */}
              <div className="flex-1 overflow-auto p-4 sm:p-8 bg-slate-100 dark:bg-slate-950">
                <img
                  src="https://plain-apac-prod-public.komododecks.com/202605/03/4Dj9MTM5CLXkY0KVMH65/image.jpg"
                  alt="Aruna Kumari Padala Resume"
                  className="w-full h-auto rounded-lg shadow-xl mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
