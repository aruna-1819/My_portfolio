"use client";
import { SectionWrapper } from "@/bits/SectionWrapper";
import { FiAward, FiCalendar } from "react-icons/fi";

const hackathons = [
  {
    title: "GEN AI Hackathon",
    date: "2024",
    role: "AI Developer",
    description: "Developed an innovative generative AI solution during the intensive campus hackathon, leveraging modern LLMs and prompt engineering techniques.",
    tags: ["Generative AI", "LLMs", "Python"],
    achievement: "Top 10"
  }
];

export function Hackathons() {
  return (
    <SectionWrapper id="hackathons">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
          Hackathons & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Competitions</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          Pushing the boundaries of creativity and technical skill under pressure. Here are some of the competitive coding and design events I've participated in at BITS Pilani and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hack, idx) => (
          <div
            key={idx}
            className="group relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 opacity-100 visible"
          >
            <div className="absolute top-6 right-8 text-blue-600 dark:text-blue-400">
              <FiAward size={24} className="opacity-100" />
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              <FiCalendar />
              {hack.date}
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {hack.title}
            </h3>
            
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-500 mb-4">
              {hack.role}
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {hack.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {hack.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-tighter text-slate-400 dark:text-slate-600">Achievement</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-lg">
                {hack.achievement}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
