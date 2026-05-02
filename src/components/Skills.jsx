"use client";
import { SectionWrapper } from "@/bits/SectionWrapper";
import { Card } from "@/bits/Card";
import { ProgressBar } from "@/bits/ProgressBar";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", level: 85, icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "TypeScript", level: 80, icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "HTML/CSS", level: 95, icon: <FaHtml5 className="text-[#E34F26]" /> }
    ]
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 75, icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Git", level: 85, icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "REST APIs", level: 88, icon: null }
    ]
  },
  {
    title: "Experience & Creative",
    skills: [
      { name: "UI/UX Design", level: 85, icon: null },
      { name: "Graphic Design", level: 80, icon: null },
      { name: "Performing Arts Club Designer", level: 100, icon: null, details: "NxtWave Institute" }
    ]
  }
];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          My Skills
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Here are some of the technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <Card key={idx} className="p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill, i) => (
                <div key={i} className="py-2">
                  <div className="flex items-center gap-2 mb-1">
                    {skill.icon && <span className="text-lg">{skill.icon}</span>}
                    <ProgressBar label={skill.name} percentage={skill.level} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
