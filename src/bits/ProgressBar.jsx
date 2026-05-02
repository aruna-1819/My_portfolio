"use client";
import { motion } from "framer-motion";

export function ProgressBar({ label, percentage }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
        />
      </div>
    </div>
  );
}
