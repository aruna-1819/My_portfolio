"use client";
import { SectionWrapper } from "@/bits/SectionWrapper";
import { Card } from "@/bits/Card";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Here are some of my recent works. Each project reflects my focus on clean code, intuitive design, and scalable architecture.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="h-full flex flex-col p-0 overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors" aria-label="GitHub Repository">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.demo} className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors" aria-label="Live Demo">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
