"use client";
import { useState } from "react";
import { SectionWrapper } from "@/bits/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiAward, FiExternalLink } from "react-icons/fi";

const recognitions = [
  {
    title: "Designer Excellence Award",
    organization: "Performing Arts Club",
    image: "/award_3.jpg",
    description: "Awarded for exceptional visual storytelling and brand identity development for university-wide events. This recognition was presented in honor of leading the creative direction for the annual cultural fest, where my designs helped increase audience engagement by 40%."
  },
  {
    title: "Creative Impact Recognition",
    organization: "NxtWave",
    image: "/award_4.jpg",
    description: "Special recognition for leading creative direction and blending artistic vision with technical precision. Recognized by the founding team for consistently delivering high-impact visual assets that defined the brand's aesthetic across multiple digital platforms."
  }
];

export function Recognition() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <SectionWrapper id="recognition">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
          Recognition & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--elegant-from)] to-[var(--elegant-to)]">Creative Impact</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          Highlighting the honors and creative leadership roles that define my professional journey beyond engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recognitions.map((item, idx) => (
          <motion.div
            key={idx}
            onClick={() => setSelectedItem(item)}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer block"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* View indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest shadow-2xl">
                  Quick View
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">{item.organization}</p>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Elegant Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-xl rounded-full text-white transition-all active:scale-95"
              >
                <FiX size={24} />
              </button>

              {/* Image Side */}
              <div className="md:w-1/2 aspect-square md:aspect-auto">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
                  <FiAward />
                  {selectedItem.organization}
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-none">
                  {selectedItem.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  {selectedItem.description}
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm font-bold text-slate-400 dark:text-slate-500 italic">
                    "Crafting excellence through creative leadership."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
