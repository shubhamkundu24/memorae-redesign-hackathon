"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-softbg)]">
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="w-64 sm:w-72 h-16 sm:h-20 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/40 to-[var(--color-accent)]/40 border border-[var(--color-border)] shadow-soft flex items-center justify-center px-4"
      >
        <p className="text-[var(--text-main)] font-medium text-base sm:text-lg">
          Loading…
        </p>
      </motion.div>
    </div>
  );
}
