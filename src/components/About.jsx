"use client";
import { SectionWrapper } from "@/bits/SectionWrapper";
import { motion } from "framer-motion";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-slate-800 dark:text-slate-300 leading-relaxed">
            <p>
              I am a **Software Engineer** at **BITS Pilani Hyderabad Campus**, specializing in high-performance web applications that bridge complex logic with intuitive design.
            </p>
            <p>
              I focus on building scalable, user-centric solutions through clean architecture and continuous innovation, always striving to deliver exceptional digital experiences.
            </p>
            <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Education</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">B.S. Computer Science</p>
                      <p className="text-sm text-slate-500">BITS Pilani • 2024 - 2028</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Full Stack Development</p>
                      <p className="text-sm text-slate-500">NxtWave Institute of Advanced Technology</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Focus</h4>
                  <p className="font-bold text-slate-900 dark:text-white">Frontend Architecture</p>
                  <p className="text-sm text-slate-500">UI/UX & Performance</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
            <img
              src="https://plain-apac-prod-public.komododecks.com/202605/01/pWwuPzI0MQe0sKw37RMS/image.jpg"
              alt="Aruna Kumari Padala"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 dark:bg-blue-500/20 blur-3xl rounded-full -z-10" />
        </div>
      </div>
    </SectionWrapper>
  );
}
