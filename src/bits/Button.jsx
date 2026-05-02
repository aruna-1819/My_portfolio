"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({ 
  children, 
  variant = "primary", 
  className, 
  href, 
  onClick, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none px-6 py-3 text-sm";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 dark:bg-blue-500 dark:hover:bg-blue-600",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800",
    ghost: "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
  };

  const Component = motion.button;

  const content = (
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </Component>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
