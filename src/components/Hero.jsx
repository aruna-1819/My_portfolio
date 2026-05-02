"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/bits/Button";

const roles = ["Frontend Developer", "UI/UX Designer", "Software Engineer", "React Specialist"];

export function Hero() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

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

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
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
          <Button onClick={scrollToProjects} className="w-full sm:w-auto px-10 h-14 rounded-2xl text-lg shadow-xl shadow-blue-500/10">
            View Portfolio
          </Button>
          <Button variant="outline" onClick={scrollToContact} className="w-full sm:w-auto px-10 h-14 rounded-2xl text-lg border-slate-700 text-white hover:bg-slate-800">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
}
