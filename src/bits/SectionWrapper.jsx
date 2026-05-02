"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionWrapper({ children, id, className }) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 w-full max-w-6xl mx-auto px-6", className)}
    >
      {children}
    </section>
  );
}
