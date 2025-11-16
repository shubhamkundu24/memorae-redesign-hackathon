"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DarkToggle from "./DarkToggle";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how" },
    { label: "Use Cases", href: "#usecases" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Hamburger */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
        className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] shadow-soft"
      >
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="text-[var(--foreground)]">
          <path
            d="M1 1h18M1 7h18M1 13h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.button>

      {/* BACKDROP */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed right-0 top-0 h-full w-[85%] max-w-xs z-50 
                       bg-[#0f172a] dark:bg-[#0b1220] text-white shadow-strong 
                       p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white flex items-center justify-center font-bold text-sm shadow-medium">
                  M
                </div>
                <span className="font-bold">Memorae</span>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
              >
                ✕
              </motion.button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4 flex-1">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="pt-6 border-t border-white/20 space-y-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block w-full py-2.5 px-4 rounded-lg text-center font-semibold text-black bg-white shadow-medium hover:opacity-90 transition"
              >
                Start on WhatsApp
              </Link>

              <div className="flex justify-between items-center">
                <span className="text-xs text-white/60">Theme</span>
                <DarkToggle />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
