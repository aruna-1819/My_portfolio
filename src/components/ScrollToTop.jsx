"use client";
import { useScrollTop } from "@/hooks/useScrollTop";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollTop(400);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
