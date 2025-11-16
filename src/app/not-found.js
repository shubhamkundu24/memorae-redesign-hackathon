"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-80 h-80 rounded-full bg-[var(--color-primary)]/20 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-[var(--color-card)] border border-[var(--color-border)] shadow-soft px-6 sm:px-10 py-12 rounded-2xl max-w-lg w-full"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
          className="text-6xl sm:text-7xl font-extrabold text-[var(--color-primary)]"
        >
          404
        </motion.h1>

        <p className="mt-4 text-base sm:text-lg text-[var(--text-dim)]">
          The page you're looking for doesn't exist.
        </p>

        <p className="text-sm mt-2 text-[var(--text-dim)]/70">
          Maybe it was moved, removed, or you mistyped the URL.
        </p>

        <div className="mt-8">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white font-medium shadow-medium hover:shadow-strong transition cursor-pointer"
            >
              Go Back Home
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
