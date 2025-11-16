"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DarkToggle() {
  const [mode, setMode] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") || "light";
    setMode(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function toggle() {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle dark mode"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] backdrop-blur-sm hover:bg-[var(--color-lightgray)] transition-smooth shadow-soft"
    >
      {mode === "light" ? (
        <motion.span
          key="moon"
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-lg"
        >
          🌙
        </motion.span>
      ) : (
        <motion.span
          key="sun"
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-lg"
        >
          ☀️
        </motion.span>
      )}
    </motion.button>
  );
}
