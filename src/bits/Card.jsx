"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card({ children, className, ...props }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden relative group",
        className
      )}
      {...props}
    >
      {/* Subtle top glow effect in dark mode */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity dark:via-blue-500/20" />
      {children}
    </motion.div>
  );
}
